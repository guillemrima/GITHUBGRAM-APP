import React from 'react';
import style from './profile.module.css';
import mockup from "./../assets/mockup";

export default function Profile() {
    return (
        <section className={style.profileSection}>
            <div className={style.profileContainer}>
                <div className={style.avatar}>
                    <img src={mockup.avatar} />
                </div>
                <div className={style.stats}>
                    <div className={style.info}>
                        <div className={style.number}>
                            <p>35</p>
                        </div>
                        <div className={style.text}>
                            <p>Repositories</p>
                        </div>
                    </div>
                    <div className={style.info}>
                        <div className={style.number}>
                            <p>761</p>
                        </div>
                        <div className={style.text}>
                            <p>Followers</p>
                        </div>
                    </div>
                    <div className={style.info}>
                        <div className={style.number}>
                            <p>1.118</p>
                        </div>
                        <div className={style.text}>
                            <p>Following</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.descriptionContainer}>
                <h1 className={style.name}>{mockup.name}</h1>
                <p className={style.nickname}>{mockup.nickname}</p>
                <p className={style.bio}>{mockup.bio}</p>
            </div>
        </section>
    )
}