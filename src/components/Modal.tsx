import {
  useState,
  useContext,
  createContext,
  cloneElement,
  useRef,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import useCloseModal from "../hooks/useCloseModal";

type ChildrenProps = {
  children: React.ReactElement;
};

type ContextProps = {
  modalName: string;
  setModalName: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
};

const ModalContext = createContext<ContextProps | null>(null);

function useModalContext() {
  const contextValues = useContext(ModalContext);
  if (!contextValues) {
    throw new Error("this context value doesn't exist");
  }
  return contextValues;
}
// handle the modal context and provide values
function Modal({ children }: ChildrenProps) {
  const [modalName, setModalName] = useState<string>("");
  const onClose = () => setModalName("");

  return (
    <ModalContext.Provider value={{ modalName, onClose, setModalName }}>
      {children}
    </ModalContext.Provider>
  );
}
// get the button as the
function Open({ children, opens }: ChildrenProps & { opens: string }) {
  const { setModalName } = useModalContext();

  return <>{cloneElement(children, { onClick: () => setModalName(opens) })}</>;
}
// get the modal body values and add the onClose props to it and handle the close modal in there
function ModalBody({
  children,
  opensName,
}: ChildrenProps & { opensName: string }) {
  const { modalName, onClose } = useModalContext();
  const { ref } = useCloseModal(onClose);

  if (opensName !== modalName) return null;

  return createPortal(
    <div
      className="fixed top-0 left-0 bottom-0  w-full bg-[rgba(0,0,0,0.5)] z-30"
      ref={ref}
    >
      <div className="absolute z-50 w-full max-w-3xl p-8 overflow-auto -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-xl top-1/2 left-1/2">
        <div className="flex justify-end w-full">
          <button onClick={onClose}>&#x2715;</button>
        </div>
        {cloneElement(children, { onClose })}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Body = ModalBody;

export default Modal;
