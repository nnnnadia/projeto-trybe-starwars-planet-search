import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { clear } from '@testing-library/user-event/dist/clear';
import App from '../App';

describe('É rederizado os planetas que passam por vários filtros', () => {
  beforeEach(() => render(<App />));

  test('2 filtros numéricos', async () => {
    const columnSelect = screen.getByTestId('column-filter');
    const comparisonSelect = screen.getByTestId('comparison-filter');
    const valueInput = screen.getByTestId('value-filter');
    userEvent.selectOptions(columnSelect, 'diameter');
    userEvent.selectOptions(comparisonSelect, 'maior que');
    userEvent.type(valueInput, '9000');

    const buttonFilter = screen.getByTestId('button-filter');
    userEvent.click(buttonFilter);

    const tableBody = screen.getAllByRole('rowgroup')[1];
    const afterFstFilterRows = await within(tableBody).findAllByRole('row');
    const PLANETS_AFTER_FST_FILTER = 7;
    expect(afterFstFilterRows.length).toBe(PLANETS_AFTER_FST_FILTER);

    userEvent.selectOptions(columnSelect, 'population');
    userEvent.selectOptions(comparisonSelect, 'menor que');
    clear(valueInput);
    userEvent.type(valueInput, '1000000');
    userEvent.click(buttonFilter);

    const afterSndFilterRows = within(tableBody).getAllByRole('row');
    const PLANETS_AFTER_SND_FILTER = 2;
    expect(afterSndFilterRows.length).toBe(PLANETS_AFTER_SND_FILTER);
  });

  test('3 filtros numéricos', async () => {
    const columnSelect = screen.getByTestId('column-filter');
    const comparisonSelect = screen.getByTestId('comparison-filter');
    const valueInput = screen.getByTestId('value-filter');
    userEvent.selectOptions(columnSelect, 'diameter');
    userEvent.selectOptions(comparisonSelect, 'maior que');
    userEvent.type(valueInput, '9000');

    const buttonFilter = screen.getByTestId('button-filter');
    userEvent.click(buttonFilter);

    const tableBody = screen.getAllByRole('rowgroup')[1];
    const afterFstFilterRows = await within(tableBody).findAllByRole('row');
    const PLANETS_AFTER_FST_FILTER = 7;
    expect(afterFstFilterRows.length).toBe(PLANETS_AFTER_FST_FILTER);

    userEvent.selectOptions(columnSelect, 'population');
    userEvent.selectOptions(comparisonSelect, 'menor que');
    clear(valueInput);
    userEvent.type(valueInput, '1000000');
    userEvent.click(buttonFilter);

    const afterSndFilterRows = within(tableBody).getAllByRole('row');
    const PLANETS_AFTER_SND_FILTER = 2;
    expect(afterSndFilterRows.length).toBe(PLANETS_AFTER_SND_FILTER);

    userEvent.selectOptions(columnSelect, 'rotation_period');
    userEvent.selectOptions(comparisonSelect, 'igual a');
    clear(valueInput);
    userEvent.type(valueInput, '23');
    userEvent.click(buttonFilter);

    const afterTrdFilterRows = within(tableBody).getAllByRole('row');
    const PLANETS_AFTER_TRD_FILTER = 1;
    expect(afterTrdFilterRows.length).toBe(PLANETS_AFTER_TRD_FILTER);
  });
});
