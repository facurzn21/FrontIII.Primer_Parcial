import  { useState } from "react";
import Card from "./Card";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [submittedData, setSubmittedData] = useState({ name: '', color: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length < 3 || color.length !== 7 /* longitud HEX */) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setSubmittedData({ name, color }); 
      setName(""); 
    }
  };

  return (
    <div className="App">
      <h1>Bienvenido a nuestro sitio de colores favoritos!</h1>
      {!isValid && <p>Por favor chequea que la información sea correcta</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Ingresa tu nombre
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <br />
        <br />
        <label>
          Ingresa tu color favorito (en formato HEX)
          <input
            type="text"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
        </label>
        <br />
        <br />
        <Button color="primary" type="submit">
          Enviar
        </Button>
      </form>
      <br />
      <br />
      {submittedData.name && submittedData.color && <Card name={submittedData.name} color={submittedData.color} />}
    </div>
  );
}

export default App;
