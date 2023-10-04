import React from "react";

const GlobalTableEmptyRow = ({ emptyRows, colSpan }) => {
    return (
        emptyRows > 0 && (
            <tr
                style={{
                    height: 67 * emptyRows,
                }}
            >
                <td colSpan={colSpan}></td>
            </tr>
        )
    );
};

export default GlobalTableEmptyRow;
