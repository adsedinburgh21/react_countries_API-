var React = require('react');

var CountryBorders = React.createClass({
  render: function(){
    if( !this.props.selectedCountry){
      return <p/>;
    }
    // var borders = this.props.selectedCountry.borders.map(function( borderCountry, index ){
    //   return <li value={index} key={index}> {borderCountry} </li>
    // });
    //// Above returns the bordering countries as 3 letter codes, eg. SCO, USA, etc. 

    var selectedCountryIsAnIsland = true;
    var borders = this.props.countries.map(function( country, index ){
      for( var i=0; i<this.props.selectedCountry.borders.length; i++){
        if( this.props.selectedCountry.borders[i] === country.alpha3Code){
          selectedCountryIsAnIsland = false;
          return <li value={index} key={index}> {country.name} </li>;
        }
      }
    }.bind(this));
    
    if( selectedCountryIsAnIsland){
      borders = <li> {this.props.selectedCountry.name} shares no land borders with other Countries.</li>
    }

    return(
      <div>
        <h5> Bordering Countries: </h5>
        <ul>
          { borders }
        </ul>
      </div>
    )
  }
})

module.exports = CountryBorders;