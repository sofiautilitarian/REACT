import { useState } from "react";
import { BsBatteryFull } from "react-icons/bs";

//import Message from "./Message";
//import reactLogo from "./assets/react.svg";
//import bootstrap from 'node_modules\bootstrap\dist\css\bootstrap.css';
import ListGroup from "./ListGroup";
import Button from "./Button";

function App() {
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);
  let count = 0;
  const handleClick = () => {
    setVisibility(true);
    count++;
    console.log(isVisible);
  };
  return (
    <div>
      <Button children={"My Button"} onClick={function (): void {}} />
    </div>
  );
}

export default App;
