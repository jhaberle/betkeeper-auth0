import axios from "axios";

export default {
  // Gets all betslips
  getBets: function () {
    return axios.get("http://localhost:3000/api/betslips");
  },
  // Gets the slip with the given id
  getBet: function (id) {
    return axios.get("/api/betslips/" + id);
  },
  // Deletes the slip with the given id
  deleteBet: function (id) {
    return axios.delete("http://localhost:3000/api/betslips" + id);
  },
  //
  updateBet: function (id, values) {
    return axios.put("http://localhost:3000/api/betslips" + id, values);
  }
};
