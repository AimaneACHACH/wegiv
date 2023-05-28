import React, { useState ,useEffect} from 'react'
import { useParams , useNavigate } from 'react-router-dom';
import {
  onValue,
  getDatabase,
  ref,
  query,
  orderByChild,
  equalTo,
  get,
} from 'firebase/database';
import './Profile.css'
import ArticleList from '../ArticleList/ArticleList'
import {MdMessage} from 'react-icons/md'
import {ImWhatsapp} from 'react-icons/im'
import {IoMdSchool} from 'react-icons/io'
import {ImLocation} from 'react-icons/im'
import {BiPencil} from 'react-icons/bi'


const Profile = () => {


  const { id } = useParams();
  const [user,setUser]=useState(null)
  const db = getDatabase();
  useEffect(() => {
    const userId = id.slice(1);
    const userQuery = query(
      ref(db, '/User'),
      orderByChild('Id'),
      equalTo(userId)
    );

    get(userQuery)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [db, id]);

  return (
    <div className="profile">
        <div className="profileAcc">
        <div className="profilerImg">
                   {user && <img src={"https://firebasestorage.googleapis.com/v0/b/wegiv-1c9b2.appspot.com/o/ProfileImages%2F"+Object.values(user)[0].Id+"?alt=media&token=d32cca22-426b-459b-9bef-8e4daf25f14e"} alt="" />}
        </div>
        <div className="profileInfo">
            <div className="profileName"><h1>{user && Object.values(user)[0].lastName} {user && Object.values(user)[0].firstName}</h1><BiPencil/></div>          
            <div className="profileSchool"><IoMdSchool/><h2>{user && Object.values(user)[0].schoolName}</h2></div>
            <div className="profileAd"><ImLocation/><h2>{user && Object.values(user)[0].address}</h2></div>
            <div className="prodileContact">
                {user && <a href={'/Messaging/:'+Object.values(user)[0].Id+'/:0'} style={{ textDecoration: 'none' }} className="btn"><MdMessage/>Contacter le GIVeur</a>}
                {user && <a href={"https://wa.me/"+Object.values(user)[0].phoneNumber} className="btn" style={{ textDecoration: 'none' }}><ImWhatsapp/>Numéro de téléphone</a>}
            </div>
        </div>
        
        </div>
        
        <div className="profileArticles">
            <h2>Articles listé :</h2>
            <ArticleList/>
        </div>
    </div>
  )
}

export default Profile