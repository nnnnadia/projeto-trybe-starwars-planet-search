import React from 'react';
import { PlanetsProvider } from './context';
import { PlanetsTable, FilterForms } from './components';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <FilterForms />
      <PlanetsTable />
    </PlanetsProvider>
  );
}

export default App;
