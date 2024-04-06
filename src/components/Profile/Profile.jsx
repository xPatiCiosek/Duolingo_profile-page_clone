import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Profile.css';
import News from '../News/News';

function MainProf(){
    return(
        <div className='main'>
            <div className='profile-pic'></div>
            <div className='username-section'></div>
            <div className='stat-section'></div>
            <div className='achievment-section'></div>
        
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