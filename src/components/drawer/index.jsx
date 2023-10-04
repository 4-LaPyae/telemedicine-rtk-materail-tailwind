import {
    Avatar,
    Drawer,
    IconButton,
    ThemeProvider,
    Typography,
} from "@material-tailwind/react";
import React from "react";
import CloseIcon from "../../app/assets/icons/close.svg";

const theme = {
    drawer: {
        styles: {
            base: {
                drawer: {
                    position: "fixed",
                },
                overlay: {
                    position: "fixed",
                    top: "top-0",
                    left: "left-0",
                    width: "w-full",
                    height: "h-full",
                    bgOpacity: "bg-opacity-30",
                },
            },
        },
    },
};

export default function SabDrawer({
    title,
    children,
    open,
    onClose,
    width = "w-1/4",
}) {
    return (
        <ThemeProvider value={theme}>
            <Drawer
                placement="right"
                open={open}
                onClose={onClose}
                className={`${
                    open ? `!max-w-none ${width} overflow-y-auto` : ""
                }`}
            >
                <div className="mb-6 flex flex-col">
                    <div className="flex items-center justify-between w-full border-b-2 py-4 px-2">
                        <Typography variant="h5" color="blue-gray">
                            {title}
                        </Typography>
                        <IconButton
                            variant="text"
                            color="blue-gray"
                            onClick={onClose}
                        >
                            <Avatar
                                variant="square"
                                src={CloseIcon}
                                className="w-8 h-8"
                            />
                        </IconButton>
                    </div>
                    {children}
                </div>
            </Drawer>
        </ThemeProvider>
    );
}
