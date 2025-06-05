import { useState } from "react";

type ModalType = "delete" | "edit" | false;

export const useHooks = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(false);

  const openModal = (modal: ModalType) => {
    setActiveModal(modal);
  };

  return {
    openModal,
    activeModal,
    isOpen: (modal: ModalType) => activeModal === modal,
  };
};
