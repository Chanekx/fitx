import { Box, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid";
import { useHooks } from "./hooks";
import { formatToMMDDYYYY } from "@/lib/date";
import ViewWorkout from "../ViewWorkout";

export interface WorkoutProps {
  id: string;
  title: string;
  description: string;
  date: Date;
  duration: number;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const WorkoutList = () => {
  const {
    displayWorkouts,
    handleWorkoutClick,
    openDrawer,
    setOpenDrawer,
    selectedWorkout,
  } = useHooks();

  const columns: GridColDef<WorkoutProps>[] = [
    {
      field: "id",
      headerName: "Workout ID",
      width: 300,
      renderCell: ({ row }) => (
        <Box
          sx={{
            color: "info.main",
            cursor: "pointer",
            width: 350,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          onClick={() => handleWorkoutClick(row)}
        >
          {row.id}
        </Box>
      ),
    },
    {
      field: "title",
      headerName: "Title",
      width: 300,
    },
    { field: "description", headerName: "Description", width: 300 },
    {
      field: "date",
      headerName: "Date",
      width: 500,
      renderCell: ({ row }) => <span>{formatToMMDDYYYY(row.date)}</span>,
    },
    { field: "duration", headerName: "Duration (min)", width: 130 },
  ];

  return (
    <Stack sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={displayWorkouts}
        columns={columns}
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "#C4E1E6",
          "& .MuiDataGrid-cell": {
            whiteSpace: "normal",
            lineHeight: "normal",
          },
          "& .MuiDataGrid-row": {
            maxHeight: "none !important",
          },
        }}
      />
      {openDrawer && selectedWorkout && (
        <ViewWorkout
          open={openDrawer}
          handleClose={() => setOpenDrawer(false)}
          workout={selectedWorkout}
        />
      )}
    </Stack>
  );
};

export default WorkoutList;
