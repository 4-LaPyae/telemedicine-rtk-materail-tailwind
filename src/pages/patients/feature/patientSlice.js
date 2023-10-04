import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    patient_edit_data: null,
};

const patientSlice = createSlice({
    name: "patients",
    initialState,
    reducers: {
        setPatientEditData: (state, { payload }) => {
            state.patient_edit_data = payload;
        },
        deletePatientEditData: (state, { payload }) => {
            state.patient_edit_data = null;
        },
    },
});

export const { setPatientEditData, deletePatientEditData } =
    patientSlice.actions;

export default patientSlice.reducer;
