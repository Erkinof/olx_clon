import {createStore} from "redux";
import rootReduser from "../reducers/rootReducer";

const store = createStore(rootReduser);

export {store} 