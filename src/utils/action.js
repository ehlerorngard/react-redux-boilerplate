import requester from "./requester.js";


// ===============================================
// basic update of store without updating database:
// ===============================================
export const updateStore = (chicken) => (dispatch) => {
	dispatch({
		type: "UPDATE_STORE",
		payload: Object.assign({}, chicken),
	});
}


// ===============================================
// ===== update database, then store: ============
// ===============================================

export const updatePotato = (id, data) => (dispatch) => {
	requester.updatePotato(id, data)
		.then(response => {
			dispatch({
				type: "UPDATE_STORE",
				payload: Object.assign({}, { ["potato" + id]: response.data }),
			});
		});
}