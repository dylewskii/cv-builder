import footerCSS from "../styles/Footer.module.css";

export default function Footer() {
  const date = new Date();
  const currYear = date.getFullYear();

  return (
    <footer>
      <div className={footerCSS.footerWrapper}>
        <nav className={footerCSS.footerNav}>
          <ul>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </ul>
        </nav>
        <div className={footerCSS.footerBottom}>
          <p>Copyright &copy; {currYear}</p>
          <p>Made by Alan Dylewski</p>
        </div>
      </div>
    </footer>
  );
}
