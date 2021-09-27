import React from "react";
import "./templates.css";
import resume1 from '../../images/resume1.jpg'
import resume2 from '../../images/resume2.JPG'
import resume3 from '../../images/resume3.JPG'
import error2 from '../../images/fixing3.jpg'



export default function Templates() {
  return (
    <div className="templates"  >
      <div className="templatesCards"
        style={{ 
          backgroundImage: `url(${resume1})`,
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
        }}>
      <div className='middleBtnDiv'>
                    <a className='SelectResumeBtn' 
                    href='/templates/edit-1'>Select</a>
          </div>
        
       </div>
     <div className="templatesCards" 
      style={{ 
        backgroundImage: `url(${resume2})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
      }}
      >
          <div className='middleBtnDiv'>
                    <a className='SelectResumeBtn'
                       href='/templates/edit-2'
                    >Select</a>
          </div>
        
      </div>

      <div className="templatesCards"
        style={{ 
          backgroundImage: `url(${resume3})`,
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
        }}
      >
      <div className='middleBtnDiv'>
                    <a className='SelectResumeBtn'
                      href='/templates/edit-3'>Select</a>
          </div>
        
      </div>

      <div className="templatesCards"
        style={{ 
          backgroundImage: `url(${error2})`,
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
        }}>
      <div className='middleBtnDiv'>
                    <a className='SelectResumeBtn'>Select</a>
          </div>
        
      </div>

      <div className="templatesCards"
        style={{ 
          backgroundImage: `url(${error2})`,
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
        }}>
      <div className='middleBtnDiv'>
                    <a className='SelectResumeBtn'>Select</a>
          </div>
        
      </div>
    </div>
  );
}
