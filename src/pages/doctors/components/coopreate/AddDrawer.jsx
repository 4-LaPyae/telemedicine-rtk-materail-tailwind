import React, { useState } from "react";
import AddUserIcon from "../../../../app/assets/icons/useradd.svg";
import SabButton from "@/components/button";
import { Avatar } from "@material-tailwind/react";
import CoDoctorDrawer from "./CoDoctorDrawer";

const AddDrawer = () => {
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
            <CoDoctorDrawer open={open} closeDrawer={closeDrawer} />
        </div>
    );
};

export default AddDrawer;
