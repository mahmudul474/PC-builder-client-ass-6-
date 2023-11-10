 

import Link from 'next/link';

const FeaturedCategories = ({ categories }) => {
  return (
    <section className="flex justify-between mt-8">
      {categories && categories?.map((category) => (
        <div key={category} className="border p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">{category}</h3>
          <Link href={`/category/${encodeURIComponent(category)}`}>
            <p className="text-blue-500 hover:underline">Explore {category}</p>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default FeaturedCategories;

  
