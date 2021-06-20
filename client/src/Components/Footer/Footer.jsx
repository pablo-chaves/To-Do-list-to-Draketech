import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.main}>
      <div className={style.ctn}>
        <div className={style.title}>
            &copy;{new Date().getFullYear()} To-Do App |<a href='/about' className={style.link}>About</a>
        </div>
        <div className={style.disclaimer}>
              To-Do App is a project developed for draketech.
        </div>
      </div>
    </div>
  );
}

export default Footer;
