import {
    Avatar,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Typography,
} from "@material-tailwind/react";
import React from "react";
import DoctorIcon from "../../app/assets/icons/doctor.svg";
import InHouse from "./components/inhouse";
import CoOperate from "./components/coopreate";

const tabsData = [
    {
        label: "InHouse Doctors",
        value: "inhouse",
        icon: DoctorIcon,
        desc: <InHouse />,
    },
    {
        label: "CoOperate Doctors",
        value: "coOperate",
        icon: DoctorIcon,
        desc: <CoOperate />,
    },
];

export default function Doctors() {
    return (
        <Tabs id="tab-doctor" value={"inhouse"}>
            <TabsHeader className="z-0">
                {tabsData.map(({ label, value, icon }) => (
                    <Tab key={value} value={value}>
                        <div className="flex items-center gap-4">
                            <Avatar src={icon} className="w-6 h-6" />
                            <Typography className="font-semibold uppercase">
                                {label}
                            </Typography>
                        </div>
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {tabsData.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
