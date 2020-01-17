import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import 'pure-react-carousel/dist/react-carousel.es.css';
import cS from '../../styles/carousel.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <ButtonBack className={cS.buttonBack}><FontAwesomeIcon icon={['fal', 'chevron-left']} size="3x" /></ButtonBack>
          <ButtonNext className={cS.buttonNext}><FontAwesomeIcon icon={['fal', 'chevron-right']} size="3x" /></ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
}

export default Carousel;