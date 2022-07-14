import React from 'react';
import TableBody from './TableBody';

function TableHead() {
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
      <TableBody />
    </table>
  );
}

export default TableHead;
