import React from 'react'
import './IntroduceMyself.css'
import imgs from '../../assets/INTRODUCE.svg'

function IntroduceMyself() {
    return (
        <div className='introduce-container'>
                        <div className="imgs-container">
                <img src={imgs} alt='photo2' />
            </div>
            <div className='introducetext-container'>
                <h1 className='text'>LET ME <span className='color'>INTRODUCE</span> MYSELF</h1>
                <h3 className='text'>I fell in love with programming and I have at least learnt something, I think… </h3>
                <h3 className='text'>I am fluent in classics like <span className="color">HTML, Javascript and CSS.</span></h3>
                <h3 className='text'>My field of Interest's are building new  Web Technologies and Products and such as fontend development, backend development, and fullstack development.</h3>
                <h3 className='text'>Whenever possible, I also apply my passion for developing products with  Javascript Library and Frameworks  like React.js </h3>
            </div>
        </div>
    )
}

export default IntroduceMyself