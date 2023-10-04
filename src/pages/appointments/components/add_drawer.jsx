import React, { useState } from "react";
import { Avatar } from "@material-tailwind/react";
import SabButton from "@/components/button";
import AppointmentDrawer from "./drawer";
import Add from "../../../app/assets/icons/add.svg";

export default function AppointAddDrawer() {
    const [open, setOpen] = useState(false);

    const closeDrawer = () => setOpen(false);

    return (
        <div className="w-full h-full">
            <SabButton textSize="text-xs" actions={() => setOpen(true)}>
                <Avatar
                    variant="square"
                    className="w-auto h-4 mx-2"
                    src={Add}
                />
                Add new appointment
            </SabButton>
            <AppointmentDrawer open={open} closeDrawer={closeDrawer} />
        </div>
    );
}
