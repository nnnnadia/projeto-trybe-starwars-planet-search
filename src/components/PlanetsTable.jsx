import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function PlanetsTable() {
  const { data } = useContext(PlanetsContext);
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">População</th>
          <th scope="col">Terreno</th>
          <th scope="col">Clima</th>
          <th scope="col">Diâmetro</th>
          <th scope="col">Gravidade</th>
          <th scope="col">Período Orbital</th>
          <th scope="col">Período de Rotação</th>
          <th scope="col">Água Superficial</th>
          <th scope="col">Filmes</th>
          <th scope="col">Criado</th>
          <th scope="col">Editado</th>
          <th scope="col">Url</th>
        </tr>
      </thead>
      <tbody>
        { data && data.map(({
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
    </table>
  );
}

export default PlanetsTable;
