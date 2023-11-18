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

  handleUpdatingSelectedTea = (updatedTea) => {
    const editedInventory = this.state.inventory
      .filter(tea => tea.id !== this.state.selectedTea.id)
      .concat(updatedTea);
    this.setState({
      inventory: editedInventory,
      selectedTea: updatedTea
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetails tea={this.state.selectedTea} onTeaUpdate={this.handleUpdatingSelectedTea} />
      buttonText = "Return to Inventory";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <StockInventoryForm onStockNewInventory={this.handleAddingNewTeaToInventory} />
      buttonText = "Return to Inventory";
    } else {
      currentlyVisibleState = <Inventory inventory={this.state.inventory} onTeaSelection={this.handleChangingSelectedTea} />
      buttonText = "Stock Inventory";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default TeaInventoryControl;