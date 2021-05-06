import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import { useHistory } from "react-router";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState();
  const history = useHistory()

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      setError("");
      await logout();
      history.push("/");
    } catch {
      setError("Failed to logout");
      console.log(error)
    }
  };
  return (
    <div>
      <Navbar color="dark" dark expand="md" className="bg-info">
        <NavbarBrand href="/">Social-C</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {currentUser ? (
              <NavItem>
                <NavLink href="/todo">To-Do</NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink href="/signup">Sign Up</NavLink>
              </NavItem>
            )}
          </Nav>
          {currentUser && <Button onClick={handleLogout}>Log Out</Button>}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
