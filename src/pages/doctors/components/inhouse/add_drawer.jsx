import React, { useState } from "react";
import AddUserIcon from "../../../../app/assets/icons/useradd.svg";
import { Avatar } from "@material-tailwind/react";
import SabButton from "@/components/button";
import DoctorDrawer from "./drawer";

export default function InHouseAddDrawer() {
    const [open, setOpen] = useState(false);

    const closeDrawer = () => setOpen(false);

    return (
        <div className="w-full h-full">
            <SabButton textSize="text-xs" actions={() => setOpen(true)}>
                <Avatar
                    variant="square"
                    className="w-auto h-4 mx-2"
                    src={AddUserIcon}
                />
                Add new doctor
            </SabButton>
            <DoctorDrawer open={open} closeDrawer={closeDrawer} />
        </div>
    );
}
