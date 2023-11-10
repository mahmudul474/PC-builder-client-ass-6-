import FeaturedCategories from "@/components/FeaturedCategories/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Layout from "@/components/common/Leyaot/Layout";
import data from "../../public/data.json";

export default function Home({ featuredProducts, featuredCategories }) {
  return (
    <>
      <Layout>
        <FeaturedProducts products={featuredProducts} ></FeaturedProducts>
        <FeaturedCategories categories={featuredCategories}></FeaturedCategories>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  
  const featuredProducts = data.featuredProducts;
  const featuredCategories = data.featuredCategories;

  return {
    props: {
      featuredProducts,
      featuredCategories,
    },
  };
}
