import React from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideHeight={100}
        naturalSlideWidth={125}
        totalSlides={3}
      >
        <Slider>
          <Slide></Slide>
        </Slider>
      </CarouselProvider>
    )
  }
}
