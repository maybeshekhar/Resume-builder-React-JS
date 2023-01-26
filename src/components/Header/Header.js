import React from "react";


//import resumeSvg from "../../assets/resume.svg";
import resumeSvg from "../../assets/paper.png";

import styles from "./Header.module.css";



function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
        <p style={{color: 'lightgray', fontFamily: 'monospace'}}>© Chandrashekhar</p>
    
      </div>
      
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>   
  );
}

export default Header;