import GlobalDeleteButton from "@/components/deletebutton/GlobalDeleteButton";
import {
    Avatar,
    Chip,
    Typography,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import patientNoPhoto from "../../../app/assets/images/patient.png";
import EditUserIcon from "../../../app/assets/icons/useredit.svg";

import React from "react";
import { useDispatch } from "react-redux";
import { setPatientEditData } from "../feature/patientSlice";
const GLOBAL_DELETE_CONTENT = {
    header: "Are you sure?",
    body_content:
        "Do you really want to delete patient? This process cannot be undone",
    tooltip_content: "Delete Patient",
};

const PatientTableItems = ({ item, index, setOpen }) => {
    const isLast = index === item.length - 1;
    const classes = isLast ? "p-2" : "p-2 border-b border-blue-gray-50";
    const name = item.firstName + " " + item.lastName;

    const dispatch = useDispatch();

    const editHandler = (e, item) => {
        e.preventDefault();
        setOpen(true);
        dispatch(setPatientEditData(item));
    };
    return (
        <>
            <tr>
                <td key={item._id} className={classes} width={"300px"}>
                    <div className="flex items-center gap-4">
                        <Avatar
                            src={patientNoPhoto}
                            alt={name}
                            size="sm"
                            // onError={(e) => {
                            //     checkImageLink(
                            //         e,
                            //         patient.gender,
                            //     );
                            // }}
                        />
                        <div className="flex flex-col">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                            >
                                {name}
                            </Typography>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                            >
                                {item.email || "N/A"}
                            </Typography>
                        </div>
                    </div>
                </td>
                <td className={classes}>
                    <div className="flex flex-col">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {item.phone}
                        </Typography>
                    </div>
                </td>
                <td className={classes}>
                    <div className="flex flex-col">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {item.dob.split(" ")[0]}
                        </Typography>
                    </div>
                </td>

                <td className={classes}>
                    <div className="w-max">
                        <Chip
                            variant="ghost"
                            size="sm"
                            value={item.bloodType}
                            color={
                                item.bloodType === "UNKNOWN" ? "info" : "red"
                            }
                        />
                    </div>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.gender}
                    </Typography>
                </td>
                <td className={classes}>
                    <Tooltip content="Edit Patient">
                        <IconButton
                            variant="text"
                            color="blue-gray"
                            onClick={(e) => editHandler(e, item)}
                        >
                            <Avatar
                                variant="square"
                                className="w-auto h-4"
                                src={EditUserIcon}
                            />
                        </IconButton>
                    </Tooltip>
                    <GlobalDeleteButton
                        type={"patient"}
                        id={item._id}
                        deleteHeader={GLOBAL_DELETE_CONTENT.header}
                        bodyContent={GLOBAL_DELETE_CONTENT.body_content}
                        tooltipContent={GLOBAL_DELETE_CONTENT.tooltip_content}
                    />
                </td>
            </tr>
        </>
    );
};

export default PatientTableItems;
