import React, { Component } from 'react';
import { Link } from 'gatsby';
import estatesStyles from "../styles/estates.module.scss"

class EstateList extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      estates: [],
      bathrooms: "",
      bedrooms: "",
      region: "",
      type: ""
    };
  }

  componentDidMount = () => {
    this.setState({ estates: this.props.edges })
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

  filterEstates = evt => {
    console.log(this.state.estates);
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

    this.setState({
      estates: this.state.estates.filter(function (item) {
        for (var key in query) {
          if (item.node[key] === undefined || item.node[key] !== query[key])
            return false;
        }
        return true;
      })
    });
  }

  resetFilter = evt => {
    evt.preventDefault();
    this.setState({
      estates: this.props.edges,
      bathrooms: "",
      bedrooms: "",
      region: "",
      type: ""
    })
  }

  render() {
    const converter = Intl.NumberFormat("nl")
    return (
      <div>
        <div className={estatesStyles.search}>
          <form onSubmit={this.filterEstates}>
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
        </div>
        <div className={estatesStyles.estates}>
          {this.state.estates
            .map((edge, i) => {
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
                      <Link className={estatesStyles.detailsLink} to={`/estate/${formattedReference}`}>bekijk details</Link>
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