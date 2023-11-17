import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

function Inventory(props){
  return (
    <React.Fragment>
      <hr/>
      {props.inventory.map((tea, index) => 
        <Tea 
        whenTeaClicked = { props.onTeaSelection } 
        name={tea.name} 
        origin={tea.origin}  
        type={tea.type}  
        price={tea.price}
        quantity={tea.quantity} 
        key={index}/> 
      )}
    </React.Fragment>
  );
}

Inventory.propTypes = {
  inventory: PropTypes.array,
  onTeaSelection: PropTypes.func
}

export default Inventory;