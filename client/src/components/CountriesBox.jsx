var React = require('react');
var CountrySelect = require('./CountrySelect.jsx')
var CountryInfoBox = require('./CountryInfoBox.jsx')
var CountryBorders = require('./CountryBorders.jsx')


var CountriesBox = React.createClass({

  getInitialState: function(){
    return { countries: [], selectedCountry: null }
  },
  //// above: sets state.countries as an empty array & state.selectedCountry as null.

  setSelectedCountry: function(country){
    this.setState({ selectedCountry: country });
  },
  //// above: this function is passed as a property to CountrySelect in the render function below. So it can be accessed when in CountrySelect by using this.props.onSelectCountry.

  componentDidMount: function(){
    var request = new XMLHttpRequest();
    request.open("GET", "https://restcountries.eu/rest/v1/all");
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState( {countries: data} );
    }.bind(this)
    request.send();
  },
  //// The function above (componentDidMount) is run automatically when render function is run.

  render: function(){
    return (
      <div>
        <h4> Countries Box </h4>
        <CountrySelect countries={this.state.countries} onSelectCountry={this.setSelectedCountry}/>
        <CountryInfoBox selectedCountry={this.state.selectedCountry}/>
        <CountryBorders selectedCountry={this.state.selectedCountry}/>
      </div>
    ) ///// above: "onSelectCountry={this.setSelectedCountry}" is setting a key in the properties (the props) with the value 'onSelectCountry' and the value is the function setSelectedCountry. We can then access this in lower levels by using this.props.onSelectCountry so we are giving our lower level .jsx files access to the function on the top level.
  }
})

module.exports = CountriesBox;