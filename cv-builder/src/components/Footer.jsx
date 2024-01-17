import footerCSS from "../styles/Footer.module.css";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const date = new Date();
  const currYear = date.getFullYear();

  return (
    <footer>
      <div className={footerCSS.footerWrapper}>
        <nav className={footerCSS.footerNav}>
          <ul>
            <li className={footerCSS.footerLi}>
              <FaTwitter />
              <a href="">Twitter</a>
            </li>
            <li className={footerCSS.footerLi}>
              <FaInstagram />
              <a href="">Instagram</a>
            </li>
            <li className={footerCSS.footerLi}>
              <FaFacebook />
              <a href="">Facebook</a>
            </li>
          </ul>
        </nav>
        <div className={footerCSS.footerBottom}>
          <p className={footerCSS.footerP}>Copyright &copy; {currYear}</p>
          <p className={footerCSS.footerP}>Made by Alan Dylewski</p>
        </div>
      </div>
    </footer>
  );
}
