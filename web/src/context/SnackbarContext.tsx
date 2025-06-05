import { createContext, useContext, ReactNode } from "react";
import { useSnackbar } from "@/hooks/useSnackBar";
import { Snackbar, Alert } from "@mui/material";

interface SnackbarContextType {
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const snackbar = useSnackbar();

  return (
    <SnackbarContext.Provider
      value={{
        showSuccess: snackbar.showSuccess,
        showError: snackbar.showError,
      }}
    >
      {children}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={snackbar.autoHideDuration}
        onClose={() => snackbar.setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => snackbar.setOpen(false)}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbarContext = () => {
  const context = useContext(SnackbarContext)!;
  return context;
};
