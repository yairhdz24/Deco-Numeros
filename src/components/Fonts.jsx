export const fontOptions = [
  {
    id: "disenada",
    name: "Tipografía Diseñada",
    fontFamily: "Arial, sans-serif",
    sizes: [{ value: 20, label: "20 cm", basePrice: 755, lightPrice: 1295 }],
    lightingOptions: ["luz calida", "luz neutra", "sin luz"],
  },
  {
    id: "arial",
    name: "Tipografía Arial Bold",
    fontFamily: "Arial, sans-serif",
    sizes: [
      { value: 30, label: "30 cm", basePrice: 955, lightPrice: 1395 },
      { value: 25, label: "25 cm", basePrice: 955, lightPrice: 1295 },
      { value: 15, label: "15 cm", basePrice: 555, lightPrice: 1095 },
    ],
    lightingOptions: ["luz calida", "luz neutra", "sin luz"],
  },
  {
    id: "bankgothic",
    name: "Tipografía BankGothic BT",
    fontFamily: '"BankGothic", sans-serif',
    sizes: [{ value: 20, label: "20 cm", basePrice: 955, lightPrice: 1495 }],
    lightingOptions: ["luz calida", "luz neutra", "sin luz"],
  },
  {
    id: "century_bold",
    name: "Tipografía Century Gothic Bold (Baoli V)",
    fontFamily: '"Century Gothic", sans-serif',
    sizes: [{ value: 20, label: "20 cm", basePrice: 755, lightPrice: 1195 }],
    lightingOptions: ["luz calida", "luz neutra", "sin luz"],
  },
  {
    id: "century",
    name: "Tipografía Century Gothic (Baoli)",
    fontFamily: '"Century Gothic", sans-serif',
    sizes: [{ value: 20, label: "20 cm", basePrice: 755, lightPrice: 1195 }],
    lightingOptions: ["luz calida", "luz neutra", "sin luz"],
  },
  {
    id: "aurora",
    name: "Tipografía Aurora (California)",
    fontFamily: "Aurora, sans-serif",
    sizes: [{ value: 20, label: "20 cm", basePrice: 755, lightPrice: 1195 }],
    lightingOptions: ["luz calida", "luz neutra", "sin luz"],
  },
]

export const brandFontMapping = {
  CROME: "disenada",
  BHaus: "arial",
  HERA: "bankgothic",
  BOSKINO: "century_bold",
  CLASSIC: "disenada",
  DARK: "century",
  "SOFT LINE": "arial",
}
