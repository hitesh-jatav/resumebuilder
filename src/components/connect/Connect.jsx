import React from 'react'
import './connect.css'
import connect from '../../images/connect.jpg'
import fb from '../../images/icons/fb.png'
import yt from '../../images/icons/yt.png'
import ln from '../../images/icons/ln.png'
import tw from '../../images/icons/twit.png'
import ig from '../../images/icons/ig.png'
import gt from '../../images/icons/gt.png'

export default function Connect() {
    return (
        <div className='connect'> 
   

        <div className='connectList'>
            <img alt='' src={ig} className='connectIcon'/>
            <img alt='' src={ln} className='connectIcon'/>
            <img alt='' src={fb} className='connectIcon'/>
            <img alt='' src={tw} className='connectIcon'/>
            <img alt='' src={yt} className='connectIcon'/>
            <img alt='' src={gt} className='connectIcon'/>

        </div>

   
          
        <div className='connectImgDiv'>
      
      <img className='connectImg' src={connect} alt='connect with us'/>
      <a href='https://www.freepik.com/vectors/people'>
          People vector created by stories -www.freepik.com</a>

  </div>
        
      
         
        </div>
    )
}
