import React from "react";
import PropTypes from "prop-types";

function TeaDetails(props) {
  const { tea } = props;

  function handleIncrementTea() {
    tea.quantity += 130;
  }

  function handleDecrementTea() {
    return tea.quantity > 0 ? tea.quantity-- : tea.quantity;
  }

  return (
    <React.Fragment>
      <h1>Tea Details</h1>
      <h3>{tea.name}</h3>
      <h5>Origin: {tea.origin}</h5>
      <h5>Type: {tea.type}</h5>
      <h5>Price: {tea.price}</h5>
      <h5>Remaining Inventory: {tea.quantity}oz.</h5>
      <button onClick={handleDecrementTea}>Sell Tea</button>
      <button onClick={handleIncrementTea}>Restock Tea</button>
    </React.Fragment>
  )
}

TeaDetails.propTypes = {
  tea: PropTypes.object
}

export default TeaDetails;