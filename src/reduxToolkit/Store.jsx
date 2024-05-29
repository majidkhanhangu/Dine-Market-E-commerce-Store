import { configureStore } from "@reduxjs/toolkit";
import slice from "./Counterslice"
export const store = configureStore({
   reducer : {slice}
 })  