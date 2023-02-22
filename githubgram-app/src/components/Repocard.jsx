import React from "react";
import icon from './../assets/icons';
import style from './style/repocard.module.css'

export default function Repocard(repoData) {
    return (
        <section className={style.repocardSection}>
            <div className={style.repocardContainer}>
                <div className={style.titleContainer}>
                    <div className={style.nameRepoContainer}>
                        <h2>{repoData.repo_name}</h2>
                    </div>
                    <div className={style.starsContainer}>
                        <p>{repoData.repo_stargazers}</p>
                        <div className={style.imageContainer}>
                            <img src={icon.starIcon} />
                        </div>
                    </div>
                    <div className={style.forksContainer}>
                        <p>{repoData.repo_forks}</p>
                        <div className={style.imageContainer}>
                            <img src={icon.forkIcon} />
                        </div>
                    </div>
                </div>
                <div className={style.descriptionContainer}>
                    <p>{repoData.repo_description}</p>
                </div>
            </div>
        </section>
    )
}