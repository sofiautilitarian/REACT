import React from "react";
import Alert from "./Alert";
// import ListGroup from "./ListGroup.tsx";
function App() {
  // //list of items moved from ListGroup to App
  // let items = [
  //   "America",
  //   "Zaman Razeen",
  //   "Sami had an ex",
  //   "Syeda Sowad",
  //   "Hasnat Jami",
  //   "Nasheen Abdullah",
  // ];
  // //two compilation errors
  // //typescript always alerts about errors during compile time
  // return (
  //   <div>
  //     <ListGroup items={items} heading={"Cities"} />
  //   </div>
  // );
  return <div><Alert>Hello <span>World</span></Alert></div>


}
export default App;
