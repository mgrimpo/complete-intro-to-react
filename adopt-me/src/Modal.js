import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = props => {
    const modalContainerRef = useRef(null);

    if (!modalContainerRef.current) {
        modalContainerRef.current = document.createElement("div");
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(modalContainerRef.current);
        return () => modalRoot.removeChild(modalContainerRef.current);
    }, []);

    return createPortal(props.children, modalContainerRef.current);
};

export default Modal;
