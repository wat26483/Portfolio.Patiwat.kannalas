import React from 'react'
import IntroduceMyself from '../component/IntroduceMyself/IntroduceMyself'
import HeroImg from '../component/heroimghome/HeroImg'
import '../App.css'
function Home() {
  return (
    <div className='homepage'>
      <HeroImg/>
      <IntroduceMyself/>
    </div>
  )
}

export default Home