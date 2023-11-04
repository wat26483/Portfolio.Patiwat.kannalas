import React from 'react'
import './Footer.css'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillGithub } from "react-icons/ai";
import { BiLogoGmail, BiLogoFacebookCircle,BiMailSend } from "react-icons/bi";
import { SlSocialInstagram } from "react-icons/sl";
function Footer() {
    const navigate = useNavigate()
    const url = 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDQkLzQTdVKJfgxqVCqcpXkjhzZbgzMWDXjTRPzXBKGkJXFghtVxDbRLPBWKlXsgTJpDvb'
    const url1 = 'https://github.com/wat26483?tab=repositories'
    return (
        <footer>
            <div className="footer-container">
                <div className="box-container">
                    <div className="aboutme">
                        <h2>About Me</h2>
                        <p><Link to={'/'}>Home</Link></p>
                        <p><Link to={'/about'}>About</Link></p>
                        <p><Link to={'/project'}>Project</Link></p>
                    </div>
                    <div className="contact-me">
                        <h2>Contact Me</h2>
                        <div className="mail">
                            <BiMailSend size={20} /> patiwat.kannalas@gmail.com
                        </div>
                        
                        <button className="button-Contact" onClick={() => {
                            
                            navigate('/contact')
                        }} >Contact Me</button>
                    </div>
                </div>
                <div className="social-icon">

                    <a href={url} target="_blank"><BiLogoGmail /></a>
                    <a href={url1} target="_blank"><AiFillGithub /></a>
                    <SlSocialInstagram />
                    <BiLogoFacebookCircle />
                </div>
                <div className="copyright">
                    <p>Copyright 2023 - Portfolio Patiwat.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer