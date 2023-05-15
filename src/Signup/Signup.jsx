import React from 'react'
import './Signup.css'
import {MdOutlineMail} from 'react-icons/md'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'
import { useState } from 'react'
import {RiLockPasswordLine} from 'react-icons/ri'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase'


const Signup = () => {
    const [active, setActive] = useState(1);
    const handleClick = (switchNum) => {setActive(switchNum);};
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
          }).catch((error) => {
             console.log(error);
        });
    };

    
  
    
    
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="signup">
        <div className="signupTitle"><h1>Entrer vos cordonneés ci-dessous</h1></div>
        <div>
            <form action="#" className="signupCore" onSubmit={signUp}>
            <div className="signupLeft">
                <div className="signupType">
                    <div className={active === 1 ? 'switchOn' : 'switchOff'} onClick={() => handleClick(1)}>Etudiant</div>
                    <div className={active === 2 ? 'switchOn' : 'switchOff'} onClick={() => handleClick(2)}>Autres</div>
                </div>
                <h4>Nom</h4>
                <div className="formElement"><input type="text" name="name" placeholder='Ecrire votre nom' required /></div>
                <h4>Prenom</h4>
                <div className="formElement"><input type="text" name="pname" placeholder='Ecrire votre prenom' required /></div>
                <div className="signupGenre">
                    <h4>Genre</h4>
                    <div className="formElement">
                        <label>
                        <input type="radio" name="genre" value="M" />
                        Homme
                        </label>
                        <label>
                        <input type="radio" name="genre" value="F" />
                        Femme
                        </label>
                    </div>
                </div>
                <h4>Numero de telephone</h4>
                <div className="formElement"><input type="tel" name="tel" placeholder='Ecrire votre numero de telephone'/></div>
                </div>
            <div className="signupRight">
                <h4>E-mail</h4>
                <div className="formElement"><MdOutlineMail/><input type="email" name="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}   required /></div>
                <h4>École / institut</h4>
                <div className="formElement"><input type="text" name="school" placeholder='Saisir votre école / institut'/></div>
                <h4>Ville</h4>
                <div className="formElement"><input type="text" name="city" placeholder='Ecrire votre Ville'/></div>
                <h4>Mot de passe</h4>
                <div className="formElement"><RiLockPasswordLine/>
                <input type={passwordVisible ? 'text' : 'password'} name="password" placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} required />
                {passwordVisible ? (<AiOutlineEye onClick={togglePasswordVisibility} />) 
                                : (<AiOutlineEyeInvisible onClick={togglePasswordVisibility} />)}</div>
                <button type='submit' className='btn'>Soumettre</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Signup