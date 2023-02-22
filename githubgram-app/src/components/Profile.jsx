import React from 'react';
import style from './style/profile.module.css';
import icon from './../assets/icons';
import { useState } from 'react';

export default function Profile(profileData) {
    const twitterEl = document.getElementById('twitterEl');
    const [opacityButton, setOpacityButton] = useState(1);

    function blockTwitterRef() {
    if(profileData.twitter != null){
        twitterEl.href = `https://twitter.com/${profileData.twitter}`
    }else{setOpacityButton(0.5)}
    }
    
    window.addEventListener("load", blockTwitterRef)

    return (
        <section className={style.profileSection}>
            <div className={style.mainContainer}>
                <div className={style.profileContainer}>
                    <div className={style.avatar}>
                        <img src={profileData.avatar} />
                    </div>
                    <div className={style.stats}>
                        <div className={style.info}>
                            <div className={style.number}>
                                <p>{profileData.repositories}</p>
                            </div>
                            <div className={style.text}>
                                <p>Repositories</p>
                            </div>
                        </div>
                        <div className={style.info}>
                            <div className={style.number}>
                                <p>{profileData.followers}</p>
                            </div>
                            <div className={style.text}>
                                <p>Followers</p>
                            </div>
                        </div>
                        <div className={style.info}>
                            <div className={style.number}>
                                <p>{profileData.following}</p>
                            </div>
                            <div className={style.text}>
                                <p>Following</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.descriptionContainer}>
                    <h1 className={style.name}>{profileData.name}</h1>
                    <p className={style.nickname}>{profileData.nickname}</p>
                    <p className={style.bio}>{profileData.bio}</p>
                </div>
                <div className={style.socialMediaContainer}>
                    <button id="twitterContainer" className={style.buttonContainer} style={{opacity : opacityButton}}>
                        <img src={icon.twitterLogo}/>
                        <a id="twitterEl">Visit {profileData.nickname}'s twitter</a>
                    </button>
                    <button className={style.buttonContainer}>
                        <img src={icon.ubicationIcon} className={style.locationIcon}/>
                        <a>Discover {profileData.location}</a>
                    </button>
                </div>
                <hr className={style.separationSection}></hr>
            </div>
        </section>
    )
}