import React, { Component } from 'react';
import PropTypes from "prop-types";
import { peelThePotato, doSomething, requestToDatabase } from "./potatoActions.js";

import { connect } from "react-redux";
// import { bindActionCreators } from "redux";


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

		let two = { fire: "water" }
		doSomething(two);
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
        	>>> here's the POTATO
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
	// field1: PropTypes.bool,
  // field2: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // field3: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  // onSubmitForm: PropTypes.func,
	peelThePotato: PropTypes.func,
	doSomething: PropTypes.func,
	skinColor: PropTypes.string,
	numberOfEyes: PropTypes.number,
	starchIndex: PropTypes.number,
	location: PropTypes.object, 
}

// const { doSomething, peelThePotato, requestToDatabase } = actions;

const mapStateToProps = (state) => {
	return {
		skinColor: state.skinColor,
		numberOfEyes: state.numberOfEyes,
		starchIndex: state.starchIndex,
		fire: state.fire,
		location: state.location,
	}
}

// const mapDispatchToProps = (dispatch) => { // dispatch each of the potatoActions which need to update the store
// 	return {
// 		...potatoActions,
// 		sliceThePotato: dispatch(sliceThePotato),
// 		peelThePotato: updatedFields => dispatch(peelThePotato(updatedFields)),
// 	}
// }

// export const mapDispatchToProps = dispatch => bindActionCreators( // dispatch each of the potatoActions which need to update the store
// 	{
// 		peelThePotato,
// 		doSomething,
// 	},
// 	dispatch,
// )

// export default connect(mapStateToProps, mapDispatchToProps)(Potato);

export default connect(mapStateToProps)(Potato);
