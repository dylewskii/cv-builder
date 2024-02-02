import modalCSS from "../styles/Modal.module.css";

export default function Modal({ visible, children }) {
  if (!visible) return;

  return (
    <dialog className={modalCSS.modal} open={visible}>
      {children}
    </dialog>
  );
}

Modal.Content = ({ children }) => {
  return <div>{children}</div>;
};

Modal.Controls = ({ children }) => {
  return <div className={modalCSS.controls}>{children}</div>;
};
