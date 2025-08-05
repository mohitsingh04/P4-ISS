import React, { useCallback, useEffect, useState } from "react";
import Pageheader from "../../layouts/layoutcomponents/Pageheader";
import { API } from "../../context/API";
import MainRoles from "./RoleBaseComponents/MainRoles";
import PropertyManager from "./RoleBaseComponents/PropertyManager";

const Dashboard = () => {
  const [authUser, setAuthUser] = useState("");
  const [properties, setProperties] = useState([]);
  const getProperties = useCallback(async () => {
    try {
      const response = await API.get(`/property`);
      setProperties(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProperties();
  }, [getProperties]);

  const getAuthUser = useCallback(async () => {
    try {
      const response = await API.get(`/profile`);
      setAuthUser(response.data);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getAuthUser();
  }, [getAuthUser]);

  return (
    <div>
      <Pageheader
        homepage="Dashboard 01"
        activepage="Home"
        page="Dashboard 01"
      />
      {(authUser?.role === "Super Admin" ||
        authUser?.role === "Editor" ||
        authUser?.role === "Seo Manager") && (
        <MainRoles authUser={authUser} properties={properties} />
      )}
      {authUser?.role === "Property Manager" && (
        <PropertyManager authUser={authUser} properties={properties} />
      )}
    </div>
  );
};

export default Dashboard;
