import TableCardBody from "@/components/table/table_card_body";
import TableCardContainer from "@/components/table/table_card_container";
import TableCardHeader from "@/components/table/table_card_header";
import { Avatar, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { useGetSpecialistsQuery } from "./feature/specialistApi";
import GlobalTableHeader from "@/components/table/GlobalTableHeader";
import GlobalTableEmptyRow from "@/components/table/GlobalTableEmptyRow";
import TableCardFooter from "@/components/table/table_card_footer";
import SabPaginationButton from "@/components/pagination_button";
import SpecialistTableItems from "./component/table/SpecialistTableItems";

const TABLE_HEAD = ["Image", "English", "Myanmar", "Action"];

const Specialist = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [filterName, setFilterName] = useState("");

    const { data: specialist, isLoading } = useGetSpecialistsQuery({
        page,
        limit,
        filterName,
    });

    console.log(specialist?.data);

    const emptyRows =
        page > 0
            ? limit - specialist?.data.specialists?.length
            : limit - specialist?.data.specialists?.length;

    const SpecialistTableFooter = () => {
        const totalPages = Math.ceil(
            specialist?.data.total / specialist?.data.limit,
        );

        return (
            specialist?.data.specialists?.length > 1 && (
                <TableCardFooter>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        Page {specialist?.data.page} of {totalPages}
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
            )
        );
    };

    return (
        <div className="mt-2">
            <TableCardContainer>
                <TableCardHeader>
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Specialist Fields
                            </Typography>
                            <Typography
                                color="gray"
                                className="mt-1 font-normal"
                            >
                                See information about specialist fields
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <button>Add Drawer</button>
                            {/* <AddDrawer /> */}
                        </div>
                    </div>
                </TableCardHeader>
                <TableCardBody>
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <GlobalTableHeader headers={TABLE_HEAD} />
                        <tbody>
                            <SpecialistTableItems
                                specialist={specialist?.data}
                                isLoading={isLoading}
                            />

                            <GlobalTableEmptyRow
                                emptyRows={emptyRows}
                                colSpan={4}
                            />
                        </tbody>
                    </table>
                </TableCardBody>
                <SpecialistTableFooter />
            </TableCardContainer>
        </div>
    );
};

export default Specialist;
