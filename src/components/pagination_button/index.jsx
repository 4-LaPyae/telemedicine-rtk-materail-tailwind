import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export default function SabPaginationButton({
    link,
    variable = "solid",
    textSize = "text-lg",
    padding = "p-4",
    width = "w-full",
    flex = "flex justify-between items-center",
    children,
    actions = () => {},
    disabled = false,
    ...rest
}) {
    const style =
        variable === "solid"
            ? `${flex} bg-primary font-mono rounded-md ${width} ${padding} ${textSize} ${
                  disabled ? "text-gray-300" : "text-primary border-primary"
              }`
            : `${flex} border-2  font-mono rounded-md ${width} ${padding} ${textSize} bg-transparent ${
                  disabled ? "text-gray-300" : "text-primary border-primary"
              }`;

    return (
        <Link
            to={link}
            {...rest}
            className={style}
            onClick={actions}
            style={{ pointerEvents: disabled ? "none" : "" }}
        >
            {children}
        </Link>
    );
}
