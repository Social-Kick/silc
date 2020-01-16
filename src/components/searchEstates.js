import React, { Component } from 'react';
import searchStyles from "../styles/search.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EstateSearch extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      estates: [],
      bathrooms: "",
      bedrooms: "",
      region: "",
      type: ""
    }
  }

  setBathRooms = evt => {
    this.setState({ bathrooms: evt.target.value });
  }
  setBedrooms = evt => {
    this.setState({ bedrooms: evt.target.value });
  }
  setRegion = evt => {
    this.setState({ region: evt.target.value });
  }
  setType = evt => {
    this.setState({ type: evt.target.value });
  }

  filterEstates = async evt => {
    let filteredEstates = [];
    evt.preventDefault();
    let { bathrooms, bedrooms, region, type } = this.state;

    let query = {}
    if (bedrooms !== "") {
      query.bedrooms = parseInt(bedrooms)
    }
    if (bathrooms !== "") {
      query.bathrooms = parseInt(bathrooms)
    }
    if (region !== "") {
      query.region = region
    }
    if (type !== "") {
      query.estateType = type
    }

    filteredEstates = await this.props.estates.filter(function (item) {
      for (var key in query) {
        if (item.node[key] === undefined || item.node[key] !== query[key])
          return false;
      }
      return true;
    })

    this.setState({
      estates: filteredEstates
    });

    this.props.handleFilter(filteredEstates);
  }

  resetFilter = evt => {
    this.props.handleReset(evt);
    this.setState({
      bathrooms: "",
      bedrooms: "",
      region: "",
      type: ""
    })
  }

  render() {
    let amountOfEstates = this.props.estates.length;
    return (
      <div className={searchStyles.search}>
        <form onSubmit={this.filterEstates}>
          <div className={searchStyles.inputs}>
            {/* <span style={{ color: '#fff', fontSize: '.7rem' }}>{amountOfEstates} woning{amountOfEstates > 1 ? 'en' : ''} gevonden</span> */}
            <input type="text" value={this.state.bedrooms} onChange={this.setBedrooms} placeholder="Slaapkamers" />
            <input type="text" value={this.state.bathrooms} onChange={this.setBathRooms} placeholder="Badkamers" />
            <input type="text" value={this.state.region} onChange={this.setRegion} placeholder="Regio" />
            <input type="text" value={this.state.type} onChange={this.setType} placeholder="Type woning" />
          </div>
          <div className={searchStyles.buttonGroup}>
            <button type="submit" className={searchStyles.btn}>Zoeken</button>
            <button type="button" className={searchStyles.btnIcon} onClick={this.resetFilter}>
              <FontAwesomeIcon icon={['fal', 'redo']} size='md'/>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EstateSearch;