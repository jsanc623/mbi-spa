import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path='/' component={Home}></Route>
    </Routes>
  );
}

export { AppRouter };
