import { Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useHooks } from "./hooks";

const Header = () => {
  const { open, anchorEl, handleClose, handleClick, router } = useHooks();
  return (
    <Stack
      direction="row"
      sx={{
        position: "absolute",
        alignItems: "end",
        justifyContent: "center",
        width: "100%",
        height: "4%",
        backgroundColor: "#F6ECA9",
        overflow: "hidden",
      }}
    >
      <Typography variant="h6" color="black">
        Christian Lloyd Circulado
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <ArrowDownwardIcon />
        </Button>
      </Typography>

      <>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={() => router.push("/login/page")}>Logout</MenuItem>
        </Menu>
      </>
    </Stack>
  );
};
export default Header;
