import baseUrl from "@/app/hook";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const dashboardApi = createApi({
    reducerPath: "dashboardApi",
    baseQuery: baseUrl,
    endpoints: (builder) => ({
        specialistDropdown: builder.query({
            query() {
                return {
                    url: `/sys-admin/specialists/lists`,
                    method: "GET",
                };
            },
            transformResponse: (response) => {
                response.data = response.data.map((item) => {
                    const d = {
                        id: item._id,
                        ...item,
                    };
                    delete d._id;
                    return d;
                });

                return response;
            },
        }),
    }),
});

export const { useSpecialistDropdown } = dashboardApi;
