import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigator = useNavigate();
  return (
    <div className="page">
      <div className="page-content error-page error2">
        <div className="container text-center">
          <div className="error-template">
            <h1 className="display-1 text-fixed-primary mb-2">
              404<span className="fs-20">error</span>
            </h1>
            <h5 className="error-details text-fixed-primary">
              Sorry, an error has occured, Requested page not found!
            </h5>
            <div className="text-center">
              <button
                onClick={() => navigator(-1)}
                className="btn btn-primary mt-5 mb-5"
              >
                <i className="fa fa-long-arrow-left"></i> Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
