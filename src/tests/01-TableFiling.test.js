import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import App from '../App';

describe('O preenchimento da tabela', () => {
  beforeEach(() => render(<App />));

  test('é realizado após o carregamento da tela', async () => {
    const tableBody = screen.getAllByRole('rowgroup')[1];
    const tableDataRows = await within(tableBody).findAllByRole('row');
    const PLANETS_IN_ON_THE_TABLE = 10;
    expect(tableDataRows.length).toBe(PLANETS_IN_ON_THE_TABLE);
  });

  test('é feito em uma tabela com 13 colunas', async () => {
    const tableHead = screen.getAllByRole('rowgroup')[0];
    const tableHeadCells = within(tableHead).getAllByRole('columnheader');
    const CELLS_IN_TABLE_HEAD = 13;
    expect(tableHeadCells.length).toBe(CELLS_IN_TABLE_HEAD);
  });
});
