import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-p.png";
import { useState } from "react";

const AppNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  // Close navbar after clicking a link
  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="glass-panel mx-4 mt-3"
      expanded={expanded} // <-- Add this line
    >
      <Container>
        <Navbar.Brand className="fw-bold text-black d-flex align-items-center">
          <img src={logo} alt="Dhruv Gupta Portfolio" height={50} className="me-2" />
          Dhruv Gupta
        </Navbar.Brand>

        {/* Toggle button now controls the state */}
        <Navbar.Toggle onClick={() => setExpanded(!expanded)} />

        <Navbar.Collapse>
          <Nav className="ms-auto gap-3">
            {["/", "/About", "/Projects", "/Skills", "/Experience", "/Contact"].map(
              (path, i) => (
                <NavLink
                  key={i}
                  to={path}
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav" : "nav-link"
                  }
                  onClick={handleNavClick} // close menu on click
                >
                  {path === "/" ? "Home" : path.replace("/", "")}
                </NavLink>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
