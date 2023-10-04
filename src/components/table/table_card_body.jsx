import { CardBody } from "@material-tailwind/react";
import React from "react";

export default function TableCardBody({ children }) {
    return <CardBody className="overflow-scroll px-0">{children}</CardBody>;
}
