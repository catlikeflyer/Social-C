import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoPage from "./pages/Todo";
import Home from "./pages/Home";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./pages/SignUp";

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
            <PrivateRoute exact path="/todo">
              <TodoPage />
            </PrivateRoute>
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
