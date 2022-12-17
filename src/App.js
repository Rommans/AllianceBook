import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import './App.scss';
import Layout from './components/Layout';
import Characters from './components/Characters/Characters';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/characters/:id" element={<Characters />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
