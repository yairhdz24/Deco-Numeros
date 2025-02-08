// import React from "react"
// import { motion } from "framer-motion"
// import { useNavigate } from "react-router-dom"
// import { style } from "framer-motion/client"
// // import InfiniteBanner from "./InfiniteBanner"

// const categories = [
//   {
//     name: "CROME",
//     logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome-mWL3naAbAIIEiB5KAulyedbhZGEiXu.png",
//     description: "Números modernos en acabado negro mate",
//     path: "/customize/crome",
//   },
//   {
//     name: "BHaus",
//     logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bhaus-vDDk6zgsjAddtfs4acm5e6ouxDQCHh.png",
//     description: "Diseño minimalista con acabado cristal",
//     path: "/customize/bhaus",
//   },
//   {
//     name: "HERA",
//     logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dise%C3%B1o%20sin%20t%C3%ADtulo-WAcTWNM4gWizEORc5Wq9dTEffiQHNy.png",
//     description: "Estilo industrial en acero inoxidable",
//     path: "/customize/hera",
    
//   },
//   {
//     name: "BOSKINO",
//     logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boskino-2CoPUf3i92In7CyFPaCXu8ghGLWGlH.png",
//     description: "Diseño vertical con elementos naturales",
//     path: "/customize/boskino",
//   },
//   {
//     name: "CLASSIC",
//     logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/classic-soQ1MXBRb0tzIROrCWgcSmSzyVw0AI.png",
//     description: "Números elegantes con acabado metálico",
//     path: "/customize/classic",
//   },
//   {
//     name: "DARK",
//     logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark-xzNb0xcok3Ts8hZC2nK0m42DDilqky.png",
//     description: "Diseño contemporáneo en tonos oscuros",
//     path: "/customize/dark",
//   },
//   {
//     name: "SOFT LINE",
//     logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/soft-YTqWjb7dkmBm8FVf9xw4pDxfyJxjmU.png",
//     description: "Señalización moderna y minimalista",
//     path: "/customize/soft-line",
//   },
// ]

// const getRandomImage = (width = 400, height = 300) => {
//   const categories = ["house", "architecture", "building", "modern"]
//   const randomCategory = categories[Math.floor(Math.random() * categories.length)]
//   return `https://source.unsplash.com/random/${width}x${height}/?${randomCategory}`
// }

// const ProductCategories = () => {
//   const navigate = useNavigate()

//   return (
//     <div>
//       {/* <InfiniteBanner /> */}

//       <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestras Líneas de Productos</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {categories.map((category) => (
//               <motion.div
//                 key={category.name}
//                 className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 {/* Logo Section - Now Larger */}
//                 <div className="h-40 p-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
//                   <img
//                     src={category.logo || "/placeholder.svg"}
//                     alt={`${category.name} logo`}
//                     className="h-24 w-auto object-contain filter drop-shadow-lg"
//                   />
//                 </div>

//                 {/* Product Image with New Styling */}
//                 <div className="relative h-72 overflow-hidden">
//                   <img
//                     src={getRandomImage() || "/placeholder.svg"}
//                     alt={`${category.name} ejemplo`}
//                     className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <button
//                         onClick={() => navigate(category.path)}
//                         className="bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-3 rounded-lg font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-white"
//                       >
//                         Ver detalles
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Description with New Styling */}
//                 <div className="p-6 bg-gradient-to-b from-white to-gray-50">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
//                 </div>

//                 {/* New Corner Decoration */}
//                 <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
//                   <div className="absolute transform rotate-45 text-white text-xs font-bold py-1 right-[-35px] top-[15px] w-[120px]" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
         
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductCategories

