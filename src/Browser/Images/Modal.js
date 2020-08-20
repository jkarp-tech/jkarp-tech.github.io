import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children }) => {
    const modalDiv = document.createElement("div");

    useEffect(() => {
        modalRoot.appendChild(modalDiv);
        return () => {
            modalRoot.removeChild(modalDiv);
        };
    }, [modalDiv]);

    return createPortal(children, modalDiv);
};

export default Modal;
