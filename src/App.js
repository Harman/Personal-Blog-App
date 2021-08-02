import { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  let [user, setUser] = useState(null);
  return (
    <div className="App">
      <>
        <Router>
          <Switch>
            <Route path="/login">
              <Login handleUser={setUser} user={user} />
            </Route>
            <Route path="/home">
              <Home user={user} />
            </Route>
            <Route path="/">
              <Home user={user} />
            </Route>
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
