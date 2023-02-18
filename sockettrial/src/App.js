import { useEffect, useState } from "react";
import "./App.css";
import { init, subscribe } from "./socketApi";
import Pallette from "./components/Pallette";

function App() {
  const [activeColor, setActiveColor] = useState("#282c34");
  useEffect(() => {
    init();
    subscribe((color) => setActiveColor(color));
  }, []);
  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <Pallette activeColor={activeColor} />
    </div>
  );
}

export default App;
