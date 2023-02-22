import React from "react";
import Repocard from "./Repocard";
import style from "./style/repogallery.module.css"

export default function Repogallery(repoData){
    const repoList = repoData.repoList;
    const repoCard = repoList.map(repoItem => {
        return (            
        <Repocard
            key={repoItem.name}
            repo_name={repoItem.name}
            repo_stargazers={repoItem.stargazers_count}
            repo_forks={repoItem.forks}
            repo_description={repoItem.description}
            repo_private={repoItem.private}
        />)
    })

    return (
        <section className={style.repogallerySection}>
            {repoCard}
            {repoCard}
            {repoCard}
            {repoCard}
            {repoCard}
            {repoCard}
            {repoCard}
            {repoCard}
            {repoCard}
            {repoCard}
        </section>
    )
}