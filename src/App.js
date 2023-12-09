import React, { useState } from "react";
import EnterBox from "./util/EnterBox";
import Result from "./util/Result";
function App() {

  const [x, y] = useState([])

  function p(info) {
    y(info)
  }
  console.log(x);

  return (
    <div>
      <EnterBox h={p} />
      <Result k={x} />
    </div>

  );
}

export default App;
