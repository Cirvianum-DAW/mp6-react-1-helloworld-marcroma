import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import StudentList from "./components/studentList";

const App = () => {
  const [tipusEstudiant, setTipusEstudiant] = useState("Grau");
  const [ngPlaces, setNGPlaces] = useState(60);
  const [gPlaces, setGPlaces] = useState(40);

  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  };

  const setPlacesDisponibles = (updatedPlaces) => {
    tipusEstudiant === "Graduat"
      ? setGPlaces(updatedPlaces)
      : setNGPlaces(updatedPlaces);
  };

  const [detallsEstudiant, setDetallEstudiants] = useState([]);

  return (
    <div className="App flex h-screen flex-col items-center justify-center ">
      <div className="programes my-2">
        <h3 className="title my-2 text-2xl text-blue-500">
          Formulari d'inscripció d'estudiants.
        </h3>
        <ul className="ulInscripcio ">
          <li
            className="parentLabels my-2 flex items-center justify-evenly"
            onChange={handleChange}
          >
            <label className="radioLabel">
              <input
                type="radio"
                value="Grau"
                name="programGroup"
                defaultChecked
                className="radioInput mr-2"
              />
              Grau
            </label>
            <label className="radioLabel">
              <input
                type="radio"
                value="Postgrau"
                name="programGroup"
                className="radioInput mr-2"
              />
              Postgrau
            </label>
          </li>
          <li className="parentLabels my-2">
            Places disponibles per estudiant{" "}
            <strong>
              {tipusEstudiant}:{" "}
              {tipusEstudiant === "Postgrau" ? gPlaces : ngPlaces}
            </strong>
          </li>
        </ul>
      </div>

      <Form
        tipusEstudiantSelect={tipusEstudiant}
        setPlacesDisponibles={setPlacesDisponibles}
        placesActuals={tipusEstudiant === "PostGrau" ? gPlaces : ngPlaces}
        setDetallsEstudiant={setDetallEstudiants}
      />

      <StudentList
        detallsEstudiant={detallsEstudiant}
        setDetallsEstudiant={setDetallEstudiants}
      />
    </div>
  );
};

export default App;
