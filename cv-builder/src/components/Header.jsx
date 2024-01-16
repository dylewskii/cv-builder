import HeaderCSS from "../styles/Header.module.css";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";

export default function Header() {
  return (
    <>
      <header className={HeaderCSS.header}>
        <h1>CanVas</h1>
        <IconContext.Provider
          value={{ size: "2rem", className: HeaderCSS.profileIcon }}
        >
          <CgProfile />
        </IconContext.Provider>
      </header>
    </>
  );
}
