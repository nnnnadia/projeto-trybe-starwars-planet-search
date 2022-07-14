import React from 'react';
import { PlanetsProvider } from './context';
import { TableHead, FilterForms } from './components';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <FilterForms />
      <TableHead />
    </PlanetsProvider>
  );
}

export default App;
