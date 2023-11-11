import { categoryList, removeFromList } from "@/Redux/features/pcBuildSlice";
import { Button, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { TProduct } from "@/Redux/features/productsSlice";
import { useEffect, useState } from "react";

export default function BuildPc() {
    const [total, setTotal] = useState(0)
    const [allSelected, setAllSelected] = useState(false)
    const parts = useAppSelector(state => state.pcBuild)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const list = Object.entries(parts)
        let status = []
        let tempTotal = 0;
        for (let i = 0; i < list.length; i++) {
            const pd = list[i][1]
            status.push(pd)
            if (pd) {
                tempTotal += pd?.price as number
            }
        }
        setTotal(tempTotal)
        if (!status.includes(null)) {
            console.log(status.includes(null));
            setAllSelected(true)
        }
    }, [parts,allSelected])



    return (
        <Container>
            {
                categoryList?.map((category, index) => {
                    // @ts-ignore
                    const pd: TProduct | null = parts[category]
                    return (
                        <div key={index}>
                            {
                                pd ?
                                    <div className='row m-3 p-3'
                                        style={{ backgroundColor: "#e7e7e7", borderRadius: "15px", }}>
                                        <div className={'col-sm-12 col-md-4 '}>
                                            <div className={'d-flex justify-content-center align-items-center'}
                                                style={{ position: "relative" }}>
                                                <img src={pd.image} alt={pd.name}
                                                    width={"75%"} style={{ maxHeight: '300px' }} />
                                            </div>
                                        </div>
                                        <div className={'col-sm-12 col-md-4 '}>
                                            <p> <strong>name:</strong>  {pd.name}</p>
                                            <p className="p-2 bg-dark text-light text-center" style={{ fontSize: "1.4em", borderRadius: "25px" }}> <strong>category</strong> : {pd.category.toUpperCase()}</p>
                                            <p> <strong>price:</strong>  {pd.price} USD</p>
                                            <p> <strong> status:</strong> {pd.status}</p>
                                            <p> <strong> rating: </strong>{pd.rating}</p>
                                        </div>
                                        <div
                                            className={'col-sm-12 col-md-4 text-center d-flex justify-content-center align-items-center'}>
                                            <Row>
                                                <Col md={12}
                                                    className={'p-2 '}>
                                                    <Button
                                                        variant={"outline-dark"}
                                                        onClick={() => dispatch(removeFromList(pd))}
                                                    >
                                                        Remove component
                                                    </Button>
                                                </Col>

                                                <Col md={12} className={'p-2'}>
                                                    <Link href={`/products/${category}`}>
                                                        <Button
                                                            variant={"outline-dark"}
                                                        >
                                                            Change component
                                                        </Button>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                    :
                                    <div className='row m-5 p-3 text-center'
                                        style={{ backgroundColor: "#e7e7e7", borderRadius: "15px", maxHeight: "35vh" }}>

                                        <div className={'col-sm-12 col-md-6 p-5'}>
                                            <div style={{ position: "relative", fontSize: "2em" }}>
                                                <strong>{category.toUpperCase()}</strong>
                                            </div>
                                        </div>
                                        <div className={'col-sm-12 col-md-6  d-flex justify-content-center align-items-center'}>
                                            <Link href={`/products/${category}`}>

                                                <Button variant="outline-dark">Choose component</Button>
                                            </Link>
                                        </div>
                                    </div>
                            }
                        </div>

                    )
                })
            }
            <div className='row m-5'
                style={{ backgroundColor: "#e7e7e7", borderRadius: "15px", maxHeight: "25vh" }}>
                <h5 className="text-end p-3">TOTAL : <strong>{total}</strong> USD</h5>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <Button variant={allSelected ? "outline-success" : "outline-danger"} disabled={!allSelected} onClick={() => allSelected && alert('success')}>
                    Complete Build
                </Button>
            </div>
        </Container>
    )
}

export const getServerSideProps = () => {
    return {
        props: {
            data: ""
        }
    }
}