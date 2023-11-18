import React from "react";
import PropTypes from "prop-types";

function TeaDetails(props) {
  const { tea, onTeaUpdate } = props;

  function handleIncrementTea() {
    onTeaUpdate({name: tea.name, origin: tea.origin, type: tea.type, price: tea.price, quantity: tea.quantity += 130, id: tea.id});
  }

  function handleDecrementTea() {
    // const newQuantity = tea.quantity > 0 ? tea.quantity-- : tea.quantity;
    if (tea.quantity > 0) {
      const newQuantity = tea.quantity - 1;
      onTeaUpdate({name: tea.name, origin: tea.origin, type: tea.type, price: tea.price, quantity: newQuantity, id: tea.id});
    } else {
      return;
    }
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
  tea: PropTypes.object,
  onTeaUpdate: PropTypes.func
}

export default TeaDetails;