import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { switchTempUnits } from '../actions/index';
import ReactBootstrapToggle from 'react-bootstrap-toggle';

class SwitchUnits extends Component {
  constructor(props) {
    super(props);

    this.state = { unit: 'c' };
    this.switchTemp = this.switchTemp.bind(this);
  }

  switchTemp(event) {
    console.log("Temperature units have been switched");
    console.log("Initial temp_unit: ", this.props.temp.unit); 

    if (this.props.temp.unit === 'C') {
      // setState is asynchronous so will not be updated right away. Use a callback (the second parameter to setState) 
      // to be invoked after the internal state has been updated. 
      this.setState({ unit: 'F' }, () => console.log("New temp.unit (should be F): ", this.props.temp.unit));
    }

    if (this.props.temp.unit === 'F'){
      this.setState({ unit: 'C' }, () => console.log("New temp.unit (should be C): ", this.props.temp.unit));
    }

  }

  render () {
    return (
      <div className="btn-group" role="group">
        <ReactBootstrapToggle 
          on='Celsius'
          off='Fahrenheit'
          size='large'
          onstyle='primary'
          offstyle='success'
          onChange={this.switchTemp} 
        />
      </div>
    );
  }
}

// Returned object will appear as props in this container
function mapStateToProps(state) {
	return { 
    temp: state.temp
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ switchUnit }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SwitchUnits);

