import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

function Inventory(props) {
  return (
    <React.Fragment>
      <div className="inventory-container">
        {props.inventory.map((tea) =>
          <Tea
            whenTeaClicked={props.onTeaSelection}
            name={tea.name}
            origin={tea.origin}
            type={tea.type}
            price={tea.price}
            quantity={tea.quantity}
            id={tea.id}
          />
        )}
      </div>

    </React.Fragment>
  );
}

Inventory.propTypes = {
  inventory: PropTypes.array,
  onTeaSelection: PropTypes.func
}

export default Inventory;