import React, { Fragment } from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const Pageheader = (props) => {
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div className="">
          <h1 className="page-title fw-semibold fs-20 mb-0">Dashboard</h1>
          <div className="">
            <Breadcrumb className="mb-0">
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
                Dashboard
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link
            to={`/dashboard/property/create`}
            className="btn btn-primary btn-wave waves-effect waves-light me-2"
          >
            <i className="fe fe-plus mx-1 align-middle"></i>Add Property
          </Link>
          {/* <button
            type="button"
            className="btn btn-success btn-wave waves-effect waves-light"
          >
            <i className="fe fe-log-in mx-1 align-middle"></i>Export
          </button> */}
        </div>
      </div>
      {/* <!-- Page Header Close --> */}
    </Fragment>
  );
};

export default Pageheader;
