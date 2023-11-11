import {Col, Row} from "react-bootstrap";
import {FiCpu} from "react-icons/fi";
import {MdStorage} from "react-icons/md";
import {CgSmartphoneRam} from "react-icons/cg";
import {LuMonitor} from "react-icons/lu";
import {ImPowerCord} from "react-icons/im";
import {BsMotherboard} from "react-icons/bs";
import {useRouter} from "next/router";

export const FeatureCategoriesCard = () => {
    const router = useRouter()
    const list = [
        {
            name: "CPU",
            icon: <FiCpu/>,
            url: "/products/cpu",
        },
        {
            name: "STORAGE",
            icon: <MdStorage/>,
            url: "/products/storage",
        },
        {
            name: "RAM",
            icon: <CgSmartphoneRam/>,
            url: "/products/ram",
        },
        {
            name: "MONITOR",
            icon: <LuMonitor/>,
            url: "/products/monitor",
        },
        {
            name: "POWER SUPPLY",
            icon: <ImPowerCord/>,
            url: "/products/power_supply",
        },
        {
            name: "MOTHERBOARD",
            icon: <BsMotherboard/>,
            url: "/products/motherboard",
        }
    ]

    return (
        <Row className={'text-center w-100 d-flex justify-content-center align-items-center'}>
            {
                list.map((category, index) => (
                    <Col
                        xs={12}
                        sm={6}
                        md={3}
                        lg={2}
                        className={'mb-3'}
                        key={index}
                    >
                        <div
                            style={{backgroundColor: "#e7e7e7", minHeight: "7rem"}}
                            className={'p-3 custom-hoverOn-featured-category'}
                            onClick={() => router.push(`${category.url}`)}
                        >
                            <span style={{fontSize: "4rem"}}>{category.icon}</span>
                            <p>{category.name}</p>
                        </div>
                    </Col>
                ))
            }
        </Row>
    )
}