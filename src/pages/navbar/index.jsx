import React, { createElement, useState } from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
    Avatar,
    MenuHandler,
    MenuItem,
    Menu,
    MenuList,
} from "@material-tailwind/react";
import SettingIcon from "../../app/assets/icons/setting.svg";
import NotificationIcon from "../../app/assets/icons/notification.svg";
import DownArrowIcon from "../../app/assets/icons/downArrow.svg";
import UserIcon from "../../app/assets/icons/user.svg";
import SignOut from "../../app/assets/icons/signout.svg";
import Home from "../../app/assets/icons/Home.svg";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <Navbar
            variant="gradient"
            className="bg-grey px-4 py-3 max-w-screen-3xl rounded-none border-0"
        >
            <div className="flex flex-wrap items-center justify-between gap-y-4">
                <div>
                    <div className="flex flex-row gap-3 items-center">
                        <div>
                            <Link to={"/dashboard"}>
                                <Avatar
                                    className="w-5 h-5 object-contain object-center"
                                    src={Home}
                                    variant="square"
                                />
                            </Link>
                        </div>
                        <div className="pt-1.5">
                            <Link to={location.pathname}>
                                <Typography>{location.pathname}</Typography>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="ml-auto flex gap-1 md:mr-4">
                    <IconButton variant="text" color="white">
                        <Avatar
                            className="w-10 h-10 object-contain object-center"
                            src={SettingIcon}
                            variant="square"
                        />
                    </IconButton>
                    <IconButton variant="text" color="white">
                        <Avatar
                            className="w-10 h-10 object-contain object-center"
                            src={NotificationIcon}
                            variant="square"
                        />
                    </IconButton>
                    <ProfileMenu />
                    {/* {ProfileMenu()} */}
                </div>
            </div>
        </Navbar>
    );
}

// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserIcon,
    },
    {
        label: "Sign Out",
        icon: SignOut,
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-blue-500 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <Avatar
                        className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                        }`}
                        src={DownArrowIcon}
                        variant="square"
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${
                                isLastItem
                                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                    : ""
                            }`}
                        >
                            {<Avatar src={icon} className="w-4 h-4" />}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}
