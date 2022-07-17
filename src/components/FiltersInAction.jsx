import React, { useContext } from 'react';
import PlanetsContext from '../context';

function FiltersInAction() {
  const {
    filters,
    filters: { filterByNumericValues },
    setFilters,
  } = useContext(PlanetsContext);

  const handleXButton = (column) => {
    setFilters({
      ...filters,
      filterByNumericValues: filterByNumericValues
        .filter((option) => option.column !== column),
    });
    if (column === 'remove-all') {
      setFilters({
        ...filters,
        filterByNumericValues: [],
      });
    }
  };

  return (
    <div>
      { filterByNumericValues
        && filterByNumericValues.map(({ column, comparison, value }) => (
          <h6 key={ column } data-testid="filter">
            { `${column} ${comparison} ${value}` }
            <button
              type="button"
              onClick={ () => handleXButton(column) }
            >
              X
            </button>
          </h6>
        )) }
      { filterByNumericValues.length > 0 && (
        <h6>
          Remover todos os filtros
          <button
            type="button"
            onClick={ () => handleXButton('remove-all') }
            data-testid="button-remove-filters"
          >
            X
          </button>
        </h6>
      ) }
    </div>
  );
}

export default FiltersInAction;
