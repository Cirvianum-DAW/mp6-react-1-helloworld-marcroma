import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleSubmit = (e) => {
    setWelcomeMessage(`Hola ${firstName} ${lastName}!`);
    props.setPlacesDisponibles(props.placesActuals - 1);

    e.preventDefault();
  };

  return (
    <div className="m-7 w-80">
      <form className="p-4" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center mb-8">
          Detalls d'estudiant: {props.tipusEstudiantSelect}
        </h1>
        <label className="block">Nom:</label>
        <input
          className="w-full mb-4 p-2 rounded-lg bg-gray-200"
          type="text"
          name="fname"
          onBlur={(e) => setFirstName(e.target.value)}
        />{" "}
        <br />
        <label className="pt-2 block">Cognom:</label>
        <input
          className="w-full p-2 rounded-lg bg-gray-200"
          type="text"
          name="lname"
          onBlur={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          className="p-1 bg-green-600 rounded font-bold text-white w-full"
        />
      </form>

      <label className="block w-full text-4xl mb-4 p-2" id="studentMsg">
        {welcomeMessage}
      </label>
    </div>
  );
}
export default Form;
