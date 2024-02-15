
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Spacer,
} from '@chakra-ui/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerButton?: React.ReactNode;
  modalTitle: string;
  modalBody: React.ReactNode;
  modalFooter?: React.ReactNode;
  setIsModalOpen?: (value: boolean) => void
  onSave?: () => void;
  customFooterButtons?: React.ReactNode[];
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  triggerButton,
  modalTitle,
  modalBody,
  modalFooter,
  onSave,
  setIsModalOpen,
  customFooterButtons,
  size = 'xl',
}) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      if (onSave) {
        await onSave();
      }
      onClose();
    } catch (error) {
      console.error('Save failed:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      {triggerButton ? triggerButton : <Button>Open Modal</Button>}


      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalBody}</ModalBody>
          {(modalFooter || onSave || customFooterButtons) && (
            <ModalFooter>
              {modalFooter}
              {customFooterButtons && (
                <>
                  <Spacer />
                  <Flex>
                    {customFooterButtons.map((button, index) => (
                      <React.Fragment key={index}>{button}</React.Fragment>
                    ))}
                  </Flex>
                </>
              )}
              {!modalFooter && !customFooterButtons && (
                <>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={handleSave}
                    isLoading={isSaving}
                  >
                    Save
                  </Button>
                  <Button onClick={onClose}>Close</Button>
                </>
              )}
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
