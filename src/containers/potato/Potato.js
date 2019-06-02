import React, { Component } from 'react';
import PropTypes from "prop-types";
import { peelThePotato, doSomething, requestToDatabase } from "./potatoActions.js";
import { connect } from "react-redux";


export class Potato extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log("this.props:", this.props);
	}

	sliceThePotato = () => {
		let updatedFields = (this.props.skinColor === "purple")
			? { skinColor: "brown" }
			: { skinColor: "purple" }

		peelThePotato(updatedFields)(this.props.dispatch);
	}

	diceThePotato = () => {
		let two = (this.props.fire === "water") 
			? { fire: "ice" } 
			: { fire: "water" };
		doSomething(two)(this.props.dispatch);
	}


  render() {
	
    return (
        <div className="Potato">
        	>>> a potato view >>>
        	<button onClick={this.sliceThePotato}>SLICE IT</button>
        	<button onClick={this.diceThePotato}>DICE IT</button>
        	{Object.keys(this.props).map(prop => (
        		<div className="box">
        			{prop}
        		</div>
        		))}
        	<div className="box">
        		{this.props.skinColor}
        	</div>
        </div>
    );
  }
}

Potato.propTypes = {
  // field3: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
	peelThePotato: PropTypes.func,
	doSomething: PropTypes.func,
	skinColor: PropTypes.string,
	numberOfEyes: PropTypes.number,
	starchIndex: PropTypes.number,
}

const mapStateToProps = (state) => {
	return {
		skinColor: state.skinColor,
		numberOfEyes: state.numberOfEyes,
		starchIndex: state.starchIndex,
		fire: state.fire,
		location: state.location,
	}
}

export default connect(mapStateToProps)(Potato);
