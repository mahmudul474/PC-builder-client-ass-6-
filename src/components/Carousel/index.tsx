// import Carousel from 'react-bootstrap/Carousel';

// function CarouselComponent() {
//     return (
//         <Carousel>
//             <Carousel.Item>
//                 <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100"
//                      alt="Cliff Above a Stormy Sea"/>
//                 <Carousel.Caption>
//                     <h3>Make wish everyday</h3>
//                     <p>If someone gift me a latest MACKBOOK Pro.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100"
//                      alt="Canyon at Nigh"/>
//                 <Carousel.Caption>
//                     <h3>Satellite Internet</h3>
//                     <p>StarX starting new service in BANGLADESH.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" className="d-block w-100"
//                      alt="Sunset Over the City"/>
//                 <Carousel.Caption>
//                     <h3>Good coverage</h3>
//                     <p>
//                         Unreachable place by general also cover with good network.
//                     </p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//     );
// }

// export default CarouselComponent;

import Link from 'next/link';
import React from 'react';

const CarouselComponent = () => {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      color: '#ffffff',
      padding: '100px',
      textAlign: 'left',
    }}
  >
    <div style={{ flex: 1 }}>
      <h1 style={{ fontSize: '3rem',color:"black", marginBottom: '20px' }}>Build Your Ultimate PC with PC Builder</h1>
     
      <p style={{ fontSize: '1.2rem', color:"black", marginTop: '20px' }}>
        Build your dream PC with the latest components and unleash the power of technology.
      </p>
   
   <Link href="/build-pc">
      <button
        style={{
          fontSize: '1rem',
          padding: '10px 20px',
          marginTop: '30px',
          backgroundColor: '#007bff',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Explore Now
      </button></Link>
    
    </div>
    <img
      src="https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Update with the actual path to your image
      alt="PC Image"
      style={{ flex: 1, maxWidth: '50%', marginLeft: '20px' }}
    />
  </div>
  );
};

export default CarouselComponent
