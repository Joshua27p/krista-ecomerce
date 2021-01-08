 import React from 'react'
 import{
   BrowserRouter as Router,
   Switch,
   Route,
 } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Header from './UI/Header'
import './style.css'
import './App.css'
import Catalogue from './pages/Catalogue'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/catalogue">
          <Catalogue />
        </Route>
        <Route exact path="/product/:id">
          <ProductDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
