import React from 'react'
import { useEffect, useState } from 'react'
import mockupDefault from './assets/mockup'
import mockupRepoDefault from './assets/repomockup'
import Profile from './components/Profile'
import Navbar from './components/Navbar';
import Repogallery from './components/Repogallery';

export default function App() {
    const [profileData, setProfileData] = useState(mockupDefault);
    const [repoData, setRepoData] = useState(mockupRepoDefault);
    const [ userAPI, setUserAPI] = useState('');
    
    async function hydrateUser(id) {
        await setUserAPI(id);
        console.log(userAPI);
            const response = await fetch(`https://api.github.com/users/${userAPI}`);
            const data = await response.json();
            setProfileData(data);
        


        async function fetchData() {
            const response = await fetch(`https://api.github.com/users/${userAPI}/repos`);
            let data = await response.json();
            setRepoData(data);
        }
        fetchData();
    }
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
                onSubmit={hydrateUser}
            />
        </>
    )

    }
