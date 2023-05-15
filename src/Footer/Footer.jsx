import React from 'react'
import './Footer.css'
import Android from '../Assets/android.png'
import Ios from '../Assets/ios.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerText">Télécharger l’application gratuitement sur:</div>
        <div className="footerApp">
            <div className="footerAndroid"><img src={Android} alt="" /></div>
            <div className="footerIos"><img src={Ios} alt="" /></div>
        </div>
        <div className="footerHelp"><a href="https">Aide et renseignements</a> </div>
    </div>
  )
}

export default Footer