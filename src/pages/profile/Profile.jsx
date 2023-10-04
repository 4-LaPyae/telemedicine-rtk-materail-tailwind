import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { checkProfileImageLink } from "@/utils/checkImageLink";

const Profile = () => {
    const { user } = useSelector((state) => state.login_slice);
    console.log({ user });

    const fullName = user?.firstName + " " + user?.lastName;

    return (
        <Card className="w-96">
            <CardHeader floated={false} className="h-80">
                <img
                    src={checkProfileImageLink() ?? user?.profile}
                    alt="admin-profile-picture"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {fullName}
                </Typography>
                <Typography
                    color="blue-gray"
                    className="font-medium"
                    textGradient
                >
                    {user?.email}
                </Typography>
                <Typography
                    color="blue-gray"
                    className="font-medium"
                    textGradient
                >
                    {user?.phone}
                </Typography>
            </CardBody>
        </Card>
    );
};

export default Profile;
