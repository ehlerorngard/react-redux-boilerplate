import requester from "../../utils/requester.js";

export const doSomething = (chicken) => (dispatch) => {
	dispatch({
		type: "DO_SOMETHING",
		payload: { ...chicken },
	});
}

export const peelThePotato = (chicken) => (dispatch) => {
	dispatch({
		type: "PEEL_THE_POTATO",
		payload: Object.assign({}, chicken),
	});
}


// =================================
// ASYNC FUNCTION WITH REQUEST TO DB
// =================================

export const requestToDatabase = (data) => (dispatch) => {
	requester.createPotato(data)
		.then(response => {	
			dispatch({
				type: "REQ_TO_DATABASE",
				payload: { ...response },
			});
		});
}


