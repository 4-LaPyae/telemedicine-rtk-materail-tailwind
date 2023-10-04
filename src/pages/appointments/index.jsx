import React, { useState } from "react";
import { useGetAppointmentQuery } from "./feature/appointments_api";
import TableCardContainer from "@/components/table/table_card_container";
import TableCardHeader from "@/components/table/table_card_header";
import { Typography } from "@material-tailwind/react";
import AppointAddDrawer from "./components/add_drawer";

const Appointment = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [doctorName, setDoctorName] = useState("");
    const [patientName, setPatientName] = useState("");

    const fetchData = {
        page,
        limit,
        doctorName,
        patientName,
    };
    const { data, isLoading } = useGetAppointmentQuery({ fetchData });

    console.log(data);

    return (
        <div className="m-2">
            <TableCardContainer>
                <TableCardHeader>
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Appointments
                            </Typography>
                            <Typography
                                color="gray"
                                className="mt-1 font-normal"
                            >
                                See all appointments
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <AppointAddDrawer />
                        </div>
                    </div>
                </TableCardHeader>
            </TableCardContainer>
        </div>
    );
};

export default Appointment;
