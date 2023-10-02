import { Modal, ModalOverlay, ModalContent, ModalCloseButton, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@mantine/hooks";

export interface CustomModalProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export const CustomModal = ({ isOpen, setOpen, children }: CustomModalProps) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <Modal onClose={handleModalClose} isOpen={isOpen} isCentered size={{ base: "full", sm: "sm", md: "xl" }}>
      <ModalOverlay />
      <ModalContent maxWidth={{ md: "700px", lg: "1000px" }} height={{ md: "600px" }}>
        {isMobile ? (
          <ModalCloseButton />
        ) : (
          <Image
            src="/assets/modal_close.svg"
            alt=""
            width="18px"
            position="absolute"
            top="5px"
            right="-30px"
            cursor="pointer"
            onClick={() => handleModalClose()}
          />
        )}
        {children}
      </ModalContent>
    </Modal>
  );
};
