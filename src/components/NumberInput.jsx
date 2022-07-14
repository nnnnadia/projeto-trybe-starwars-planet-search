import React, { useState, useContext } from 'react';
import PlanetsContext from '../context';

function NumberInput() {
  const {
    filters,
    setFilters,
  } = useContext(PlanetsContext);

  const [numericValue, setNumericValue] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleChange = ({ target }) => setNumericValue({
    ...numericValue, [target.name]: target.value,
  });

  const handleButton = () => setFilters({
    ...filters,
    filterByNumericValues: [
      ...filters.filterByNumericValues, numericValue,
    ],
  });

  return (
    <>
      <select
        name="column"
        onChange={ (e) => handleChange(e) }
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        onChange={ (e) => handleChange(e) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        value={ numericValue.value }
        onChange={ (e) => handleChange(e) }
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ handleButton }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </>
  );
}

export default NumberInput;
