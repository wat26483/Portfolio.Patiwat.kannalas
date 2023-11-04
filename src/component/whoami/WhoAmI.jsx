import React from 'react'
import './WhoAmI.css'
import myimg from '../../assets/Myphoto.jpg'
import { IoIosArrowDroprightCircle } from "react-icons/io";
function WhoAmI() {
    return (
        <div className='whoami-container'>
            <div className='text-whoami'>
                <h1>Who <span className='color'>Am I</span></h1>
                <p>Hi Everyone,I am <span className='color'> Patiwat Kannlas form Thailand</span></p>
                <p>I am very passionate about improving my coding skills & developing applications & websites.</p>
                <p>I am learning how to be a professional developer for myself to improve my skills,</p>
                <p>I am currently employed as a technician at pakket.</p>
                <br />
                <p>Apart from coding, some other activities that I love to do!</p>
                <ul>
                    <li>
                        <IoIosArrowDroprightCircle /> Watch a movie
                    </li>
                    <li>
                        <IoIosArrowDroprightCircle /> Travelling
                    </li>
                    <li>
                        <IoIosArrowDroprightCircle /> Join a party
                    </li>
                </ul>
                <br />
                {/* เพราะชีวิตไม่หยุดที่จะเรียนรู้ */}
                <p className='kumkom'>"Because life never stops learning..!"</p>
                <p className='kumkom'>-Patiwat</p>
            </div>
            <div className="myimg-container">
                <img src={myimg} alt='iam' />
            </div>
        </div>
    )
}

export default WhoAmI