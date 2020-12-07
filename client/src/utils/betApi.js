// API to get odds back

import axios from "axios";

const betAPI = {
  search: function () {
    
    const query = "americanfootball_nfl"

    return axios.get(
      `https://api.the-odds-api.com/v3/odds/?sport=`+ query +`&region=us&mkt=h2h&apiKey=094ae90b3e5382afd10840230d4aa43b&oddsFormat=american`
    );
  }, 
};  

export default betAPI;
