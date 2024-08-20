import React from 'react';
import MeuComponente from '.';

function App() {
  return (
    <div className='App'>
      <MeuComponente />
    </div>
  );

  function MeuComponente() {
    return (
      <div >
        <MeuComponente />
      </div>
    );
}

export default App;
