import { getLocalStorage } from "@/utils/localstorage";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
const url = "https://api.telemed.sabahna.com/api";
// const url = "http://192.168.100.4:5002/api";

const baseUrl = fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: async (headers, { _ }) => {
        const user = await getLocalStorage("user");
        if (user) {
            headers.set("Authorization", `Bearer ${user.token}`);
            headers.set("Cache-Control", "no-cache");
        }
        return headers;
    },
});

export default baseUrl;
