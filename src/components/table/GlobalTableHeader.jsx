import React from "react";
import { Typography } from "@material-tailwind/react";

const GlobalTableHeader = ({ headers }) => {
    return (
        <thead>
            <tr>
                {headers.map((head, index) => (
                    <th
                        key={head}
                        className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4  transition-colors hover:bg-blue-gray-50"
                    >
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="flex items-center justify-between gap-2 font-bold leading-none opacity-70"
                        >
                            {head}
                        </Typography>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default GlobalTableHeader;
