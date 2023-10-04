import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Avatar,
    Card,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HealthyHub from "../../app/assets/images/Healthy_Hub_Logo_With_Text.svg";
import DashboardIcon from "../../app/assets/icons/dashborad.svg";
import DoctorIcon from "../../app/assets/icons/doctor.svg";
import PatientIcon from "../../app/assets/icons/patient.svg";
import AppointmentIcon from "../../app/assets/icons/appointment.svg";
import BarIcon from "../../app/assets/icons/bar.svg";
import UserIcon from "../../app/assets/icons/user.svg";
import SignOut from "../../app/assets/icons/signout.svg";
import Blog from "../../app/assets/icons/blog.svg";
import RightArrow from "../../app/assets/icons/RightArrow.svg";
import Category from "../../app/assets/icons/category.svg";
import Hash from "../../app/assets/icons/hash.svg";
import SpecialistIcon from "../../app/assets/icons/circle-star-solid.svg";
import AdminIcon from "../../app/assets/icons/user-gear-regular.svg";

const sidebarMenuItem = [
    {
        label: "Dashboard",
        icon: DashboardIcon,
        route: "/dashboard",
    },
    {
        label: "Doctors",
        icon: DoctorIcon,
        route: "/doctors",
    },
    {
        label: "Patients",
        icon: PatientIcon,
        route: "/patients",
    },
    {
        label: "Appointments",
        icon: AppointmentIcon,
        route: "/appointments",
    },
    {
        label: "Specialists",
        icon: SpecialistIcon,
        route: "/specialists",
    },
    {
        label: "System Admin",
        icon: AdminIcon,
        route: "/admin",
    },
];

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    return (
        <Card className="w-1/6 float-left h-screen rounded-none">
            <div className="w-full px-2 py-3 bg-primary flex justify-between items-center">
                <Avatar
                    variant="square"
                    className="w-auto h-4 object-cover object-center"
                    src={HealthyHub}
                />
                <IconButton variant="text" color="white">
                    <Avatar
                        className="w-10 h-10 object-contain object-center"
                        src={BarIcon}
                        variant="square"
                    />
                </IconButton>
            </div>
            <List>
                {sidebarMenuItem.map((item) => {
                    return (
                        <Link key={item.label} to={`${item.route}`}>
                            <ListItem className="p-3">
                                <ListItemPrefix>
                                    <Avatar
                                        className="w-5 h-5 object-contain object-center"
                                        src={item.icon}
                                        variant="square"
                                    />
                                </ListItemPrefix>
                                <Typography
                                    color="blue-gray"
                                    className="mr-auto font-normal"
                                >
                                    {item.label}
                                </Typography>
                            </ListItem>
                        </Link>
                    );
                })}
                <Accordion open={open}>
                    <Link to={"/blog"}>
                        <ListItem className="p-0">
                            <AccordionHeader
                                onClick={() => setOpen(!open)}
                                className="border-b-0 p-3"
                            >
                                <ListItemPrefix>
                                    <Avatar
                                        className="w-5 h-5 object-contain object-center"
                                        src={Blog}
                                        variant="square"
                                    />
                                </ListItemPrefix>
                                <Typography
                                    color="blue-gray"
                                    className="mr-auto font-normal"
                                >
                                    Blogs
                                </Typography>
                                <ListItemSuffix>
                                    <Avatar
                                        className={`h-3 w-3 transition-transform ${
                                            open ? "rotate-90" : ""
                                        }`}
                                        src={RightArrow}
                                        variant="square"
                                    />
                                </ListItemSuffix>
                            </AccordionHeader>
                        </ListItem>
                    </Link>
                    <AccordionBody>
                        <Link to={"/category"}>
                            <List className="pl-6">
                                <ListItem>
                                    <ListItemPrefix>
                                        <Avatar
                                            className="w-5 h-5 object-contain object-center"
                                            src={Category}
                                            variant="square"
                                        />
                                    </ListItemPrefix>
                                    <Typography
                                        color="blue-gray"
                                        className="mr-auto font-normal"
                                    >
                                        Category
                                    </Typography>
                                </ListItem>
                            </List>
                        </Link>
                        <Link to={"/tag"}>
                            <List className="pl-6">
                                <ListItem>
                                    <ListItemPrefix>
                                        <Avatar
                                            className="w-5 h-5 object-contain object-center"
                                            src={Hash}
                                            variant="square"
                                        />
                                    </ListItemPrefix>
                                    <Typography
                                        color="blue-gray"
                                        className="mr-auto font-normal"
                                    >
                                        Tag
                                    </Typography>
                                </ListItem>
                            </List>
                        </Link>
                    </AccordionBody>
                </Accordion>

                <hr className="my-2 border-blue-gray-50" />
                <Link to={"/profile"}>
                    <ListItem>
                        <ListItemPrefix>
                            <Avatar
                                className="w-5 h-5 object-contain object-center"
                                src={UserIcon}
                                variant="square"
                            />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                </Link>
                <ListItem>
                    <ListItemPrefix>
                        <Avatar
                            className="w-5 h-5 object-contain object-center"
                            src={SignOut}
                            variant="square"
                        />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
    );
}
