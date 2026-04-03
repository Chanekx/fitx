import { createTheme } from "@mui/material/styles";

export const SIDEBAR_WIDTH = 240;

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0f766e",
      light: "#14b8a6",
      dark: "#0d5c56",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#c2410c",
      light: "#ea580c",
      dark: "#9a3412",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f1f5f9",
      paper: "#ffffff",
    },
    success: {
      main: "#15803d",
    },
    error: {
      main: "#b91c1c",
    },
    warning: {
      main: "#ca8a04",
    },
    divider: "rgba(15, 23, 42, 0.08)",
  },
  typography: {
    fontFamily: '"DM Sans", "Segoe UI", system-ui, sans-serif',
    h3: {
      fontFamily: '"Inknut Antiqua", Georgia, serif',
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#cbd5e1 transparent",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 14px rgba(15, 118, 110, 0.25)",
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "none",
          borderRadius: 12,
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f8fafc",
            borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
          },
          "& .MuiDataGrid-cell": {
            borderColor: "rgba(15, 23, 42, 0.06)",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "rgba(15, 118, 110, 0.04)",
          },
        },
      },
    },
  },
});

export default theme;
