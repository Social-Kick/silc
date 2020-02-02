import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import 'pure-react-carousel/dist/react-carousel.es.css';

import cS from '../styles/components/carousel.module.scss'
import { Mobile, Default } from "../utils/breakpoint"

const Carousel = props => {
  let images = props.images
  return (
    <div className={cS.gallery}>
      <CarouselProvider
        visibleSlides={props.slides}
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
          <ButtonBack className={cS.buttonBack}>
            <Default>
              <FontAwesomeIcon icon={['fal', 'chevron-left']} size="3x" />
            </Default>
            <Mobile>
              <FontAwesomeIcon icon={['fal', 'chevron-left']} size="2x" />
            </Mobile>
          </ButtonBack>
          <ButtonNext className={cS.buttonNext}>
          <Default>
              <FontAwesomeIcon icon={['fal', 'chevron-right']} size="3x" />
            </Default>
            <Mobile>
              <FontAwesomeIcon icon={['fal', 'chevron-right']} size="2x" />
            </Mobile>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
}

export default Carousel;