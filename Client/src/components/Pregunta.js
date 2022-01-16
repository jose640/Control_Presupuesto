import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import Error from "./Error";

const Pregunta = ({setPresupuesto, setRestante, setMostrarpregunta}) => {
  // definir state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //Funcion que lee presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  //Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    // Si pasa la validacion
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarpregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El Presupueto es Incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setMostrarpregunta: PropTypes.func.isRequired
}

export default Pregunta;
