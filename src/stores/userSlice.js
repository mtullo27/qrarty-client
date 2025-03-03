import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme: "light"
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light"
        }
    }
})

export const { toggleTheme } = userSlice.actions
export default userSlice.reducer
