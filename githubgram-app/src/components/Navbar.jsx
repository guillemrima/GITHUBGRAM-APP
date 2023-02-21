import React from "react";
import icon from './../assets/icons';
import style from './style/navbar.module.css';

export default function Navbar() {
    return(
        <section className={style.navbarSection}>
            
            <div className={style.navbarContainer}>
                <div className={style.homeElement}>
                    <img src={icon.homeIcon} />
                </div>
                <div className={style.searchElement}>
                    <img src={icon.searchIcon} />
                </div>
                <div className={style.userElement}>
                    <img src={icon.userIcon} />
                </div>
            </div>

        </section>
    )
}