import React from 'react'
import './Signup.css'
import { useNavigate  } from 'react-router-dom';
import {MdOutlineMail} from 'react-icons/md'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'
import { useState } from 'react'
import {RiLockPasswordLine} from 'react-icons/ri'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import { getDatabase, ref, push, set } from 'firebase/database';






    


const Signup = () => {
     const [nom, setNom] = useState('');
     const [prenom, setPrenom] = useState('');
     const [email, setEmail] = useState('');
     const [motDePasse, setMotDePasse] = useState('');
     const [ville, setVille] = useState('');
     const [telephone, setTelephone] = useState('');
     const [genre, setGenre] = useState('');
     const [ecole, setEcole] = useState('');
     const [active, setActive] = useState(1);
     const navigate = useNavigate();
    const handleClick = (switchNum) => {setActive(switchNum);};
    
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, motDePasse)
          .then((userCredential) => {
            console.log(userCredential);
          }).catch((error) => {
             console.log(error);
        });
    };
    const handlegenrechange = (e) =>{
        setGenre(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Créer une référence à la base de données
        const db = getDatabase();
        const dataRef = ref(db, 'User');
    
        // Générer une nouvelle clé unique pour les données
        const newDataRef = push(dataRef);
        const newUserId = newDataRef.key;
    
        // Enregistrer les données dans la base de données
        const newData = {
          Id: newUserId,  
          lastName: nom,
          firstName: prenom,
          email: email,
          password: motDePasse,
          adress: ville,
          phoneNumber: telephone,
          gendre: genre,
          schoolName: ecole
        };
        set(newDataRef, newData)
          .then(() => {
            console.log('Données enregistrées avec succès !');
            // Réinitialiser les champs du formulaire
            setNom('');
            setPrenom('');
            setEmail('');
            setMotDePasse('');
            setVille('');
            setTelephone('');
            setEcole('');
            setGenre('');

          })
          .catch((error) => {
            console.log('Erreur lors de l enregistrement des données :', error);
          });
          signUp(e)
          navigate('/Main');
      };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="signup">
        <div className="signupTitle"><h1>Entrer vos cordonneés ci-dessous</h1></div>
        <div>
            <form action="submit" className="signupCore" onSubmit={handleSubmit} >
            <div className="signupLeft">
                <div className="signupType">
                    <div className={active === 1 ? 'switchOn' : 'switchOff'} onClick={() => handleClick(1)}>Etudiant</div>
                    <div className={active === 2 ? 'switchOn' : 'switchOff'} onClick={() => handleClick(2)}>Autres</div>
                </div>
                <h4>Nom</h4>
                <div className="formElement"><input type="text" name="name" placeholder='Ecrire votre nom' value={nom} onChange={(e)=> setNom(e.target.value)} required /></div>
                <h4>Prenom</h4>
                <div className="formElement"><input type="text" name="pname" placeholder='Ecrire votre prenom' value={prenom} onChange={(e)=>
            setPrenom(e.target.value)} required /></div>
                <div className="signupGenre">
                    <h4>Genre</h4>
                    <div className="formElement">
                        <label>
                        <input type="radio" name="genre" value="M" checked = {genre == 'M'} onChange={handlegenrechange} />
                        Homme
                        </label>
                        <label>
                        <input type="radio" name="genre" value="F" checked = {genre == 'F'} onChange={handlegenrechange} />
                        Femme
                        </label>
                    </div>
                </div>
                <h4>Numero de telephone</h4>
                <div className="formElement"><input type="tel" name="tel" placeholder='Ecrire votre numero de telephone' value={telephone} onChange={(e)=>
            setTelephone(e.target.value)}/></div>
                </div>
            <div className="signupRight">
                <h4>E-mail</h4>
                <div className="formElement"><MdOutlineMail/><input type="email" name="email" placeholder='E-mail'value={email} onChange={(e) => setEmail( e.target.value)} required /></div>
                {active === 1 && <><h4>École / institut</h4>
                <div className="formElement"><input type="text" name="school" placeholder='Saisir votre école / institut' value={ecole} onChange={(e)=>
            setEcole(e.target.value)}/></div></>}
                <h4>Ville</h4>
                <div className="formElement"><input type="text" name="city" placeholder='Ecrire votre Ville' value={ville}  onChange={(e)=>
            setVille(e.target.value)}/></div>
                <h4>Mot de passe</h4>
                <div className="formElement"><RiLockPasswordLine/>
                <input type={passwordVisible ? 'text' : 'password'} name="password" placeholder='Mot de passe' value={motDePasse} onChange={(e) => setMotDePasse( e.target.value )}  required />
                {passwordVisible ? (<AiOutlineEye onClick={togglePasswordVisibility} />) 
                                : (<AiOutlineEyeInvisible onClick={togglePasswordVisibility} />)}</div>
                <button type='submit' className='btn' onClick={handleSubmit} >Soumettre</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Signup