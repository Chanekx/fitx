import { useState } from "react";
import { useRouter } from "next/router";

type ActivePage = "dashboard" | "workoutList";

export const useHooks = () => {
  const [activePage, setActivePage] = useState<ActivePage>("dashboard");
  const router = useRouter();

  const openPage = (page: ActivePage) => {
    setActivePage(page);

    const newUrl = `${router.pathname}?page=${page}`;
    router.push(newUrl, undefined, { shallow: true });
  };

  return { openPage, activePage };
};
