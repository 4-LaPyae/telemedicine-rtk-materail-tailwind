import { Card } from "@material-tailwind/react";
import React from "react";

export default function TableCardContainer({ children }) {
    return <Card className="h-full w-full">{children}</Card>;
}
