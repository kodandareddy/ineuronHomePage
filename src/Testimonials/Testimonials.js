import React, { useEffect, useState } from "react";
import SwiperCore, { Virtual, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card, CardBody, Container } from "reactstrap";
import testimonial from '../Data'
SwiperCore.use([Virtual, Navigation]);

const Testimonials = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [slidesPerView,setSlidesPerView]=useState(3)
  const [slides, setSlides] = useState(
    testimonial
  );

  useEffect(()=>{
    window.addEventListener("resize", resize);
    return ()=> window.removeEventListener("resize", resize);

  },[])

 
const resize=()=>{
   if(window.innerWidth <= 760){
    setSlidesPerView(1)
   }else if(window.innerWidth > 760){
    setSlidesPerView(3)

   }
}


  return (
    <Container>
      <section className="testimonial py-5">
        <h3 className="my-3 text-center">And Over 125,000 Satisfied Engineers.</h3>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "fraction",
          }}
          modules={[Autoplay]}
          navigation={true}
          virtual
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              <Card>
                <CardBody>
                  <img
                    className="user"
                    src={slideContent.user}
                  />
                  <h2>{slideContent.userName}</h2>
                  <img src={slideContent.image} className="company" />
                  <p>
                   {
                    slideContent.name
                   }
                  </p>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Container>
  );
};

export default Testimonials;
