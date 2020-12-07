import React from "react";

const BetContext = React.createContext({
  betresult: {},
  betsearch: "",
  handleBetInputChange: () => {},
  handleBetFormSubmit: () => {},
});
export default BetContext;
