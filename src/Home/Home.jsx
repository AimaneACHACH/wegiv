import React from 'react'
import './Home.css'
import BigLogo from '../Assets/bigLogo.png'
import Pages from '../Assets/examples.png'
import Others from '../Assets/others.png'
import {FcGoogle} from 'react-icons/fc'


const Home = () => {
  return ( 
    <div className='home'>
        <div className="homeBigLogo"><img src={BigLogo} alt="" /></div>
        <div className="homePages"><img src={Pages} alt="" /></div>
        <div className="homeOthers"><img src={Others} alt="" /></div>
        <div className="homeLogin">
            <div>
                <div className="btn1"><FcGoogle/> Se connecter</div>
            </div>
            <div className="btn2">Se connecter avec E-mail</div>
            <div className="homeSignup"><a href="https"> S'inscrire gratuitement !</a></div>
        </div>

    </div>

  )
}

export default Home