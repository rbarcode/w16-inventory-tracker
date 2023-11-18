import React from "react";
import Header from "./Header";
import TeaInventoryControl from "./TeaInventoryControl";

function App() {
  return (
    <React.Fragment>
      <div className="app-container">
        <Header />
        <TeaInventoryControl />
      </div>

    </React.Fragment>
  );
}

export default App;
