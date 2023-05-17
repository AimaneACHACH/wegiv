import React,{useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';
import { auth } from '../firebase'
import './New.css'

const New = () => {
  //return to login when submit
  const navigate = useNavigate();


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
          <div className="newElement"><input type="text" placeholder='Type d’article'/></div>
          <div className="newElement"><label for="img">Image d’article(.png,.jpeg)</label><input type="file" id="img" class="hidden"/></div>
          <div className="newElement"><input type="text" placeholder='Adresse'/></div>
          <div className="newElement"><label htmlFor="date">Date limite</label><input type="date"/></div>
          <div className="newElement"><textarea name="description" cols="30" rows="10" placeholder='Description'></textarea></div>
          <button className='btn' onClick={handleSubmit}>Soumettre</button>
        </form>
   </div>
  )
}

export default New