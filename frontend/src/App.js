import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Chargement...");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return <h1>{message + ' Tres bien'}</h1>;
}

export default App;

