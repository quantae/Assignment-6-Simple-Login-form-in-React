import React, { useContext } from "react";
import styles from "./navbar.module.css";
import { ReactComponent as Icon } from "../../assets/icons/menu.svg";
import { UserContext } from "../../services/context/UserContext";

function Navbar() {
  const { userDetails } = useContext(UserContext);
  // const firstName = userDetails.firstName
  return (
    <div className={styles.navbar_container}>
      <h3 className={styles.logo}>devjobs</h3>
      <nav>
        <p>{userDetails.firstName}</p>
        <div className={styles.menu}>
          <Icon />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
