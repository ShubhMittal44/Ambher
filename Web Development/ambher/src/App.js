import "./App.css";
import { Header } from "./components/header/header.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from './components/Profile/Profile.component';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/account" component={Profile} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
