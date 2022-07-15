import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('O filtro de texto', () => {
  beforeEach(() => render(<App />));

  test('é renderizado na tela', () => {
    const textInput = screen.getByTestId('name-filter');
    expect(textInput).toBeInTheDocument();
  });

  test('mostra apenas os planetas que têm no nome o que foi digitado', async () => {
    const tableBody = screen.getAllByRole('rowgroup')[1];
    const textInput = screen.getByTestId('name-filter');
    userEvent.type(textInput, 'o');
    const afterFstFilterRows = await within(tableBody).findAllByRole('row');
    const PLANETS_AFTER_FST_FILTER = 7;
    expect(afterFstFilterRows.length).toBe(PLANETS_AFTER_FST_FILTER);
    userEvent.type(textInput, 'o');
    const afterSndFilterRows = within(tableBody).getAllByRole('row');
    const PLANETS_AFTER_SND_FILTER = 2;
    expect(afterSndFilterRows.length).toBe(PLANETS_AFTER_SND_FILTER);
  });
});
