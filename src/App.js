import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Checkout from "./components/Cart/Checkout";
import Header from "./components/main/Header";
import HomePage from "./components/homepage/HomePage";
// import CheckoutForm from "./components/Checkout/CheckoutForm";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkouts/Checkout";
import Productpage from "./components/productpage/Productpage";
function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/shop">
            <Header />
          </Route>
          <Route path="/products">
            <Header />
            <Productpage />
          </Route>
          <Route path="/">
            <Header />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
