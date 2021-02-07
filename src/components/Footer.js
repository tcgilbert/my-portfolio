import React from "react"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Pdf from '../../public/static/resume.pdf'


const Footer = () => {
  return (
    <div className="footer">
      <div>
          <h1 className="footer-title">Let's get in touch.</h1>
      </div>
      <div className="contact-info">
          <div className="icon-text">
            <MailOutlineIcon style={{ fontSize:"3rem" }}/>
            <a className="contact-link" href="mailto:tcgilbert94@gmail.com?subject=Via personal website" target="_blank">tcgilbert94@gmail.com</a>
          </div>
          <div className="icon-text">
            <LinkedInIcon style={{ fontSize:"3rem" }}/>
            <a className="contact-link" href="https://www.linkedin.com/in/tcgilbert/" target="_blank">tcgilbert</a>
          </div>
          <div className="icon-text">
            <GitHubIcon style={{ fontSize:"3rem" }}/>
            <a className="contact-link" href="https://github.com/tcgilbert" target="_blank">tcgilbert</a>
          </div>
          <div className="icon-text">
            <InsertDriveFileIcon style={{ fontSize:"3rem" }}/>
            <a className="contact-link" href={Pdf} target="_blank">Resume</a>
          </div>
      </div>
    </div>
  )
}

export default Footer
