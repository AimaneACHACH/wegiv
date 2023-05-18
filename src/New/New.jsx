import React,{useEffect , useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import { auth } from '../firebase'
import './New.css'

const New = () => {
  //return to login when submit
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    NomArticle: '',
    Img: '',
    Adresse: '', 
    date: '',
    Description: '',
    idArticle: '',
   
})

  const PostData =async(e)=>{
    e.preventDefault()

    const{ NomArticle,Img,Adresse, date,Description}=details;

   const res=await fetch("https://wegiv-1c9b2-default-rtdb.firebaseio.com/wegiv.json",
   {
       method:'POST',
       headers:{
           'Content-Type':'application/json'
       },
       body:JSON.stringify({
        NomArticle,
        Img,
        Adresse, 
        date,
        Description,
       
       })
    })

}


  const handleSubmit = () => {
    // Perform any necessary operations before navigating

    // Navigate to the login page
    navigate('/Profile');
    PostData();
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
          <div className="newElement"><input type="text" placeholder='Nom d’article'onChange={(e)=>
            setDetails({...details,NomArticle:e.target.value})} /></div>
          <div className="newElement"><label for="img">Image d’article(.png,.jpeg)</label><input type="file" id="img" onChange={(e)=>
            setDetails({...details,Img:e.target.value})} class="hidden"/></div>
          <div className="newElement"><input type="text" placeholder='Adresse' onChange={(e)=>
            setDetails({...details,Adresse:e.target.value})}/></div>
          <div className="newElement"><label htmlFor="date">Date limite</label><input type="date" onChange={(e)=>
            setDetails({...details,date:e.target.value})}/></div>
          <div className="newElement"><textarea name="description" cols="30" rows="10" placeholder='Description' onChange={(e)=>
            setDetails({...details,Description:e.target.value})}></textarea></div>
          <button className='btn' onClick={handleSubmit}>Soumettre</button>
        </form>
   </div>
  )
}

export default New