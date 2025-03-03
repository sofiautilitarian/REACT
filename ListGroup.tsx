import { ClipboardEvent, useState } from "react";
// {items: [], heading: string}
interface Props{
  //base properties and items
  //using type annotation to specify the type of various properties
  items : string[];
  heading: string;
}
function ListGroup({items, heading}: Props) {
  
  //let selectedIndex = 0;
  //Hook - tap into built in feats
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [name, setName] = useState('');
  //variable (selectedIndex)
  //updater function
  //type annotation
  const handleClick = (event: ClipboardEvent) => console.log(event);
  //items = [];
  //const getMessage = () => { items.length === 0 ? <p>No item found</p> : null };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null};
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
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
