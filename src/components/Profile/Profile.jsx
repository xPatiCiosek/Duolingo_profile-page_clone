import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import './Profile.css';
import News from '../News/News';

function MainProf(props){
    return(
        <div className='main'>
            <div className='profile-pic'><button></button></div>
            <UsernameSection name="Pati" nickname='xgydr' joinDate='December 2023' numFollowing='10' numFollowers='7'/>
            <ProfSection title='Statistics'>
                <div className='container-stat'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </ProfSection>
            <ProfSection title='Achievments'>
                <Link className='link button'>VIEW ALL</Link>
            </ProfSection>
        
        </div>
    )
}

function ProfSection(props) {
    return(
        <section className='stat-section'>
            <h2>{props.title}</h2>
            {props.children}
        </section>
    )
}

function UsernameSection(props){
    return (
        <section className='username-section'>
            <h2>{props.name}</h2>
            <p className='nickname'>{props.nickname}</p>
            <p>Joined {props.joinDate}</p>
            <div>
                <span className='friends'>
                    <span><Link className='link'>{props.numFollowing} Following</Link></span>
                    <span><Link className='link'>{props.numFollowers} Followers</Link></span>
                </span>
                <span><img src="https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/40a9ce3dfafe484bced34cdc124a59e4.svg" alt="" /></span>
            </div>
        </section>
    )
}

function Profile(){
    const isScreenSmall = useMediaQuery({ maxWidth: 800 });
    return(
        <main className='main-content'>
        <MainProf />
        {isScreenSmall ? null : (
        <News/>
        )}
      </main>
    )
}
export default Profile;