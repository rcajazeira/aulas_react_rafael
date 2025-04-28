import styles from "./AppBar.module.css";

import { FaHouse, FaWpforms } from "react-icons/fa6";
import { FaQrcode } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function AppBar() {
  return (
    <nav className={styles.AppBar}>
      <ul>
        <li>
          <Link to="/">
            <FaHouse size={32} color="white" />
          </Link>
        </li>
        <li>
          <Link to="/qr-code">
            <FaQrcode size={32} color="white" />
          </Link>
        </li>
        <li>
          <Link to="/cadastro">
            <FaWpforms size={32} color="white" />
          </Link>
        </li>

      </ul>
    </nav>
  );
}
