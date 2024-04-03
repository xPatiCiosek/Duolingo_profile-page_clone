import React from 'react';
import './Navigation.css';

function Section(props){
    return(
        <div className='section'>
            <img src={props.src} alt={props.title + "icon"} />
            <span>{props.title}</span>
        </div>
    )
}

function NavBar(props){
    return(
        <nav className='nav'>
            <div className='nav-logo'>
                <img className='big-logo' src="https://d35aaqx5ub95lt.cloudfront.net/vendor/70a4be81077a8037698067f583816ff9.svg" alt="duo logo" />
                <img className='small-logo' src="https://d35aaqx5ub95lt.cloudfront.net/vendor/0cecd302cf0bcd0f73d51768feff75fe.svg" alt="duo logo" />
            </div>
            <div className='container'>
                <Section src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg" title="LEARN"/>
                <Section src="https://d35aaqx5ub95lt.cloudfront.net/vendor/5187f6694476a769d4a4e28149867e3e.svg" title="PRACTICE"/>
                <Section src="https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg" title="LEADERBOARDS"/>
                <Section src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg" title="QUESTS"/>
                <Section src="https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg" title="SHOP"/>
                <Section src="https://simg-ssl.duolingo.com/avatars/1342075437/YOxVAzdSPD/medium" title="PROFILE"/>
                <Section src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg" title="MORE"/>
            </div>
        </nav>
    )
}

export default NavBar;

  