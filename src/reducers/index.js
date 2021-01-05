//Acá almaceno todos los reducers
import { combineReducers } from "redux";

import moviesReducer from "./movies-reducer";

export default combineReducers({
  movies: moviesReducer
});