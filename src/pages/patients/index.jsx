import { Typography } from "@material-tailwind/react";
import { useGetPatientsQuery } from "./feature/patientsApi";
import TableCardContainer from "@/components/table/table_card_container";
import TableCardHeader from "@/components/table/table_card_header";
import TableCardBody from "@/components/table/table_card_body";
import SabInput from "@/components/input";
import { useState } from "react";
import TableCardFooter from "@/components/table/table_card_footer";
import SabPaginationButton from "@/components/pagination_button";

import { useDebounce } from "@uidotdev/usehooks";

import PatientDrawer from "./components/PatientDrawer";
import PatientTableItems from "./components/PatientTableItems";
import { GlobalNoDataAnimation } from "@/components/lottieanimation/GlobalNodataAnimation";
import { GlobalLoadingAnimation } from "@/components/lottieanimation/GlobalLoadingAnimation";
const TABLE_HEAD = [
    "Patient",
    "Phone",
    "DateOfBirth",
    "BloodType",
    "Gender",
    "Action",
];

export default function Patients() {
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [filterName, setFilterName] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        setFilterName(e.target.value);
    };
    const debouncedSearchQuery = useDebounce(filterName, 500);
    const { data, isLoading } = useGetPatientsQuery({
        page,
        limit,
        filterName: debouncedSearchQuery,
    });

    const totalPages = Math.ceil(data?.data?.total / data?.data?.limit);
    const emptyRows =
        page > 0
            ? limit - data?.data.patients?.length
            : limit - data?.data.patients?.length;
    return (
        <div className="mt-2 mx-2">
            <TableCardContainer>
                <TableCardHeader>
                    <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Patients
                            </Typography>
                            <Typography
                                color="gray"
                                className="mt-1 font-normal"
                            >
                                See information about all patients
                            </Typography>
                        </div>
                        <div className="flex w-full shrink-0 gap-2 md:w-max">
                            <div className="w-full h-full">
                                <SabInput
                                    type="text"
                                    placeholder="Search"
                                    label=""
                                    onChange={handleSearch}
                                />
                            </div>
                            <div className="w-full h-full">
                                <PatientDrawer open={open} setOpen={setOpen} />
                            </div>
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
                                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="flex items-center justify-between gap-2 font-bold leading-none"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data?.patients.length > 0 ? (
                                data?.data.patients.map((patient, index) => (
                                    <PatientTableItems
                                        key={index}
                                        item={patient}
                                        index={index}
                                        setOpen={setOpen}
                                    />
                                ))
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
                            )}
                            {emptyRows > 0 && (
                                <tr
                                    style={{
                                        height: 67 * emptyRows,
                                    }}
                                >
                                    <td colSpan={6}></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </TableCardBody>
                {data?.data?.patients.length > 1 && (
                    <TableCardFooter>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            Page {data?.data?.page} of {totalPages}
                        </Typography>
                        <div className="flex gap-2">
                            <SabPaginationButton
                                variable="outline"
                                textSize="text-xs font-bold"
                                padding="px-18 py-2"
                                width="w-20"
                                flex="flex justify-center items-center"
                                actions={() => {
                                    setPage((prev) => prev - 1);
                                }}
                                disabled={page === 1 ? true : false}
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
