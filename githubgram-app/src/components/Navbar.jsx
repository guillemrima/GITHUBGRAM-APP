import React from "react";
import icon from './../assets/icons';
import style from './style/navbar.module.css';
import { useState } from "react"

export default function Navbar(profileData, hydrateUser) {

    const [animationSearch, setAnimationSearch] = useState({
        height: !"25px",
        width: "25px"
    }
    );
    const [animationSearchBar, setAnimationSearchBar] = useState({
        width : '0px',
        opacity : '0%',
        visibility: 'hidden'
    }
    );

    const animateIcon = () =>{
        setAnimationSearch({
            transform: 'translateX(-60px)',
            height: "15px",
            width: "15px",
            transition: "all 0.4s ease-out"
        })
        setAnimationSearchBar({
            opacity: '100%',
            width: '130px',
            visibility: 'visible',
            transition: 'width 0.4s, opacity 0.2s ease-in'
        })
    }

    const [userID, setUserID] = useState("");


    function takeID(e) {
        setUserID(e.target.value)
        console.log(userID)
    }
    async function ID  (e) {
        e.preventDefault();
        profileData.onSubmit(userID)
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
                    <form onSubmit = {ID}>
                    <input type='text' value= {userID} onChange={takeID} placeholder="Enter ID's user" className={style.searchUser} style={animationSearchBar}/>
                    </form>
                </div>
                <div className={style.userElement}>
                    <img src={profileData.avatar} />
                </div>
            </div>
        </section>
    )
}
