import { createApi } from "@reduxjs/toolkit/dist/query";
import baseUrl from "@/app/hook";
export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: baseUrl,
    tagTypes: ["SysAdmin"],
    endpoints: (builder) => ({
        getAdminLists: builder.query({
            query: () => ({
                url: `/sys-admin/`,
                method: "GET",
            }),
            providesTags: ["SysAdmin"],
        }),
    }),
});

export const {} = adminApi;
