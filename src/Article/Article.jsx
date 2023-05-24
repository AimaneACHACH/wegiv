import React, {useState } from 'react'
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
import User from '../Assets/DummyUser/photo.jpg'

// import Swiper core and required modules
import { Pagination , Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Article = ({ article }) => {

    const [isLiked, setIsLiked] = useState(false);
    const handleIconClick = () => {
        setIsLiked(!isLiked);
    }
  return (
    <div className="article">
        <div className="articleBack"><BsArrowLeft/>Retourner aux résultats</div>
        <div className="articleTitle"><h1>Jeans usés propre</h1></div>
        <div className="articleArticle">
            <div className="articleArticleDetails">
                <div className="articleImg">
                    <Swiper className="articleImgSwiper"
                    color='red'
                    modules={[Navigation,Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}>

                        {article.img.map((image, index) => (
                                <SwiperSlide className='articleSingleImage'>
                                <img src={image} key={index} />
                                </SwiperSlide>
                                ))}                        

                    </Swiper>
                </div>
                <div className="articleInfo">
                    <div className="articleUser">
                        <h5>Listé par: </h5>
                        <div><h5>Naima Sekkat</h5>
                        <img src={User} alt="" /></div>
                    </div>
                    <div className="articleDate"><MdAccessTimeFilled/><h5>Dans 2 jours</h5></div>
                    <div className="articleDescription">
                        <h4>Description</h4>
                        <p>des jeans mam7tajhomch so libghahom contactini 😊</p>
                    </div>
                    <div className="aticlePlace">
                        <h4>Localisation</h4>
                        <small><RiHandCoinLine/><small>Proche de vous</small></small>
                        <p>INPT, Av. Allal El Fassi, Rabat , we can't afford a map a drari , Google Maps API is paid 😞</p>
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