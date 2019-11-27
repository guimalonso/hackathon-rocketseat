import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StartPage from './pages/StartPage';
import Quiz from './pages/Quiz';

export default () => {
  return (<BrowserRouter>
    <Route path="/" exact component={StartPage}/>
    <Route path="/quiz" component={Quiz}/>
  </BrowserRouter>)
}