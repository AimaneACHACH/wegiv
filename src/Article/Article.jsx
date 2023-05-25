import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Article.css'
import {BsArrowLeft} from 'react-icons/bs'
import {MdAccessTimeFilled} from 'react-icons/md'
import {RiHandCoinLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import {RxShare1} from 'react-icons/rx'
import {MdMessage} from 'react-icons/md'
import {ImWhatsapp} from 'react-icons/im'
import ArticleList from '../ArticleList/ArticleList'
import 'firebase/storage';
import { getDatabase, ref, query, orderByChild, equalTo, get,onValue } from "firebase/database";


const Article = () => {

  const transformDateString = (dateTimeString) => {
    if (!dateTimeString) {
      return '';
    }
  
    const [date, time] = dateTimeString.split('#');
    if (!date || !time) {
      return '';
    }
  
    const [day, month, year] = date.split('/');
    const [hours, minutes] = time.split(':');
  
    // Create a new Date object with the extracted values
    const transformedDate = new Date(year, month - 1, day, hours, minutes);
  
    // Format the date using the toLocaleString method with the French locale
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = transformedDate.toLocaleString('fr-FR', options);
  
    return formattedDate;
  };


  const { id } = useParams();
  const [thisArticle, setThisArticle] = useState(null);
  const db = getDatabase();

  useEffect(() => {
    const realId = id.slice(1);
    const articleQuery = query(ref(db, '/Article'), orderByChild('id'), equalTo(realId));

    get(articleQuery)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setThisArticle(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
      

    const [isLiked, setIsLiked] = useState(false);
    const handleIconClick = () => {
        setIsLiked(!isLiked);
    }
  return (
    <div className="article">
        <div className="articleBack"><BsArrowLeft/>Retourner aux résultats</div>
        <div className="articleTitle"><h1>{thisArticle && Object.values(thisArticle)[0]?.title}</h1></div>
        <div className="articleArticle">
            <div className="articleArticleDetails">
                <div className="articleImg">
                {thisArticle && Object.values(thisArticle)[0].id && <img src={"https://firebasestorage.googleapis.com/v0/b/wegiv-1c9b2.appspot.com/o/ArticleImages%2F"+Object.values(thisArticle)[0].id+"?alt=media&token=977ad328-9b8a-4b92-8fcd-0bbf42f0b545"} alt="" />}
                </div>
                <div className="articleInfo">
                    <div className="articleUser">
                        <h5>Listé par: </h5>
                        <div><h5>Naima Sekkat</h5>
                        {thisArticle && Object.values(thisArticle)[0].publisher &&<img src={"https://firebasestorage.googleapis.com/v0/b/wegiv-1c9b2.appspot.com/o/ProfileImages%2F"+Object.values(thisArticle)[0].publisher+"?alt=media&token=b8c9718b-e668-4d72-ba3c-3a2d8f0fc257"} alt="" />}</div>
                    </div>
                    <div className="articleDate"><MdAccessTimeFilled/>{thisArticle && Object.values(thisArticle)[0].publishingDate
 && <h5> {transformDateString(Object.values(thisArticle)[0].publishingDate)} </h5>}</div>
                    <div className="articleDescription">
                        <h4>Description</h4>
                        <p>{thisArticle && Object.values(thisArticle)[0]?.description}</p>
                    </div>
                    <div className="aticlePlace">
                        <h4>Localisation</h4>
                        <small><RiHandCoinLine/><small>Proche de vous</small></small>
                        <p>{thisArticle && Object.values(thisArticle)[0]?.location}</p>
                    </div>
                </div>
            </div>
            <div className="articleOptions">
                            <div className="articleSave" onClick={handleIconClick}>
                                <div >{isLiked ? <AiFillHeart className='articleHeart'/> : <AiOutlineHeart />}</div>
                                <h5>Sauvgarder</h5>
                            </div>
                            <div className="articleShare">
                            <RxShare1/>
                            <h5>Partager</h5>
                            </div>
            </div>
        </div>
        <div className="articleContact">
                    <div className="btn"><MdMessage/>Contacter le GIVeur</div>
                    <div className="btn"><ImWhatsapp/>Numéro de téléphone</div>
        </div>
        <div className="articleOthers">
            <ArticleList/>
        </div>
    
    </div>
  )
}

export default Article