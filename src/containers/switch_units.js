import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { switchTempUnits } from '../actions/index';
import ReactBootstrapToggle from 'react-bootstrap-toggle';

class SwitchUnits extends Component {
  constructor(props) {
    super(props);

    this.switchTemp = this.switchTemp.bind(this);
  }

  switchTemp(event) {
    if (this.props.temp.temp_unit === 'C') {
      this.props.switchTempUnits('F')
    } else {
      this.props.switchTempUnits('C')
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
  return bindActionCreators({ switchTempUnits }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SwitchUnits);

