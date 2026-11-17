// StratMap Calibrated Econometric Engine & Esri Dark-Mode Map Controller

let map;
let wardLayers = {};
let selectedWardName = "Southchurch";
let currentIntensity = 1.25;
let pactMode = false;
let mapViewMode = "strategy";
let latestResults = [];

const PARTY_META = {
  RB:  { label: "Restore Britain (Proj.)", color: "#06b6d4" },
  Ref: { label: "Reform UK",              color: "#12b6cf" },
  Con: { label: "Conservative",           color: "#0087dc" },
  Lab: { label: "Labour",                 color: "#e4003b" },
  LD:  { label: "Liberal Democrats",      color: "#faa61a" },
  Grn: { label: "Green Party",            color: "#02a95b" },
  Ind: { label: "Independents",           color: "#a855f7" },
  Oth: { label: "Minor / Protest",        color: "#94a3b8" }
};

// Initialize Map with Esri World Dark Gray Canvas (Keyless, Watermark-Free, Works Locally & Online)
function initMap() {
  map = L.map("map", { zoomControl: true }).setView([51.547, 0.715], 12);

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 16,
      attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
    }
  ).addTo(map);

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 16,
      pane: "overlayPane"
    }
  ).addTo(map);

  // Authority selector listener for ONS GeoJSON import
  document.getElementById("authoritySelect").addEventListener("change", (e) => {
    if (e.target.value === "custom") {
      document.getElementById("geojson-file-input").click();
      e.target.value = "southend";
    }
  });

  renderWardPolygons();
  runSimulation();
}

function renderWardPolygons() {
  Object.values(wardLayers).forEach((l) => map.removeLayer(l.poly));
  wardLayers = {};

  SOUTHEND_WARDS_DATA.forEach((ward) => {
    const [[s, w], [n, e]] = ward.bounds;
    const coords = [
      [s, w],
      [n, w],
      [n, e],
      [s, e]
    ];

    const poly = L.polygon(coords, {
      color: "#334155",
      weight: 1.5,
      fillColor: "#06b6d4",
      fillOpacity: 0.45
    }).addTo(map);

    poly.bindTooltip(`<div class="ward-map-label">${ward.name}</div>`, {
      permanent: true,
      direction: "center",
      className: "leaflet-tooltip-own"
    });

    poly.on("click", () => {
      selectedWardName = ward.name;
      runSimulation();
    });

    wardLayers[ward.name] = { poly };
  });
}

function setIntensity(val) {
  currentIntensity = val;
  document.getElementById("val-intensity").textContent = val.toFixed(2) + "x";
  ["075", "100", "125"].forEach((id) => document.getElementById("int-" + id).classList.remove("active"));
  const activeKey = val === 0.75 ? "075" : val === 1.0 ? "100" : "125";
  document.getElementById("int-" + activeKey).classList.add("active");
  runSimulation();
}

function setPactMode(enabled) {
  pactMode = enabled;
  document.getElementById("pact-off").classList.toggle("active", !enabled);
  document.getElementById("pact-on").classList.toggle("active", enabled);
  document.getElementById("val-pact-status").textContent = enabled ? "Pact Active" : "Contest All";
  document.getElementById("pact-caption").textContent = enabled
    ? "Stand-aside in Reform UK's 8 wards; full right-of-centre consolidation in remaining 9 wards."
    : "Head-to-head competition across all 17 wards.";
  runSimulation();
}

function setMapViewMode(mode) {
  mapViewMode = mode;
  ["strategy", "baseline", "receptivity"].forEach((m) => {
    document.getElementById("view-" + m).classList.toggle("active", m === mode);
  });
  updateMapStyling();
  updateLegend();
}

function resetAllSliders() {
  document.getElementById("slider-baseline").value = 18;
  document.getElementById("slider-protest").value = 80;
  document.getElementById("slider-w-ref").value = 40;
  document.getElementById("slider-w-con").value = 30;
  document.getElementById("slider-w-ind").value = 12;
  document.getElementById("slider-w-lab").value = 8;
  document.getElementById("slider-w-prog").value = 2;
  document.getElementById("slider-w-turn").value = 8;
  setIntensity(1.25);
  setPactMode(false);
}

// Core Econometric Engine (Matches Master Paper Equations)
function runSimulation() {
  const baselineYear = document.getElementById("baselineSelect").value;
  const B = parseFloat(document.getElementById("slider-baseline").value);
  const protestAbsorb = parseFloat(document.getElementById("slider-protest").value) / 100;

  const rawRef  = parseFloat(document.getElementById("slider-w-ref").value);
  const rawCon  = parseFloat(document.getElementById("slider-w-con").value);
  const rawInd  = parseFloat(document.getElementById("slider-w-ind").value);
  const rawLab  = parseFloat(document.getElementById("slider-w-lab").value);
  const rawProg = parseFloat(document.getElementById("slider-w-prog").value);
  const rawTurn = parseFloat(document.getElementById("slider-w-turn").value);

  document.getElementById("val-baseline").textContent = B.toFixed(1) + "%";
  document.getElementById("val-protest").textContent = Math.round(protestAbsorb * 100) + "%";
  document.getElementById("val-w-ref").textContent = rawRef + "%";
  document.getElementById("val-w-con").textContent = rawCon + "%";
  document.getElementById("val-w-ind").textContent = rawInd + "%";
  document.getElementById("val-w-lab").textContent = rawLab + "%";
  document.getElementById("val-w-prog").textContent = rawProg + "%";
  document.getElementById("val-w-turn").textContent = rawTurn + "%";

  const weightSum = rawRef + rawCon + rawInd + rawLab + rawProg + rawTurn || 1;
  const aRef  = rawRef / weightSum;
  const aCon  = rawCon / weightSum;
  const aInd  = rawInd / weightSum;
  const aLab  = rawLab / weightSum;
  const aProg = rawProg / weightSum;

  let countGain = 0, countViable = 0, countSpoiler = 0, countHold = 0;

  latestResults = SOUTHEND_WARDS_DATA.map((ward) => {
    const baseObj = baselineYear === "2026" ? ward.results2026 : ward.results2024;
    const base = { ...baseObj.shares };

    // Pact Mode: Stand aside in the 8 wards Reform UK won in May 2026
    const isReformWard = ward.results2026.winner === "Ref";
    if (pactMode && isReformWard) {
      return {
        ward,
        baseObj,
        pactStandAside: true,
        rbShare: 0,
        simShares: base,
        margin: 0,
        winProb: 0,
        status: "pact",
        statusLabel: "Reform Pact Hold",
        briefing: `Under Reform UK Pact Mode, Restore Britain stands aside in ${ward.name} to avoid splitting the right-of-centre vote behind the sitting Reform UK bloc.`
      };
    }

    // Stage 2: Projected Restore Britain Vote Share (V_RB)
    let vRB = Math.min(65, B * ward.receptivity * currentIntensity);

    // In Pact Mode across non-Reform wards, consolidate Reform UK's pool directly
    let sim = { ...base };
    if (pactMode && !isReformWard) {
      const refConsolidation = (sim.Ref || 0) * 0.85;
      sim.Ref = Math.max(0, (sim.Ref || 0) - refConsolidation);
      vRB = Math.min(65, vRB + refConsolidation);
    }

    // Stage 3: Asymmetric Vote Transfers
    const vAbs = (sim.Oth || 0) * protestAbsorb;
    sim.Oth = Math.max(0, (sim.Oth || 0) - vAbs);

    const remainingDraw = Math.max(0, vRB - vAbs);
    sim.Ref = Math.max(0, (sim.Ref || 0) - aRef * remainingDraw);
    sim.Con = Math.max(0, (sim.Con || 0) - aCon * remainingDraw);
    sim.Ind = Math.max(0, (sim.Ind || 0) - aInd * remainingDraw);
    sim.Lab = Math.max(0, (sim.Lab || 0) - aLab * remainingDraw);

    const progTotal = (sim.LD || 0) + (sim.Grn || 0);
    if (progTotal > 0) {
      const progDeduct = aProg * remainingDraw;
      sim.LD  = Math.max(0, (sim.LD || 0)  - progDeduct * ((sim.LD || 0) / progTotal));
      sim.Grn = Math.max(0, (sim.Grn || 0) - progDeduct * ((sim.Grn || 0) / progTotal));
    }

    // Stage 4: Margin & Logistic Win Probability (k = 0.35)
    const rivals = Object.entries(sim).map(([party, val]) => ({ party, val }));
    rivals.sort((a, b) => b.val - a.val);
    const topRival = rivals[0];

    const margin = vRB - topRival.val;
    const winProb = 100 / (1 + Math.exp(-0.35 * margin));

    // Spoiler Detection: Right-of-centre baseline winner flips to Lab/LD/Grn
    const rightWinners = ["Con", "Ref", "Ind"];
    const leftWinners  = ["Lab", "LD", "Grn"];
    const isSpoiler =
      winProb < 20 &&
      rightWinners.includes(baseObj.winner) &&
      leftWinners.includes(topRival.party);

    let status = "hold";
    let statusLabel = "Low Priority";
    let briefing = `Restore Britain trails ${PARTY_META[topRival.party]?.label || topRival.party} by ${Math.abs(margin).toFixed(1)} points. Maintain low-cost digital visibility while focusing canvassers on eastern target seats.`;

    if (winProb >= 50) {
      status = "gain";
      statusLabel = "Projected Gain";
      countGain++;
      briefing = `High-priority offensive target: Restore Britain leads ${PARTY_META[topRival.party]?.label || topRival.party} by +${margin.toFixed(1)}% (${winProb.toFixed(1)}% win probability). Deploy full action-day teams and postal-vote drops.`;
    } else if (winProb >= 20) {
      status = "viable";
      statusLabel = "Viable Marginal";
      countViable++;
      briefing = `Within striking distance (${winProb.toFixed(1)}% win probability, ${margin.toFixed(1)}% behind ${topRival.party}). Intensive doorstep persuasion and squeezing 3rd-place right-of-centre voters can flip this seat.`;
    } else if (isSpoiler) {
      status = "spoiler";
      statusLabel = "Spoiler Risk";
      countSpoiler++;
      briefing = `Spoiler Alert: Standing a mid-tier candidate here drains right-of-centre votes and flips a ${baseObj.winner} seat to ${PARTY_META[topRival.party]?.label || topRival.party} (${topRival.val.toFixed(1)}%).`;
    } else {
      countHold++;
    }

    return {
      ward,
      baseObj,
      pactStandAside: false,
      rbShare: vRB,
      simShares: sim,
      margin,
      winProb,
      status,
      statusLabel,
      briefing
    };
  });

  // Update KPI Strip
  document.getElementById("kpi-gains").textContent = countGain;
  document.getElementById("kpi-viable").textContent = countViable;
  document.getElementById("kpi-spoiler").textContent = countSpoiler;
  document.getElementById("kpi-hold").textContent = countHold;

  renderRankingList();
  updateMapStyling();
  updateLegend();
  renderSelectedWardDossier();
}

function renderRankingList() {
  const container = document.getElementById("ward-ranking-list");
  const sorted = [...latestResults].sort((a, b) => b.winProb - a.winProb);

  container.innerHTML = sorted
    .map((item) => {
      const isSelected = item.ward.name === selectedWardName ? "selected" : "";
      const badgeClass =
        item.status === "gain" ? "badge-gain" :
        item.status === "viable" ? "badge-viable" :
        item.status === "spoiler" ? "badge-spoiler" :
        item.status === "pact" ? "badge-pact" : "badge-hold";
      const probText = item.pactStandAside ? "PACT" : `${item.winProb.toFixed(0)}%`;

      return `
        <div class="ward-row ${isSelected}" onclick="selectWard('${item.ward.name.replace("'", "\\'")}')">
          <div>
            <strong>${item.ward.name}</strong>
            <div class="muted-xs">R_w: ${item.ward.receptivity.toFixed(2)}x • 2027: ${item.ward.seat2027.party}</div>
          </div>
          <span class="badge ${badgeClass}">${item.statusLabel}</span>
          <strong style="font-variant-numeric: tabular-nums;">${probText}</strong>
        </div>
      `;
    })
    .join("");
}

function selectWard(name) {
  selectedWardName = name;
  renderRankingList();
  updateMapStyling();
  renderSelectedWardDossier();
}

function updateMapStyling() {
  latestResults.forEach((item) => {
    const layer = wardLayers[item.ward.name];
    if (!layer) return;

    let fillColor = "#64748b";
    if (mapViewMode === "strategy") {
      if (item.status === "gain") fillColor = "#10b981";
      else if (item.status === "viable") fillColor = "#f59e0b";
      else if (item.status === "spoiler") fillColor = "#ef4444";
      else if (item.status === "pact") fillColor = "#12b6cf";
    } else if (mapViewMode === "baseline") {
      fillColor = PARTY_META[item.baseObj.winner]?.color || "#64748b";
    } else if (mapViewMode === "receptivity") {
      const r = item.ward.receptivity;
      fillColor = r >= 1.25 ? "#10b981" : r >= 1.0 ? "#06b6d4" : r >= 0.85 ? "#f59e0b" : "#64748b";
    }

    const isSelected = item.ward.name === selectedWardName;
    layer.poly.setStyle({
      fillColor,
      fillOpacity: isSelected ? 0.72 : 0.48,
      color: isSelected ? "#ffffff" : "#334155",
      weight: isSelected ? 3 : 1.5
    });
  });
}

function updateLegend() {
  const el = document.getElementById("legend-items");
  if (mapViewMode === "strategy") {
    el.innerHTML = `
      <div class="legend-item"><span class="legend-swatch" style="background:#10b981;"></span> Projected Gain (≥50% P_win)</div>
      <div class="legend-item"><span class="legend-swatch" style="background:#f59e0b;"></span> Viable Marginal (20%–49%)</div>
      <div class="legend-item"><span class="legend-swatch" style="background:#ef4444;"></span> Spoiler Risk (Flips Right → Left)</div>
      <div class="legend-item"><span class="legend-swatch" style="background:#12b6cf;"></span> Reform UK Pact Stand-Aside</div>
      <div class="legend-item"><span class="legend-swatch" style="background:#64748b;"></span> Low Priority / Safe Hold</div>
    `;
  } else if (mapViewMode === "baseline") {
    el.innerHTML = Object.entries(PARTY_META)
      .filter(([k]) => ["Ref", "Con", "Lab", "LD", "Grn", "Ind"].includes(k))
      .map(([, v]) => `<div class="legend-item"><span class="legend-swatch" style="background:${v.color};"></span> ${v.label}</div>`)
      .join("");
  } else {
    el.innerHTML = `
      <div class="legend-item"><span class="legend-swatch" style="background:#10b981;"></span> High Receptivity (≥1.25x)</div>
      <div class="legend-item"><span class="legend-swatch" style="background:#06b6d4;"></span> Above Average (1.00x–1.24x)</div>
      <div class="legend-item"><span class="legend-swatch" style="background:#f59e0b;"></span> Moderate (0.85x–0.99x)</div>
      <div class="legend-item"><span class="legend-swatch" style="background:#64748b;"></span> Low Receptivity (&lt;0.85x)</div>
    `;
  }
}

function renderSelectedWardDossier() {
  const item = latestResults.find((r) => r.ward.name === selectedWardName) || latestResults[0];
  if (!item) return;

  const { ward, baseObj } = item;
  const baselineYear = document.getElementById("baselineSelect").value;

  document.getElementById("detail-ward-name").textContent = `${ward.name} Ward`;
  document.getElementById("detail-baseline-summary").textContent =
    `${baselineYear} Winner: ${PARTY_META[baseObj.winner]?.label || baseObj.winner} (${baseObj.totalVotes.toLocaleString()} valid votes)`;

  const badge = document.getElementById("detail-outcome-badge");
  badge.textContent = item.statusLabel;
  badge.className = "badge " + (
    item.status === "gain" ? "badge-gain" :
    item.status === "viable" ? "badge-viable" :
    item.status === "spoiler" ? "badge-spoiler" :
    item.status === "pact" ? "badge-pact" : "badge-hold"
  );

  document.getElementById("detail-win-prob").textContent = item.pactStandAside ? "PACT" : `${item.winProb.toFixed(1)}%`;
  document.getElementById("detail-rb-share").textContent = item.pactStandAside ? "0.0%" : `${item.rbShare.toFixed(1)}%`;
  document.getElementById("detail-margin").textContent = item.pactStandAside
    ? "N/A"
    : `${item.margin >= 0 ? "+" : ""}${item.margin.toFixed(1)}%`;
  document.getElementById("detail-receptivity").textContent = `${ward.receptivity.toFixed(2)}x`;
  document.getElementById("detail-briefing").textContent = item.briefing;

  // May 2027 Target Seat & Incumbent Profile
  document.getElementById("target-2027-party").textContent = `Defending: ${ward.seat2027.party}`;
  document.getElementById("target-2027-dossier").innerHTML = `
    <div class="dossier-2027-box">
      <div style="margin-bottom:4px;"><strong>${ward.seat2027.councillor}</strong></div>
      <div style="margin-bottom:5px; color:#fbbf24;">${ward.seat2027.vulnerability}</div>
      <div class="muted-xs" style="line-height:1.4;">${ward.seat2027.profile}</div>
    </div>
  `;

  // 3 Combined Strategic Priorities
  document.getElementById("ward-priorities-container").innerHTML = ward.priorities
    .map((p, idx) => `
      <div class="priority-item">
        <span class="priority-tag ${p.type === "policy" ? "tag-policy" : "tag-tactical"}">
          ${p.type === "policy" ? `Policy Priority #${idx + 1}` : "Tactical Field Directive"}
        </span>
        <div>${p.text}</div>
      </div>
    `)
    .join("");

  // Vote Share Comparison Bars
  const rows = [
    { key: "RB", label: "Restore Britain (Proj.)", sim: item.rbShare, base: 0 },
    ...Object.entries(baseObj.shares).map(([k, v]) => ({
      key: k,
      label: PARTY_META[k]?.label || k,
      sim: item.simShares[k] || 0,
      base: v
    }))
  ].filter((r) => r.sim > 0.1 || r.base > 0.1);

  rows.sort((a, b) => b.sim - a.sim);

  document.getElementById("vote-bars-container").innerHTML = rows
    .map((r) => {
      const color = PARTY_META[r.key]?.color || "#94a3b8";
      const baseNote = r.key === "RB" ? "New Challenger" : `Base: ${r.base.toFixed(1)}%`;
      return `
        <div class="bar-row">
          <div class="bar-label-line">
            <span><strong>${r.label}</strong></span>
            <span><strong>${r.sim.toFixed(1)}%</strong> <span class="muted-xs">(${baseNote})</span></span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${Math.min(100, r.sim)}%; background:${color};"></div>
          </div>
        </div>
      `;
    })
    .join("");

  // Southend Ward Profile Metrics
  const d = ward.demographics;
  document.getElementById("demo-grid-container").innerHTML = `
    <div class="demo-item"><div class="d-label">Residents Aged 65+</div><div class="d-val">${d.age65}</div></div>
    <div class="demo-item"><div class="d-label">Owner-Occupied</div><div class="d-val">${d.ownerOcc}</div></div>
    <div class="demo-item"><div class="d-label">Non-Graduate Share</div><div class="d-val">${d.nonGrad}</div></div>
    <div class="demo-item"><div class="d-label">2026 Right/Ind Pool</div><div class="d-val">${d.rightPool}</div></div>
  `;

  // Full 3-Councillor Roster
  document.getElementById("councillor-list-container").innerHTML = ward.councillors
    .map((c) => {
      const borderCol = PARTY_META[c.party]?.color || "#64748b";
      const highlight = c.up2027 ? "up-2027" : "";
      const tag2027 = c.up2027 ? `<span class="badge badge-2027">Up May 2027</span>` : "";
      return `
        <div class="councillor-item ${highlight}" style="border-left-color:${borderCol};">
          <div>
            <strong>${c.name}</strong>
            <div class="councillor-role">${c.party} • ${c.term}</div>
          </div>
          ${tag2027}
        </div>
      `;
    })
    .join("");
}

function openModal(id) {
  document.getElementById(id).classList.add("open");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

function closeModalOnBackdrop(e, id) {
  if (e.target.id === id) closeModal(id);
}

function handleCustomGeoJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const geojson = JSON.parse(e.target.result);
      L.geoJSON(geojson, {
        style: { color: "#06b6d4", weight: 2, fillOpacity: 0.25 }
      }).addTo(map);
      alert("Custom ONS GeoJSON boundary layer imported onto map.");
    } catch (err) {
      alert("Invalid GeoJSON file format.");
    }
  };
  reader.readAsText(file);
}

window.addEventListener("DOMContentLoaded", initMap);
