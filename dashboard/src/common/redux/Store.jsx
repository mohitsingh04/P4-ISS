
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducer";
import thunk from "redux-thunk";

const middleware = [thunk]; // Define an array of middleware

const store = configureStore({
  reducer: reducer,
  middleware: middleware, // Pass the middleware array
});

export default store;