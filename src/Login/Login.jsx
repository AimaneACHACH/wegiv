import React, {useState,useEffect} from 'react'
import { useNavigate  } from 'react-router-dom';
import './Login.css'
import Slogan from '../Assets/slogan.png'
import Logo from '../Assets/logo.png'
import LongLogo from '../Assets/textLogo.png'
import {FcGoogle} from 'react-icons/fc'
import {MdOutlineMail} from 'react-icons/md'
import {RiLockPasswordLine} from 'react-icons/ri'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'
import { SignInGoogle ,auth} from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth"



const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });



  };
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
  }, [navigate]);
  return (
    <div className="login">
      <div className="loginLeft">
          <div className="loginSlogan"><img src={Slogan} alt="" /></div>
          <div className="loginLogo"><img src={Logo} alt="" /></div>
          <div className="loginCr">© copyrighted 2023 , All Rights Reserverd </div>
      </div>
      <div className="loginRight">
          <div className="loginWegiv">Connectez - vous à <img src={LongLogo} alt="" /></div>
          <div className="loginText">Vous pouvez utiliser l'authentification rapide avec votre compte Facebook ou Gmail.</div>
          <div className="loginOptions">
            <div className="btn1" onClick={SignInGoogle} ><FcGoogle/> Se connecter</div>
          </div>
          <div className="loginLine"> OU </div>
          <div className="loginLogin">
            <form action="#" onSubmit={login}>
              <h4>E-mail</h4>
              <div className="formElement"><MdOutlineMail/><input type="email" name="email" placeholder='E-mail' value={email} onChange={(e) =>setEmail(e.target.value)} required /></div>
              <h4>Mot de passe</h4>
              <div className="formElement">
                <RiLockPasswordLine/>
                <input type={passwordVisible ? 'text' : 'password'} name="password" placeholder='Mot de passe' value={password} onChange={(e) =>setPassword(e.target.value)} required />
                {passwordVisible ? (<AiOutlineEye onClick={togglePasswordVisibility} />) 
                                : (<AiOutlineEyeInvisible onClick={togglePasswordVisibility} />)}
              </div>
              <div className="loginForget"><small><a href="https"> Mot de passe oublié ?</a></small></div>
              <button type='submit' className='btn2'>Se connecter</button>
            </form>
          </div>
          <div className="loginSignup">Pas encore inscrit ? <a href="/Signup">S’inscrire gratuitement.</a></div>
          
      </div>
        
    </div>
  )
}

export default Login