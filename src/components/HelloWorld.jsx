/* eslint-disable react/no-unescaped-entities */
import React from "react"; // Importem la llibreria de React

function HelloWorld() {
  const handleClick = () => {
    alert("Hello World!");
  };
  return (
    <div className="App">
      <button onClick={handleClick} className="border rounded p-1 px-6 m-6 bg-red-400 text-white">React</button>
    </div>
  );
}

export default HelloWorld; // Exportem la funció HelloWorld
