import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Profile.css';

function MainProf(){
    return(
        <div className='main'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        
        </div>
    )
}

function News(){
    return(
        <div className='news'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

function Profile(){
    const isScreenSmall = useMediaQuery({ maxWidth: 800 });
    return(
        <main className='main-content'>
        <MainProf/>
        {isScreenSmall ? null : (
        <News/>
        )}
      </main>
    )
}
export default Profile;