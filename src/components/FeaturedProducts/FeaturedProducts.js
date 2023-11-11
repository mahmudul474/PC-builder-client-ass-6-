import Link from "next/link";

const FeaturedProducts = ({ products }) => {
  return (<div className="px-5">
  <h1 className="text-xl texl-left">Featured Products</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      
      
      {products &&
        products?.map((product) => (
          <div
            key={product.id}
            className="border   border-gray-300 shadow-orange-100 p-4 rounded-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-500 mb-2">{product.category}</p>
            <p className="mb-2">${product.price}</p>
            <p
              className={`text-${
                product.status === "In Stock" ? "green" : "red"
              }-500 mb-2`}
            >
              {product.status}
            </p>
            <p className="mb-2">Rating: {product.rating}/5 Stars</p>
            <Link href={`/product/${product.id}`}>
              <p className="text-blue-500 btn hover:underline">View Details</p>
            </Link>
          </div>
        ))}
    </div>
  </div>
   
  );
};

export default FeaturedProducts;
