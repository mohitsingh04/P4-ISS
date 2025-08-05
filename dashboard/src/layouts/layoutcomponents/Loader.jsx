import React, { Fragment } from "react";
import ALLImages from "../../common/Imagesdata";

const Loader = () => {
  return (
    <Fragment>
      <div id="global-loader">
        <img
          src={ALLImages("loader")}
          className="loader-img"
          alt="Loading...."
        />
      </div>
    </Fragment>
  );
};

export default Loader;
