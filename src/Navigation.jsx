import React from 'react';
import './Navigation.css';

function Section(props){
    return(
        <div className='section'>
            <span><img src={"./images/" + props.icon}  alt={props.icon} /></span>
            <span>{props.title}</span>
        
        </div>
    )
}
// export default Section;

function Navigation(props){
    return(
        <div className='navigation'>
          <img src="./images/duo_logo.png" alt="duo logo" />
          <Section title="LEARN"/>
          <Section title="PRACTICE"/>
          <Section title="LEADERBOARDS"/>
          <Section title="QUESTS"/>
          <Section title="SHOP"/>
          <Section title="PROFILE"/>
          <Section title="MORE"/>
        </div>
    )
}
export default Navigation;