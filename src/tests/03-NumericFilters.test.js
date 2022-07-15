import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

const testIds = {
  columnFilter: 'column-filter',
  comparisonFilter: 'comparison-filter',
  valueFilter: 'value-filter',
  buttonFilter: 'button-filter',
};

describe('Os filtros de numéricos', () => {
  beforeEach(() => {
    render(<App />);
  });
  test('são renderizados na tela:\n\t- select para coluna\n\t- select para comparação\n\t'
  + '- input numérico\n\t- botão para filtrar', () => {
    const columnSelect = screen.getByTestId(testIds.columnFilter);
    expect(columnSelect).toBeInTheDocument();

    const comparisonSelect = screen.getByTestId(testIds.comparisonFilter);
    expect(comparisonSelect).toBeInTheDocument();

    const valueInput = screen.getByTestId(testIds.valueFilter);
    expect(valueInput).toBeInTheDocument();

    const buttonFilter = screen.getByTestId('button-filter');
    expect(buttonFilter).toBeInTheDocument();
  });
  test('inicialmente possuem os valores:\n\t- coluna: \'population\'\n\t'
  + '- comparação: \'maior que\'\n\t- valor: 0', () => {
    const INITIAL_VALUE = {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    };

    const columnSelect = screen.getByTestId(testIds.columnFilter);
    expect(columnSelect.value).toMatch(INITIAL_VALUE.column);

    const comparisonSelect = screen.getByTestId(testIds.comparisonFilter);
    expect(comparisonSelect.value).toMatch(INITIAL_VALUE.comparison);

    const valueInput = screen.getByTestId(testIds.valueFilter);
    expect(+valueInput.value).toBe(INITIAL_VALUE.value);
  });
  test('renderiza os planetas corretos com o filtro inicial', async () => {
    const buttonFilter = screen.getByTestId(testIds.buttonFilter);
    userEvent.click(buttonFilter);

    const tableBody = screen.getAllByRole('rowgroup')[1];
    const afterFilterRows = await within(tableBody).findAllByRole('row');
    const PLANETS_AFTER_FILTER = 8;
    expect(afterFilterRows.length).toBe(PLANETS_AFTER_FILTER);
  });
  test('inicialmente possuem os valores:\n\t- coluna: \'surface_water\'\n\t'
  + '- comparação: \'menor que\'\n\t- valor: 40', async () => {
    const columnSelect = screen.getByTestId(testIds.columnFilter);
    userEvent.selectOptions(columnSelect, 'surface_water');
    const comparisonSelect = screen.getByTestId(testIds.comparisonFilter);
    userEvent.selectOptions(comparisonSelect, 'menor que');
    const valueInput = screen.getByTestId(testIds.valueFilter);
    userEvent.type(valueInput, '40');

    const buttonFilter = screen.getByTestId(testIds.buttonFilter);
    userEvent.click(buttonFilter);

    const tableBody = screen.getAllByRole('rowgroup')[1];
    const afterFilterRows = await within(tableBody).findAllByRole('row');
    const PLANETS_AFTER_FILTER = 6;
    expect(afterFilterRows.length).toBe(PLANETS_AFTER_FILTER);
  });
  test('inicialmente possuem os valores:\n\t- coluna: \'diameter\'\n\t'
  + '- comparação: \'maior que\'\n\t- valor: 8900', async () => {
    const columnSelect = screen.getByTestId(testIds.columnFilter);
    userEvent.selectOptions(columnSelect, 'diameter');
    const comparisonSelect = screen.getByTestId(testIds.comparisonFilter);
    userEvent.selectOptions(comparisonSelect, 'maior que');
    const valueInput = screen.getByTestId(testIds.valueFilter);
    userEvent.type(valueInput, '8900');

    const buttonFilter = screen.getByTestId(testIds.buttonFilter);
    userEvent.click(buttonFilter);

    const tableBody = screen.getAllByRole('rowgroup')[1];
    const afterFilterRows = await within(tableBody).findAllByRole('row');
    const PLANETS_AFTER_FILTER = 7;
    expect(afterFilterRows.length).toBe(PLANETS_AFTER_FILTER);
  });
  test('inicialmente possuem os valores:\n\t- coluna: \'population\'\n\t'
  + '- comparação: \'igual a\'\n\t- valor: 200000', async () => {
    const columnSelect = screen.getByTestId(testIds.columnFilter);
    userEvent.selectOptions(columnSelect, 'population');
    const comparisonSelect = screen.getByTestId(testIds.comparisonFilter);
    userEvent.selectOptions(comparisonSelect, 'igual a');
    const valueInput = screen.getByTestId(testIds.valueFilter);
    userEvent.type(valueInput, '200000');

    const buttonFilter = screen.getByTestId(testIds.buttonFilter);
    userEvent.click(buttonFilter);

    const tableBody = screen.getAllByRole('rowgroup')[1];
    const afterFilterRows = await within(tableBody).findAllByRole('row');
    const PLANETS_AFTER_FILTER = 1;
    expect(afterFilterRows.length).toBe(PLANETS_AFTER_FILTER);
  });
});
