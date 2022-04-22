import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from '../constants/routes';
import Home from '../containers/Home/Home';
import CounterApp from '../containers/CounterApp/CounterApp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.COUNTER_APP} element={<CounterApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;