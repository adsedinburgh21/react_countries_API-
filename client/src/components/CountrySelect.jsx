var React = require('react');

var CountrySelect = React.createClass({

  getInitialState: function(){
    return {selectedIndex: null}
  },

  handleChange: function(e){
    e.preventDefault();
    var newIndex = e.target.value;
    this.setState({ selectedIndex: newIndex });
    this.props.onSelectCountry( this.props.countries[newIndex] );
  }, //// above - onSelectCountry is a function passed via props from CountriesBox which takes in a country and sets the value of the key 'selectedCountry' on the State object (this.state.selectedCountry) to be the Country we passed in.  'this.props.countries[newIndex]' returns a single country - but we only have access to this at this level, not on the top level, so thats why we are using the onSelectCountry function that sets the State on the top level. So we can then pass this info from the top level to any of the other lower levels by using properties.

  render: function(){
    if( !this.props.selectedRegion){
      var options = this.props.countries.map(function(country, index){
        return <option value={index} key={index}> {country.name} </option>;
      });
    }
    else {
      var options = this.props.countries.map(function(country, index){
      if( this.props.selectedRegion === country.region ){
        return <option value={index} key={index}> {country.name} </option>;
        }
      }.bind(this));
    }

    return (
      <div>
        <h4> CountrySelect </h4>
        <select value={this.state.selectedIndex} onChange={this.handleChange}>
          { options }
        </select>
      </div>
    )
  }
})

module.exports = CountrySelect;