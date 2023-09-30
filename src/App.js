import "./App.css";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";
import Favourite from "./components/Favourite";
import {   Route , Switch } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Favourite" component={Favourite} />
          <Route path="Movie/:id" component={Details} />

        </Switch>
      </div>
  );
}

export default App;
