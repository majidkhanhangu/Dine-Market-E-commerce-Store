import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
      name : "abdul",
      initialState : {
            value : ""
      },
      reducers: {
            getid:  (state,action) => {
                  state.value = action.payload
            }
      }

})
export const {getid } = slice.actions

export default slice.reducer