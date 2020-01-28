import React, { useState, useEffect } from "react";

function MarketSearch({ move, data }) {
  const [state, setState] = useState();

  return (
    <div className="searching">
      <label>Check the Market:</label>
      <br></br>
      <input placeholder="Searching..." onChange={data} />
      <br></br>
      <button value="2" onClick={move}>
        NEXT
      </button>
    </div>
  );
}
export default MarketSearch;
