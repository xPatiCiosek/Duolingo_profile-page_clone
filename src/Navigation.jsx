import React from 'react';
import './Navigation.css';

function Section(props){
    return(
        <div className='section'>
            <span><img className='duo-logo' src={"src/images/" + props.icon}  alt={props.icon} /></span>
            <span>{props.title}</span>
        </div>
    )
}

function Navigation(props){
    return(
        <div className='navigation'>
            <div className='nav-logo'>
                <img src="src/images/duo_logo.png" alt="duo logo" />
            </div>
            <div className='container'>
                <Section title="LEARN"/>
                <Section title="PRACTICE"/>
                <Section title="LEADERBOARDS"/>
                <Section title="QUESTS"/>
                <Section title="SHOP"/>
                <Section title="PROFILE"/>
                <Section title="MORE"/>
            </div>
        </div>
    )
}
export default Navigation;