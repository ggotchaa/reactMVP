import React, { createContext, useContext, useState } from "react";
import AuthModal from "../widgets/AuthModal/AuthModal";

interface ModalContextProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: (stringKey: string) => void;
  modalClose: () => void;
}

const defaultContextValue: ModalContextProps = {
  isOpen: false,
  setOpen: () => {},
  modalOpen: () => {},
  modalClose: () => {},
};

interface GlobalContextProps {
	children: React.ReactNode;
}

const ModalContext = createContext<ModalContextProps>(defaultContextValue);

const ModalProvider: React.FC<GlobalContextProps> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [modalPage, setModalPage] = useState("");

  const modalOpen = (stringKey: string) => {
    if (stringKey && typeof stringKey === "string") setModalPage(stringKey);
    else setModalPage("");
    setOpen(true);
  };

  const modalClose = () => {
    setModalPage("");
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, setOpen, modalOpen, modalClose }}>
      {!isOpen ? null : (
        <AuthModal {...{ isOpen, setOpen, modalPage, modalOpen, modalClose }} />
      )}
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
export default ModalProvider;
