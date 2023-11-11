import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Col, Row } from "antd";
import { ProductCard } from "@/components/Cards/ProductCard";
import { TProduct } from "@/Redux/features/productsSlice";
import CarouselComponent from "@/components/Carousel";
import { FeatureCategoriesCard } from "@/components/Cards/FeatureCategoriesCard";
import Link from 'next/link';
import { Button } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }: { products: TProduct[] | undefined }) {
    return (
        <>
            <Head>
                <title>Build Your Pc</title>
            </Head>
            <main>
                <section>
                    <CarouselComponent />
                </section>
                <section>
                    <div className='container mt-5 mb-5'>
                        <h1 className={'text-center p-5'}>Featured product's</h1>
                        <Row gutter={[16, 16]} justify={"center"}>
                            {
                                products?.slice(0, 6).map((product: TProduct, index) => (
                                    <Col sm={24} md={12} lg={8} className='d-flex justify-content-center'
                                        key={product.id}>
                                        <ProductCard product={product} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </section>
                <section className={'text-center'}>
                    <h1 className={'p-5'}>Featured categories</h1>
                    <div className={'d-flex justify-content-center align-items-center'}>
                        <FeatureCategoriesCard />
                    </div>

                </section>
            </main>
        </>
    )
}


export const getStaticProps = async () => {
    const result = await fetch('https://simple-node-app-csmm.onrender.com/products')
    const data = await result.json()

    return {
        props: {
            products: data?.products
        }
    }
}