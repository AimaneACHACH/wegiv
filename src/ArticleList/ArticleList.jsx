import React from 'react'
import './ArticleList.css'
import 'firebase/storage';
import { useEffect, useState } from 'react';

import { useNavigate  } from 'react-router-dom'
import { getDatabase, ref, onValue } from 'firebase/database';
import {MdAccessTimeFilled} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'





const ArticleList = () => {
  
  const navigate = useNavigate();
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
  
  
  

  const [articles, setEntry] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const entryRef = ref(db, '/Article');

    onValue(entryRef, (snapshot) => {
      const entryData = snapshot.val();
      setEntry(entryData);
    });

    return () => {
      // Cleanup listener if needed
    };
  }, []);

  return (



    <div className="articleList">
      
      
      {Object.values(articles).map(article => (
        <a href={'/Article/:'+article.id} style={{ textDecoration: 'none' }}>
         <div className="articleListArticle" key={article.id}>

            <div className="articleListImg"><img src={"https://firebasestorage.googleapis.com/v0/b/wegiv-1c9b2.appspot.com/o/ArticleImages%2F" + article.id + "?alt=media&token=a5b5463b-1b4d-482b-b75f-63a7e8187cdb"} alt="" /></div>
            <div className="articleListTitle"><h3>{article.title}</h3></div>
            <div className="articleListInfo">
              <div className="articleListDate">{article.listingDate && <MdAccessTimeFilled/>}{transformDateString(article.listingDate)}</div>
              <div className="articleListPlace"><MdLocationOn/>{article.location}</div>
            </div>

        </div></a>
      ))}
    </div>
  )
}

export default ArticleList