import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer mt-auto py-3 bg-white text-center">
        <div className="container">
          <span className="text-muted">
            Copyright &copy; <span id="year">{new Date().getFullYear()}</span>.
            Designed with
            <span className="bi bi-heart-fill text-danger mx-1"></span>
            by
            <Link to="#">
              <span className="fw-semibold mx-1 text-primary text-decoration-underline">
                Yogprerna
              </span>
            </Link>
            All rights reserved
          </span>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
