import React from "react";

const DrinkContext = React.createContext({
    result: {},
    search: "",
    handleInputChange: () => {},
    handleFormSubmit: () => {},
});

export default DrinkContext;