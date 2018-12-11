import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Radio extends Component {
	constructor() {
        super()
		this.state = {
			radioClick: "name"
		};
	}

	onChange(type) {
		// on radio state change handler
		console.log(type.target.value);
	}

	render() {
		return (
  <div className='radioButtons'>
    <div className='left'>
      <input type='radio' name="shortDate" onChange={this.onChange} value="byName" />
      <label>&nbsp;&nbsp;Sort by name</label>
    </div>
    <div className='right'>
      <input type='radio' name="shortDate" onChange={this.onChange}  value="byDate"/>
      <label>&nbsp;&nbsp;Sort by age</label>
    </div>
  </div>
);

	}
}

// Uncomment the snippet below
// Radio.propTypes = {
// 	sortBy: PropTypes.func
// }

export default Radio;
