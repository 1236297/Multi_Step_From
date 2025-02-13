import { useState } from "react";
import Card from "../src/Component/card.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card />
    </>
  );
}

export default App;
