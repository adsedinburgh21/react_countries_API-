var React = require('react');

var CountryInfoBox = React.createClass({
  render: function(){
    if( !this.props.selectedCountry){
      return <h4> No Country Selected </h4>
    }
    return(
      <div>
        <h2> Country: {this.props.selectedCountry.name} </h2>
        <h5> Capital City: {this.props.selectedCountry.capital} </h5>
        <h5> Region: {this.props.selectedCountry.region} </h5>
        <h5> Population: {this.props.selectedCountry.population.toLocaleString()} </h5>
      </div>
    )
  }
})

module.exports = CountryInfoBox;