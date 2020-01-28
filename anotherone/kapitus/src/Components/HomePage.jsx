import React, { useState, useEffect } from "react";
import MarketSearch from "./MarketSearch";
import RequestInfo from "./StockMarket";

function HomePage() {
  const [state, setState] = useState("1");
  const [stock, setStock] = useState("");

  function movingStuff(event) {
    event.preventDefault();
    setState(event.target.value);
  }
  function inputData(event) {
    setStock(event.target.value);
  }

  const currentContent = {
    "1": <MarketSearch move={movingStuff} data={inputData} />,
    "2": <RequestInfo move={movingStuff} stock={stock} />
  };

  return <div>{currentContent[state]}</div>;
}

export default HomePage;
