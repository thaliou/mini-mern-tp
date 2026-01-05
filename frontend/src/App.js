import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Chargement...");

  useEffect(() => {
    fetch("https://mini-mern-tp-backend.onrender.com/api/test")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return <h1>{message + ' Tres bien'}</h1>;
}

export default App;

