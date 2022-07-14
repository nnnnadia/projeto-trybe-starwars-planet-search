import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  async function fetchPlanetsData() {
    const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchedPlanets = await fetch(ENDPOINT)
      .then((response) => response.json())
      .then((parsedData) => parsedData);
    const resultsWithoutResidents = [];
    fetchedPlanets.results
      .forEach((planet) => {
        delete planet.residents;
        resultsWithoutResidents.push(planet);
      });
    setData(resultsWithoutResidents);
  }

  useEffect(() => fetchPlanetsData(), []);

  const CONTEXT_VALUE = {
    data,
    filters,
    setFilters,
  };

  return (
    <PlanetsContext.Provider value={ CONTEXT_VALUE }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]).isRequired,
};

export default PlanetsProvider;
