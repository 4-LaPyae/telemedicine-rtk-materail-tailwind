import baseUrl from "@/app/hook";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
export const specialistApi = createApi({
    reducerPath: "specialistApi",
    baseQuery: baseUrl,
    tagTypes: ["Specialists"],
    endpoints: (builder) => ({
        getSpecialists: builder.query({
            query: ({ page, limit, filterName }) => ({
                url: `/sys-admin/specialists?page=${page}&limit=${limit}&filterName=${filterName}`,
                method: "GET",
            }),
            providesTags: ["Specialists"],
        }),
    }),
});

export const { useGetSpecialistsQuery } = specialistApi;
