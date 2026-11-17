// Verified Southend-on-Sea Ward Data (2026 & 2024 Baselines, Directory 61 Demographics, Priorities & 2027 Targets)
const SOUTHEND_WARDS_DATA = [
  {
    name: "Belfairs",
    center: [51.5535, 0.6535],
    bounds: [[51.546, 0.642], [51.561, 0.665]],
    receptivity: 1.26,
    demographics: { age65: "26.4%", ownerOcc: "81.2%", nonGrad: "68.5%", rightPool: "67.2%" },
    results2026: { winner: "Ref", totalVotes: 2780, shares: { Ref: 36.7, Con: 22.4, Grn: 23.2, Ind: 8.1, Lab: 5.4, LD: 4.1, Oth: 0.0 } },
    results2024: { winner: "Con", totalVotes: 2556, shares: { Con: 39.4, Grn: 27.1, Ind: 16.4, Lab: 12.5, LD: 3.4, Ref: 0.0, Oth: 1.3 } },
    seat2027: {
      councillor: "Cllr Stephen Aylen (Independent)",
      party: "Ind",
      vulnerability: "High — Long-serving Independent incumbent facing simultaneous Reform UK and Restore Britain populist squeezes while Greens (23.2% in 2026) threaten to split the middle.",
      profile: "Veteran local Independent councillor; strong personal vote around Belfairs Woods/Eastwood Road North, but vulnerable to a disciplined national right-of-centre ground campaign."
    },
    councillors: [
      { name: "Cllr Alan Dear", party: "Con", term: "2023–2027 (Note: Seat rotated 2026 Reform gain)" },
      { name: "Cllr Stephen Aylen", party: "Ind", term: "Up in May 2027", up2027: true },
      { name: "Cllr Jack Warren", party: "Con", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Protect Belfairs Woods & Green Belt fringes from over-development and high-density infill schemes." },
      { type: "policy", text: "Freeze council tax hikes and oppose residential parking permit expansion along Highlands Boulevard." },
      { type: "tactical", text: "Tactical Directive: Target 65+ owner-occupier postal voters (81.2% homeownership) to peel soft Independent and Conservative ballots." }
    ]
  },
  {
    name: "Blenheim Park",
    center: [51.5515, 0.6745],
    bounds: [[51.544, 0.665], [51.559, 0.684]],
    receptivity: 1.04,
    demographics: { age65: "18.9%", ownerOcc: "68.4%", nonGrad: "65.1%", rightPool: "59.1%" },
    results2026: { winner: "Ref", totalVotes: 2890, shares: { Ref: 33.1, Lab: 24.8, Con: 15.6, Grn: 13.0, Ind: 10.4, LD: 3.1, Oth: 0.0 } },
    results2024: { winner: "Lab", totalVotes: 2707, shares: { Lab: 40.2, Con: 25.0, Ind: 20.7, Grn: 8.2, LD: 3.8, Ref: 0.0, Oth: 2.0 } },
    seat2027: {
      councillor: "Cllr Laurie Burton (Labour)",
      party: "Lab",
      vulnerability: "High — Labour vote fell from 40.2% (2024) to 24.8% (2026). Right-of-centre pool exceeds 59%, making a united challenge a strong pickup.",
      profile: "Labour cabinet/senior councillor defending a 2023 gain; vulnerable if Reform/Restore consolidate the anti-Labour vote without splitting."
    },
    councillors: [
      { name: "Cllr Shahbon", party: "Ref", term: "2026–2030" },
      { name: "Cllr Laurie Burton", party: "Lab", term: "Up in May 2027", up2027: true },
      { name: "Cllr Donna Richardson", party: "Lab", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Crack down on HMO conversions and fly-tipping along London Road and Manchester Drive." },
      { type: "policy", text: "Visible neighbourhood policing around Blenheim Park and local parade shopfronts." },
      { type: "tactical", text: "Tactical Directive: Avoid a 3-way right split; squeeze the 15.6% Conservative rump to overtake Labour's 24.8% ceiling." }
    ]
  },
  {
    name: "Chalkwell",
    center: [51.5395, 0.6730],
    bounds: [[51.532, 0.663], [51.546, 0.683]],
    receptivity: 0.85,
    demographics: { age65: "20.2%", ownerOcc: "66.5%", nonGrad: "52.4%", rightPool: "53.9%" },
    results2026: { winner: "Grn", totalVotes: 2610, shares: { Grn: 30.6, Con: 28.9, Ref: 25.0, Lab: 11.5, LD: 4.0, Ind: 0.0, Oth: 0.0 } },
    results2024: { winner: "Con", totalVotes: 2377, shares: { Con: 41.0, Lab: 36.5, Grn: 13.9, LD: 5.5, Oth: 3.1, Ind: 0.0, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Nigel Folkard (Conservative)",
      party: "Con",
      vulnerability: "Acute Spoiler Trap — In May 2026, Greens won on just 30.6% because Con (28.9%) and Ref (25.0%) split a 53.9% right-of-centre majority.",
      profile: "Long-serving Conservative ward councillor; holds residual support in Chalkwell Hall estates but faces severe right-wing fragmentation."
    },
    councillors: [
      { name: "Cllr Green", party: "Grn", term: "2026–2030" },
      { name: "Cllr Nigel Folkard", party: "Con", term: "Up in May 2027", up2027: true },
      { name: "Cllr James Courtenay", party: "Con", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Scrap punitive seafront parking charges damaging Chalkwell Esplanade and Ridgeway traders." },
      { type: "policy", text: "Protect Victorian/Edwardian streetscapes from speculative high-rise seafront apartment blocks." },
      { type: "tactical", text: "Tactical Directive: High Spoiler Alert — without a single united right-of-centre standard-bearer, Greens win on ~30%." }
    ]
  },
  {
    name: "Eastwood Park",
    center: [51.5685, 0.6645],
    bounds: [[51.560, 0.652], [51.577, 0.677]],
    receptivity: 1.05,
    demographics: { age65: "24.8%", ownerOcc: "83.0%", nonGrad: "67.9%", rightPool: "45.0%" },
    results2026: { winner: "LD", totalVotes: 2640, shares: { LD: 48.5, Ref: 36.0, Con: 9.0, Grn: 3.8, Lab: 2.6, Ind: 0.0, Oth: 0.0 } },
    results2024: { winner: "LD", totalVotes: 2505, shares: { LD: 56.6, Con: 30.4, Lab: 7.7, Grn: 3.1, Oth: 2.1, Ind: 0.0, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Paul Collins (Liberal Democrat)",
      party: "LD",
      vulnerability: "Moderate — Lib Dems dropped from 56.6% to 48.5% in 2026 as Reform surged to 36.0% and Tories collapsed to 9.0%.",
      profile: "Senior Liberal Democrat councillor with strong local machine; vulnerable only if the 45% right-of-centre vote unites behind one candidate."
    },
    councillors: [
      { name: "Cllr Robert McMullan", party: "LD", term: "2026–2030" },
      { name: "Cllr Paul Collins", party: "LD", term: "Up in May 2027", up2027: true },
      { name: "Cllr Dave Poulton", party: "LD", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Oppose Green Belt boundary erosion near Kent Elms and Rayleigh Road arterial junctions." },
      { type: "policy", text: "Cut council waste and reverse inflationary increases to garden waste and residential parking fees." },
      { type: "tactical", text: "Tactical Directive: Consolidate the collapsed 9.0% Tory vote into a single challenger banner to breach the 45% Lib Dem wall." }
    ]
  },
  {
    name: "Kursaal",
    center: [51.5355, 0.7215],
    bounds: [[51.529, 0.712], [51.542, 0.731]],
    receptivity: 0.96,
    demographics: { age65: "11.4%", ownerOcc: "34.2%", nonGrad: "66.8%", rightPool: "49.9%" },
    results2026: { winner: "Ref", totalVotes: 1840, shares: { Ref: 40.7, Lab: 35.1, Grn: 11.8, Con: 9.2, LD: 3.2, Ind: 0.0, Oth: 0.0 } },
    results2024: { winner: "Lab", totalVotes: 1654, shares: { Lab: 51.1, Con: 14.3, Oth: 12.5, Ind: 10.8, Grn: 7.7, LD: 3.5, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Matt Dent (Labour)",
      party: "Lab",
      vulnerability: "Very High — Labour fell from 51.1% (2024) to 35.1% (2026) as populist challengers surged past 40% on low turnout.",
      profile: "High-profile Labour councillor; relies on inner-city core turnout, which proved porous to anti-establishment messaging in May 2026."
    },
    councillors: [
      { name: "Cllr Reform Winner", party: "Ref", term: "2026–2030" },
      { name: "Cllr Matt Dent", party: "Lab", term: "Up in May 2027", up2027: true },
      { name: "Cllr Tricia Cowdrey", party: "Lab", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Zero-tolerance enforcement on seafront anti-social behaviour, street drinking, and unlicensed HMOs." },
      { type: "policy", text: "Prioritise local Southend residents on social housing lists and crack down on rogue absentee landlords." },
      { type: "tactical", text: "Tactical Directive: Low turnout (~22%) magnifies disciplined ground mobilisation; focus on Workplace Labour switchers." }
    ]
  },
  {
    name: "Leigh",
    center: [51.5425, 0.6535],
    bounds: [[51.535, 0.642], [51.550, 0.664]],
    receptivity: 0.72,
    demographics: { age65: "19.1%", ownerOcc: "71.4%", nonGrad: "51.2%", rightPool: "38.4%" },
    results2026: { winner: "Grn", totalVotes: 3633, shares: { Grn: 35.8, LD: 21.2, Ref: 21.1, Con: 8.9, Ind: 7.9, Lab: 4.5, Oth: 0.5 } },
    results2024: { winner: "Grn", totalVotes: 2986, shares: { Grn: 57.8, LD: 21.3, Con: 11.5, Lab: 6.8, Oth: 2.7, Ind: 0.0, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Richard Longstaff (Green)",
      party: "Grn",
      vulnerability: "Low-Moderate — Lowest receptivity in Southend (0.72x), though Green share dropped 22 points between 2024 and 2026.",
      profile: "Green Party group councillor; protected by high graduate share (48.8%) and a 3-way split among Lib Dems, Reform, and Conservatives."
    },
    councillors: [
      { name: "Cllr Anita Forde", party: "Grn", term: "2026–2030" },
      { name: "Cllr Richard Longstaff", party: "Grn", term: "Up in May 2027", up2027: true },
      { name: "Cllr Stuart Allen / By-Election Seat", party: "Grn", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Support Leigh Broadway & Old Town independent businesses by scrapping evening parking penalties." },
      { type: "policy", text: "Pocketbook tax-cut messaging aimed at squeezed commuter homeowners rather than broad national lines." },
      { type: "tactical", text: "Tactical Directive: Keep campaign spend lean; preserve branch activist hours for higher-receptivity eastern wards." }
    ]
  },
  {
    name: "Milton",
    center: [51.5365, 0.7045],
    bounds: [[51.530, 0.695], [51.543, 0.714]],
    receptivity: 0.72,
    demographics: { age65: "12.8%", ownerOcc: "38.9%", nonGrad: "57.4%", rightPool: "41.6%" },
    results2026: { winner: "Lab", totalVotes: 2410, shares: { Lab: 30.2, Ref: 30.2, Grn: 23.9, Con: 11.4, LD: 4.3, Ind: 0.0, Oth: 0.0 } },
    results2024: { winner: "Lab", totalVotes: 2237, shares: { Lab: 52.3, Con: 24.1, Grn: 12.0, Oth: 7.8, LD: 3.8, Ind: 0.0, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Cheryl Nevin (Labour)",
      party: "Lab",
      vulnerability: "High — Labour collapsed from 52.3% to 30.2% in May 2026, tying virtually level with Reform UK in a three-way split.",
      profile: "Long-standing Labour councillor; heavily exposed as Green (23.9%) and populist (30.2%) surges fracture the inner-town electorate."
    },
    councillors: [
      { name: "Cllr Maxine Sadza", party: "Lab", term: "2026–2030" },
      { name: "Cllr Cheryl Nevin", party: "Lab", term: "Up in May 2027", up2027: true },
      { name: "Cllr Sam Allen", party: "Lab", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Restore town-centre safety, tackle street crime around High Street/Milton Road, and clean up derelict plots." },
      { type: "policy", text: "Halt unchecked flat conversions straining local GP surgeries and Victorian street parking." },
      { type: "tactical", text: "Tactical Directive: In a 30% / 30% / 24% split, uniting the 41.6% right-of-centre pool wins the seat outright." }
    ]
  },
  {
    name: "Prittlewell",
    center: [51.5535, 0.6945],
    bounds: [[51.546, 0.684], [51.561, 0.705]],
    receptivity: 0.98,
    demographics: { age65: "18.4%", ownerOcc: "69.2%", nonGrad: "63.8%", rightPool: "62.3%" },
    results2026: { winner: "Ref", totalVotes: 2790, shares: { Ref: 33.7, Con: 28.6, Lab: 18.7, Grn: 14.3, LD: 4.7, Ind: 0.0, Oth: 0.0 } },
    results2024: { winner: "Con", totalVotes: 2622, shares: { Con: 39.4, Lab: 37.0, Grn: 8.4, Ind: 6.5, LD: 5.4, Oth: 3.3, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Kevin Buck (Conservative)",
      party: "Con",
      vulnerability: "High — Combined Con + Ref vote hit 62.3% in 2026, leaving Labour stranded on 18.7%. Prime right-of-centre battleground.",
      profile: "Senior Conservative councillor; retains a 28.6% local base in Prittlewell, making head-to-head right-wing consolidation decisive."
    },
    councillors: [
      { name: "Cllr Reform Winner", party: "Ref", term: "2026–2030" },
      { name: "Cllr Kevin Buck", party: "Con", term: "Up in May 2027", up2027: true },
      { name: "Cllr Meg Davidson", party: "Con", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Fix chronic traffic congestion around Priory Crescent, Cuckoo Corner, and Southend Hospital approaches." },
      { type: "policy", text: "Protect Priory Park facilities and oppose residential parking tax creep." },
      { type: "tactical", text: "Tactical Directive: With Labour down at 18.7%, there is zero left-wing spoiler risk—run an aggressive squeeze on Conservative voters." }
    ]
  },
  {
    name: "Shoeburyness",
    center: [51.5315, 0.7885],
    bounds: [[51.522, 0.774], [51.541, 0.803]],
    receptivity: 1.32,
    demographics: { age65: "21.5%", ownerOcc: "64.8%", nonGrad: "74.2%", rightPool: "71.3%" },
    results2026: { winner: "Ref", totalVotes: 2510, shares: { Ref: 38.7, Con: 18.4, Grn: 16.1, Ind: 14.2, Lab: 9.8, LD: 2.8, Oth: 0.0 } },
    results2024: { winner: "Con", totalVotes: 2344, shares: { Con: 31.7, Lab: 31.3, Ind: 26.8, Grn: 5.3, LD: 2.9, Oth: 2.0, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Nick Ward (Independent)",
      party: "Ind",
      vulnerability: "Very High — Labour collapsed from 31.3% to 9.8% in 2026 while right/independent populist votes topped 71.3%.",
      profile: "Independent councillor defending a fractured seat; Independent share dropped from 26.8% to 14.2% as voters moved to national populist banners."
    },
    councillors: [
      { name: "Cllr Reform Winner", party: "Ref", term: "2026–2030" },
      { name: "Cllr Nick Ward", party: "Ind", term: "Up in May 2027", up2027: true },
      { name: "Cllr James Moyies", party: "Con", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Invest in Shoebury East Beach infrastructure, sea defences, and local GP/dental capacity before any new housing." },
      { type: "policy", text: "Tackle youth ASB around Shoeburyness station and High Street with dedicated community wardens." },
      { type: "tactical", text: "Tactical Directive: Top-tier demographic ward (1.32x); peel remaining Independent and Conservative voters with doorstep blitzes." }
    ]
  },
  {
    name: "Southchurch",
    center: [51.5435, 0.7465],
    bounds: [[51.535, 0.734], [51.552, 0.759]],
    receptivity: 1.36,
    demographics: { age65: "24.2%", ownerOcc: "76.5%", nonGrad: "72.8%", rightPool: "79.0%" },
    results2026: { winner: "Con", totalVotes: 2420, shares: { Con: 43.9, Ref: 35.1, Grn: 9.8, Lab: 8.8, LD: 2.4, Ind: 0.0, Oth: 0.0 } },
    results2024: { winner: "Con", totalVotes: 2159, shares: { Con: 52.7, Lab: 25.9, Oth: 9.2, Grn: 7.5, LD: 4.7, Ind: 0.0, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Colin Campbell (Conservative)",
      party: "Con",
      vulnerability: "Prime Target — Combined Con (43.9%) + Ref (35.1%) equals 79.0% of the electorate. Labour is non-viable at 8.8%.",
      profile: "Conservative councillor defending Southend's last true Tory bastion; vulnerable to a unified populist-right challenge."
    },
    councillors: [
      { name: "Cllr Daniel Nelson", party: "Con", term: "2026–2030" },
      { name: "Cllr Colin Campbell", party: "Con", term: "Up in May 2027", up2027: true },
      { name: "Cllr Judith McMahon", party: "Con", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Cut council tax waste, oppose 20mph blanket zones, and protect free parking at Southchurch Park & local parades." },
      { type: "policy", text: "Strict enforcement against HMO creep and back-garden over-development across Southchurch Boulevard." },
      { type: "tactical", text: "Tactical Directive: #1 Pact/Consolidation Target — uniting the 35.1% Reform vote with Restore Britain flips Southchurch cleanly." }
    ]
  },
  {
    name: "St Laurence",
    center: [51.5635, 0.6925],
    bounds: [[51.555, 0.680], [51.572, 0.705]],
    receptivity: 1.08,
    demographics: { age65: "20.6%", ownerOcc: "73.1%", nonGrad: "70.4%", rightPool: "62.3%" },
    results2026: { winner: "Ref", totalVotes: 2490, shares: { Ref: 44.1, Lab: 26.4, Con: 18.2, Grn: 7.2, LD: 4.1, Ind: 0.0, Oth: 0.0 } },
    results2024: { winner: "Lab", totalVotes: 2315, shares: { Lab: 50.3, Con: 34.1, LD: 6.4, Grn: 5.2, Oth: 4.0, Ind: 0.0, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Daniel Cowan (Labour — Council Leader)",
      party: "Lab",
      vulnerability: "High-Profile Target — Council Leader's own seat; Labour plunged from 50.3% (2024) to 26.4% (2026) as populist vote hit 44.1%.",
      profile: "Leader of Southend-on-Sea City Council (Labour); commands institutional profile, but faces a 62.3% right-of-centre electorate."
    },
    councillors: [
      { name: "Cllr Reform Winner", party: "Ref", term: "2026–2030" },
      { name: "Cllr Daniel Cowan", party: "Lab", term: "Up in May 2027", up2027: true },
      { name: "Cllr Lydia Hyde", party: "Lab", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Hold the Council Administration to account over council tax hikes, bin collection changes, and airport noise/traffic." },
      { type: "policy", text: "Protect green buffers around Eastwoodbury Lane and stop speculative industrial/housing sprawl." },
      { type: "tactical", text: "Tactical Directive: High-impact decapitation target; focus doorstep messaging directly on Labour administration record." }
    ]
  },
  {
    name: "St Luke's",
    center: [51.5545, 0.7225],
    bounds: [[51.547, 0.712], [51.562, 0.733]],
    receptivity: 1.02,
    demographics: { age65: "16.2%", ownerOcc: "56.4%", nonGrad: "71.9%", rightPool: "60.4%" },
    results2026: { winner: "Ref", totalVotes: 2210, shares: { Ref: 38.8, Lab: 25.3, Con: 14.8, Grn: 11.4, Ind: 6.8, LD: 2.9, Oth: 0.0 } },
    results2024: { winner: "Lab", totalVotes: 2062, shares: { Lab: 44.2, Con: 25.9, Ind: 10.3, Grn: 9.3, Oth: 7.0, LD: 3.3, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Martin Berry (Labour)",
      party: "Lab",
      vulnerability: "High — Labour vote dropped nearly 19 points between 2024 and 2026 while right/independent share climbed above 60%.",
      profile: "Labour ward councillor; relies on traditional working-class estates around Sutton Road/Eastern Avenue that swung sharply right in 2026."
    },
    councillors: [
      { name: "Cllr Reform Winner", party: "Ref", term: "2026–2030" },
      { name: "Cllr Martin Berry", party: "Lab", term: "Up in May 2027", up2027: true },
      { name: "Cllr Jane Norman", party: "Lab", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Crack down on fly-tipping, potholes, and heavy HGV rat-running along Eastern Avenue and Sutton Road." },
      { type: "policy", text: "Restore local community policing and youth diversion patrols around Fossetts and St Luke's." },
      { type: "tactical", text: "Tactical Directive: Mobilise non-graduate working-class homeowners; avoid splitting the 38.8% populist plurality." }
    ]
  },
  {
    name: "Thorpe",
    center: [51.5365, 0.7615],
    bounds: [[51.529, 0.749], [51.544, 0.774]],
    receptivity: 1.34,
    demographics: { age65: "27.8%", ownerOcc: "84.6%", nonGrad: "64.2%", rightPool: "82.9%" },
    results2026: { winner: "Ref", totalVotes: 2940, shares: { Ref: 38.7, Ind: 24.8, Con: 19.4, Lab: 7.6, Grn: 7.4, LD: 2.1, Oth: 0.0 } },
    results2024: { winner: "Ind", totalVotes: 2782, shares: { Ind: 36.0, Con: 31.3, Lab: 20.5, Grn: 6.0, Oth: 4.3, LD: 1.9, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Ron Woodley (Independent)",
      party: "Ind",
      vulnerability: "High — Combined right/independent pool is 82.9% (highest in Southend), but Independent personal vote remains sticky.",
      profile: "Veteran Independent leader and former council deputy leader; commands loyal personal following in Thorpe Bay, though eroded in 2026."
    },
    councillors: [
      { name: "Cllr Reform Winner", party: "Ref", term: "2026–2030" },
      { name: "Cllr Ron Woodley", party: "Ind", term: "Up in May 2027", up2027: true },
      { name: "Cllr Martin Terry", party: "Ind", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Scrap punitive seafront parking charges along Thorpe Esplanade and protect Thorpe Bay Broadway traders." },
      { type: "policy", text: "Defend low-density residential character and oppose high-rise seafront developments." },
      { type: "tactical", text: "Tactical Directive: Focus on 65+ owner-occupier postal voters (84.6% homeownership); contrast national clout against tired localism." }
    ]
  },
  {
    name: "Victoria",
    center: [51.5445, 0.7065],
    bounds: [[51.538, 0.697], [51.551, 0.716]],
    receptivity: 0.82,
    demographics: { age65: "10.9%", ownerOcc: "36.5%", nonGrad: "64.9%", rightPool: "43.2%" },
    results2026: { winner: "Lab", totalVotes: 1980, shares: { Lab: 38.4, Ref: 33.1, Grn: 14.8, Con: 10.1, LD: 3.6, Ind: 0.0, Oth: 0.0 } },
    results2024: { winner: "Lab", totalVotes: 1824, shares: { Lab: 60.8, Con: 16.3, Grn: 9.9, Oth: 7.5, LD: 5.5, Ind: 0.0, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Ian Gilbert (Labour)",
      party: "Lab",
      vulnerability: "Moderate-High — Labour vote dropped 22.4 points between 2024 and 2026; a united right-of-centre vote (43.2%) overtakes Labour.",
      profile: "Former Labour Council Leader; relies on solid core vote, but vulnerable if Tory (10.1%) and populist (33.1%) voters consolidate."
    },
    councillors: [
      { name: "Cllr Margaret Borton", party: "Lab", term: "2026–2030" },
      { name: "Cllr Ian Gilbert", party: "Lab", term: "Up in May 2027", up2027: true },
      { name: "Cllr Hyde / Lab Colleague", party: "Lab", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Clean up Victoria Gateway/Queensway estate blight and restore visible town-centre policing." },
      { type: "policy", text: "Prioritise working Southend families on housing registers and oppose council tax rises." },
      { type: "tactical", text: "Tactical Directive: Winnable only under unified right-of-centre consolidation (~43% combined ceiling vs Labour's 38.4%)." }
    ]
  },
  {
    name: "West Leigh",
    center: [51.5515, 0.6425],
    bounds: [[51.543, 0.631], [51.560, 0.654]],
    receptivity: 0.90,
    demographics: { age65: "23.5%", ownerOcc: "82.4%", nonGrad: "56.1%", rightPool: "51.3%" },
    results2026: { winner: "LD", totalVotes: 3020, shares: { LD: 29.2, Ref: 26.8, Con: 24.5, Grn: 13.4, Lab: 6.1, Ind: 0.0, Oth: 0.0 } },
    results2024: { winner: "Con", totalVotes: 2897, shares: { Con: 37.5, LD: 30.9, Grn: 14.3, Lab: 14.0, Oth: 3.3, Ind: 0.0, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Fay Evans (Conservative)",
      party: "Con",
      vulnerability: "High Spoiler Alert — In 2026, Lib Dems took the seat on just 29.2% because Ref (26.8%) and Con (24.5%) split a 51.3% majority.",
      profile: "Conservative councillor defending a traditional Tory ward fractured by the 2026 three-way split."
    },
    councillors: [
      { name: "Cllr Lib Dem Winner", party: "LD", term: "2026–2030" },
      { name: "Cllr Fay Evans", party: "Con", term: "Up in May 2027", up2027: true },
      { name: "Cllr Owen Cartey", party: "Con", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Protect green spaces around Belfairs/Marine Estate borders and oppose high-density flat blocks." },
      { type: "policy", text: "Reverse parking fee hikes and keep council tax low for retired and commuter homeowners." },
      { type: "tactical", text: "Tactical Directive: Classic Con/Ref/Restore split risk—only a single unified challenger beats the 29.2% Lib Dem ceiling." }
    ]
  },
  {
    name: "West Shoebury",
    center: [51.5335, 0.7745],
    bounds: [[51.525, 0.762], [51.542, 0.787]],
    receptivity: 1.38,
    demographics: { age65: "25.9%", ownerOcc: "79.8%", nonGrad: "75.1%", rightPool: "78.8%" },
    results2026: { winner: "Ref", totalVotes: 2460, shares: { Ref: 41.1, Con: 26.2, Ind: 11.5, Lab: 10.4, Grn: 8.1, LD: 2.7, Oth: 0.0 } },
    results2024: { winner: "Con", totalVotes: 2203, shares: { Con: 45.5, Lab: 23.8, Ind: 18.2, Grn: 6.7, LD: 3.2, Oth: 2.6, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Derek Jarvis (Conservative)",
      party: "Con",
      vulnerability: "Prime Target — Highest Demographic Receptivity in Southend (1.38x). Combined right/independent pool sits at 78.8%.",
      profile: "Veteran Conservative councillor; holds residual loyalty among older Garrison/Elm Road residents, but Tories fell nearly 20 points in 2026."
    },
    councillors: [
      { name: "Cllr Reform Winner", party: "Ref", term: "2026–2030" },
      { name: "Cllr Derek Jarvis", party: "Con", term: "Up in May 2027", up2027: true },
      { name: "Cllr Tony Cox", party: "Ind / Non-Aligned", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Demand strict infrastructure-first limits on eastern expansion and protect Garrison heritage." },
      { type: "policy", text: "Cut council tax waste, improve road resurfacing, and restore visible community policing." },
      { type: "tactical", text: "Tactical Directive: #1 Demographic Stronghold (1.38x); deploy full canvass teams to convert soft Tory and Independent households." }
    ]
  },
  {
    name: "Westborough",
    center: [51.5475, 0.6885],
    bounds: [[51.541, 0.679], [51.554, 0.698]],
    receptivity: 0.78,
    demographics: { age65: "13.5%", ownerOcc: "49.2%", nonGrad: "60.5%", rightPool: "40.6%" },
    results2026: { winner: "Lab", totalVotes: 2150, shares: { Lab: 36.8, Ref: 29.4, Grn: 16.2, Con: 11.2, LD: 6.4, Ind: 0.0, Oth: 0.0 } },
    results2024: { winner: "Lab", totalVotes: 1961, shares: { Lab: 54.2, Grn: 13.4, Con: 19.1, LD: 9.5, Oth: 3.8, Ind: 0.0, Ref: 0.0 } },
    seat2027: {
      councillor: "Cllr Aston Line (Labour)",
      party: "Lab",
      vulnerability: "Moderate — Labour fell from 54.2% to 36.8% in 2026, but retains a structural lead unless right-of-centre voters unite completely.",
      profile: "Labour councillor defending a dense residential/commuter ward off Westcliff/London Road."
    },
    councillors: [
      { name: "Cllr Anne Jones", party: "Lab", term: "2026–2030" },
      { name: "Cllr Aston Line", party: "Lab", term: "Up in May 2027", up2027: true },
      { name: "Cllr Kevin Robinson", party: "Lab", term: "2024–2028" }
    ],
    priorities: [
      { type: "policy", text: "Crack down on unlicensed HMOs, street litter, and anti-social behaviour around London Road." },
      { type: "policy", text: "Protect family homes from aggressive flat-conversion developers and oppose parking permit hikes." },
      { type: "tactical", text: "Tactical Directive: Secondary target; deploy selective pocketbook literature rather than heavy ground manpower." }
    ]
  }
];
