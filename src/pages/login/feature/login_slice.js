import { createSlice } from "@reduxjs/toolkit";
import { loginApi } from "./login_api";

const initialState = {
    user: null,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUserData: (state, { payload }) => {
            state.user = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            loginApi.endpoints.postLogin.matchFulfilled,
            (state, { payload }) => {
                console.log("Slice ", payload);
                state.user = payload.data;
            },
        );
    },
});

export const { setUserData } = loginSlice.actions;
export default loginSlice.reducer;
