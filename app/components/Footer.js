import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Page from "./Page";

function HomeFooter() {
  return (
    <Container className="border-top text-center small text-muted py-3">
      <p>
        <Link to="/" className="mx-1">
          Home
        </Link>{" "}
        |
        <Link className="mx-1" to="/about-us">
          About Us
        </Link>{" "}
        |
        <Link className="mx-1" to="/terms">
          Terms
        </Link>
      </p>
      <p className="m-0">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <Link to="/" className="text-muted">
          ComplexApp
        </Link>
        . All rights reserved.
      </p>
    </Container>
  );
}

export default HomeFooter;