import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/Layout';
import Characters from './components/Characters/Characters';

import './App.scss';

const App = () => {
  return (
    <div className="App bg-gradient-to-r from-light-black to-dark-black min-h-screen flex flex-col justify-between">
      <HashRouter basename="/">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/characters/:id" element={<Characters />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
