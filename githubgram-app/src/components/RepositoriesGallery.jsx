import React from 'react'
import style from './repositoriesGallery.module.css'
import RepositoryCard from './RepositoryCard'
import { useEffect, useState } from 'react'

export default function RepositoresGallery() {
    const [repositoriesData, setRepositoriesData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://api.github.com/users/guillemrima/repos");
            const data = await response.json();
            setRepositoriesData(data);
        }
        fetchData();
    }, [])

    return (
        <section className={style.repositoriesSection}>
            <div className={style.repositoriesContainer}>
                <RepositoryCard 
                    name = {repositoriesData[1].name}
                    private = {repositoriesData[1].private}
                    fork = {repositoriesData[1].forks_count}
                    star = {repositoriesData[1].stargazers_count}
                />
            </div>
        </section>
    )
}