import React from "react";
import ReactDOM from "react-dom/client";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const heading = "Cities";

  return (
    <div className="App">
      {/* <ListGroup
        items={items}
        heading={heading}
        onSelectItem={(item) => console.log(item)}
      /> */}
      <Alert>This is an alert</Alert>;
    </div>
  );
}

export default App;
