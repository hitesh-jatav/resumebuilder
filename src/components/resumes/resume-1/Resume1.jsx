import React from "react";
import "./resume1.css";
import image from "../../../images/resume1user.jpg";
import RoomIcon from "@material-ui/icons/Room";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailIcon from "@material-ui/icons/Mail";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';



export default function Resume1() {

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
    <div className='aboveResume'>
      <div className="resume1" id='resume'>
        <div className="resume1SectionLeft">
          <div>
            <div className="resume1Leftnames">
              <div contenteditable="true" className="editable fname">
                Amit
              </div>
              <div contenteditable="true" className="editable lname">
                Sinha
              </div>
            </div>

            <div className="resume1leftPost" contentEditable="true">
              accounts executive
              <hr className="resume1BelowLine" />
            </div>

            <div className="resume1LeftProfile">
              <span className="resume1Headings">Profile</span>
              <div
                contentEditable="true"
                className="resume1addData resume1profileData"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ut accusamus incidunt tempora molestiae corporis a
                harum possimus iusto, doloremque quo laudantium officia magnam,
                quia odit reiciendis, minima dicta. Adipisci?
              </div>

              <span className="resume1Headings">work experience</span>
              <hr className="resume1BelowLine" />

              <div className="resume1WorkExperience">
                <div className="resume1workExperienceDiv">
                  <div
                    className="resme1workExperienceYears"
                    contentEditable="true"
                  >
                    2000-Present
                  </div>
                  <div className="resume1workExperienceData">
                    <div
                      className="resume1workExperienceDataHeader boldText"
                      contentEditable="true"
                    >
                      Jr. Accounts Executive
                    </div>
                    <div contentEditable="true" className="resume1addData">
                      Joy 4 Us Toys, Noida, UP
                    </div>
                    <div
                      className="resume1workExperienceDataTasks"
                      contentEditable="true"
                    >
                      <ul className="resume1addData ul-list">
                        <li>
                          collect, interpret ad analysis the financical
                          information
                        </li>
                        <li>
                          collect, interpret ad analysis the financical
                          information
                        </li>
                        <li>
                          collect, interpret ad analysis the financical
                          information
                        </li>
                      
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="resume1workExperienceDiv">
                  <div
                    className="resme1workExperienceYears"
                    contentEditable="true"
                  >
                    2000-Present
                  </div>
                  <div className="resume1workExperienceData">
                    <div
                      className="resume1workExperienceDataHeader boldText"
                      contentEditable="true"
                    >
                      Jr. Accounts Executive
                    </div>
                    <div contentEditable="true" className="resume1addData">
                      Joy 4 Us Toys, Noida, UP
                    </div>
                    <div
                      className="resume1workExperienceDataTasks"
                      contentEditable="true"
                    >
                      <ul className="resume1addData">
                        <li>
                          collect, interpret ad analysis the financical
                          information
                        </li>
                        <li>
                          collect, interpret ad analysis the financical
                          information
                        </li>
                        <li>
                          collect, interpret ad analysis the financical
                          information
                        </li>
                      
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span className="resume1Headings">education</span>
          <hr className="resume1BelowLine" />

          <div className="resume1WorkExperience">
            <div className="resume1workExperienceDiv">
              <div className="resme1workExperienceYears" contentEditable="true">
                2000-Present
              </div>
              <div className="resume1workExperienceData">
                <div
                  className="resume1workExperienceDataHeader boldText"
                  contentEditable="true"
                >
                  MA in Econonmics
                </div>
                <ul>
                  <div className="resume1addData" contentEditable="true">
                    Branch Topper (Gold MEdalist & Rank 1), Northern Unniversity
                  </div>
                  <div className="resume1addData boldText">CGPA: 9.4/10</div>
                </ul>
              </div>
            </div>
            <div className="resume1workExperienceDiv">
              <div className="resme1workExperienceYears" contentEditable="true">
                2000-Present
              </div>
              <div className="resume1workExperienceData">
                <div
                  className="resume1workExperienceDataHeader boldText"
                  contentEditable="true"
                >
                  B.Sc in Mathematics
                </div>
                <ul>
                  <div className="resume1addData" contentEditable="true">
                    Branch Topper (Gold MEdalist & Rank 1), Northern Unniversity
                  </div>
                  <div className="resume1addData boldText">CGPA: 9.4/10</div>
                </ul>
              </div>
            </div>

            <span className="resume1Headings">certifications</span>
            <hr className="resume1BelowLine" />
            <div contentEditable="true" className="resume1addData">
              Chartered Financial Analysts (CFA) certification.
              <br />
              Financial Risk Management (F&M) Certification.
            </div>
          </div>
        </div>

        <div className="resume1SectionRight">
          <div className="resume1imgeDiv">
            <img alt="your Image" src={image} className="resume1Image" />
          </div>

          <div className="resume1RightSectionWrapper">
            <span className="resume1Rightheadings">Contact</span>
            <hr />
            <div className="resume1RightContactLines">
              <RoomIcon />
              <div>
                <div>Address</div>
                <div className="editable" contentEditable="true">
                  E2345, Cleo Country, Noida
                </div>
              </div>
            </div>

            <div className="resume1RightContactLines">
              <PhoneAndroidIcon />
              <div>
                <div>Phone</div>
                <div className="editable" contentEditable="true">
                  E2345, Cleo Country, Noida
                </div>
              </div>
            </div>

            <div className="resume1RightContactLines">
              <MailIcon />
              <div>
                <div>Email</div>
                <div className="editable" contentEditable="true">
                  E2345, Cleo Country, Noida
                </div>
              </div>
            </div>

            <span className="resume1Rightheadings">skills</span>
            <hr />

            <div>
              <div
                contentEditable="true"
                className="resume1RightSectionMiniHeads"
              >
                Languages
              </div>
              <div
                contentEditable="true"
                className="editable resume1RightSectionMiniData"
              >
                English, Hindi, Spanish, German, Japanese
              </div>
            </div>
            <hr className="resume1rightSectionHRLine" />

            <div>
              <div
                contentEditable="true"
                className="resume1RightSectionMiniHeads"
              >
                Interpersonal
              </div>
              <div
                contentEditable="true"
                className="editable resume1RightSectionMiniData"
              >
                Analytical Mind, Negotiation Skills, Ability to develop strong
                working relationships.
              </div>
            </div>
            <hr className="resume1rightSectionHRLine" />

            <div>
              <div
                contentEditable="true"
                className="resume1RightSectionMiniHeads"
              >
                Business
              </div>
              <div
                contentEditable="true"
                className="editable resume1RightSectionMiniData"
              >
                Commercial and Business Skills awareness, Good Communication
                Skills
              </div>
            </div>
            <hr className="resume1rightSectionHRLine" />

            <div>
              <div
                contentEditable="true"
                className="resume1RightSectionMiniHeads"
              >
                Computer
              </div>
              <div
                contentEditable="true"
                className="editable resume1RightSectionMiniData"
              >
                Zoho books
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resume1OkDiv">
        <button onClick={generatePDF}>Done</button>
        <button type="reset">Reset</button>
        <button >
          <a href="/templates">Back</a>
        </button>
      </div>
    </div>
  );
}
