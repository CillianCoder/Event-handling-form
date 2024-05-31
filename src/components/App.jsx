import React, { useState } from "react";

function App() {
  const [color, colorChanger] = useState(false);
  const [heading, nFunction] = useState("");
  const [name, headingChange] = useState("");

  const bgChange = () => colorChanger(true);
  const bgBack = () => colorChanger(false);

  const clickFunction = (event) => {
    nFunction(name);
    event.preventDefault();
  };
  const detect = (event) => headingChange(event.target.value);

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={detect}
          value={name}
        />
        <button
          onClick={clickFunction}
          type="submit"
          onMouseOut={bgBack}
          onMouseOver={bgChange}
          style={{ backgroundColor: color ? "black" : "white" }}
        >Submit</button>
      </form>
    </div>
  );
}

export default App;
