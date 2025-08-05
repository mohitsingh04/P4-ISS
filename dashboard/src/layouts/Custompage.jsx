import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../common/redux/Store";
import { Outlet } from "react-router-dom";
import Switcher from "./layoutcomponents/Switcher";
import { API } from "../context/API";

const Custompage = () => {
  const [lateLoad, setlateLoad] = useState(false);

  const Authentication = () => {
    document.body.classList.add("login-img");
    return () => {
      document.body.classList.remove("login-img");
    };
  };

  const getExpriy = useCallback(async () => {
    try {
      const response = await API.get(`/verify-email/check/expiry`);
      console.log(response.data.message);
    } catch (error) {
      console.log(error.response.data.error);
    }
  }, []);
  useEffect(() => {
    getExpriy();
  }, [getExpriy]);

  useEffect(() => {
    setlateLoad(true);
    Authentication();
  });

  return (
    <Fragment>
      <div style={{ display: `${lateLoad ? "block" : "none"}` }}>
        <Provider store={store}>
          <Switcher />
          <div className="page">
            <div className="page login-page ">
              <Outlet />
            </div>
          </div>
        </Provider>
      </div>
    </Fragment>
  );
};

export default Custompage;
