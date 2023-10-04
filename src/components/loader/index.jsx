import React, { createContext, useRef } from "react";
import Spinner from "../../app/assets/gif/spinner.gif";
import { Avatar } from "@material-tailwind/react";
import Logo from "../../app/assets/images/Healthy_Hub_Logo.png";

export const LoaderContext = createContext();

export default function LoaderProvider({ children }) {
    const loaderRef = useRef();

    const showLoader = () => {
        loaderRef.current?.classList.remove("hidden");
    };

    const hideLoader = () => {
        loaderRef.current?.classList.add("hidden");
    };

    return (
        <LoaderContext.Provider value={{ showLoader, hideLoader }}>
            {children}
            <div
                ref={loaderRef}
                className={`bg-white w-full h-full fixed z-50 hidden`}
            >
                <div className="flex justify-center items-center h-full">
                    <Avatar
                        src={Logo}
                        variant="square"
                        className="w-28 h-28 animate-pulse"
                    />
                </div>
            </div>
        </LoaderContext.Provider>
    );
}
