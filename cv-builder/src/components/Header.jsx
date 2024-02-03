import HeaderCSS from "../styles/Header.module.css";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <>
      <header className={HeaderCSS.header}>
        <h1>VitaeVine</h1>
        <CgProfile className={HeaderCSS.profileIcon} />
      </header>
    </>
  );
}
