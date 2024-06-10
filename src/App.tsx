import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const heading = "Cities";
  const [alerVisible, setAlertVisible] = useState(false);

  const onClick = () => {
    setAlertVisible(true);
  };

  return (
    <div className="App">
      {/* <ListGroup
        items={items}
        heading={heading}
        onSelectItem={(item) => console.log(item)}
      /> */}
      {alerVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button onClick={onClick} color="primary">
        Click Me !
      </Button>
    </div>
  );
}

export default App;
