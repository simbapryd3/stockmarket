import React, { useState, useEffect } from "react";

const vals = {
  "+": "positive",
  "0": "neutral",
  "-": "negative"
};

function interger(status) {
  const [val] = status.match(/[+-]/) || ["0"];

  return vals[val];
}

function RequestInfo({ move, stock }) {
  const [state, setState] = useState("1");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const url =
      "https://financialmodelingprep.com/api/v3/company/profile/" + stock;
    const options = { method: "GET", headers: { Accept: "application/json" } };

    fetch(url, options)
      .then(respones => respones.json())
      .then(({ profile }) => {
        setState(profile);
        setStatus(interger(profile.changesPercentage));
      });
  }, []);
  console.log(state);
  console.log(stock);
  console.log(status);

  return (
    <div className="stockInfo">
      <div className="headerCo">
        <h1>{state.companyName}</h1>

        <p>{state.industry}</p>

        <img src={state.image} />
        <br></br>

        <h2>CEO:</h2>

        <p>{state.ceo}</p>

        <label>Industry:</label>

        <p> {state.industry}</p>
        <br></br>
      </div>
      <article className="description">
        <p>{state.description}</p>
      </article>

      <h2>Exchange:</h2>

      <p>{state.exchange}</p>
      <table id="thisTable">
        <div className="finance">
          <h2>Financials</h2>

          <h3>Changes:</h3>

          <p class={status}>{state.changes}</p>

          <h3>Percent Change:</h3>

          <p class={status}>{state.changesPercentage}</p>

          <h3>Price:</h3>
          <p>${state.price}</p>
          <h3> Beta:</h3>
          <p>{state.beta}</p>
          <h3>Last Dividend:</h3>
          <p>{state.lastDiv}</p>
          <h3>Market Cap:</h3>
          <p>{state.mktCap}</p>
          <h3>Range:</h3>
          <p>{state.range}</p>
          <h3>Average Volume:</h3>
          <p>{state.volAvg}</p>
        </div>
      </table>
      <div className="buttons">
        <button href={state.website}>Learn More</button>
        <button value="1" onClick={move}>
          BACK
        </button>
      </div>
    </div>
  );
}

export default RequestInfo;
