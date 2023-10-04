import { appointmentsApi } from "@/pages/appointments/feature/appointments_api";
import { dashboardApi } from "@/pages/dashboard/feature/dashboard_api";
import { dashboardReducer } from "@/pages/dashboard/feature/dashboard_slice";
import { coDoctorApi, doctorsApi } from "@/pages/doctors/feature/doctors_api";
import { loginApi } from "@/pages/login/feature/login_api";
import { patientsApi } from "@/pages/patients/feature/patientsApi";
import { AuthSliceReducer } from "@/utils/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import login_slice from "@/pages/login/feature/login_slice";
import { specialistApi } from "@/pages/specialists/feature/specialistApi";
import patientReducer from "@/pages/patients/feature/patientSlice";
import { adminApi } from "@/pages/admin/feature/adminApi";
export const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        dashboard: dashboardReducer,
        login_slice,
        PatientSlice: patientReducer,
        [loginApi.reducerPath]: loginApi.reducer,
        [doctorsApi.reducerPath]: doctorsApi.reducer,
        [coDoctorApi.reducerPath]: coDoctorApi.reducer,
        [dashboardApi.reducerPath]: dashboardApi.reducer,
        [appointmentsApi.reducerPath]: appointmentsApi.reducer,
        [patientsApi.reducerPath]: patientsApi.reducer,
        [specialistApi.reducerPath]: specialistApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat([
            loginApi.middleware,
            doctorsApi.middleware,
            dashboardApi.middleware,
            coDoctorApi.middleware,
            appointmentsApi.middleware,
            patientsApi.middleware,
            specialistApi.middleware,
            adminApi.middleware,
        ]),
});

setupListeners(store.dispatch);
