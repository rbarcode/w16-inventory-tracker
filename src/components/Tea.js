import React from "react";
import PropTypes from "prop-types";

function Tea(props) {
  return (
    <React.Fragment>
      <div className="tea" onClick={() => props.whenTeaClicked(props.id)}>
        <h3>{props.name}</h3>
        <h5>Origin: {props.origin}</h5>
        <h5>Type: {props.type}</h5>
        <h5>Price: ${props.price}</h5>
        <h5>Remaining Inventory: {props.quantity}oz.</h5>
      </div>
    </React.Fragment>
  )
};

Tea.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func
};

export default Tea;