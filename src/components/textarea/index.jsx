import { Textarea } from "@material-tailwind/react";
import PropsType from "prop-types";

import React from "react";

export default function SabInputTextArea({
    label = "",
    error = false,
    ...rest
}) {
    return (
        <div className="w-full flex flex-col gap-1">
            <h5 className="font-md font-semibold">{label}</h5>
            <Textarea
                labelProps={{
                    className: "hidden",
                }}
                className={`ring-2 ring-transparent focus:ring-primary !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 focus:!border-transparent placeholder:text-blue-gray-200 text-blue-gray-500 ${
                    error
                        ? "!border !border-red-400"
                        : "!border !border-primary"
                }`}
                {...rest}
            />
        </div>
    );
}

SabInputTextArea.defaultProps = {
    label: PropsType.string,
};
