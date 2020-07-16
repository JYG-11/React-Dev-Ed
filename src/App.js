import React from "react";
import Tweet from "./Tweet";

function App() {
  return (
    <div className="app">
      <Tweet name="Dev Ed" message="This is a random tweet" />
      <Tweet name="John Snow" message="Winter is coming" />
      <Tweet name="Daenerys Targaryen" message="Mother of dragons" />
    </div>
  );
}

export default App;
