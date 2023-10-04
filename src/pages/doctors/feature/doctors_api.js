import baseUrl from "@/app/hook";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const doctorsApi = createApi({
    reducerPath: "doctorsApi",
    baseQuery: baseUrl,
    tagTypes: ["InHouseDoctor"],
    endpoints: (builder) => ({
        getDoctors: builder.query({
            query({ page, limit, type, filterName }) {
                return {
                    url: `/sys-admin/doctors?page=${page}&limit=${limit}&type=${type}&filterName=${filterName}`,
                    method: "GET",
                };
            },
            providesTags: ["InHouseDoctor"],
        }),
        postDoctors: builder.mutation({
            query: (data) => {
                return {
                    url: "/sys-admin/doctors/add",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["InHouseDoctor"],
        }),
        deleteInhouseDoctor: builder.mutation({
            query: ({ id }) => ({
                url: `/sys-admin/doctors/${id}/inhouse`,
                method: "DELETE",
            }),
            invalidatesTags: ["InHouseDoctor"],
        }),
    }),
});

export const coDoctorApi = createApi({
    reducerPath: "coDoctorApi",
    baseQuery: baseUrl,
    tagTypes: ["CoOperateDoctor"],
    endpoints: (builder) => ({
        getCoDoctors: builder.query({
            query: ({ page, limit, type, filterName }) => ({
                url: `/sys-admin/doctors?page=${page}&limit=${limit}&type=${type}&filterName=${filterName}`,
                method: "GET",
            }),
            providesTags: ["CoOperateDoctor"],
        }),
        postCoDoctors: builder.mutation({
            query: (data) => {
                return {
                    url: "/sys-admin/doctors/add",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["CoOperateDoctor"],
        }),
        deleteCoDoctors: builder.mutation({
            query: ({ id }) => {
                return {
                    url: `/sys-admin/doctors/${id}/cooperate`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["CoOperateDoctor"],
        }),
    }),
});

export const {
    useGetDoctorsQuery,
    usePostDoctorsMutation,
    useDeleteInhouseDoctorMutation,
} = doctorsApi;
export const {
    useGetCoDoctorsQuery,
    usePostCoDoctorsMutation,
    useDeleteCoDoctorsMutation,
} = coDoctorApi;
