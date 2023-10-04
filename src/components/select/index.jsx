import { Option, Select, Typography } from "@material-tailwind/react";
import React, { cloneElement, useEffect, useState } from "react";

export default function SabSelect({
    label = "",
    options = [],
    value = null,
    error = false,
    onChange,
}) {
    return (
        <div>
            <Typography className="font-bold mb-1">{label}</Typography>
            <Select
                labelProps={{
                    className: "hidden",
                }}
                size="lg"
                className={`ring-2 ring-transparent focus:ring-primary !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 focus:!border-transparent placeholder:text-blue-gray-200 text-blue-gray-500 ${
                    error
                        ? "!border !border-red-400"
                        : "!border !border-primary"
                }`}
                selected={(element) =>
                    element &&
                    cloneElement(element, {
                        className:
                            "flex items-center px-0 gap-2 pointer-events-none",
                    })
                }
                value={value ?? "d0"}
                onChange={onChange}
            >
                {[{ id: "d0", name: label }, ...options].map(({ id, name }) => (
                    <Option
                        key={id}
                        value={id}
                        className="flex items-center gap-2 text-md"
                        disabled={id === "d0" ? true : false}
                    >
                        {name}
                    </Option>
                ))}
            </Select>
        </div>
    );
}
