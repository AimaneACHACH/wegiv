import React from 'react'
import './Header.css'
import Logo from '../Assets/longLogo.png'
import {BsPersonCircle} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import Fr from '../Assets/fr.png'


const Header = () => {
  return (
    <div className="header">
        <div className='headerLogo'><img src={Logo} alt="" /></div>
        <div className="headerSpace"><div className="formElement"><AiOutlineSearch/><input type="text" placeholder='Chercher un article' /></div></div>
        <div className="btn">Lister un article</div>
        <div className="headerUser"><BsPersonCircle/></div>
        <div className="headerHeart"><AiFillHeart/></div>
        <div className="headerFlag"><img src={Fr} alt="" /></div>

        
    </div>
  )
}

export default Header