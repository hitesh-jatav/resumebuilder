import React from "react";
import "./resume3.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import RoomIcon from "@material-ui/icons/Room";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailIcon from "@material-ui/icons/Mail";

function Resume3() {
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
    <div className="resume3">
      <div className="resume3Wrapper" id='resume'>
        <div className=" resume3Name bold caps">
          <span contentEditable='true'> kelly blackwell</span>
        </div>

        <div>
          <span contentEditable='true' className="caps fontSize14 backGreen bold">
            administrative assistant
          </span>
        </div>

        <div className="flex">
          <div>
            <div className="textCenter">
              <span className=" fontsize14 bold greenBorderBelow">
                {" "}
                Career Objective
              </span>
            </div>
            <div contentEditable='true' className="pady20 fontSize12">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate molestiae impedit, praesentium id doloremque porro odit
              deserunt, ducimus sequi, blanditiis saepe! Provident odit
              doloremque dolor minima dicta inventore voluptas quo.
            </div>
          </div>

          <div>
            <div className="textCenter">
              <span className=" fontsize14 bold greenBorderBelow">
                {" "}
                Contact
              </span>
            </div>
            <div className="pady20">
              <div className="contactList">
                <MailIcon />{" "}
                <span contentEditable='true' className="padx10 fontSize12">
                  keyy.blackwell@gmail.com
                </span>
              </div>
              <div className="contactList">
                <PhoneAndroidIcon />{" "}
                <span contentEditable='true' className="padx10 fontSize12">210-852-9954</span>
              </div>
              <div className="contactList">
                <RoomIcon/>{" "}
                <span contentEditable='true' className="padx10 fontSize12">2450 - LA, USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex tableData">
          <div className="divAll">
            <span className="divAllItem backGreen widthFull ">Education</span>

            <div contentEditable='true' className="bold fontSize12 caps margTop5">
              brown university
            </div>
            <div contentEditable='true' className="fontSize12">St. Providence, Rl</div>
            <div contentEditable='true' className="fontSize12">Bachelor of Arts in Finance</div>
            <div contentEditable='true' className="fontSize12">2014-2019</div>

            <div contentEditable='true' className="bold fontSize12 caps margTop10">
              brown university
            </div>
            <div contentEditable='true' className="fontSize12">St. Providence, Rl</div>
            <div contentEditable='true' className="fontSize12">Bachelor of Arts in Finance</div>
            <div contentEditable='true' className="fontSize12">2014-2019</div>
          </div>

          <div className="divAll">
            <span className=" divAllItem backBlack divCenter widthFull">
              Education Skills
            </span>
            <div contentEditable='true' className="fontSize12 margTop5 padx15">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos,
              amet tempora iure reiciendis ipsam optio id, quasi dolor molestias
              temporibus molestiae in corporis inventore accusamus reprehenderit
              libero obcaecati aspernatur!
            </div>
          </div>

          <div className="divAll">
            <span className=" divAllItem backGreen divRight widthFull">
              Certifications
            </span>
            <div contentEditable='true' className="fontSize12 margTop5 padx15">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos,
              amet tempora iure reiciendis ipsam optio id, quasi dolor molestias
              temporibus molestiae in corporis inventore accusamus reprehenderit
              libero obcaecati aspernatur!
            </div>
          </div>
        </div>
        <div  className="greenBorderBelow widthFull bold">Experience</div>
        <div className="flex">
          <span contentEditable='true' className=" widthFull flex1 bold padx15 block">
            Sep 2017 - Present
          </span>

          <div className="widthFull flex3 textLeft padx15">
            <div contentEditable='true' className="widthFull bold caps">administrative assistant</div>
            <div  contentEditable='true' className="fontSize12 widthFull">
              {" "}
              Redford & Sons, Boston, MA
            </div>
            <div>
              <li contentEditable='true' className="fontSize12">
              doing task one, about your work theredoing task one, about your work there
              </li>
              <li contentEditable='true' className="fontSize12">
              doing task one, about your work theredoing task one, about your work there
              </li>
              <li contentEditable='true' className="fontSize12">
              doing task one, about your work theredoing task one, about your work there
              </li>
              <li contentEditable='true' className="fontSize12">
              doing task one, about your work there doing task one, about your work there
              </li>
            </div>
          </div>
        </div>

        <div className="flex">
          <span contentEditable='true' className=" widthFull flex1 bold padx15 block">
            Sep 2015 - 2017
          </span>

          <div className="widthFull flex3 textLeft padx15">
            <div contentEditable='true' className="widthFull bold caps">Secretary</div>
            <div contentEditable='true' className="fontSize12 widthFull">
              {" "}
              Redford & Sons, Boston, MA
            </div>
            <div>
              <li contentEditable='true' className="fontSize12">
              doing task one, about your work there doing task one, about your work there
              </li>
              <li contentEditable='true' className="fontSize12">
              doing task one, about your work there doing task one, about your work there
              </li>
              <li contentEditable='true' className="fontSize12">
              doing task one, about your work there doing task one, about your work there
              </li>
              <li contentEditable='true' className="fontSize12">
              doing task one, about your work there doing task one, about your work there
              </li>
            </div>
          </div>
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

export default Resume3;
