import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styles from '../styles/components/slider.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      isFullScreen: false,
      arrowLeft: false,
      arrowRight: false,
      slidesPerPage: undefined
    }
  }

  componentDidMount() {
    this.setState({
      slides: this.props.images.map((img) => {
        return (<img src={img} onClick={this.toggleFullScreen} />)
      }),
      slidesPerPage: this.props.slidesPerPage,
      arrowLeft: this.props.arrowLeft,
      arrowRight: this.props.arrowRight
    })
    document.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown)
  }

  toggleFullScreen = () => {
    this.setState(pS => ({ isFullScreen: !pS.isFullScreen }))
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      this.setState({ isFullScreen: false })
    } else if (e.keyCode === 37) {
      document.querySelector('.BrainhubCarousel__custom-arrowLeft').click();
    } else if (e.keyCode === 39) {
      document.querySelector('.BrainhubCarousel__custom-arrowRight').click();
    }
  }

  render() {
    let isFullScreen = this.state.isFullScreen;
    let arrowLeft = this.state.arrowLeft;
    let arrowRight = this.state.arrowRight;
    return (
      <div className={styles.wrapper}>
        {isFullScreen && <div className={styles.topRow}>
          <FontAwesomeIcon icon={['fal', 'times']} size={'2x'} color={'#fff'} onClick={this.toggleFullScreen} />
        </div>}
        <Carousel
          slides={this.state.slides}
          className={isFullScreen ? styles.carouselFull : styles.carousel}
          slidesPerPage={isFullScreen ? 1 : this.state.slidesPerPage}
          slidesPerScroll={isFullScreen ? 1 : 1}
          arrowLeft={(arrowLeft || isFullScreen) && <FontAwesomeIcon className={styles.leftIcon} icon={['fal', 'chevron-left']} size={'2x'} color={isFullScreen ? '#fff' : '#000'} />}
          arrowRight={(arrowRight || isFullScreen) && <FontAwesomeIcon className={styles.rightIcon} icon={['fal', 'chevron-right']} size={'2x'} color={isFullScreen ? '#fff' : '#000'} />}
          addArrowClickHandler
          offset={!isFullScreen && 1}
        />
      </div>
    );
  }
}

export default Slider;