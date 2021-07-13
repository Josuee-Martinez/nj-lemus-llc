import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//components imports
import Home from "./components/Home";

function App() {
   return (
      <Router>
         <Home />
      </Router>
   );
}

export default App;
