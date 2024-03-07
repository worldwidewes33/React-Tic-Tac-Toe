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

function Board() {
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

function App() {
  return <Board />;
}

export default App;
