import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Country Code", flex: 0.5 },
    { field: "registrarId", headerName: "Platform" },
    {
      field: "name",
      headerName: "Channel",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Revenue Model",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Plans",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Definition",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Transmission Time",
      flex: 1,
    },
    {
      field: "city",
      headerName: "FAST",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Type of FAST",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Platforms" subtitle="List of all platforms" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.redAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.grey[900],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.grey[900],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.redAccent[300]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
