import React,{useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';
import './Home.css'
import BigLogo from '../Assets/bigLogo.png'
import Pages from '../Assets/examples.png'
import Others from '../Assets/others.png'
import {FcGoogle} from 'react-icons/fc'
import { SignInGoogle,auth } from '../firebase'

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        console.log('User is signed in');
        navigate('/Main');
      } else {
        // User is signed out
        console.log('User is signed out');
      }
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, [navigate])
  return ( 
    <div className='home'>
        <div className="homeBigLogo"><img src={BigLogo} alt="" /></div>
        <div className="homePages"><img src={Pages} alt="" /></div>
        <div className="homeOthers"><img src={Others} alt="" /></div>
        <div className="homeLogin">
            <div>
                <div className="btn1" onClick={SignInGoogle}><FcGoogle/> Se connecter</div>
            </div>
            <a href="/Login" style={{ textDecoration: 'none' }}><div className="btn2">Se connecter avec E-mail</div></a>
            <div className="homeSignup"><a href="/Signup"> S'inscrire gratuitement !</a></div>
        </div>

    </div>

  )
}

export default Home