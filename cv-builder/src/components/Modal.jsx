import modalCSS from "../styles/Modal.module.css";
import { IoClose } from "react-icons/io5";

export default function Modal({ visible, onModalHide, children }) {
  if (!visible) return;

  return (
    <dialog className={modalCSS.modal} open={visible}>
      <IoClose className={modalCSS.closeIcon} onClick={onModalHide} />
      {children}
    </dialog>
  );
}

Modal.Content = ({ children }) => {
  return <div className={modalCSS.content}>{children}</div>;
};

Modal.Controls = ({ children }) => {
  return <div className={modalCSS.controls}>{children}</div>;
};
