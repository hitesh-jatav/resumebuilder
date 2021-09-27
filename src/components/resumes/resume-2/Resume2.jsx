import React from "react";
import "./resume2.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RoomIcon from "@material-ui/icons/Room";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailIcon from "@material-ui/icons/Mail";

export default function Resume2() {
  const generatePDF = () => {
    const input = document.getElementById('resume');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        var width = pdf.internal.pageSize.getWidth();
var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'JPEG', 0, 0, width,height);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  };
  return (
    <div className="resume2">
      <div className="resume2Wrapper" id="resume">
        {/* LEFT SECTION  */}
        <div className="resume2leftSec">
          <div contentEditable="true" className="resume2fName caps margin-y5">
            angela
          </div>
          <div
            contentEditable="true"
            className="resume2lName caps fontsize16 margin-y5"
          >
            wilkenson
          </div>
          <div
            contentEditable="true"
            className="resume2Post caps fontsize10 margin-y10"
          >
            administrative assistant
          </div>

          <hr />

          <div className="resume2contacts">
            <div className="flexDivs">
              <MailIcon className="resumeIcons" />
              <div contentEditable="true" className="fontsize12">
                youremail@domain.com
              </div>
            </div>

            <div className="flexDivs">
              <PhoneAndroidIcon className="resumeIcons" />
              <div contentEditable="true" className="fontsize12">
                youremail@domain.com
              </div>
            </div>

            <div className="flexDivs">
              <RoomIcon className="resumeIcons" />
              <div contentEditable="true" className="fontsize12">
                435 Street, LA, USA
              </div>
            </div>

            <div className="flexDivs">
              <LinkedInIcon className="resumeIcons" />
              <div contentEditable="true" className="fontsize12">
                linkedin.com/yourprofile
              </div>
            </div>
          </div>

          <div className="bolds caps margin-y5">Skills</div>
          <hr />
          <div contentEditable="true" className="fontsize10 margin-y5 ">
            Problem Solving
          </div>
          <div contentEditable="true" className="fontsize10 margin-y5">
            Adabability
          </div>
          <div contentEditable="true" className="fontsize10 margin-y5">
            Collaboration
          </div>
          <div contentEditable="true" className="fontsize10 margin-y5">
            Strong Work Ethics
          </div>
          <div contentEditable="true" className="fontsize10 margin-y5">
            Time Management
          </div>
          <div contentEditable="true" className="fontsize10 margin-y5">
            Critical Thinking
          </div>
          <div contentEditable="true" className="fontsize10 margin-y5">
            Handling Pressure
          </div>

          <div className="bolds caps padtop10 margin-y5">education</div>
          <hr />
          <div>
            <span
              contentEditable="true"
              className="bolds fontsize12 caps makeBlock"
            >
              degee name/majoor
            </span>
            <span
              contentEditable="true"
              className="fontsize10 makeBlock margin-y5"
            >
              University - location
            </span>
            <span
              contentEditable="true"
              className="fontsize10 makeBlock margin-y5"
            >
              2009 - 2013
            </span>

            <span
              contentEditable="true"
              className="bolds fontsize12 caps makeBlock"
            >
              degee name/majoor
            </span>
            <span
              contentEditable="true"
              className="fontsize10 makeBlock margin-y5"
            >
              University - location
            </span>
            <span
              contentEditable="true"
              className="fontsize10 makeBlock margin-y5"
            >
              2009 - 2013
            </span>

            <span
              contentEditable="true"
              className="bolds fontsize12 caps makeBlock"
            >
              Certifications
            </span>
            <span
              contentEditable="true"
              className="fontsize10 makeBlock margin-y5"
            >
              University - location
            </span>
          </div>
        </div>

        {/* RIGHT SECTION  */}
        <div className="resume2RightSec">
          <div className="bolds caps padtop10"> resume objective</div>
          <hr />
          <div contentEditable="true" className="fontsize10">
            To secure a challenging position in a reputable organization to
            expand my learnings, knowledge, and skills. Secure a responsible
            career opportunity to fully utilize my training and skills, while
            making a significant contribution to the success of the company
          </div>
          <div className="bolds caps padtop10"> experience</div>
          <hr />
          <div className="bolds caps fontsize12 margin-y10" contentEditable="true" > administrative assistant</div>
          <div className="fontsize10 italics margin-y5" contentEditable="true" >
            Readford & Sons, Boston, MA / September 2016 - Present
          </div>
          <li className="fontsize10" contentEditable="true" >
            
            Doing administrative and clerical tasks (such as scanning or
            printing)
          </li>
          <li contentEditable="true"  className="fontsize10">
            Preparing and editing letters, reports, memos, and emails
          </li>
          <li contentEditable="true"  className="fontsize10">
            
            Arranging meetings, appointments, and executive travel
          </li>
          <li contentEditable="true"  className="fontsize10">
            
            Implement and monitor programs as directed by management, and see the programs through to completion

          </li>
          <li contentEditable="true" className="fontsize10">
         
            Manage workflow by assigning tasks to other administrative employees daily, ensuring that deadlines are met and work is completed correctly

          </li>


          <div className="bolds caps fontsize12 margin-y10" contentEditable="true" > secretary</div>
          <div className="fontsize10 italics margin-y5" contentEditable="true" >
            Readford & Sons, Boston, MA / September 2016 - Present
          </div>
          <li className="fontsize10" contentEditable="true" >
            
            Doing administrative and clerical tasks (such as scanning or
            printing)
          </li>
          <li contentEditable="true"  className="fontsize10">
            Preparing and editing letters, reports, memos, and emails
          </li>
          <li contentEditable="true"  className="fontsize10">
            
            Arranging meetings, appointments, and executive travel
          </li>
          <li contentEditable="true"  className="fontsize10">
            
            Implement and monitor programs as directed by management, and see the programs through to completion

          </li>
          <li contentEditable="true" className="fontsize10">
         
            Manage workflow by assigning tasks to other administrative employees daily, ensuring that deadlines are met and work is completed correctly

          </li>

          <div className="bolds caps fontsize12 margin-y10" contentEditable="true" > secretary</div>
          <div className="fontsize10 italics margin-y5" contentEditable="true" >
            Readford & Sons, Boston, MA / September 2016 - Present
          </div>
          <li className="fontsize10" contentEditable="true" >
            
            Doing administrative and clerical tasks (such as scanning or
            printing)
          </li>
          <li contentEditable="true"  className="fontsize10">
            Preparing and editing letters, reports, memos, and emails
          </li>
          <li contentEditable="true"  className="fontsize10">
            
            Arranging meetings, appointments, and executive travel
          </li>
          <li contentEditable="true"  className="fontsize10">
            
            Implement and monitor programs as directed by management, and see the programs through to completion

          </li>
          <li contentEditable="true" className="fontsize10">
         
            Manage workflow by assigning tasks to other administrative employees daily, ensuring that deadlines are met and work is completed correctly

          </li>
        </div>
      </div>

      <div className="resume2-OkDiv">
        <button onClick={generatePDF}>Done</button>
        <button type="reset">Reset</button>
        <button>
          <a href="/templates">Back</a>
        </button>
      </div>
    </div>
  );
}
