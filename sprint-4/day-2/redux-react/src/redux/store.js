import {legacy_createStore} from "redux"
import { counterReducer } from "./reducer"

export const store = legacy_createStore(counterReducer,{counter:0})

// store.subscibe(()=>{
//     console.log("Subscribe",store.getstate())
// })
