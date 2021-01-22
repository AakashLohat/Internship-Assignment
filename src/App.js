import './App.css';
import Temp from "./components/Tempapp"
import BarChat from "./components/BarChat"
import Stories from './components/Stories';
import { Route, BrowserRouter as Router } from "react-router-dom"
import Home from "./components/Home"
import Lower from "./components/Lower"

function App() {
  return (<div className="app">


    <Router >
      <Route path="/"
        exact component={Home}
      />
      <Route path="/main"
        exact component={Temp}
      />


    </Router>


  </div>
  );
}

export default App;