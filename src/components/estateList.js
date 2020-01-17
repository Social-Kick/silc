import React, { Component } from 'react';
import { Link } from 'gatsby';
import estatesStyles from "../styles/estates.module.scss"

import SearchEstates from "./searchEstates"

class EstateList extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      estates: [],
    };
  }

  componentDidMount = () => {
    this.setState({ estates: this.props.edges })
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

  render() {
    const converter = Intl.NumberFormat("nl")
    return (
      <div>
        <SearchEstates
          estates={this.state.estates}
          handleFilter={this.setEstates}
          handleReset={this.resetFilter}
        />
        <div className={estatesStyles.estates}>
          {this.state.estates.map((edge, i) => {
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
          })}
        </div>
      </div>
    );
  }
}

export default EstateList;