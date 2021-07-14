import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//css stylesheets
import "./App.css";

//components imports
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
   return (
      <Router>
         <Navbar />
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/about" component={About} />

            <Route exact path="/contact" component={Contact} />
         </Switch>
      </Router>
   );
}

export default App;
