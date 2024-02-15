import { useState } from "react";
import { Button, useToast } from "@chakra-ui/react";

interface ToastProps {
  title: string;
  status?: "success" | "error" | "warning" | "info";
  description?: string;
}

const Toast = ({ title, status = "success", description }: ToastProps) => {
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToast = () => {
    toast({
      title,
      status,
      description,
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Button onClick={handleOpen}>Show Toast</Button>
      {isOpen && handleToast()}
    </>
  );
};

export default Toast;
