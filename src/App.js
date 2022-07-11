import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';
import PlanetsTable from './components/PlanetsTable';

function App() {
  return (
    <PlanetsProvider>
      <PlanetsTable />
    </PlanetsProvider>
  );
}

export default App;
