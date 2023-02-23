import React from 'react'
import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import mockupDefault from './assets/mockup'
import mockupRepoDefault from './assets/repomockup'
import Navbar from './components/Navbar';
import Repogallery from './components/Repogallery';

export default function App() {
    const [profileData, setProfileData] = useState(mockupDefault);
    const [repoData, setRepoData] = useState(mockupRepoDefault);
    const [apiCallSuccess, setApiCallSuccess] = useState(false);

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch("https://api.github.com/users/guillemrima");
    //         const data = await response.json();
    //         setProfileData(data);
    //     }
    //     fetchData();
    // }, []);


    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch("https://api.github.com/users/guillemrima/repos");
    //         let data = await response.json();
    //         setRepoData(data);
    //     }
    //     fetchData();
    // }, []);

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
                twitter={profileData.twitter_username}
                key={profileData.id}
            />
            <Repogallery repoList = {repoData}/>

            <Navbar 
                avatar={profileData.avatar_url}
            />
        </>
    )
}
