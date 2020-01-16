import React, { Component } from 'react';
import estatesStyles from "../styles/estates.module.scss"


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
      <form onSubmit={this.filterEstates}>
        <span style={{color: '#fff', fontSize:'.7rem'}}>{amountOfEstates} woning{amountOfEstates > 1 ? 'en' : ''} gevonden</span>
        <div className={estatesStyles.inputs}>
          <div>
            <label>Slaapkamers</label>
            <input type="text" value={this.state.bedrooms} onChange={this.setBedrooms} />
          </div>
          <div>
            <label>Badkamers</label>
            <input type="text" value={this.state.bathrooms} onChange={this.setBathRooms} />
          </div>
          <div>
            <label>Regio</label>
            <input type="text" value={this.state.region} onChange={this.setRegion} />
          </div>
          <div>
            <label>Type woning</label>
            <input type="text" value={this.state.type} onChange={this.setType} />
          </div>
        </div>
        <div className={estatesStyles.buttons}>
          <button type="submit">Zoeken</button>
          <button type="button" onClick={this.resetFilter}>Reset</button>
        </div>
      </form>
    );
  }
}

export default EstateSearch;