import React from 'react'
import './about.css';
import about from '../../images/about.jpg'

export default function About() {
    return (
        <div className='about'>
            <div className='aboutInfo'>
                <span className='aboutInfoHead'>Just my Project which might help you to get your dream job.
                Prepare a better Resume and 
               <span className='colorRed'> Stand Out </span>from others.</span>
           
               <span className="aboutSiteInfo">
                   Suggestion for improving the site are most welcome. 
                   Send your Ideas. Use any of the below social media handles to connect with us.
        </span>
            </div>

            <div className='aboutVect'>
                <img alt='' src={about} className='aboutImg'/>
            <a href='https://www.freepik.com/vectors/business'>
                Business vector created by vectorjuice - www.freepik.com
                </a>            </div>
        </div>
    )
}
