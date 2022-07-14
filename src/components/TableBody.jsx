import React, { useContext } from 'react';
import PlanetsContext from '../context';

function TableBody() {
  const {
    data,
    filters,
  } = useContext(PlanetsContext);

  const testFilterByName = ({
    name,
  }) => {
    const nameFilter = new RegExp(`${filters.filterByName.name}`, 'i');
    return nameFilter.test(name);
  };

  // const testFilterByNumericValues = ({
  //   population,
  //   orbital_period: orbitalPeriod,
  //   diameter,
  //   rotation_period: rotationPeriod,
  //   surface_water: surfaceWater,
  // }) => {
  const testFilterByNumericValues = (planet) => {
    const manyNumericFilters = filters.filterByNumericValues.length;
    if (manyNumericFilters === 0) return true;
    const { column, comparison, value } = filters.filterByNumericValues[0];
    switch (comparison) {
    case 'maior que':
      return +planet[column] > +value;
    case 'menor que':
      return +planet[column] < +value;
    case 'igual a':
      return +planet[column] === +value;
    default:
      return false;
    }
  };

  return (
    <tbody>
      { data && data
        .filter((planet) => testFilterByName(planet))
        .filter((planet) => testFilterByNumericValues(planet))
        .map(({
          name,
          population,
          terrain,
          climate,
          diameter,
          gravity,
          orbital_period: orbitalPeriod,
          rotation_period: rotationPeriod,
          surface_water: surfaceWater,
          films,
          created,
          edited,
          url,
        }, index) => (
          <tr key={ index }>
            <td>{ name }</td>
            <td>{ population }</td>
            <td>{ terrain }</td>
            <td>{ climate }</td>
            <td>{ diameter }</td>
            <td>{ gravity }</td>
            <td>{ orbitalPeriod }</td>
            <td>{ rotationPeriod }</td>
            <td>{ surfaceWater }</td>
            <td>{ films }</td>
            <td>{ created }</td>
            <td>{ edited }</td>
            <td>{ url }</td>
          </tr>
        ))}
    </tbody>
  );
}

export default TableBody;
