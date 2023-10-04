import SabButton from "@/components/button";
import SabContainer from "@/components/container";
import SabInput from "@/components/input";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import React, { useState } from "react";
import Logo from "../../app/assets/images/Healthy_Hub_Logo.png";
import { usePostLoginMutation } from "./feature/login_api";
import { setLocalStorage } from "@/utils/localstorage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleAuth } from "@/utils/authSlice";
import { setUserData } from "./feature/login_slice";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [postLogin, { isLoading }] = usePostLoginMutation();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleLogin = () => {
        const data = {
            email: email,
            password: password,
        };
        postLogin(data)
            .unwrap()
            .then(async (result) => {
                if (result.error) {
                    console.log(result);
                } else {
                    console.log({ result });
                    await setLocalStorage(result.data);
                    dispatch(handleAuth(true));
                    return navigate("/");
                }
            });
    };

    return (
        <SabContainer customStyle={"xl:w-2/5 w-3/5 mt-40 mx-auto"}>
            <Card className="w-full">
                <CardHeader
                    variant="gradient"
                    className="mb-4 grid h-48 place-items-center bg-primary py-2 text-center"
                >
                    <Typography variant="h3" color="white">
                        Telemedicine Admin Panel
                    </Typography>
                    <Avatar
                        className="w-auto h-28 object-contain object-center"
                        src={Logo}
                        alt="avatar"
                        variant="square"
                    />
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <SabContainer customStyle={"w-full flex flex-col gap-4"}>
                        <SabInput
                            type="email"
                            placeholder="Enter email address"
                            label="Email"
                            required
                            onChange={(ev) => {
                                setEmail(ev.target.value);
                            }}
                        />
                        <SabInput
                            type="password"
                            placeholder="Enter password"
                            required
                            label="Password"
                            onChange={(ev) => {
                                setPassword(ev.target.value);
                            }}
                        />
                    </SabContainer>
                    {/* <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                    </div> */}
                </CardBody>
                <CardFooter className="pt-0">
                    <SabButton
                        flex="flex justify-center items-center"
                        actions={handleLogin}
                        disabled={isLoading}
                    >
                        Sign In
                    </SabButton>
                </CardFooter>
            </Card>
        </SabContainer>
    );
}
