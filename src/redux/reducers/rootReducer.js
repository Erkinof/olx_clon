import { combineReducers } from "redux";
import createReducer from "../reducers/create-reducer";
import likeReducer from "../reducers/like-reducer";

const rootReduser = combineReducers ({
  createReducer,
  likeReducer

})

export default rootReduser