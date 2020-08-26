import { combineReducers } from "redux";

import miscReducer from "./miscReducer";
import authReducer from "./authReducer";

export default combineReducers({
  misc: miscReducer,
  auth: authReducer
});
