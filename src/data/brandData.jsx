export const brandData = {
    CLASICO: {
      name: "CLASICO",
      logo: "/path-to-clasico-logo.png",
      description: "Diseño clásico y elegante",
      details: "Perfecto para espacios tradicionales",
      typography: {
        name: "TIPOGRAFIA ARIAL BOLD",  
        sizes: [
          { size: 30, basePrice: 955, lightPrice: 1395 },
          { size: 25, basePrice: 855, lightPrice: 1295 },
          { size: 20, basePrice: 755, lightPrice: 1195 },
          { size: 15, basePrice: 655, lightPrice: 1095 },
        ],
      },
    },
    HERA: {
      name: "HERA",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diseño%20sin%20título-WAcTWNM4gWizEORc5Wq9dTEffiQHNy.png",
      description: "Estilo industrial en acero inoxidable",
      details: "Resistencia y durabilidad con un toque sofisticado",
      typography: {
        name: "TIPOGRAFIA BANKGHOTIC BT",
        sizes: [{ size: 20, basePrice: 955, lightPrice: 1495 }],
      },
    },
    BAOLI_V: {
      name: "BAOLI V",
      logo: "/path-to-baoli-v-logo.png",
      description: "Diseño vertical moderno",
      details: "Ideal para espacios contemporáneos",
      typography: {
        name: "TIPOGRAFIA CENTURY GOTHIC BOLD",
        sizes: [{ size: 20, basePrice: 755, lightPrice: 1195 }],
      },
    },
    BAOLI: {
      name: "BAOLI",
      logo: "/path-to-baoli-logo.png",
      description: "Estilo minimalista y funcional",
      details: "Perfecto para ambientes modernos",
      typography: {
        name: "TIPOGRAFIA CENTURY GOTHIC",
        sizes: [{ size: 20, basePrice: 755, lightPrice: 1195 }],
      },
    },
    CALIFORNIA: {
      name: "CALIFORNIA",
      logo: "/path-to-california-logo.png",
      description: "Diseño inspirado en la costa oeste",
      details: "Toque relajado y sofisticado",
      typography: {
        name: "TIPOGRAFIA AURORA",
        sizes: [{ size: 20, basePrice: 755, lightPrice: 1195 }],
      },
    },
  }
  
  export const colorOptions = {
    stock: [
      { id: "dorado-cepillado", name: "Dorado Cepillado", available: false },
      { id: "plata-mate", name: "Plata Mate", available: true },
      { id: "acero-cepillado", name: "Acabado Acero Cepillado", available: true },
      { id: "negro-mate", name: "Negro Mate", available: true },
      { id: "plata-espejo", name: "Plata Espejo", available: true },
    ],
    custom: [
      { id: "plata-semi-mate", name: "Plata Semi Mate" },
      { id: "chocolate", name: "Chocolate" },
      { id: "gris-martillo", name: "Gris Martillo" },
      { id: "blanco-mate", name: "Blanco Mate" },
    ],
    mixed: [
      { id: "espejo-semi-mate", name: "Cara Plata Espejo con Bordes Plata Semi Mate" },
      { id: "negro-plata", name: "Cara Negro Mate con Plata Semi Mate" },
    ],
  }
  
  export const plateColors = [
    { id: "negro-brillante", name: "Negro Brillante" },
    { id: "negro-mate", name: "Negro Mate" },
    { id: "acero-cepillado", name: "Plata Acabado Acero Cepillado" },
    { id: "gris-mate", name: "Gris Mate" },
    { id: "madera", name: "Madera" },
    { id: "oro-espejo", name: "Oro Espejo" },
  ]
  
  export const lightingOptions = {
    types: [
      { id: "sin-luz", name: "Sin Luz" },
      { id: "luz-calida", name: "Luz Cálida" },
      { id: "luz-neutra", name: "Luz Neutra" },
    ],
    timer: {
      available: true,
      defaultHours: { on: 18, off: 24 },
    },
  }
  
  