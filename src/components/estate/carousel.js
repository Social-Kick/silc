import React from 'react';
import {
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import 'pure-react-carousel/dist/react-carousel.es.css';
import cS from '../../styles/carousel.module.scss'

const Carousel = props => {
  let images = props.images
  return (
    <div className={cS.gallery}>
      <CarouselProvider
        visibleSlides={2.5}
        totalSlides={images.length}
        infinite
        naturalSlideHeight={480}
        naturalSlideWidth={900}
      >
        <div className={cS.gallery}>
          <Slider className={cS.slider}>
            {images.map((edge, i) => {
              return (
                <Slide className={cS.slide} index={i} key={i}>
                  <img src={edge.file.url} alt={edge.title} className={cS.img} />
                </Slide>
              )
            })}
          </Slider>
          <ButtonBack className={cS.buttonBack}><FaChevronLeft size={40} /></ButtonBack>
          <ButtonNext className={cS.buttonNext}><FaChevronRight size={40} /></ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
}

export default Carousel;