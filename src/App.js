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
import Footer from './UI/footer'

function App() {
  return (
    <div className="md:container md:mx-auto">
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
      <Footer />
    </Router>
</div>
  );
}

export default App;
