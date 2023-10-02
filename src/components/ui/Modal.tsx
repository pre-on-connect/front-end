'use client';

import styled from "styled-components";
import {HiXMark} from "react-icons/hi2";
import {createPortal} from "react-dom";
import {
    cloneElement,
    createContext,
    Dispatch,
    ReactElement,
    SetStateAction,
    useContext,
    useEffect,
    useRef,
    useState
} from "react";
import {ReactNodeChildren} from "@/utils/types";

export const StyledModal = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFFFFFFF;
  border-radius: ${({theme}) => theme.radius.sm};
  box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  @media ${({theme}) => theme.screenSize.tablet} {
    top:30%;
    padding: 2.5rem 3.7rem;
  }

  @media ${({theme}) => theme.screenSize.mobile} {
    padding: 1.2rem 2.4rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.color.backdrop};
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;
  cursor:pointer;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${({theme}) => theme.color.gray_dark_4};
  }

  @media ${({theme}) => theme.screenSize.mobile} {
    top: .5rem;
    right: 1rem;
    & svg {
      width: 1.8rem;
      height: 1.8rem;
      color: ${({theme}) => theme.color.gray_dark_4};
    }
  }
`;

type ModalContextValue = {
    openName: string;
    close: () => void;
    open: Dispatch<SetStateAction<string>>;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export default function Modal({children}: ReactNodeChildren) {
    const [openName, setOpenName] = useState('');

    const close = () => setOpenName('');
    const open = setOpenName;

    const contextValue: ModalContextValue = {openName, close, open};

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
        </ModalContext.Provider>
    )

}

type OpenProps = {
    children: ReactElement;
    opens: string;
}

function Open({children, opens: opensWindowName}: OpenProps) {
    const {open} = useContext(ModalContext) as ModalContextValue;

    // cloneElement : 요소를 복제해서 새로운 요소를 생성한다(새로운 prop추가 가능)
    // return cloneElement(children, {onClick: () => open(opensWindowName)});
    return cloneElement(children, {onClick: () => open(opensWindowName)});
}

type WindowProps = {
    children: ReactElement;
    name: string;
}

function Window({children, name}:WindowProps) {
    const {openName, close} = useContext(ModalContext) as ModalContextValue;
    const ref = useRef<HTMLDivElement>(null);

    // Modal 바깥영역 click 이벤트 감지 -> Modal close
    useEffect(function () {
        function handleClick({target}:Event) {
            if (ref.current && !ref.current.contains(target as Node)) close();
        }

        // 버블링되는 이벤트는 감지하지 않고, 캡처링이벤트만 감지해서 처리하기 위해 option true로 설정.
        document.addEventListener('click', handleClick, true);

        return () => document.removeEventListener('click', handleClick);

    }, [close]);

    if (name !== openName) return null;

    return createPortal(
        <Overlay>
            <StyledModal ref={ref}>
                <Button onClick={close}><HiXMark/></Button>
                <div>
                    {cloneElement(children, {onCloseModal: close})}
                </div>
            </StyledModal>
        </Overlay>,
        document.body // jsx를 렌더링할 돔요소 -> 돔트리상에서 body의 direct child가 된다(react의 root요소 바깥에 위치하게 됨)
    );
}

Modal.Open = Open;
Modal.Window = Window;
