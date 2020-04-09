import React, { Component } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundImage from 'gatsby-background-image'

import estatesStyles from "../styles/pages/estates.module.scss"
import searchStyles from "../styles/components/search.module.scss"
import SearchEstates from "./searchEstates"
import Sticky from 'react-sticky-el';

class EstateList extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      estates: [],
      searchIsFixed: false,
    };
  }

  componentDidMount = () => {
    this.setState({
      estates: this.props.edges,
    })
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
    this.setState({
      searchIsFixed: !isFixed
    })
  }

  render() {
    const converter = Intl.NumberFormat("nl");
    let amountOfEstates = this.state.estates.length;
    return (
      <div>
        <Sticky onFixedToggle={this.toggleIsFixed}>
          <SearchEstates
            className={this.state.searchIsFixed ? '' : searchStyles.searchIsFixed}
            filteredEstates={this.props.edges}
            items={this.props.edges}
            handleFilter={this.setEstates}
            handleReset={this.resetFilter}
          />
        </Sticky>
        <div className={searchStyles.found}>
          <span>{amountOfEstates} {amountOfEstates > 1 ? "woningen" : "woning"} gevonden</span>
          {(this.props.edges.length !== this.state.estates.length) && <span className={searchStyles.foundFilterWarning}>Er is momenteel een filter actief!</span>}
        </div>
        <div className={estatesStyles.estates}>
          {this.state.estates.length > 0 ?
            this.state.estates.map((edge, i) => {
              let formattedReference = edge.node.reference.replace(/\s+/g, '-').toLowerCase()
              return (
                <div key={i}>
                  <Link to={`/estate/${formattedReference}`} className={estatesStyles.estateItem}>
                    {edge.node.heroImage && <BackgroundImage fluid={edge.node.heroImage.fluid} className={estatesStyles.heroImg}></BackgroundImage>}
                    <div style={{backgroundImage: `url(${edge.node.heroImage.file.url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
                    <div className={estatesStyles.content}>
                      <h2>{edge.node.title}</h2>
                      <p className={estatesStyles.price}>Vanaf&nbsp;&nbsp;€ {converter.format(edge.node.minPrice)}</p>
                      <span className={estatesStyles.detailsLink} to={`/estate/${formattedReference}`}>bekijk details</span>
                    </div>
                  </Link>
                </div>
              )
            })
            :
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