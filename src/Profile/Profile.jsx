import React from 'react'
import './Profile.css'
import ArticleList from '../ArticleList/ArticleList'
import {MdMessage} from 'react-icons/md'
import {ImWhatsapp} from 'react-icons/im'
import {IoMdSchool} from 'react-icons/io'
import {ImLocation} from 'react-icons/im'
import {BiPencil} from 'react-icons/bi'


/*--------------------------dummyArticles------------------------*/

import Img1 from '../Assets/DummyArticle/1.jpg'
import Img2 from '../Assets/DummyArticle/2.jpg'
import Img3 from '../Assets/DummyArticle/3.jpg'
import Img4 from '../Assets/DummyArticles/pens.jpg'
import Img5 from '../Assets/DummyArticles/jacket.jpg'
import Img6 from '../Assets/DummyArticles/meat.jpeg'
import Img7 from '../Assets/DummyArticles/food.jpg'
import Img8 from '../Assets/DummyArticles/pizza.jpg'
import Img9 from '../Assets/DummyArticles/soup.jpg'


const listed = [
  {
    id:1,
    img:[Img4,Img5,Img6],
    title: 'Some article',
    date: new Date('2022-05-01T00:00:00Z'),
    place :'INPT'
  },{
    id:1,
    img:[Img5,Img6,Img7],
    title: 'Some article',
    date: new Date('2022-05-01T00:00:00Z'),
    place :'INPT'
  },{
    id:1,
    img:[Img6,Img7,Img8],
    title: 'Some article',
    date: new Date('2022-05-01T00:00:00Z'),
    place :'INPT'
  },{
    id:1,
    img:[Img7,Img8,Img9],
    title: 'Some article',
    date: new Date('2022-05-01T00:00:00Z'),
    place :'INPT'
  },{
    id:1,
    img:[Img8,Img9,Img1],
    title: 'Some article',
    date: new Date('2022-05-01T00:00:00Z'),
    place :'INPT'
  },{
    id:1,
    img:[Img9,Img2,Img3],
    title: 'Some article',
    date: new Date('2022-05-01T00:00:00Z'),
    place :'INPT'
  },{
    id:1,
    img:[Img4,Img5,Img6],
    title: 'Some article',
    date: new Date('2022-05-01T00:00:00Z'),
    place :'INPT'
  },{
    id:1,
    img:[Img5,Img6,Img7],
    title: 'Some article',
    date: new Date('2022-05-01T00:00:00Z'),
    place :'INPT'
  },{
    id:1,
    img:[Img6,Img7,Img8],
    title: 'Some article',
    date: new Date('2022-05-01T00:00:00Z'),
    place :'INPT'
  },{
    id:1,
    img:[Img7,Img8,Img9],
    title: 'Some article',
    date: new Date('2022-05-01T00:00:00Z'),
    place :'INPT'
  },{
    id:1,
    img:[Img8,Img9,Img1],
    title: 'Some article',
    date: new Date('2022-05-01T00:00:00Z'),
    place :'INPT'
  },{
    id:1,
    img:[Img9,Img2,Img3],
    title: 'Some article',
    date: new Date('2022-05-01T00:00:00Z'),
    place :'INPT'
  },
]


/*--------------------------dummyArticles------------------------*/

const Profile = ({user}) => {
  return (
    <div className="profile">
        <div className="profileAcc">
        <div className="profilerImg">
                   <img src={user.profilePic} alt="" />
        </div>
        <div className="profileInfo">
            <div className="profileName"><h1>{user.firstName} {user.lastName}</h1><BiPencil/></div>          
            <div className="profileSchool"><IoMdSchool/><h2>{user.schoolName}</h2></div>
            <div className="profileAd"><ImLocation/><h2>{user.adress}</h2></div>
            <div className="prodileContact">
                <div className="btn"><MdMessage/>Contacter le GIVeur</div>
                <div className="btn"><ImWhatsapp/>Numéro de téléphone</div>
            </div>
        </div>
        
        </div>
        
        <div className="profileArticles">
            <h2>Articles listé :</h2>
            <ArticleList Articles={listed}/>
        </div>
    </div>
  )
}

export default Profile