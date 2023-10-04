import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    IconButton,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import DeleteIcon from "../../app/assets/icons/delete.svg";
import {
    useDeleteCoDoctorsMutation,
    useDeleteInhouseDoctorMutation,
} from "@/pages/doctors/feature/doctors_api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { doctorsApi } from "@/pages/doctors/feature/doctors_api";
import { useDeletePatientMutation } from "@/pages/patients/feature/patientsApi";

const GlobalDeleteButton = ({
    handler,
    type,
    id,
    deleteHeader,
    bodyContent,
    tooltipContent,
}) => {
    const [open, setOpen] = useState(false);

    const [deletePatient] = useDeletePatientMutation();
    const handleOpen = () => setOpen(true);

    const deleteHandler = () => {
        if (type == "inhouse") {
            handler({ id });
        }
        if (type == "cooperate") {
            handler({ id });
        }
        if (type == "patient") {
            deletePatient({ id });
        }
        setOpen(false);
    };
    const handleClose = () => setOpen(false);

    return (
        <>
            <Tooltip content={tooltipContent}>
                <IconButton variant="text" onClick={handleOpen}>
                    {/* <Avatar
                        style={{
                            color: "red",
                        }}
                        variant="square"
                        className="w-auto h-4 "
                        src={ */}
                    <FontAwesomeIcon icon={faTrash} color="red" size="xl" />
                    {/* }
                    /> */}
                </IconButton>
            </Tooltip>
            <Dialog size="xs" open={open} handler={handleOpen}>
                <div className="flex justify-center">
                    <DialogHeader>{deleteHeader}</DialogHeader>
                </div>
                <DialogBody divider>{bodyContent}</DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="gray"
                        onClick={handleClose}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="red"
                        onClick={deleteHandler}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};

export default GlobalDeleteButton;
