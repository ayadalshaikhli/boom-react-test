import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./componets/Cart";
import Footer from "./componets/Footer";
import NavBar from "./componets/NavBar";
import NavMenu from "./componets/NavMenu";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
