import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../common/redux/Store";
import Header from "./layoutcomponents/Header";
import Sidebar from "./layoutcomponents/Sidebar";
import Footer from "./layoutcomponents/Footer";
// import PropertySidebar from "./layoutcomponents/SideBar2";
import Tabtotop from "./layoutcomponents/Tabtotop";
import PropertySideBar from "./layoutcomponents/PropertySideBar";
import { API } from "../context/API";

const App = () => {
  const [lateLoad, setlateLoad] = useState(false);
  const [authUser, setAuthUser] = useState("");

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

  const getAuthUser = useCallback(async () => {
    try {
      const response = await API.get(`/profile`);
      setAuthUser(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, []);

  useEffect(() => {
    setlateLoad(true);
  });

  useEffect(() => {
    getAuthUser();
  }, [getAuthUser]);

  return (
    <Fragment>
      <div style={{ display: `${lateLoad ? "block" : "none"}` }}>
        <Provider store={store}>
          <HelmetProvider>
            <Helmet
              htmlAttributes={{
                lang: "en",
                dir: "ltr",
                "data-nav-layout": "vertical",
                "data-theme-mode": "light",
                "data-header-styles": "light",
                "data-menu-styles": "light",
                "data-vertical-style": "overlay",
              }}
            >
              <body className=""></body>
            </Helmet>
          </HelmetProvider>
          <div className="page">
            <Header />
            {authUser?.role === "Property Manager" ? (
              <PropertySideBar />
            ) : (
              <Sidebar />
            )}
            {/* <PropertySideBar/> */}
            <div className="main-content app-content">
              <div className="container-fluid">
                <Outlet />
              </div>
            </div>
            <Footer />
          </div>
        </Provider>
      </div>
      <Tabtotop />
    </Fragment>
  );
};

export default App;
