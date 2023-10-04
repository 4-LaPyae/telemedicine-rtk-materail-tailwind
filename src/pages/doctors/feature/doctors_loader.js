import { clearLocalStorage } from "@/utils/localstorage";
import { doctorsApi } from "./doctors_api";

export const doctorListLoader =
    (dispatch, hideLoader) =>
    async ({ request }) => {
        console.log({ request });
        const page = request.url.split("?page=")[1] ?? 1;
        const promise = dispatch(
            doctorsApi.endpoints.getDoctors.initiate({
                page: page,
                limit: 10,
                type: "2",
            }),
        );
        request.signal.onabort = promise.abort;
        const result = await promise;
        if (result.data.authorized) {
            hideLoader();
            return {
                data: result.data.data,
                isSuccess: result.isSuccess,
                isLoading: result.isLoading,
            };
        } else {
            hideLoader();
            clearLocalStorage("user");
            window.location.href = "/login";
        }
    };
