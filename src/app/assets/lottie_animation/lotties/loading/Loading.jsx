import { useLottie } from "lottie-react";
import loading_animation from "./loading.json";
export const LoadingAnimation = () => {
    const options = {
        animationData: loading_animation,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return View;
};
