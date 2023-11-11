import FeaturedCategories from "@/components/FeaturedCategories/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Layout from "@/components/common/Leyaot/Layout";
import data from "../../public/data.json";
import RamInfoForm from "@/components/RamInfoForm";
 

export default function Home({ featuredProducts, featuredCategories }) {
  return (
    <>
      <Layout>
        <FeaturedProducts products={featuredProducts} ></FeaturedProducts>
        <FeaturedCategories categories={featuredCategories}></FeaturedCategories>
     
    <RamInfoForm></RamInfoForm>
     
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // Fetch data from the first API
  const productsResponse = await fetch('http://localhost:5000/product/featured');
  const featuredProducts = await productsResponse.json();

  // Fetch data from the second API
  const categoriesResponse = await fetch('http://localhost:5000/category');
  const featuredCategories = await categoriesResponse.json();

  return {
    props: {
      featuredProducts,
      featuredCategories,
    },
  };
}



