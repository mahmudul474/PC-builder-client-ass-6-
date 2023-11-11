import { TProduct } from "@/Redux/features/productsSlice";
import { Card } from "antd";
import { useRouter } from "next/router";

export const ProductCard = ({ product }: { product: TProduct }) => {
    const { Meta } = Card;
    const router = useRouter()
    return (
        <Card
            hoverable
            style={{ width: "80%" }}
            cover={<img  alt="example" src={product.image} height={"200em"} />}
            onClick={() => router.push(`/product/${product.id}`)}
        >
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            <p> <strong>Name:</strong>  {product.name}</p>
            <p className="p-2 bg-dark text-light text-center" style={{ fontSize: "1.4em", borderRadius: "25px" }}> <strong>Price</strong> : {product.price} USD</p>
            <p> <strong>Category:</strong>  {product.category}</p>
            <p> <strong> Status:</strong> {product.status}</p>
            <p> <strong> Rating: </strong>{product.rating}</p>
        </Card>
    )
}