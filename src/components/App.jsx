import React, { useState } from "react";

function App() {
  const [fullName, setName] = useState({
    fName: "",
    lName: ""
  });

  const detect = event => {
    const { value, name } = event.target;
    setName(
      preValue => {
        if (name === "fName") {
          return {
            fName: value,
            lName: preValue.lName
          };
        } else if (name === "lName") {
          return {
            fName: preValue.fName,
            lName: value
          };
        }
      });
  };

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          type="text"
          onChange={detect}
          value={fullName.fName}

        />
        <input
          name="lName"
          placeholder="Last Name"
          type="text"
          onChange={detect}
          value={fullName.lName}

        />
        <button
          type="submit"
        >Submit</button>
      </form>
    </div>
  );
}

export default App;
