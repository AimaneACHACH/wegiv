import React,{useState,useEffect } from 'react'
import './Header.css'
import {auth} from '../firebase';
import Logo from '../Assets/longLogo.png'
import {BsPersonCircle} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import Fr from '../Assets/fr.png'


const Header = () => {
  const [userImage, setUserImage] = useState('');
  const [logged,setLogged] = useState(false)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUserImage(user.photoURL);
        setLogged(true);
        // Perform any other actions you need to do for a signed-in user
      } else {
        // User is signed out
        setUserImage('');
        setLogged(false);
        // Perform any other actions you need to do for a signed-out user
      }
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="header">
        <div className='headerLogo'><img src={Logo} alt="" /></div>
        <div className="headerSpace"><div className="formElement"><AiOutlineSearch/><input type="text" placeholder='Chercher un article' /></div></div>
        {logged && <a href="/New" style={{ textDecoration: 'none' }}><div className="btn">Lister un article</div></a>}
        {!logged &&<a href="/Login" style={{ textDecoration: 'none' }}><div className="btn">Lister un article</div></a>}
        <div className="headerUser">{logged &&<img src={userImage} alt="" />}{!logged &&<BsPersonCircle/>}</div>
        {logged && <a href="" style={{ textDecoration: 'none' }}><div className="headerHeart"><AiFillHeart/></div></a>}
        <div className="headerFlag"><img src={Fr} alt="" /></div>

        
    </div>
  )
}

export default Header