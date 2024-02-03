import HeaderCSS from "../styles/Header.module.css";
import { CgProfile } from "react-icons/cg";
import { GiVineLeaf } from "react-icons/gi";

export default function Header() {
  return (
    <>
      <header className={HeaderCSS.header}>
        <h1>
          <GiVineLeaf /> VitaeVine
        </h1>
        <CgProfile className={HeaderCSS.profileIcon} />
      </header>
    </>
  );
}
