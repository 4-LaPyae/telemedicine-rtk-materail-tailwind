import { useLottie } from "lottie-react";
import no_data_animation from "../../app/assets/lottie_animation/lotties/no_data.json";
export const GlobalNoDataAnimation = () => {
    const options = {
        animationData: no_data_animation,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return View;
};
