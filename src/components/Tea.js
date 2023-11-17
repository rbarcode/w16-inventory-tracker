import React from "react";
import PropTypes from "prop-types";

function Tea(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h5>Origin: {props.origin}</h5>
      <h5>Type: {props.type}</h5>
      <h5>Price: ${props.price}</h5>
      <h5>Remaining Inventory: {props.quantity}oz.</h5>

    </React.Fragment>
  )
};

Tea.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number
}

export default Tea;