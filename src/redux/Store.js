import { configureStore } from "@reduxjs/toolkit";
import pokeSlice from "./Features/PokeSlice";

export default configureStore({ 
  reducer: {
    app: pokeSlice,
  }
 });