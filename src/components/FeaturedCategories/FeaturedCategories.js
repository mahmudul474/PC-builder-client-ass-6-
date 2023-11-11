 

import Link from 'next/link';

const FeaturedCategories = ({ categories }) => {
  return (
    <section className="px-5 mt-8">
        <h1 className="text-2xl text-left">Featured Categories</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8'>
      {categories && categories?.map((category) => (
        <div key={category?._id} className="border p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
          <Link href={`/category/${category?.categoryID}`}>
            <button className="text-blue-500 hover:underline">Explore {category?.name}</button>
          </Link>
        </div>
      ))}</div>
    </section>
  );
};

export default FeaturedCategories;

 
