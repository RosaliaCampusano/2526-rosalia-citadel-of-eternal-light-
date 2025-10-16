import React, { useState, useEffect } from "react";
import CitadelItem from "./interface";

function App() {
  const [data, setData] = useState<CitadelItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/citadel.json");
      const response = await data.json();
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Citadel of Eternal Night</h1>
      <p>Construye aquí la interfaz y lógica de la ciudadela.</p>
    </div>
  );
}

export default App;
