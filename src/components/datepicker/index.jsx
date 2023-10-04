import { Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Datepicker from "tailwind-datepicker-react";

const options = {
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    inputDateFormatProp: {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    },
    datepickerClassNames: "top-18",
    language: "en-CA",
    defaultDate: null,
};

export default function SabDatePicker({
    label,
    value,
    handleChange,
    error = false,
}) {
    const [show, setShow] = useState(false);

    const handleClose = (state) => {
        setShow(state);
    };

    return (
        <div className="relative">
            <Typography className="font-bold mb-1">{label}</Typography>
            <Datepicker
                options={{
                    ...options,
                    theme: {
                        background: "",
                        todayBtn: "hidden",
                        clearBtn: "",
                        icons: "",
                        text: "Hello",
                        disabledText: "",
                        input: `ring-2 ring-transparent focus:ring-primary !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 focus:!border-transparent placeholder:text-blue-gray-400 text-gray-700 focus:outline-none px-4 font-normal ${
                            error
                                ? "!border !border-red-400"
                                : "!border !border-primary"
                        }`,
                        inputIcon: "hidden",
                        selected: "bg-primary hover:bg-secondary",
                    },
                }}
                value={value}
                onChange={handleChange}
                show={show}
                setShow={handleClose}
                changeSelectedDate={(action, date) => {
                    console.log("h", action);
                }}
            />
        </div>
    );
}
