import React, { Component } from 'react';
import { Link } from 'gatsby';
import estatesStyles from "../styles/pages/estates.module.scss"
import searchStyles from "../styles/components/search.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchEstates from "./searchEstates"
import Sticky from 'react-sticky-el';

class EstateList extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      estates: [],
      screenWidth: null,
      searchIsFixed: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount = () => {
    this.setState({ estates: this.props.edges })
    window.addEventListener("resize", this.updateWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
  }

  setEstates = filteredEstates => {
    this.setState({ estates: filteredEstates });
  }

  resetFilter = evt => {
    evt.preventDefault();
    this.setState({
      estates: this.props.edges,
    })
  }

  toggleIsFixed = isFixed => {
    console.log(!isFixed)
    this.setState({
      searchIsFixed: !isFixed
    })
  }

  render() {
    const converter = Intl.NumberFormat("nl")
    return (
      <div>
        <Sticky onFixedToggle={this.toggleIsFixed}>
          <SearchEstates
            className={this.state.searchIsFixed ? '' : searchStyles.searchIsFixed}
            estates={this.state.estates}
            handleFilter={this.setEstates}
            handleReset={this.resetFilter}
          />
        </Sticky>
        <div className={estatesStyles.estates}>
          {this.state.estates.length > 0 ? this.state.estates.map((edge, i) => {
            let formattedReference = edge.node.reference.replace(/\s+/g, '-').toLowerCase()
            const estateImgStyle = {
              backgroundImage: `url(${edge.node.heroImage.file.url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }
            return (
              <div key={i}>
                <Link to={`/estate/${formattedReference}`} className={estatesStyles.estateItem}>
                  <div style={estateImgStyle} className={estatesStyles.heroImg}></div>
                  <div className={estatesStyles.content}>
                    <h2>{edge.node.title}</h2>
                    <p className={estatesStyles.price}>Vanaf&nbsp;&nbsp;€ {converter.format(edge.node.price)}</p>
                    <span className={estatesStyles.detailsLink} to={`/estate/${formattedReference}`}>bekijk details</span>
                  </div>
                </Link>
              </div>
            )
          }) :
            <div className={estatesStyles.wrapper}>
              <div className={estatesStyles.notFound}>
                <p>Sorry! Momenteel geen woningen gevonden met deze zoekvereisten.</p>
                <button onClick={this.resetFilter}>
                  <FontAwesomeIcon icon={['fal', 'redo']} size={'sm'} />
                  &nbsp;&nbsp;Reset de filter
                  </button>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default EstateList;