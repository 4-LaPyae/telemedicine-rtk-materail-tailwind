import baseUrl from "@/app/hook";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const appointmentsApi = createApi({
    reducerPath: "appointmentsApi",
    baseQuery: baseUrl,
    tagTypes: ["Appointment"],
    endpoints: (builder) => ({
        getAppointment: builder.query({
            query({ page, limit, patientName, doctorName }) {
                return {
                    url: `/sys-admin/appointments?page=${page}&limit=${limit}&doctorName=${doctorName}&patientName=${patientName}`,
                    method: "GET",
                };
            },
            providesTags: ["Appointment"],
        }),
    }),
});

export const { useGetAppointmentQuery } = appointmentsApi;
