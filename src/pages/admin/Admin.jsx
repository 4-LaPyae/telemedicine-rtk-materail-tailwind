import React from "react";
import TableCardContainer from "@/components/table/table_card_container";
import TableCardHeader from "@/components/table/table_card_header";
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
import TableCardBody from "@/components/table/table_card_body";
import GlobalTableHeader from "@/components/table/GlobalTableHeader";

const TABLE_HEAD = ["Profile", "Name", "Email", "Status", "Action"];

const Admin = () => {
    return (
        <div className="mt-2">
            <TableCardContainer>
                <TableCardContainer>
                    <TableCardHeader>
                        <div className="mb-8 flex items-center justify-between gap-8">
                            <div>
                                <Typography variant="h5" color="blue-gray">
                                    System Admin
                                </Typography>
                                <Typography
                                    color="gray"
                                    className="mt-1 font-normal"
                                >
                                    See information about system admin
                                </Typography>
                            </div>
                            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                                <button>Admin Add Drawer</button>
                                {/* <InHouseAddDrawer /> */}
                            </div>
                        </div>
                    </TableCardHeader>
                    <TableCardBody>
                        <table className="mt-4 w-full min-w-max table-auto text-left">
                            <GlobalTableHeader headers={TABLE_HEAD} />
                        </table>
                    </TableCardBody>
                </TableCardContainer>
            </TableCardContainer>
        </div>
    );
};

export default Admin;
