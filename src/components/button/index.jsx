import { Button } from "@material-tailwind/react";
import React from "react";

export default function SabButton({
    variable = "solid",
    textSize = "text-lg",
    padding = "p-4",
    width = "w-full",
    flex = "flex justify-between items-center",
    children,
    actions = () => {},
    ...rest
}) {
    const style =
        variable === "solid"
            ? `${flex} bg-primary font-mono rounded-md ${width} ${padding} ${textSize}`
            : `${flex} border-2 border-primary font-mono rounded-md ${width} ${padding} ${textSize} bg-transparent text-primary`;

    return (
        <Button {...rest} className={style} onClick={actions}>
            {children}
        </Button>
    );
}
