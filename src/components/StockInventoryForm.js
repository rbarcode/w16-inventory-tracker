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
      <div className="stock-tea">
        <h3>Stock New Inventory</h3>
        <form onSubmit={handleStockInventoryFormSubmission}>
          <label>Tea Name:
            <input
              type='text'
              name='name' required />
          </label>
          <br />
          <label>Origin: 
            <input
            type='text'
            name='origin' required />
          </label>
          
          <br />
          <label>Type: 
            <input
            type='text'
            name='type'
            placeholder='black, green, oolong, etc.' required />
          </label>
          
          <br />
          <label>Price: 
            <input
            type='number'
            name='price' required />
          </label>
          
          <br />
          <button type='submit'>Update Inventory</button>
        </form>
        <p>Note: One crate contains 130oz. of loose leaf tea.</p>
      </div>

    </React.Fragment>
  );
}

StockInventoryForm.propTypes = {
  onStockNewInventory: PropTypes.func
}

export default StockInventoryForm;