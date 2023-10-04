import React from "react";

export default function SabContainer({ customStyle, children }) {
    return <div className={customStyle}>{children}</div>;
}
