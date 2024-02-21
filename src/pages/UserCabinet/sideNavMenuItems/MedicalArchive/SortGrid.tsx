import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box, Stack, Theme, Typography, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AccessRecordsDefault } from "./components/activePanels/MyRecords/contentDefault";
import { MedicalSpecialistType } from "./components/activePanels/MyRecords/types";
import {
  DoctorAvatar,
  DoctorFullName,
  DoctorSpecialization,
} from "./CreateAccessModal";
import CustomButton from "./CustomButton";
import MessageIconSvg from "img/MessageIconSvg";
import EditIconSvg from "img/EditIconSvg";
import RemoveIconSvg from "img/RemoveIconSvg";

export default function SortGrid() {
  const classes = useStyles();

  const columns = [
    {
      field: "medicalSpecialist",
      headerName: "Лікар",
      flex: 1,
      renderCell: (params: any) => {
        const { value }: { value: MedicalSpecialistType } = params;

        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "nowrap",
            }}
          >
            <DoctorAvatar src={value.photo} alt="User avatar" />

            <Stack sx={{ flexDirection: "column" }}>
              <DoctorFullName>
                {value.name + " " + value.lastName}
              </DoctorFullName>

              <DoctorSpecialization>
                {value.specialization}
              </DoctorSpecialization>
            </Stack>
          </Box>
        );
      },
      sortComparator: (v1: MedicalSpecialistType, v2: MedicalSpecialistType) =>
        `${v1.name} ${v1.lastName}`.localeCompare(`${v2.name} ${v2.lastName}`),
    },
    {
      field: "categoryType",
      headerName: "Категорія записів",
      flex: 2.5,
      sortable: false,
      renderCell: (params: any) => {
        const { value }: { value: string[] } = params;

        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              rowGap: "2px",
              columnGap: "4px",
              flexWrap: "wrap",
            }}
          >
            {value.map((item, index) => {
              return (
                <CategoryTypeBadge key={index}>
                  <CategoryTypeBadgeLabel>{item}</CategoryTypeBadgeLabel>
                </CategoryTypeBadge>
              );
            })}
          </Box>
        );
      },
    },
    {
      field: "validity",
      headerName: "Діє в період",
      flex: 1,
      renderCell: (params: any) => (
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "500",
            color: "#1E1E1E",
            lineHeight: "1.15",
            overflowWrap: "anywhere",
            wordWrap: "break-word",
          }}
        >
          {params.value}
        </Typography>
      ),
      sortComparator: (v1: any, v2: any) => v1.localeCompare(v2),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({}) => {
        return [
          <GridActionsCellItem
            icon={<MessageIconSvg />}
            label=""
            onClick={() => console.log("Click!")}
            className={classes.actionButton}
          />,
          <GridActionsCellItem
            icon={<EditIconSvg />}
            label=""
            onClick={() => console.log("Click!")}
            className={classes.actionButton}
          />,
          <GridActionsCellItem
            icon={<RemoveIconSvg />}
            label=""
            onClick={() => console.log("Click!")}
            className={classes.actionButton}
          />,
        ];
      },
    },
  ];

  return (
    <div className={classes.root}>
      <DataGrid
        getRowHeight={() => "auto"}
        getEstimatedRowHeight={() => 60}
        disableColumnMenu
        rows={AccessRecordsDefault}
        columns={columns}
        initialState={{
          sorting: {
            sortModel: [{ field: "medicalSpecialist", sort: "asc" }],
          },
        }}
        sx={{
          border: "none",
          flex: 1,

          "& .MuiDataGrid-row": {
            background: "#fff",
            borderRadius: "20px",
            marginBottom: "10px",
            border: "none",
            padding: "10px 0",
          },

          // Neutralize the hover colour (causing a flash)
          "& .MuiDataGrid-row.Mui-hovered": {
            background: "#fff",
          },
          // Take out the hover colour
          "& .MuiDataGrid-row:hover": {
            background: "#fff",
          },

          "&>.MuiDataGrid-main": {
            "&>.MuiDataGrid-columnHeaders": {
              borderBottom: "none",
            },

            "& div div div div >.MuiDataGrid-cell": {
              borderBottom: "none",
            },
          },
        }}
      />
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
  },
  bolderText: {
    fontWeight: 600,
    color: "slategray",
  },
  lighterText: {
    fontWeight: 400,
    color: "dimgray",
  },
  actionButton: {
    border: "1px solid #E5EEFF",
    width: "40px",
    height: "40px",
  },
}));

const CategoryTypeBadge = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",
  background: "#fff",
  border: "1px solid #E5EEFF",
  borderRadius: "30px",
  padding: "10px",
}));

const CategoryTypeBadgeLabel = styled(Typography)(() => ({
  fontSize: "12px",
  fontWeight: "500",
  color: "#1E1E1E",
}));
