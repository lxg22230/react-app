import { useState } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>ListGroup</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={`list-group-item ${
              selectedIndex === index ? "active" : ""
            }`}
            key={item}
            onClick={(event) => handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
