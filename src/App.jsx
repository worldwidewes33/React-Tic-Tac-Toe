import { useState } from "react";

let user = "X";

function Square() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setValue(user);
    user = user === "X" ? "O" : "X";
  };

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

function App() {
  return (
    <div className="container">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

export default App;
