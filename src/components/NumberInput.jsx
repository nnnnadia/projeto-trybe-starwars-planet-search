import React, { useState, useContext } from 'react';
import PlanetsContext from '../context';
import FiltersInAction from './FiltersInAction';

function NumberInput() {
  const {
    filters,
    filters: { filterByNumericValues },
    setFilters,
  } = useContext(PlanetsContext);

  const [numericValue, setNumericValue] = useState({
    column: '',
    comparison: 'maior que',
    value: 0,
  });

  const handleChange = ({ target }) => setNumericValue({
    ...numericValue, [target.name]: target.value,
  });

  const getPossibleColumnOptions = () => {
    const allOptions = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    const selectedOptions = filterByNumericValues.map((filter) => filter.column);
    return allOptions.filter((option) => !selectedOptions.includes(option));
  };

  const handleButton = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues, numericValue,
      ],
    });
    setNumericValue({
      column: getPossibleColumnOptions()[0],
      comparison: 'maior que',
      value: 0,
    });
  };

  return (
    <>
      <select
        name="column"
        onChange={ (e) => handleChange(e) }
        data-testid="column-filter"
      >
        {
          getPossibleColumnOptions().map((option) => (
            <option
              key={ option }
              value={ option }
            >
              { option }
            </option>
          ))
        }
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
      <FiltersInAction />
    </>
  );
}

export default NumberInput;
