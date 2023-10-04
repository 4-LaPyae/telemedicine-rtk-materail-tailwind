import React, { useEffect, useRef, useState } from "react";
import TableCardContainer from "@/components/table/table_card_container";
import TableCardHeader from "@/components/table/table_card_header";
import { useDebounce } from "@uidotdev/usehooks";
import {
    Avatar,
    Chip,
    IconButton,
    Tab,
    Tabs,
    TabsHeader,
    Tooltip,
    Typography,
} from "@material-tailwind/react";
import SabInput from "@/components/input";
import TableCardBody from "@/components/table/table_card_body";
import {
    useDeleteCoDoctorsMutation,
    useGetCoDoctorsQuery,
} from "../../feature/doctors_api";
import { checkImageLink } from "@/utils/checkImageLink";
import EditUserIcon from "../../../../app/assets/icons/useredit.svg";
import TableCardFooter from "@/components/table/table_card_footer";
import SabPaginationButton from "@/components/pagination_button";
import Lottie from "lottie-react";
import no_data_animation from "../../../../app/assets/lottie_animation/lotties/no_data.json";
import GlobalDeleteButton from "@/components/deletebutton/GlobalDeleteButton";
import DocLoading from "../../../../app/assets/lottie_animation/lotties/loading/docLoading.json";
import AddDrawer from "./AddDrawer";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Duty On",
        value: "duty_on",
    },
    {
        label: "Duty Off",
        value: "duty_off",
    },
];

const TABLE_HEAD = [
    "Doctor",
    "Phone",
    "Specialist",
    "Experience",
    "Gender",
    "Duty Status",
    "Action",
];

const GLOBAL_DELETE_CONTENT = {
    header: "Are you sure?",
    body_content:
        "Do you really want to delete cooperate doctor? This process cannot be undone",
    tooltip_content: "Delete doctor",
};

export default function CoOperate() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [filterName, setFilterName] = useState("");

    const debouncedSearchQuery = useDebounce(filterName, 500);

    const handleChange = (e) => {
        e.preventDefault();
        setFilterName(e.target.value);
    };

    const { data: coDoctors, isLoading } = useGetCoDoctorsQuery({
        page,
        limit,
        type: 1,
        filterName: debouncedSearchQuery,
    });

    const [deleteCoDoctor] = useDeleteCoDoctorsMutation();

    const totalPages = Math.ceil(coDoctors?.data.total / coDoctors?.data.limit);

    const emptyRows =
        page > 0
            ? limit - coDoctors?.data?.doctors?.length
            : limit - coDoctors?.data?.doctors?.length;

    return (
        <div className="mt-2">
            <TableCardContainer>
                <TableCardHeader>
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Cooperate Doctors
                            </Typography>
                            <Typography
                                color="gray"
                                className="mt-1 font-normal"
                            >
                                See information about all doctors
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <AddDrawer />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs id="tab-table" value="all" className="w-1/2">
                            <TabsHeader>
                                {TABS.map(({ label, value }) => (
                                    <Tab id="main" key={value} value={value}>
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
                        <div className="w-1/3 mb-3 mx-2">
                            <SabInput
                                type="text"
                                placeholder="Search"
                                label=""
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </TableCardHeader>
                <TableCardBody>
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head, index) => (
                                    <th
                                        key={head}
                                        className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4  transition-colors hover:bg-blue-gray-50"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="flex items-center justify-between gap-2 font-bold leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {coDoctors?.data.doctors.length > 0 ? (
                                coDoctors?.data.doctors.map(
                                    (codoctor, index) => {
                                        const isLast =
                                            index === codoctor.length - 1;
                                        const classes = isLast
                                            ? "p-2"
                                            : "p-2 border-b border-blue-gray-50";

                                        const name =
                                            codoctor.firstName +
                                            " " +
                                            codoctor.lastName;

                                        return (
                                            <tr key={codoctor._id}>
                                                <td className={classes}>
                                                    <div className="flex items-center gap-4">
                                                        <Avatar
                                                            src={
                                                                codoctor.profile ??
                                                                checkImageLink(
                                                                    codoctor.profile,
                                                                    codoctor.gender,
                                                                )
                                                            }
                                                            alt={name}
                                                            size="sm"
                                                            onError={(e) => {
                                                                checkImageLink(
                                                                    e,
                                                                    codoctor.gender,
                                                                );
                                                            }}
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
                                                                {codoctor.email}
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
                                                            {codoctor.phone}
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
                                                            {
                                                                codoctor
                                                                    .specialist
                                                                    .name
                                                            }
                                                        </Typography>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal mt-2"
                                                        >
                                                            {codoctor.specialist
                                                                .myName ??
                                                                "မရှိပါ"}
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
                                                            {
                                                                codoctor.experience
                                                            }
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
                                                            {codoctor.gender}
                                                        </Typography>
                                                    </div>
                                                </td>
                                                <td className={classes}>
                                                    <div className="w-max">
                                                        <Chip
                                                            variant="ghost"
                                                            size="lg"
                                                            value={
                                                                codoctor.status ==
                                                                1
                                                                    ? "ON"
                                                                    : "OFF"
                                                            }
                                                            color={
                                                                codoctor.status ==
                                                                1
                                                                    ? "green"
                                                                    : "blue-gray"
                                                            }
                                                        />
                                                    </div>
                                                </td>
                                                <td className={classes}>
                                                    <Tooltip content="Edit Doctor">
                                                        <IconButton
                                                            variant="text"
                                                            color="blue-gray"
                                                        >
                                                            <Avatar
                                                                variant="square"
                                                                className="w-auto h-4"
                                                                src={
                                                                    EditUserIcon
                                                                }
                                                            />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <GlobalDeleteButton
                                                        handler={deleteCoDoctor}
                                                        type={"cooperate"}
                                                        id={codoctor._id}
                                                        deleteHeader={
                                                            GLOBAL_DELETE_CONTENT.header
                                                        }
                                                        bodyContent={
                                                            GLOBAL_DELETE_CONTENT.body_content
                                                        }
                                                        tooltipContent={
                                                            GLOBAL_DELETE_CONTENT.tooltip_content
                                                        }
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    },
                                )
                            ) : (
                                <tr key="not found">
                                    <td rowSpan={7} colSpan={7} align="center">
                                        <div className="w-80 m-4">
                                            {isLoading ? (
                                                <Lottie
                                                    animationData={DocLoading}
                                                    loop={true}
                                                />
                                            ) : (
                                                <Lottie
                                                    animationData={
                                                        no_data_animation
                                                    }
                                                    loop={true}
                                                />
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            )}

                            {emptyRows > 0 && (
                                <tr style={{ height: 67 * emptyRows }}>
                                    <td colSpan={7}></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </TableCardBody>

                {coDoctors?.data?.doctors?.length > 0 && (
                    <TableCardFooter>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            Page {coDoctors?.data?.page} of {totalPages}
                        </Typography>
                        <div className="flex gap-2">
                            <SabPaginationButton
                                variable="outline"
                                textSize="text-xs font-bold"
                                padding="px-18 py-2"
                                width="w-20"
                                flex="flex justify-center items-center"
                                actions={() => {
                                    setPage((s) => s - 1);
                                }}
                                disabled={
                                    coDoctors?.data?.page === 1 ? true : false
                                }
                            >
                                Pervious
                            </SabPaginationButton>
                            <SabPaginationButton
                                variable="outline"
                                textSize="text-xs font-bold"
                                padding="px-18 py-2"
                                width="w-20"
                                flex="flex justify-center items-center"
                                actions={() => {
                                    setPage((prev) => prev + 1);
                                }}
                                disabled={page === totalPages ? true : false}
                            >
                                Next
                            </SabPaginationButton>
                        </div>
                    </TableCardFooter>
                )}
            </TableCardContainer>
        </div>
    );
}
