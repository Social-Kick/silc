import React, { Component } from 'react';
import searchStyles from "../styles/components/search.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Tablet, Mobile } from "../utils/breakpoint";

class EstateSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: {},
      estates: [],
      bathrooms: "",
      bedrooms: "",
      region: "",
      type: "",
      minPrice: "",
      maxPrice: "",
      reference: "",
      formIsVisible: true,
    }
  }

  async componentWillMount() {
    let query = localStorage.getItem('query') ? JSON.parse(localStorage.getItem('query')) : null
    this.setState({
      estates: this.props.items,
      query: query,
      bathrooms: query && query.bathrooms ? query.bathrooms : "",
      bedrooms: query && query.bedrooms ? query.bedrooms : "",
      region: query && query.region ? query.region : "",
      type: query && query.type ? query.type : "",
      minPrice: query && query.minPrice ? query.minPrice : "",
      maxPrice: query && query.maxPrice ? query.maxPrice : "",
      reference: query && query.reference ? query.reference : "",
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.filterEstates()
    }, 1);
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
  setMinPrice = evt => {
    this.setState({ minPrice: evt.target.value });
  }
  setMaxPrice = evt => {
    this.setState({ maxPrice: evt.target.value });
  }
  setReference = evt => {
    this.setState({ reference: evt.target.value });
  }

  filterEstates = async evt => {
    if(evt) evt.preventDefault();
    let filteredEstates = this.props.items;
    let { bathrooms, bedrooms, region, type, minPrice, maxPrice, reference } = this.state;
    let query = this._setQuery(bedrooms, bathrooms, region, type, minPrice, maxPrice, reference)
    this.setState({
      query: query
    })
    if ('bedrooms' in query) {
      filteredEstates = filteredEstates.filter(item => { return item.node.bedrooms >= parseInt(query['bedrooms']) ? true : false })
    }
    if ('bathrooms' in query) {
      filteredEstates = filteredEstates.filter(item => { return item.node.bathrooms >= parseInt(query['bathrooms']) ? true : false })
    }
    if ('region' in query) {
      filteredEstates = filteredEstates.filter(item => { return item.node.region !== query['region'] ? false : true })
    }
    if ('type' in query) {
      filteredEstates = filteredEstates.filter(item => { return item.node.estateType !== query['type'] ? false : true })
    }
    if ('minPrice' in query) {
      filteredEstates = filteredEstates.filter(item => { return item.node.minPrice <= parseInt(query['minPrice']) ? false : true })
    }
    if ('maxPrice' in query) {
      filteredEstates = filteredEstates.filter(item => { return item.node.maxPrice >= parseInt(query['maxPrice']) ? false : true })
    }
    if ('reference' in query) {
      filteredEstates = filteredEstates.filter(item => { return item.node.reference.includes(query['reference']) ? true : false })
    }
    localStorage.setItem('query', JSON.stringify(query))
    this.props.handleFilter(filteredEstates);
  }

  _setQuery(bedrooms, bathrooms, region, type, minPrice, maxPrice, reference) {
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
      query.type = type
    }
    if (minPrice !== "") {
      query.minPrice = minPrice
    }
    if (maxPrice !== "") {
      query.maxPrice = maxPrice
    }
    if (reference !== "") {
      query.reference = reference
    }
    return query
  }

  resetFilter = evt => {
    this.props.handleReset(evt);
    this.emptyFields();
    localStorage.removeItem('query')
  }

  toggleForm = () => {
    this.setState(pS => ({ formIsVisible: !pS.formIsVisible }))
  }

  emptyFields() {
    this.setState({
      bathrooms: "",
      bedrooms: "",
      region: "",
      type: "",
      minPrice: "",
      maxPrice: "",
      reference: ""
    });
  }

  render() {
    return (
      <div className={searchStyles.search}>
        {this.state.formIsVisible &&
          <>
            <form onSubmit={this.filterEstates}>
              <div className={searchStyles.inputs}>
                <select value={this.state.bedrooms} onChange={this.setBedrooms}>
                  <option value="" defaultChecked>Min slaapkamers</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <select value={this.state.bathrooms} onChange={this.setBathRooms}>
                  <option value="" defaultChecked>Min badkamers</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <select value={this.state.region} onChange={this.setRegion}>
                  <option value="" defaultChecked>Regio</option>
                  <option value="Costa Almería">Costa Almería</option>
                  <option value="Costa Blanca Noord">Costa Blanca Noord</option>
                  <option value="Costa Blanca Zuid">Costa Blanca Zuid</option>
                  <option value="Costa Cálida">Costa Cálida</option>
                  <option value="Costa Del Sol">Costa del Sol</option>
                </select>
                <select value={this.state.type} onChange={this.setType}>
                  <option value="" defaultChecked>Type woning</option>
                  <option value="villa">Villa</option>
                  <option value="appartement">Appartement</option>
                  <option value="woning">Woning</option>
                </select>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem' }}>
                  <input type="number" className={searchStyles.priceInput} placeholder="Min" value={this.state.minPrice} onChange={this.setMinPrice} />
                  <input type="number" className={searchStyles.priceInput} placeholder="Max" value={this.state.maxPrice} onChange={this.setMaxPrice} />
                </div>
                <input type="text" placeholder="Referentie" value={this.state.reference} onChange={this.setReference} />
              </div>
              <div className={searchStyles.buttonGroup}>
                <button onClick={() => this.filterEstates()} className={searchStyles.btn}>Zoeken</button>
                <button type="button" className={searchStyles.btnIcon} onClick={this.resetFilter}>
                  <FontAwesomeIcon icon={['fal', 'redo']} />
                </button>
              </div>
            </form>
          </>
        }
        <Tablet>
          <button onClick={this.toggleForm} className={searchStyles.mobileRow}>
            <span>{this.state.formIsVisible ? 'Sluit zoekopdracht' : 'Open zoekopdracht'}</span>
            <div className={searchStyles.closeIcon}>
              {this.state.formIsVisible ? <FontAwesomeIcon icon={['fal', 'chevron-up']} /> : <FontAwesomeIcon icon={['fal', 'chevron-down']} />}
            </div>
          </button>
        </Tablet>
        <Mobile>
          <button onClick={this.toggleForm} className={searchStyles.mobileRow}>
            <span>{this.state.formIsVisible ? 'Sluit zoekopdracht' : 'Open zoekopdracht'}</span>
            <div className={searchStyles.closeIcon}>
              {this.state.formIsVisible ? <FontAwesomeIcon icon={['fal', 'chevron-up']} /> : <FontAwesomeIcon icon={['fal', 'chevron-down']} />}
            </div>
          </button>
        </Mobile>
      </div>
    );
  }
}

export default EstateSearch;