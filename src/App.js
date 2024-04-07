import React from 'react';
import Header from './components/header/Header';
import Recipes from './components/recipes/Recipes';
import User from './components/user/User';
import './styles/App.css';

function App() {
  return (
    <section className='content'>
      <Header />
      <User />
      <Recipes />
    </section>
  );
}

export default App;
