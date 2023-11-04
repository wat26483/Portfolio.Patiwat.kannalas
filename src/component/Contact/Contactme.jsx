import React, { useState } from 'react'
import './Contactme.css'
import contactus from '../../assets/contact-us-animate.svg'
import idcard from '../../assets/id-card.png'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone-call.png'
import caht from '../../assets/chat.png'
import swal from 'sweetalert2'
import Loading from '../loanding/Loading'
import PDF from '../../assets/PatiwatKannalasResume.pdf'

function Contactme() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phones, setphones] = useState('')
    const [message, setMessage] = useState('')
    const [loading,setLoading] = useState(false)

    const submit = (e) => {
        e.preventDefault();
        let regdigit = /\d/;
        let regmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (name === '') {
            swal.fire({
                title: 'warning name input!',
                text: 'Please Input Your Name',
                icon: 'warning',
                confirmButtonText: 'ok'
            })
        } else if (!regmail.test(email)) {
            swal.fire({
                title: 'warning email input!',
                text: 'Please Email is incorrect',
                icon: 'warning',
                confirmButtonText: 'ok'
            })
        } else if (!regdigit.test(phones)) {
            swal.fire({
                title: 'warning phone number!',
                text: 'Please Input 0-9',
                icon: 'warning',
                confirmButtonText: 'ok'
            })
        } else {
            setLoading(true)
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "Name": name,
                "Email": email,
                "Phone": phones,
                "Messeage": message
              });
            

              var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
              };

            fetch("https://cautious-sweatsuit-elk.cyclic.app/linechact", requestOptions)
                .then(response => response.json())
                .then(result => {
                    swal.fire({
                        title: 'success ',
                        text: 'Send succes',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                    console.log(result)
                    setLoading(false)
                })
                .catch(error => console.log('error', error));

            console.log(email)
            console.log(name)
            console.log(phones)
            console.log(message)
        }
        setEmail('')
        setMessage('')
        setphones('')
        setName('')

    }
    return (
        <div className='Contactme-container'>
            <div className="boxleft">
                <div className='contact'>
                    <h1>Contact Me</h1>
                    <p>patiwat.kannalas@gmail.com</p>
                    <a href={PDF} target="_blank"><button className='button-Contact'>Get Resume</button></a>
                    
                </div>
                <div className="formcontact">
                    <h1>Get In Touch</h1>
                    {
                        loading ? <Loading/> : (
                            <form onSubmit={submit}>
                        <div className="containerinput">
                            <label><img src={idcard} alt='idcard' width={32} /></label>
                            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Name...' />
                        </div>
                        <div className="containerinput">
                            <label><img src={mail} alt='mail' width={32} /></label>
                            <input type="text" placeholder='@Email...' onChange={(e) => setEmail(e.target.value)} value={email} />

                        </div>
                        <div className="containerinput">
                            <label><img src={phone} alt='phone' width={32} /></label>
                            <input type="text" placeholder='Phone...' onChange={(e) => setphones(e.target.value)} value={phones} />
                        </div>
                        <div className="containerinput">
                            <label><img src={caht} alt='chat' width={32} /></label>
                            <textarea placeholder='Message...' cols="20" rows="5" onChange={(e) => setMessage(e.target.value)} value={message} ></textarea>
                        </div>
                        <button type="submit" className='button-35'>send</button>
                    </form>
                        )
                    }
                </div>
            </div>
            <div className="boxrigh">
                <div className="container-imgcontactus">
                    <img src={contactus} alt="contact us" />
                </div>
            </div>
        </div>
    )
}

export default Contactme