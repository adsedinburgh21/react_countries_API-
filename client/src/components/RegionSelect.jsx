var React = require('react');

var RegionSelect = React.createClass({

  getInitialState: function(){
    return {selectedIndex: null}
  },

  handleRegionChange: function(e){
    e.preventDefault();
    var newIndex = e.target.value;
    this.setState({ selectedIndex: newIndex });
    this.props.onSelectRegion( this.props.regions[newIndex] );
    // console.log( "set selected region to ", this.props.regions[newIndex] )
  }, 

  render: function(){
    var options = this.props.regions.map(function(region, index) {
        return <option value={index} key={index}> {region} </option>;
    });

    return (
      <div>
        <h4> Region Select </h4>
        <select value={this.state.selectedIndex} onChange={this.handleRegionChange}>
          <option> World </option>
          { options }
        </select>
      </div>
    )
  }
});

module.exports = RegionSelect;