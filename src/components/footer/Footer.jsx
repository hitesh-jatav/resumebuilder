import React from 'react'
import './footer.css'


export default function Footer() {
    return (
        <div className='footer'>
            <div className='footerAllrights'>
                Copyrights &copy; 2021 All rights reserved 
            </div>
            <div className='footerclickableLinks'>
                <a href='#'>Terms and Conditions</a> 
                 <span>|</span>         
                <a href='#'>Privacy Policy</a> 
                <span>|</span>         
                <a href='#' className='userAgree'>User Agreement</a>
            
            </div>
        </div>
    )
}
