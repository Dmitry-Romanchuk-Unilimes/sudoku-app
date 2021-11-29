import reducer from "reducers";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

function configureStore(initialState = {}) {
  const store = createStore(reducer, initialState, devToolsEnhancer({}));
  return store;
}

export default configureStore;
