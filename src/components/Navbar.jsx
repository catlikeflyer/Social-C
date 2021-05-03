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
  NavbarText,
} from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useAuth();

  const toggle = () => setIsOpen(!isOpen);

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
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
