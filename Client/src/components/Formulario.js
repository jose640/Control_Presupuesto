import React, { useState } from "react";
import PropTypes from 'prop-types';
import shortid from "shortid";
import Error from "./Error";


const Formulario = ({setGasto, setCreargasto}) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //Cuando el usuario agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }

    //Construir el gasto
    const gasto = {
        nombre,
        cantidad,
        id: shortid.generate()
    }

    //Pasar el gasto al componente principal
    setGasto(gasto);
    setCreargasto(true);

    //resetear el form
    setNombre("");
    setCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agregar tus gastos aquí</h2>

      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto es Incorrecto" />
      ) : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCreargasto: PropTypes.func.isRequired
}

export default Formulario;
