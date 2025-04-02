import React, { useEffect, useState } from "react"; // Import React and hooks for state and lifecycle management
import {
  Container, // Bootstrap container for layout
  Row, // Bootstrap row (not used in this code but imported)
  Navbar, // Bootstrap Navbar component
  Offcanvas, // Bootstrap Offcanvas for responsive navigation
  Nav, // Bootstrap Nav for navigation links
  NavDropdown, // Bootstrap dropdown (not used in this code but imported)
} from "react-bootstrap";
import { NavLink } from "react-router-dom"; // React Router for navigation
import "../Header/header.css"; // Import external CSS for styling
import { Link } from "@inertiajs/react";

// Header functional component
const Header = () => {
  const [open, setOpen] = useState(false); // State to track the toggle menu status

  // Toggle menu visibility
  const toggleMenu = () => {
    setOpen(!open); // Toggles the menu open/close state
  };

  // Add sticky header behavior on scroll
  useEffect(() => {
    window.addEventListener("scroll", isSticky); // Adds scroll event listener to check for sticky behavior
    return () => {
      window.removeEventListener("scroll", isSticky); // Cleans up the event listener when component unmounts
    };
  });

  // Function to handle sticky header behavior
  const isSticky = () => {
    const header = document.querySelector('.header-section'); // Selects the header section
    const scrollTop = window.scrollY; // Gets current scroll position
    scrollTop >= 120 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky'); // Adds/removes sticky class based on scroll position
  };

  return (
    <header className="header-section"> {/* Header wrapper with a class for styling */}
      <Container> {/* Container for layout consistency */}
        <Navbar expand="lg" className="p-0"> {/* Bootstrap Navbar component with no padding */}
          {/* Logo Section */}
          <Navbar.Brand>
            <NavLink to="/"> Jet Setters</NavLink> {/* Navigation link for the logo */}
          </Navbar.Brand>
          {/* End Logo Section */}

          {/* Offcanvas component for responsive navigation */}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`} // ID for Offcanvas
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`} // Accessibility label
            placement="start" // Offcanvas placement on the left
            show={open} // Controls visibility of the Offcanvas
          >
            {/* Mobile Logo Section */}
            <Offcanvas.Header>
              <h1 className="logo">Jet Setters</h1> {/* Heading for mobile logo */}
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}> {/* Toggle button for Offcanvas */}
              </span>
            </Offcanvas.Header>
            {/* End Mobile Logo Section */}

            {/* Navigation links inside Offcanvas */}
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3"> {/* Align links to the center */}
                <Link className="nav-link" href={route('home')}>Cruise</Link>
                <Link className="nav-link" href={route('flights_index')}>Flights</Link>
                <Link className="nav-link" href={route('package_index')}>Packages</Link>
                <NavLink className="nav-link" to="/">Rentals</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>


          {/* Right-side buttons */}
          <div className="ms-md-4 ms-2"> {/* Margin for responsive spacing */}
            <Link className="primaryBtn modernBtn d-none d-sm-inline-block" href={route('login')}>
              Login / SignUp
            </Link>


            <li className="d-inline-block d-lg-none ms-3 toggle_btn"> {/* Toggle button for small screens */}
              <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
            </li>
          </div>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header; // Export the Header component
