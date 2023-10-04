import GlobalDeleteButton from "@/components/deletebutton/GlobalDeleteButton";
import { GlobalLoadingAnimation } from "@/components/lottieanimation/GlobalLoadingAnimation";
import { GlobalNoDataAnimation } from "@/components/lottieanimation/GlobalNodataAnimation";
import { Avatar, Typography } from "@material-tailwind/react";
import React from "react";

const SpecialistTableItems = ({ specialist, isLoading }) => {
    const imgLink =
        "https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BlY2lhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";

    // console.log(specialist);

    return specialist?.specialists?.length > 0 ? (
        specialist?.specialists?.map((special, index) => {
            const isLast = index === special.length - 1;
            const classes = isLast ? "p-2" : "p-2 border-b border-blue-gray-50";

            return (
                <>
                    <tr>
                        <td
                            key={special._id}
                            className={classes}
                            width={"300px"}
                        >
                            <Avatar
                                src={imgLink ?? special.profile}
                                alt={special.name}
                                size="md"
                            />
                        </td>
                        <td className={classes}>
                            <div className="flex flex-col">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {special.name}
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
                                    {special.myName}
                                </Typography>
                            </div>
                        </td>
                        <td className={classes}>
                            {/* <EditDrawer /> */}
                            <GlobalDeleteButton
                                type={"specialist"}
                                id={special._id}
                            />
                        </td>
                    </tr>
                </>
            );
        })
    ) : (
        <tr key="not found">
            <td rowSpan={6} colSpan={6} align="center">
                <div className="w-80 m-4">
                    {isLoading ? (
                        <GlobalLoadingAnimation />
                    ) : (
                        <GlobalNoDataAnimation />
                    )}
                </div>
            </td>
        </tr>
    );
};

export default SpecialistTableItems;
