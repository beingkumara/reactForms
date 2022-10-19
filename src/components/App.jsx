import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function onSubmit(event) {
    setName(event.target.value);
  }

  function whenClicked() {
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input onChange={onSubmit} type="text" placeholder="What's your name?" />
      <button onClick={whenClicked}>Submit</button>
    </div>
  );
}

export default App;
