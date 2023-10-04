import { createSlice } from "@reduxjs/toolkit";
import { dashboardApi } from "./dashboard_api";

export const dashboardSlice = createSlice({
    name: "dashboardSlice",
    initialState: {
        specialistDropdown: [],
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            dashboardApi.endpoints.specialistDropdown.matchFulfilled,
            (state, { payload }) => {
                state.specialistDropdown = payload.data;
            },
        );
    },
});
export const dashboardReducer = dashboardSlice.reducer;
