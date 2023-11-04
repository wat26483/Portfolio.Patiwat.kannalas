import React from 'react'
import './HeroImg.css'
import hand from '../../assets/Praying Hand.png'
import img2 from '../../assets/pair-programming-animate.svg'
import { useNavigate } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
function HeroImg() {
  const navigate = useNavigate()

  const aboutme = () => {
    navigate('/about')
  }
  const text = ['Web Development', 'Fontend Development']
  return (
    <div className='heroimg-container' >
      <div className="headertext">
        <div className="hi-hello">
          <h1>Hi There!</h1>
          <img src={hand} alt="handhello" height={70} />
        </div>
        <div className="namecontain">
          <h1>I'm </h1><h1 className='name' onClick={aboutme}>PATIWAT KANNLAS</h1>
        </div>
        <br />
        <h2><Typewriter
          options={{
            strings: text,
            autoStart: true,
            loop: true,
          }} /></h2>
      </div>
      <div className="img-container">
        <img src={img2} alt='photo' />
      </div>
    </div>
  )
}

export default HeroImg