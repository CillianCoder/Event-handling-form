import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const detectChange = event => {
    const { name, value } = event.target;

    setContact(
      prevent => {
        return {
          ...prevent,
          [name]: value
        }
      }
    );
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={detectChange} value={contact.fName} />
        <input name="lName" placeholder="Last Name" onChange={detectChange} value={contact.lName} />
        <input name="email" placeholder="Email" onChange={detectChange} value={contact.email} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
