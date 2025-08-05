// DataRequest.js
import { API } from "../context/API";
import { useEffect, useState } from "react";

export default function GetToken() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await API.get("/profile/token");
        setToken(response.data.token);
      } catch (error) {
        console.error(error);
      }
    };

    getToken();
  }, []);
  return token;
}
