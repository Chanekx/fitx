import { useState } from "react";

type ActivePage = "dashboard" | "workoutList";

export const useHooks = () => {
  const [activePage, setActivePage] = useState<ActivePage>("workoutList");

  const openPage = (page: ActivePage) => {
    setActivePage(page);
  };
  return {
    activePage,
    openPage,
  };
};
