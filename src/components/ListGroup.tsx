import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem?: (item: string) => void;
}

function ListGroup(props: ListGroupProps) {
  const { items, heading, onSelectItem } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={`list-group-item ${
              selectedIndex === index ? "active" : ""
            }`}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem?.(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
