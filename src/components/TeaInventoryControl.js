import React from "react";
import StockInventoryForm from "./StockInventoryForm";
import Inventory from "./Inventory";
import TeaDetails from "./TeaDetails";

class TeaInventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      inventory: [],
      selectedTea: null
    };
  }

  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewTeaToInventory = (newTea) => {
    const newInventory = this.state.inventory.concat(newTea);
    this.setState({
      inventory: newInventory,
      formVisibleOnPage: false
    })
  }

  handleChangingSelectedTea = (id) => {
    const selectedTea = this.state.inventory.filter(tea => tea.id === id)[0];
    this.setState({ selectedTea: selectedTea });
  }

  
}