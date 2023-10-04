import SabButton from "@/components/button";
import SabDatePicker from "@/components/datepicker";
import SabDrawer from "@/components/drawer";
import SabInput from "@/components/input";
import SabSelect from "@/components/select";
import SabInputTextArea from "@/components/textarea";
import AddUserIcon from "../../../app/assets/icons/useradd.svg";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    useAddPatientMutation,
    useUpdatePatientMutation,
} from "../feature/patientsApi";
import { Avatar } from "@material-tailwind/react";
import { deletePatientEditData } from "../feature/patientSlice";
const initialState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "MALE",
    dob: "",
    profile: null,
    password: "kttguest",
    bloodType: "UNKNOWN",
    allergies: null,
};

export default function PatientDrawer({ open, setOpen }) {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState(null);
    const [addPatient, { isLoading }] = useAddPatientMutation();
    const [updatePatient, { isLoading: isLoadingUpdatePatient }] =
        useUpdatePatientMutation();
    const dispatch = useDispatch();
    const { patient_edit_data } = useSelector((state) => state.PatientSlice);

    const handleStateChange = (val) => {
        setState((prev) => ({ ...prev, ...val }));
    };
    const validation = (val) => {
        let errors = {};
        if (!Boolean(val.firstName)) errors.firstName = true;
        if (!Boolean(val.lastName)) errors.lastName = true;
        if (!Boolean(val.email)) errors.email = true;
        if (!Boolean(val.phone)) errors.phone = true;
        if (!Boolean(val.dob)) errors.dob = true;
        return errors;
    };

    const handleCreateSubmit = () => {
        if (Object.entries(validation(state)).length > 0) {
            setError(validation(state));
        } else {
            setError(null);
            addPatient(state)
                .unwrap()
                .then((result) => {
                    console.log({ result });
                    if (!result.error) {
                        onClose();
                    }
                });
        }
    };
    const handleUpdateSubmit = () => {
        if (Object.entries(validation(state)).length > 0) {
            setError(validation(state));
        } else {
            const { status, _id, ...rest } = state;
            updatePatient({ id: _id, patient: rest })
                .unwrap()
                .then((result) => {
                    console.log({ result });
                    if (!result.error) {
                        onClose();
                    }
                });
        }
    };

    const onClose = () => {
        setState(initialState);
        setError(null);
        setOpen(false);
        dispatch(deletePatientEditData());
    };
    useEffect(() => {
        if (patient_edit_data) {
            setState(patient_edit_data);
        }
    }, [patient_edit_data]);

    return (
        <div className="w-full h-full">
            <SabButton textSize="text-xs" actions={() => setOpen(true)}>
                <Avatar
                    variant="square"
                    className="w-auto h-4 mx-2"
                    src={AddUserIcon}
                />
                Add new Patient
            </SabButton>
            <SabDrawer
                title={patient_edit_data ? "Update Patient" : "Add New Patient"}
                open={open}
                onClose={onClose}
                width="w-1/3"
            >
                <div className="grid grid-col-1 gap-4 mt-2 px-4">
                    <SabInput
                        name="firstName"
                        type="text"
                        label="FirstName"
                        placeholder="Enter patient first name"
                        value={state.firstName}
                        onChange={(e) => {
                            handleStateChange({
                                firstName: e.target.value,
                            });
                        }}
                        error={error?.firstName}
                    />
                    <SabInput
                        name="lastName"
                        type="text"
                        label="LastName"
                        value={state.lastName}
                        placeholder="Enter patient last name"
                        onChange={(e) => {
                            handleStateChange({
                                lastName: e.target.value,
                            });
                        }}
                        error={error?.lastName}
                    />
                    <SabInput
                        name="email"
                        label="Email"
                        type="email"
                        value={state.email}
                        placeholder="Enter patient email"
                        onChange={(e) => {
                            handleStateChange({
                                email: e.target.value,
                            });
                        }}
                        error={error?.email}
                    />
                    <SabInput
                        name="phone"
                        label="Phone"
                        type="number"
                        value={state.phone}
                        placeholder="Enter patient phone"
                        onChange={(e) => {
                            handleStateChange({
                                phone: e.target.value,
                            });
                        }}
                        error={error?.phone}
                    />
                    <SabSelect
                        name="bloodtype"
                        label="Select BloodType"
                        options={[
                            { id: "UNKNOWN", name: "Unknown" },
                            { id: "A", name: "A" },
                            { id: "AB+", name: "AB+" },
                            { id: "AB", name: "AB" },
                            { id: "B", name: "B" },
                            { id: "O", name: "O" },
                        ]}
                        value={state.bloodType}
                        onChange={(val) => {
                            handleStateChange({
                                bloodType: val,
                            });
                        }}
                        error={error?.bloodType}
                    />
                    <SabDatePicker
                        name="dob"
                        value={moment(state.dob).format(
                            "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (Z)",
                        )}
                        label={"DOB"}
                        handleChange={(selectedDate) => {
                            console.log(selectedDate);
                            handleStateChange({
                                dob: moment(selectedDate).format("yyyy-MM-DD"),
                            });
                        }}
                        error={error?.dob}
                    />
                    <SabSelect
                        name="gender"
                        label="Select Gender"
                        options={[
                            { id: "MALE", name: "Male" },
                            { id: "FEMALE", name: "Female" },
                        ]}
                        value={state.gender}
                        onChange={(val) => {
                            handleStateChange({
                                gender: val,
                            });
                        }}
                        error={error?.gender}
                    />

                    <SabInputTextArea
                        name="allergies"
                        label="Allergies"
                        type="text"
                        value={state.allergies}
                        placeholder="Enter allergies info"
                        onChange={(e) => {
                            handleStateChange({
                                info: e.target.value,
                            });
                        }}
                    />
                    <SabButton
                        flex="flex justify-center"
                        padding="p-2"
                        actions={
                            patient_edit_data
                                ? handleUpdateSubmit
                                : handleCreateSubmit
                        }
                        disabled={isLoading || isLoadingUpdatePatient}
                    >
                        {patient_edit_data ? "Update" : "Create"}
                    </SabButton>
                </div>
            </SabDrawer>
        </div>
    );
}
