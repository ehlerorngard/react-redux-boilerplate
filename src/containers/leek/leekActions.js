import requester from "../../utils/requester.js";

export const doSomething = (chicken) => (dispatch) => {
	dispatch({
		type: "DO_SOMETHING",
		payload: { ...chicken },
	});
}

export const peelTheLeek = (chicken) => (dispatch) => {
	dispatch({
		type: "PEEL_THE_POTATO",
		payload: Object.assign({}, chicken),
	});
}

// =================================
// ASYNC FUNCTION WITH REQUEST TO DB
// =================================
export const requestToDatabase = (chicken) => (dispatch) => {
	requester.createPotato(chicken)
		.then(rez => {	
			dispatch({
				type: "REQ_TO_DATABASE", 
				payload: { ...rez }, // <–– update state (the store) with whatever we got back from the db
			});
		});
}


