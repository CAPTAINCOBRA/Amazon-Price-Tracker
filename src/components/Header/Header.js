import React, { useEffect, useRef, useState } from "react";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const autoHideRef = useRef(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const onScroll = () => {
    const el_autohide = document.querySelector(".autohide");

    if (el_autohide) {
      let scroll_top = window.scrollY;
      if (scroll_top < lastScrollTop) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      setLastScrollTop(scroll_top);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className="autohide sticky-top HeaderColor"
        ref={autoHideRef}
      >
        <Image src="/images/title_image.jpg" height={50} className="logo" />
        {/* <Image src="/logo192.png" height={50} /> */}
        <Container>
          <Navbar.Brand as={Link} to="/">
            PriceWise
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="watchlist">
              WatchList
            </Nav.Link>
            <Nav.Link as={Link} to="about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
