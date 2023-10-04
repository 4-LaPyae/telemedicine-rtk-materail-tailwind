import SabPaginationButton from "@/components/pagination_button";
import TableCardBody from "@/components/table/table_card_body";
import TableCardContainer from "@/components/table/table_card_container";
import TableCardFooter from "@/components/table/table_card_footer";
import TableCardHeader from "@/components/table/table_card_header";
import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";

const Category = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const TABLE_HEAD = ["Name", "Status", "Edit"];
    return (
        <div className="m-2">
            <TableCardContainer>
                <TableCardHeader>
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Categories
                            </Typography>
                            <Typography
                                color="gray"
                                className="mt-1 font-normal"
                            >
                                See all categories
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            {/* <AppointAddDrawer /> */}
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
                                        className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                    </table>
                </TableCardBody>
                <TableCardFooter>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {/* Page {data.page} of {totalPages} */}
                    </Typography>
                    <div className="flex gap-2">
                        <SabPaginationButton
                            link={`/category?page=${page - 1}`}
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
                            link={`/category?page=${page + 1}`}
                            variable="outline"
                            textSize="text-xs font-bold"
                            padding="px-18 py-2"
                            width="w-20"
                            flex="flex justify-center items-center"
                            actions={() => {
                                setPage((prev) => prev + 1);
                            }}
                            // disabled={page === totalPages ? true : false}
                        >
                            Next
                        </SabPaginationButton>
                    </div>
                </TableCardFooter>
            </TableCardContainer>
        </div>
    );
};

export default Category;
