var React = require('react');
var CountrySelect = require('./CountrySelect.jsx')
var CountryInfoBox = require('./CountryInfoBox.jsx')
var CountryBorders = require('./CountryBorders.jsx')
var RegionSelect = require('./RegionSelect.jsx')

var CountriesBox = React.createClass({

  getInitialState: function(){
    return { countries: [], regions: [], selectedCountry: null, selectedRegion: null }
  },
  //// Want to keep the State as minimal as possible - if have too many, we may run into problems where the values become out of sync with each other.
  //// above: sets state.countries & state.regions as empty arrays,  and sets state.selectedCountry & state.selectedRegion as null.

  setSelectedCountry: function(country){
    this.setState({ selectedCountry: country });
  },
  //// above: this function is passed as a property to CountrySelect in the render function below. So it can be accessed when in CountrySelect by using this.props.onSelectCountry.

  setSelectedRegion: function(region){
    this.setState({ selectedRegion: region });
    // console.log("selected region in Countries Box (top level): ", this.state.selectedRegion);
  },

  filterRegions: function(){
    var unfilteredRegions = this.state.countries.map(function( country){
      return country.region;
    });
    var filteredRegions = unfilteredRegions.filter(function(region, index) {
      if(unfilteredRegions.indexOf(region) === index){
        return region;
      }
    });
    return filteredRegions;
  },


  componentDidMount: function(){
    var request = new XMLHttpRequest();
    request.open("GET", "https://restcountries.eu/rest/v1/all");
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState( {countries: data} );
      this.setState( {regions: this.filterRegions()} );
    }.bind(this)
    request.send();
  },
  //// The function above (componentDidMount) is run automatically when render function is run.

  render: function(){
    return (
      <div id="display_text">
        <div id="shadowbox1">
          <h1> Country Selector </h1>
          <RegionSelect regions={this.state.regions} onSelectRegion={this.setSelectedRegion}/>
          <CountrySelect countries={this.state.countries} selectedRegion={this.state.selectedRegion} onSelectCountry={this.setSelectedCountry}/>
        </div>
        <div id="shadowbox2">
          <CountryInfoBox selectedCountry={this.state.selectedCountry}/>
          <CountryBorders countries={this.state.countries} selectedCountry={this.state.selectedCountry}/>
        </div>
      </div>
    ) ///// above: "onSelectCountry={this.setSelectedCountry}" is setting a key in the properties (the props) with the value 'onSelectCountry' and the value is the function setSelectedCountry. We can then access this in lower levels by using this.props.onSelectCountry so we are giving our lower level .jsx files access to the function on the top level.
    //// Above: always need the <div> tags or it will error.
  }
})

module.exports = CountriesBox;


