import HeaderCSS from "../styles/Header.module.css";

export default function Header() {
  return (
    <>
      <header className={HeaderCSS.header}>
        <h1>CanVas</h1>
        <button className={HeaderCSS.btn}>Create CV</button>
      </header>
    </>
  );
}
