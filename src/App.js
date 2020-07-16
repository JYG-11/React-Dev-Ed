import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [user, setUsers] = useState([
    { name: "Ed", message: "Hello there" },
    { name: "John Snow", message: "I am the king of the north!" },
    { name: "Daenerys Targaryen", message: "Free the slaves!" },
  ]);

  return (
    <div className="app">
      {user.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
