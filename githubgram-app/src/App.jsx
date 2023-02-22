import React from 'react'
import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import mockupDefault from './assets/mockup'
import Navbar from './components/Navbar';
import Repocard from './components/Repocard';

export default function App() {
    const [profileData, setProfileData] = useState(mockupDefault);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://api.github.com/users/guillemrima");
            const data = await response.json();
            setProfileData(data);
        }
        fetchData();
    }, []);

    const [repoData, setRepoData] = useState(mockupDefault);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://api.github.com/users/guillemrima/repos");
            let data = await response.json();
            setRepoData(data[3]);
        }
        fetchData();
    }, []);

    return (
        <>
            <Profile 
                name={profileData.name}
                nickname={profileData.login}
                followers={profileData.followers}
                following={profileData.following}
                repositories={profileData.public_repos}
                bio={profileData.bio}
                avatar={profileData.avatar_url}
                location={profileData.location}
            />
            <Repocard
                repo_name={repoData.name}
                repo_stargazers={repoData.stargazers_count}
                repo_forks={repoData.forks}
                repo_description={repoData.description}
                repo_private={repoData.private}
            />

            <Navbar 
                avatar={profileData.avatar_url}
            />
        </>
    )
}
