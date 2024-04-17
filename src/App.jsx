import React from "react";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  // Afegim la variable d'estat tipusEstudiant
  const [tipusEstudiant, setTipusEstudiant] = useState("no-graduat");

  // Afegim la funció que actualitza el valor de la variable d'estat tipusEstudiant
  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  };

  // const [places, setPlaces] = useState(100);
  const [ngPlaces, setPlacesNoGraduats] = useState(60);
  const [gPlaces, setPlacesGraduats] = useState(40);

  const setPlacesDisponibles = (updatedPlaces) => {
    tipusEstudiant === "no-graduat"
      ? setPlacesNoGraduats(updatedPlaces)
      : setPlacesGraduats(updatedPlaces);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <div className="tipusEstudiant">
        <label className="text-2xl text-center mx-2 block">
          Places Disponibles No Graduats: {ngPlaces} <br/>
          Places Disponibles Graduats: {gPlaces}
        </label>
        <label className="mr-2">Selecciona Tipus d'Estudiant:</label>
        {/* Afegim el desplegable que permet triar d'acord amb les variables i
        que crida la funció handleChange */}
        <select
          className="appDropDown border rounded-md py-1 px-2"
          onChange={handleChange}
          value={tipusEstudiant}
        >
          <option value="no-graduat">No Graduat</option>
          <option value="graduat">Graduat</option>
        </select>
      </div>
      <Form
        tipusEstudiantSelect={tipusEstudiant}
        setPlacesDisponibles={setPlacesDisponibles}
        placesActuals={tipusEstudiant === "no-graduat" ? ngPlaces : gPlaces}
      />
    </div>
  );
}

export default App;
