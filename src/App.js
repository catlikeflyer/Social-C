import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoPage from "./pages/Todo";
import Home from "./pages/Home";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./pages/SignUp";
import MemoryPage from "./pages/MemoryLane";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navigation />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/todo">
              <TodoPage />
            </Route>
            <Route exact path="/memories">
              <MemoryPage />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
