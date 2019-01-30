import axios from "axios";

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

export default {
	getPotato: (id, potatumDatum) => {
    return axios.get("/api/potatoes/" + id, potatumDatum)
    	.then(checkStatus)
    	.then(parseJSON);
  },
  getPotatoes: (potatumDatum) => {
    return axios.get("/api/potatoes/", potatumDatum)
    	.then(checkStatus)
    	.then(parseJSON);
  },
	createPotato: (potatumDatum) => {
    return axios.put("/api/potatoes/", potatumDatum)
    	.then(checkStatus)
    	.then(parseJSON);
	},
  editPotato: function(id, potatumDatum) {
    return axios.post("/api/potatoes/" + id, potatumDatum)
    	.then(checkStatus)
    	.then(parseJSON);
  },
  deletePotato: (id, potatumDatum) => {
    return axios.delete("/api/potatoes/" + id, potatumDatum)
    	.then(checkStatus)
    	.then(parseJSON);
  },
}