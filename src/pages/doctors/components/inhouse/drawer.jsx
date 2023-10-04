import SabButton from "@/components/button";
import SabDatePicker from "@/components/datepicker";
import SabDrawer from "@/components/drawer";
import SabInput from "@/components/input";
import SabSelect from "@/components/select";
import SabInputTextArea from "@/components/textarea";
import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { usePostDoctorsMutation } from "../../feature/doctors_api";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    experience: "",
    gender: null,
    specialist: null,
    info: "",
    profile: null,
    password: "kttguest",
    type: "INHOUSE",
};

export default function DoctorDrawer({ open, closeDrawer }) {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState(null);
    const { specialistDropdown } = useSelector((state) => state.dashboard);
    const [postDoctors, { isLoading }] = usePostDoctorsMutation();

    const handleStateChange = (val) => {
        setState((prev) => ({ ...prev, ...val }));
    };

    const handleSubmit = () => {
        console.log(state);
        if (Object.entries(validation(state)).length > 0) {
            setError(validation(state));
        } else {
            setError(null);
            console.log(state);
            postDoctors(state)
                .unwrap()
                .then((result) => {
                    if (!result.error) {
                        onClose();
                    }
                });
        }
    };

    const onClose = () => {
        setState(initialState);
        setError(null);
        closeDrawer();
    };

    const validation = (val) => {
        let errors = {};
        if (val.firstName === "") {
            errors.firstName = true;
        }
        if (val.lastName === "") {
            errors.lastName = true;
        }
        if (val.email === "") {
            errors.email = true;
        }
        if (val.phone === "") {
            errors.phone = true;
        }
        if (val.dob === "") {
            errors.dob = true;
        }
        if (val.experience === "") {
            errors.experience = true;
        }
        if (val.gender === null) {
            errors.gender = true;
        }
        if (val.specialist === null) {
            errors.specialist = true;
        }

        return errors;
    };

    return (
        <SabDrawer
            title={"Add New InHouse Doctor"}
            open={open}
            onClose={onClose}
            width="w-1/3"
        >
            <div className="grid grid-col-1 gap-4 mt-2 px-4">
                <SabInput
                    name="firstName"
                    type="text"
                    label="FirstName"
                    placeholder="Enter doctor first name"
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
                    placeholder="Enter doctor last name"
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
                    placeholder="Enter doctor email"
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
                    placeholder="Enter doctor phone"
                    onChange={(e) => {
                        handleStateChange({
                            phone: e.target.value,
                        });
                    }}
                    error={error?.phone}
                />
                <SabDatePicker
                    name="dob"
                    value={state.dob}
                    label={"DOB"}
                    handleChange={(selectedDate) => {
                        handleStateChange({
                            dob: moment(selectedDate).format("yyyy-MM-DD"),
                        });
                    }}
                    error={error?.dob}
                />
                <SabInput
                    name="dob"
                    label="Experience"
                    type="number"
                    value={state.experience}
                    placeholder="Enter doctor experience"
                    onChange={(e) => {
                        const val = e.target.value;
                        handleStateChange({
                            experience:
                                val === "" ? "" : parseInt(e.target.value),
                        });
                    }}
                    error={error?.experience}
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
                <SabSelect
                    name="specialist"
                    label="Select Specialist"
                    options={specialistDropdown}
                    value={state.specialist?.id ?? null}
                    onChange={(val) => {
                        handleStateChange({
                            specialist: specialistDropdown.find(
                                (item) => item.id === val,
                            ),
                        });
                    }}
                    error={error?.specialist}
                />
                <SabInputTextArea
                    name="info"
                    label="Info"
                    type="text"
                    value={state.info}
                    placeholder="Enter doctor info"
                    onChange={(e) => {
                        handleStateChange({
                            info: e.target.value,
                        });
                    }}
                />
                <SabButton
                    flex="flex justify-center"
                    padding="p-2"
                    actions={handleSubmit}
                    disabled={isLoading}
                >
                    Submit
                </SabButton>
            </div>
        </SabDrawer>
    );
}
