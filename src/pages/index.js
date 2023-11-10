import FeaturedCategories from "@/components/FeaturedCategories/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Layout from "@/components/common/Leyaot/Layout";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <>
      <Layout>
        {/* Featured Products Section */}
        <FeaturedProducts></FeaturedProducts>

        {/* Featured Categories Section */}
        <FeaturedCategories></FeaturedCategories>
      </Layout>{" "}
    </>
  );
}
