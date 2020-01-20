import React, { Component } from 'react';
import searchStyles from "../styles/components/search.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EstateSearch extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
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
      bedrooms === "4+" ? query.bedrooms = bedrooms : query.bedrooms = parseInt(bedrooms)
    }
    if (bathrooms !== "") {
      bathrooms === "4+" ? query.bathrooms = bathrooms : query.bathrooms = parseInt(bathrooms)
    }
    if (region !== "") {
      query.region = region
    }
    if (type !== "") {
      query.estateType = type
    }

    filteredEstates = await this.props.estates.filter(function (item) {
      let propertyName = Object.getOwnPropertyNames(query);
      for (var key in query) {
        if (propertyName[0] === "bedrooms" && query.bedrooms === '4+') {
          if (item.node.bedrooms > 4) return true
        }
        if (propertyName[1] === "bathrooms" && query.bathrooms === '4+') {
          if (item.node.bathrooms > 4) return true
        }
        if (item.node[key] === undefined || item.node[key] !== query[key]) {
          return false;
        }
        return true
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
    // let amountOfEstates = this.props.estates.length;
    return (
      <div className={searchStyles.search}>
        <form onSubmit={this.filterEstates}>
          <div className={searchStyles.inputs}>
            <select value={this.state.bedrooms} onChange={this.setBedrooms}>
              <option value="" defaultChecked>Aantal slaapkamers</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
            <select value={this.state.bathrooms} onChange={this.setBathRooms}>
              <option value="" defaultChecked>Aantal badkamers</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
            <select value={this.state.region} onChange={this.setRegion}>
              <option value="" defaultChecked>Regio</option>
              <option value="Costa Almría">Costa Almería</option>
              <option value="Cost Blanca Norte">Costa Blanca Norte</option>
              <option value="Costa Blanca Sur">Costa Blanca Sur</option>
              <option value="Costa Cálida">Costa Cálida</option>
              <option value="Costa Del Sol">Costa Del Sol</option>
            </select>
            <select value={this.state.type} onChange={this.setType}>
              <option value="" defaultChecked>Type woning</option>
              <option value="villa">Villa</option>
              <option value="dakappertement">Dakappertement</option>
              <option value="Appartement">Appartement</option>
              <option value="Rijwoning">Rijwoning</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
          <div className={searchStyles.buttonGroup}>
            <button type="submit" className={searchStyles.btn}>Zoeken</button>
            <button type="button" className={searchStyles.btnIcon} onClick={this.resetFilter}>
              <FontAwesomeIcon icon={['fal', 'redo']} />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EstateSearch;