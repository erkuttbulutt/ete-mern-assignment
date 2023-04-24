import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import modalReducer from "./reducers/modal";
import postReducer from "./reducers/post";
import productReducer from "./reducers/product";


const initialState = {};

const reducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  posts: postReducer,
  products:productReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
