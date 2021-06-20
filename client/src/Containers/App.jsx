import React from 'react';
import './App.css';
import TodosRoutes from '../routes';
import Footer from '../Components/Footer/Footer';

function App() {

  return (
    <div className='app'>
      <TodosRoutes />
      <Footer/>
    </div>
  );
}

export default App;
