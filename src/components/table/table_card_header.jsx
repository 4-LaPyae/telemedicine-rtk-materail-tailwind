import { CardHeader } from "@material-tailwind/react";
import React from "react";

export default function TableCardHeader({ children }) {
    return (
        <CardHeader floated={false} shadow={false} className="rounded-none">
            {children}
        </CardHeader>
    );
}
