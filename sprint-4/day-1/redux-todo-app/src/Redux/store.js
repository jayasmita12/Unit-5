

import {legacy_createStore as createStore} from "redux"
import { todoReducer } from "./reducer"

 export const store = createStore(todoReducer,{todo:[]})