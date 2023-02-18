import React from "react";
import { useState, useEffect } from "react";
import { send } from "../socketApi";

function Pallette({ activeColor }) {
  const [color, setColor] = useState("#000");
  useEffect(() => {
    if (color !== activeColor) {
      setColor(activeColor);
    }
    //eslint-disable-next-line
  }, [activeColor]);

  return (
    <div className="pallette">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>Click</button>
    </div>
  );
}

export default Pallette;
