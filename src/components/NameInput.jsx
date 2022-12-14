import React, { useContext } from 'react';
import PlanetsContext from '../context';

function NameInput() {
  const {
    filters,
    setFilters,
  } = useContext(PlanetsContext);

  return (
    <input
      type="text"
      name="name"
      value={ filters.filterByName.name }
      onChange={ ({ target }) => setFilters({
        ...filters, filterByName: { [target.name]: target.value },
      }) }
      data-testid="name-filter"
    />
  );
}

export default NameInput;
