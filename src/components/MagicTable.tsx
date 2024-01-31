import React from "react";
import { useState } from "react";
import {
  DataGrid,
  GridAlignment,
  GridColumnGroup,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import { fincolors } from "../styles/theme";

const StyledDataGrid = styled(DataGrid)(({ theme }) => {
  return {
    WebkitFontSmoothing: "auto",
    letterSpacing: "normal",
    "& *:focus": { outline: "none!important" },
    "& .MuiDataGrid-columnHeadersInner > div": {
      backgroundColor: theme.palette.background.default,
      "&:first-child:has(~ :nth-child(2))": {
        color: theme.palette.background.paper,
        backgroundColor: theme.palette.primary.main,
      },
    },

    borderRadius: "10px",
    //borderColor: theme.palette.other.tableBorderColor,

    "& .MuiDataGrid-columnHeaders": {
      borderTopLeftRadius: "9px",
      borderTopRightRadius: "9px",
    },
    //'& .MuiDataGrid-withBorderColor': {borderColor: theme.palette.other.tableBorderColor},

    "& .MuiDataGrid-columnHeader:not(:last-child), .MuiDataGrid-cell:not(:last-child)":
      {
        borderRight: `1px solid green`,
        //borderColor: theme.palette.other.tableBorderColor,
      },
    "& .MuiDataGrid-columnHeaderTitleContainer": { border: "none!important" },
    "& .MuiDataGrid-row:last-child > .MuiDataGrid-cell": {
      borderBottom: "none!important",
    },
    "& .MuiDataGrid-columnHeader, .MuiDataGrid-row:not(:last-child) > .MuiDataGrid-cell":
      {
        borderBottom: `1px solid blue`,
        //borderColor: theme.palette.other.tableBorderColor,
      },
    "& .MuiDataGrid-iconSeparator": { display: "none" },
    "& .MuiDataGrid-cell": {},
    "& .MuiPaginationItem-root": {},
  };
});

type CellParams = {
  field: string;
  value: any;
};
type ValueGetterParams = {
  row: {
    firstName: string;
    lastName: string;
  };
};

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    sortable: false,
    editable: true,
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 130,
    sortable: false,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 130,
    sortable: false,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    sortable: false,
    width: 90,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      console.log(params);
      return <span>Span Check {params.value}</span>;
    },
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${(params.row as any).firstName || ""} ${(params.row as any).lastName || ""}`,
  },
];

// https://mui.com/material-ui/react-table/#basic-table
// https://mui.com/x/api/data-grid/data-grid/
// https://mui.com/x/react-data-grid/recipes-editing/
// https://mui.com/x/react-data-grid/column-groups/
const columnsGroupModel: GridColumnGroup[] = [
  {
    groupId: "internal data",
    children: [{ field: "id" }],
  },
  {
    groupId: "character",
    children: [
      {
        groupId: "naming da",
        headerAlign: "center" as GridAlignment,
        children: [{ field: "firstName" }, { field: "lastName" }],
      },
      { field: "age" },
      { field: "fullName" },
    ],
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: <span>TESTSPAN</span>, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
interface MagicTableProps {}

const MagicTable: React.FC<MagicTableProps> = () => {
  return (
    <StyledDataGrid
      // <DataGrid
      disableRowSelectionOnClick={true}
      disableDensitySelector={true}
      disableVirtualization={true}
      disableColumnFilter={true}
      disableColumnMenu={true}
      checkboxSelection={false}
      hideFooter={true}
      hideFooterPagination={true}
      editMode={"row"}
      rows={rows}
      columns={columns}
      columnGroupingModel={columnsGroupModel}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 50 },
        },
      }}
      experimentalFeatures={{
        columnGrouping: true,
      }}
      pageSizeOptions={[5, 10]}
    />
  );
};

interface MagicTable2Props {
  hasBorder?: boolean;
  hasPagination?: boolean;
}

// const MagicTable2: React.FC<MagicTable2Props> = ({
//   hasBorder = true,
//   hasPagination = false,
// }) => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(!hasPagination ? 10000 : 10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper
//       elevation={0}
//       sx={{
//         width: "100%",
//         overflow: "hidden",
//         border: hasBorder
//           ? "1px solid " + fincolors.other.tableBorderColor
//           : "none",
//       }}
//     >
//       <TableContainer>
//         <Table aria-label="sticky table" stickyHeader>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === "number"
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       {!hasPagination ? null : (
//         <TablePagination
//           rowsPerPageOptions={[10, 25, 100]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       )}
//     </Paper>
//   );
// };

export default MagicTable;
