import axios from "axios";

const APIKEY = "1"
const BASEURL = `https://cors-anywhere.herokuapp.com/http://www.thecocktaildb.com/api/json/v1/`;
const BASEURL2 = `/search.php?s=`;

const drinksAPI = {
    search: function (query) {
    return axios.get(BASEURL + APIKEY + BASEURL2 + query);
    },
};

export default drinksAPI;