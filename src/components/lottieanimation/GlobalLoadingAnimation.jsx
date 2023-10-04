import { useLottie } from "lottie-react";
import loading from "../../app/assets/lottie_animation/lotties/loading/docLoading.json";
export const GlobalLoadingAnimation = () => {
    const options = {
        animationData: loading,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return View;
};
