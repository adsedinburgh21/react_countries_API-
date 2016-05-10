var React = require('react');

var CountryBorders = React.createClass({
  render: function(){
    if( !this.props.selectedCountry){
      return <p/>;
    }
    var borders = this.props.selectedCountry.borders.map(function( country, index ){
      return <li value={index} key={index}> {country} </li>
    });
    return(
      <div>
        <h5> Country Borders: </h5>
        <ul>
          { borders }
        </ul>
      </div>
    )
  }
})

module.exports = CountryBorders;