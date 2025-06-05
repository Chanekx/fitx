import { useState } from "react";

interface UseSnackbarProps {
  autoHideDuration?: number;
}

export const useSnackbar = ({
  autoHideDuration = 3000,
}: UseSnackbarProps = {}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "error">("success");

  const showSuccess = (message: string) => {
    setMessage(message);
    setSeverity("success");
    setOpen(true);
  };

  const showError = (message: string) => {
    setMessage(message);
    setSeverity("error");
    setOpen(true);
  };

  return {
    open,
    message,
    severity,
    autoHideDuration,
    showSuccess,
    showError,
    setOpen,
  };
};
