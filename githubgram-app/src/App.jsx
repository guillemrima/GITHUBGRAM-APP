import React from 'react'
import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import mockupDefault from './assets/mockup'
import Navbar from './components/Navbar';

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
            <Navbar />
        </>
    )
}
