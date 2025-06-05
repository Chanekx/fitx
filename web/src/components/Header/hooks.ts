import { useRouter } from "next/router";
import React, { useState } from "react";


export const useHooks = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openAccountDrawer, setOpenAccountDrawer] = useState(false);
  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return {
    openAccountDrawer,
    setOpenAccountDrawer,
    open,
    anchorEl,
    handleClose,
    handleClick,
    router,
  };
};
