import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100"
                     alt="Cliff Above a Stormy Sea"/>
                <Carousel.Caption>
                    <h3>Make wish everyday</h3>
                    <p>If someone gift me a latest MACKBOOK Pro.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100"
                     alt="Canyon at Nigh"/>
                <Carousel.Caption>
                    <h3>Satellite Internet</h3>
                    <p>StarX starting new service in BANGLADESH.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" className="d-block w-100"
                     alt="Sunset Over the City"/>
                <Carousel.Caption>
                    <h3>Good coverage</h3>
                    <p>
                        Unreachable place by general also cover with good network.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;
