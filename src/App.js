import './App.css';
import Form from "./Form"
import Loginform from './Loginform'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
return (
  <Router>
      <div>
        <Switch>
          <Route exact path="/">
             <Form/>
          </Route>
          <Route path="/login">
             <Loginform/>
          </Route>
        </Switch>
</div>
</Router>
	
);
}

export default App;

