import modalCSS from "../styles/Modal.module.css";

export default function Modal({ hidden, children }) {
  if (hidden) return;

  return (
    <dialog className={modalCSS.modal} open={hidden}>
      {children}
    </dialog>
  );
}

Modal.Content = ({ children }) => {
  return <div>{children}</div>;
};

Modal.Controls = ({ onModalClick }) => {
  return (
    <div className={modalCSS.controls}>
      <button onClick={onModalClick}>Cancel</button>
      <button onClick={onModalClick}>Confirm</button>
    </div>
  );
};
