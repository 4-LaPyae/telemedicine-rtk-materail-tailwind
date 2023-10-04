import { clearLocalStorage } from "@/utils/localstorage";
import { dashboardApi } from "./dashboard_api";

export const dbSpecialistDropdown = (dispatch, hideLoader) => async () => {
    const promise = dispatch(
        dashboardApi.endpoints.specialistDropdown.initiate(),
    );
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
