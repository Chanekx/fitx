
import { useState } from "react";

export const useHooks = () => {
  const [open, setOpen] = useState(false);
  return {
    setOpen,
    open,
  };
};
