import { Drawer, IconButton, Stack } from "@mui/material";
import DeleteWorkout from "../DeleteWorkout";
import { useHooks } from "./hooks";
import CloseIcon from "@mui/icons-material/Close";
import { WorkoutProps } from "../WorkoutList";

import EditForm from "./EditForm";
import DisplayView from "./DisplayView";

interface ViewWorkoutProps {
  open: boolean;
  handleClose?: () => void;
  workout: WorkoutProps;
}

const ViewWorkout = ({ open, handleClose, workout }: ViewWorkoutProps) => {
  const { isOpen, openModal } = useHooks();

  if (!workout) return null;

  return (
    <Stack sx={{ display: "flex", ml: "auto" }}>
      <Drawer
        open={open}
        onClose={handleClose}
        anchor="right"
        variant="persistent"
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: 600,
            overflowY: "hidden",
            padding: 3,
          },
        }}
      >
        <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2 }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        {isOpen("edit") ? (
          <EditForm workout={workout} onCancel={() => openModal(false)} />
        ) : (
          <DisplayView
            workout={workout}
            onEdit={() => openModal("edit")}
            onDelete={() => openModal("delete")}
          />
        )}
      </Drawer>

      {isOpen("delete") && (
        <DeleteWorkout
          open={true}
          handleClose={() => {
            openModal(false);
            handleClose?.();
          }}
          workout={workout}
        />
      )}
    </Stack>
  );
};

export default ViewWorkout;
