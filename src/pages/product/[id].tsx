import {useRouter} from "next/router";
import {TProduct} from "@/Redux/features/productsSlice";
import {Button, Col, Row} from "react-bootstrap";
import {ReviewsComponent} from "@/components/Cards/ReviewsComponent";

export default function ProductDetails({data}: { data: TProduct | null }) {
    const router = useRouter()

    // console.log(data)

    return (
        <div className='container mt-5 mb-5'>
            <section className='row'>
                <div className='col-sm-12 col-md-6'>
                    <img src={data?.image} alt="product image" width={"100%"} style={{maxHeight: "35em"}}/>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <div className='p-5'>
                        <div className=''>
                            <h1>{data?.name}</h1>
                            <h3>{data?.price} USD</h3>
                            <h5>Category: {data?.category}</h5>
                            <h5>Status: {data?.status}</h5>
                            <h5>Ratting: {Math.round(Math.random() * 10)} out of 10</h5>
                            <h5>
                                Description:
                                lorem ipsum dolor sit amet, consectetur adip non pro id el component qui offic et dolore
                                mag et
                            </h5>
                        </div>
                        <div>
                            <Button variant={'outline-success'}>Buy Now</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'mt-5'}>
                <Row className={'p-3'} style={{backgroundColor: "#e7e7e7"}}>
                    <Col>
                        <h2>Key feature's :</h2>
                        <ul>
                            <li> lorem ipsum dolor sit amet, consectetur adip</li>
                            <li> lorem ipsum dolor sit amet, consectetur adip</li>
                            <li> lorem ipsum dolor sit amet, consectetur adip</li>
                            <li> lorem ipsum dolor sit amet, consectetur adip</li>
                            <li> lorem ipsum dolor sit amet, consectetur adip</li>
                        </ul>
                    </Col>
                </Row>
            </section>
            <section>
                <ReviewsComponent/>
            </section>
        </div>

    )
}

export async function getStaticPaths() {
    const res = await fetch("https://simple-node-app-csmm.onrender.com/products")
    const data = await res.json()

    const paths = (data?.products as TProduct[]).map((pd) => ({
        params: {id: String(pd.id)},
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {paths, fallback: false}
}

export const getStaticProps = async ({params}: { params: any }) => {
    const allProducts = await fetch("https://simple-node-app-csmm.onrender.com/products")
    const data = await allProducts.json()
    const selectedProduct = (data?.products as TProduct[]).find(pd => pd.id === Number(params.id))
    return {
        props: {
            data: selectedProduct ?? null
        }
    }
}