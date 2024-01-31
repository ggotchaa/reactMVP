import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";

import cl from "./AuthModal.module.scss";
import { SVGtriangle } from "../../basic/PackageSVG";

import RegistrationForm from "./components/RegistrationForm";
import PasswordRecovery from "./components/PasswordRecoveryForm";
import LoginForm from "./components/LoginForm";
import Preview from "./components/Preview";
import UppasswordForm from "./components/UppasswordForm";
import React from "react";

type AuthModalProps = {
  isOpen: boolean;
  modalClose: () => void;
  modalPage: string;
};

type Variant = {
  [key: string]: number;
};

const variants: Variant = {
  login: 1,
  register: 30,
  passrecovery: 3,
  uppassword: 4,
};

const modalPageToCode = (s: string = "") => {
  console.log("[modalPage] say", variants[s] || 0, s);

  return variants[s] || 0;
};

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  modalClose,
  modalPage,
}) => {
  const [aCurrentStep, setCurrentStep] = useState<number>(
    modalPageToCode(modalPage)
  );
  const [aStepHistory, setStepHistory] = useState<number[]>([]);

  console.log(aCurrentStep, aStepHistory, modalPage);

  const handlers = {
    closeModal: () => {
      setStepHistory([]);
      setCurrentStep(0);
      modalClose();
    },

    nextStep: (forceStep?: string) => {
      const step = forceStep ? modalPageToCode(forceStep) : aCurrentStep + 1;
      setCurrentStep(step);
      setStepHistory([...aStepHistory, aCurrentStep]);
    },

    backStep: () => {
      if (aStepHistory.length === 0) return handlers.closeModal();
      const arr = [...aStepHistory];
      setCurrentStep(arr.pop() || 0);
      setStepHistory(arr);
    },
  };

  const isBackAvailable = aCurrentStep !== 0 && aStepHistory.length !== 0;

  return (
    <Modal
      open={isOpen}
      onClose={handlers.closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className={cl.wrapper}
        sx={{
          width:
            aCurrentStep === 0
              ? "674px"
              : aCurrentStep === 30
              ? "984px"
              : "600px",
        }}
      >
        <Box className={cl.flyButtons}>
          <Button variant="text" onClick={handlers.closeModal}>
            {/* <SVGtriangle fill="red" /> */}
          </Button>
          <Button
            variant="text"
            sx={{
              fontWeight: 400,
              display: !isBackAvailable ? "none" : "block",
            }}
            onClick={handlers.backStep}
          >
            {/* <SVGtriangle /> */}
            Назад
          </Button>
        </Box>

        <Box
          className={cl.container}
          sx={{ width: aCurrentStep === 30 ? "936px" : "432px" }}
        >
          {aCurrentStep === 0 ? (
            <Preview handlers={handlers} />
          ) : aCurrentStep === 1 ? (
            <LoginForm handlers={handlers} />
          ) : aCurrentStep === 3 ? (
            <PasswordRecovery handlers={handlers} />
          ) : aCurrentStep === 4 ? (
            <UppasswordForm handlers={handlers} />
          ) : aCurrentStep === 30 ? (
            <RegistrationForm handlers={handlers} />
          ) : null}
        </Box>
      </Box>
    </Modal>
  );
};

export default AuthModal;
