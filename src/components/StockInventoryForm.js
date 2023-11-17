import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function StockInventoryForm(props) {
  function handleStockInventoryFormSubmission(event) {
    event.preventDefault();
    props.onStockNewInventory({
      name: event.target.name.value,
      origin: event.target.origin.value,
      type: event.target.type.value,
      price: parseInt(event.target.price.value),
      quantity: 130,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h3>Stock New Inventory</h3>
      <hr/>
      <form onSubmit={handleStockInventoryFormSubmission}>
        <label for='name'>Tea Name: </label>
        <input 
          type='text' 
          name='name' />
        <br/>
        <label for='origin'>Origin: </label>
        <input 
          type='text' 
          name='origin' />
        <br/>
        <label for='type'>Type: </label>
        <input 
          type='text' 
          name='type'  
          placeholder='black, green, oolong, etc.' />
        <br/>
        <label for='price'>Price: </label>
        <input 
          type='number' 
          name='price' />
        <br/>
        <button type='submit'>Update Inventory</button>
      </form>
      <p>Note: One crate of tea contains 130oz. of loose leaf tea.</p>
    </React.Fragment>
  );
}

StockInventoryForm.propTypes = {
  onStockNewInventory: PropTypes.func
}

export default StockInventoryForm;