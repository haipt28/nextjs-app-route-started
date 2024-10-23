import { createSlice } from "@reduxjs/toolkit"

const initialState: any = {
  viewMode: "GRID",
}
const common = createSlice({
  name: "common",
  initialState,
  reducers: {
    setViewMode(state, action) {
      const { viewMode } = action.payload
      state.viewMode = viewMode
    },
  },
})

const { reducer, actions } = common

export const { setViewMode } = actions

export default reducer
