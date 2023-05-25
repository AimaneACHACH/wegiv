import React,{useEffect,useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import { auth } from '../firebase'
import { getAuth } from 'firebase/auth';
import './New.css'
import { getDatabase, ref, push, set } from 'firebase/database';

const New = () => {
  //return to login when submit
  const navigate = useNavigate();
  const [NomArticle, setNomArticle] = useState('');
  const [ Adresse, setAdresse] = useState('');
  const [Description, setDescription] = useState('');
  const [date, setdate] = useState('');
  const [categore, setcategore] = useState('');
  const [Img, setImg] = useState('');
  const handleliste = (e) => {
    e.preventDefault();

    // Créer une référence à la base de données
    const db = getDatabase();
    const dataRef = ref(db, 'Article');

    // Générer une nouvelle clé unique pour les données
    const newDataRef = push(dataRef);
    const newArticleId = newDataRef.key;

    // Enregistrer les données dans la base de données
    const newData = {
      Id: newArticleId,  
      ArticleName: NomArticle,
      Articlelocation: Adresse,
      ArticleImg: Img,
      Description: Description,
      Date: date,
      categore: categore,
    };
    set(newDataRef, newData)
      .then(() => {
        console.log('Données enregistrées avec succès !');
        // Réinitialiser les champs du formulaire
        setNomArticle('');
        setAdresse('');
        setDescription('');
        setdate('');
        setcategore('');
        setImg('');
        const user = getAuth().currentUser;
        if (user) {
          const userId = user.uid;
          const userDb = ref(db, `User/${userId}`);
          push(userDb, newArticleId)
            .then(() => {
              console.log('ID du produit ajouté à la liste de l\'utilisateur avec succès !');
            })
            .catch((error) => {
              console.log('Erreur lors de l\'ajout de l\'ID du produit à la liste de l\'utilisateur :', error);
            });
        } else {
          console.log('Utilisateur non connecté.');
        }

        handleSubmit();
      })
      .catch((error) => {
        console.log('Erreur lors de l\'enregistrement des données :', error);
      });
  };

     
  const handleSubmit = () => {
    // Perform any necessary operations before navigating

    // Navigate to the login page
    navigate('/Profile');
  };



    //return to home if not signed in

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in
        } else {
          // User is signed out
          navigate('/');
        }
      });
  
      // Clean up the observer when the component unmounts
      return () => unsubscribe();
    }, [navigate])
  return (
   <div className="new">
        <div className="newTitle"><h1>LISTER UN ARTICLE: </h1></div>
        <form action="submit" className='newInfo'>
        <div className="newElement"><input type="text" value={NomArticle} placeholder='Nom d’article'onChange={(e)=>
            setNomArticle(e.target.value)} /></div>
          <div className="newElement"><label for="img">Image d’article(.png,.jpeg)</label><input type="file" id="img" value={Img} onChange={(e)=>
            setImg(e.target.value)} class="hidden"/></div>
          <div className="newElement"><label for="type">Type d'article :</label>
          <select name="type" id="type" value={categore} onChange={(e)=>
            setcategore(e.target.value)} >
          <option value="food">Nourritures</option>  
          <option value="cloth">Vêtements</option>  
          <option value="med">Médicaments</option>  
          <option value="tools">Outils</option>  
          <option value="tech">Électronique</option>  
          <option value="other">Autres</option>  
          </select></div>
          <div className="newElement"><input type="number" placeholder="Attribuer des points à l'article"  /></div>
          <div className="newElement"><input type="text" placeholder='Adresse' value={Adresse} onChange={(e)=>
            setAdresse(e.target.value)}/></div>
          <div className="newElement"><label htmlFor="date">Date limite</label><input type="date"  value={date} onChange={(e)=>
            setdate(e.target.value)}/></div>
          <div className="newElement"><textarea name="description" cols="30" rows="10" placeholder='Description' value={Description} onChange={(e)=>
            setDescription(e.target.value)}></textarea></div>
          <button className='btn' onClick={handleliste }>Soumettre</button>
        </form>
   </div>
  )
}

export default New