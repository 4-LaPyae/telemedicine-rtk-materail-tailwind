import SabDrawer from "@/components/drawer";
import React from "react";

const AppointmentDrawer = ({ open, closeDrawer }) => {
    const onClose = () => {
        closeDrawer();
    };
    return (
        <SabDrawer
            title={"Add New Appointment"}
            open={open}
            onClose={onClose}
            width="w-1/3"
        ></SabDrawer>
    );
};

export default AppointmentDrawer;
