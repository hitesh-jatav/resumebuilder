import React from "react";
import "./body.css";
import image from "../../images/building.jpg";

export default function Body() {
  return (
    <div className="body">
      <div className="bodyActionSection">
        <span className="bodyBigLetters">
          Make your first Impression perfect with our Resume templates.
        </span>
        <span className="bodySiteInfo">
          Welcome! Are you stuck in selecting resume design for your dreams job.
          Stand out with a good resume. No Cost. No Login. Just Go ahead.
        </span>
        <a className='bodyActionButton'
        href='/templates'>Get Started</a>
      </div>
      <div className="bodyNonActionSection">
        <img className="bodyBuildingImg" src={image} alt="Resume Builder" />

            <span>
            Business vector created by pikisuperstar - 
            </span>     
          <a href="https://www.freepik.com/vectors/business">
          www.freepik.com
        </a>
      </div>
    </div>
  );
}
