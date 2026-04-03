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
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: 52,
        px: 2,
        backgroundColor: "background.paper",
        borderBottom: 1,
        borderColor: "divider",
        boxShadow: "0 1px 0 rgba(15, 23, 42, 0.06)",
        overflow: "hidden",
      }}
    >
      <Typography variant="h6" color="text.primary">
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
