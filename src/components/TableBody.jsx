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

  const testFilterByNumericValues = (planet) => {
    const manyNumericFilters = filters.filterByNumericValues.length;
    if (manyNumericFilters === 0) return true;
    const passAllFilters = [];
    for (let i = 0; i < manyNumericFilters; i += 1) {
      const { column, comparison, value } = filters.filterByNumericValues[i];
      switch (comparison) {
      case 'maior que':
        passAllFilters.push(+planet[column] > +value);
        break;
      case 'menor que':
        passAllFilters.push(+planet[column] < +value);
        break;
      case 'igual a':
        passAllFilters.push(+planet[column] === +value);
        break;
      default:
        return false;
      }
    }
    return passAllFilters.every((check) => check);
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
