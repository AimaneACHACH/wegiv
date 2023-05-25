import React,{useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';
import { auth } from '../firebase'
import './Main.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {TbCategory2} from 'react-icons/tb'
import Food from '../Assets/food.png'
import Cloths from '../Assets/cloths.png'
import Pills from '../Assets/pills.png'
import Tools from '../Assets/tools.png'
import Electronics from '../Assets/electronics.png'
import Things from '../Assets/things.png'
import ArticleList from '../ArticleList/ArticleList'


const Main = () => {


  //return to home if not signed in
  
  const navigate = useNavigate();

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
    <div className="main">
        <div className="mainSearch">
            <div className="searchBar"><AiOutlineSearch/><input type="text" placeholder='Chercher un article proche de moi' /></div>
            <div className="searchBar"><TbCategory2/><input type="text" placeholder='Choisir une categorie' /></div>
        </div>
        <div className="mainCategories">
            <div className="mainCategorie"><img src={Food} alt="" /></div>
            <div className="mainCategorie"><img src={Cloths} alt="" /></div>
            <div className="mainCategorie"><img src={Pills} alt="" /></div>
            <div className="mainCategorie"><img src={Tools} alt="" /></div>
            <div className="mainCategorie"><img src={Electronics} alt="" /></div>
            <div className="mainCategorie"><img src={Things} alt="" /></div>
        </div>
        <div className="mainArticleTitle"><h2>Article proche de vous: </h2></div>
        <ArticleList/>
    </div>
  )
}

export default Main