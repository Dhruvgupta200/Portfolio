import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="glass-panel mx-4 mt-3">
      <Container>
        <Navbar.Brand className="fw-bold text-black">
          Dhruv Gupta
        </Navbar.Brand>

        <Navbar.Toggle />

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
