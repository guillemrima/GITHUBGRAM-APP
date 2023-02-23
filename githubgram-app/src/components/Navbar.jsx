import React from "react";
import icon from './../assets/icons';
import style from './style/navbar.module.css';
import { useState } from "react"

export default function Navbar(profileData) {

    const [animationSearch, setAnimationSearch] = useState({
        height: !"25px",
        width: "25px"
    }
    );

    const animateIcon = () =>{
        setAnimationSearch({
            transform: 'translateX(-60px)',
            height: "15px",
            width: "15px",
            transition: "all 0.4s ease-out"
        })
    }

    return(
        <section className={style.navbarSection}>
            
            <div className={style.navbarContainer}>
                <div className={style.homeElement}>
                    <img src={icon.homeIcon} />
                </div>
                <div className={style.searchElement}>
                    <div onClick={animateIcon} className={style.searchIcon} style={animationSearch}>
                        <img src={icon.searchIcon} /> 
                    </div>
                    <input className={style.searchUser} />
                </div>
                <div className={style.userElement}>
                    <img src={profileData.avatar} />
                </div>
            </div>

        </section>
    )
}