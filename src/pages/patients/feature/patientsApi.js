import baseUrl from "@/app/hook";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
export const patientsApi = createApi({
    reducerPath: "patientsApi",
    baseQuery: baseUrl,
    tagTypes: ["Patients"],
    endpoints: (builder) => ({
        getPatients: builder.query({
            query: ({ page, limit, filterName }) => ({
                url: `/sys-admin/patients?page=${page}&limit=${limit}&filterName=${filterName}`,
                method: "GET",
            }),
            providesTags: ["Patients"],
        }),
        addPatient: builder.mutation({
            query: (patient) => ({
                url: `/sys-admin/patients/store`,
                method: "POST",
                body: patient,
            }),
            invalidatesTags: ["Patients"],
        }),
        updatePatient: builder.mutation({
            query: ({ id, patient }) => ({
                url: `/sys-admin/patients/${id}`,
                method: "PUT",
                body: patient,
            }),
            invalidatesTags: ["Patients"],
        }),
        deletePatient: builder.mutation({
            query: ({ id }) => ({
                url: `/sys-admin/patients/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Patients"],
        }),
    }),
});
export const {
    useGetPatientsQuery,
    useAddPatientMutation,
    useUpdatePatientMutation,
    useDeletePatientMutation,
} = patientsApi;
