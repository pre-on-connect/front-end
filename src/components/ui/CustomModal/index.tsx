import {Modal, ModalOverlay, ModalContent, ModalCloseButton, Image} from "@chakra-ui/react";
import {useMediaQuery} from "@mantine/hooks";

export interface CustomModalProps {
    isOpen: boolean;
    // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleModalClose: () => void;
    handleModalOpen?: () => void;
    children?: React.ReactNode;
    size?:'lg'|'sm';
}

const customModalSize = {
    lg:{
        wrapper: {
            base: "full",
            sm: "sm",
            md: "xl"
        },
        contentW: {
            md: "700px",
            lg: "1000px"
        },
        contentH:{
            md:'600px'
        }
    },
    sm:{
        wrapper: {
            base: "md",
            sm: "xs",
            md: "lg"
        },
        contentW: {
            md: "20rem",
            lg: "25rem"
        },
        contentH:{
            md:'auto'
        }
    }
}

export const CustomModal = ({isOpen, handleModalClose, children, size = 'lg'}: CustomModalProps) => {
    const isMobile = useMediaQuery("(max-width: 767px)");
    const isTablet = useMediaQuery("(min-width: 768px)");
    const isDesktop = useMediaQuery("(min-width: 1200px)");

    const modalSize = customModalSize[size];

    return (
        <Modal onClose={handleModalClose} isOpen={isOpen} isCentered size={modalSize.wrapper} >
            <ModalOverlay/>
            <ModalContent maxWidth={modalSize.contentW} height={modalSize.contentH}>
                {isMobile ? (
                    <ModalCloseButton zIndex="10"/>
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
