import React from "react";
import { MouseEventHandler, ClipboardEvent, useState, Fragment } from "react";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

// import "./ListGroup.css";

interface Props {
  items: string[];
  heading: string;
}
//PascalCasing
function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null};
      <UL>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </ListItem>
        ))}
      </UL>
    </>
  );
  {
    /* return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
      ;
    </>
  ); */
  }
}

export default ListGroup;
