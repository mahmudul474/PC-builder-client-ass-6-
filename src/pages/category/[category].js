// import Layout from "@/components/common/Leyaot/Layout";
// import { useRouter } from "next/router";
// import React from "react";

// export default function Products() {

//     const router = useRouter();
//     const { categoryID } = router.query;
    

//   return (
//     <>
//       <Layout>
        
//       <div className="container mx-auto my-8">
//       <h2 className="text-3xl font-semibold mb-4">{categoryID}</h2>
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {products?.map((product) => (
//           <div key={product.id} className="border p-4 rounded-md hover:shadow-lg transition duration-300">
//             <Link href={`/product/${product.id}`}>
//               <a>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-40 object-cover mb-4 rounded-md"
//                 />
//                 <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//                 <p className="text-gray-500 mb-2">{product.category}</p>
//                 <p className="mb-2">${product.price}</p>
//                 <p className={`text-${product.status === 'In Stock' ? 'green' : 'red'}-500 mb-2`}>
//                   {product.status}
//                 </p>
//                 <p className="mb-2">Rating: {product.rating}/5 Stars</p>
//               </a>
//             </Link>
//           </div>
//         ))}
//       </section>
//     </div>

//         </Layout>{" "}
//     </>
//   );
// }



import React from 'react'

export default function a() {
  return (
    <div></div>
  )
}
