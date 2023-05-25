import {Routes,Route} from 'react-router-dom'
import React from 'react'
import Header from '../src/Header/Header'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import Main from './Main/Main'
import Article from './Article/Article'
import New from './New/New'
import Search from './Search/Search'
import Profile from './Profile/Profile'
import Messaging from './Messaging/Messaging'


/*--------------------------dummyArticle------------------------*/

import Img1 from './Assets/DummyArticle/1.jpg'
import Img2 from './Assets/DummyArticle/2.jpg'
import Img3 from './Assets/DummyArticle/3.jpg'
import Img4 from './Assets/DummyArticles/pens.jpg'
import Img5 from './Assets/DummyArticles/jacket.jpg'
import Img6 from './Assets/DummyArticles/meat.jpeg'
import Img7 from './Assets/DummyArticles/food.jpg'
import Img8 from './Assets/DummyArticles/pizza.jpg'
import Img9 from './Assets/DummyArticles/soup.jpg'


const dummyArticles = [
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


/*--------------------------dummyArticle------------------------*/
/*--------------------------dummyUser------------------------*/

const dummyUser = {

  "Id":"NVdOl24X2wFSraHorFJ",
  "schoolName":"INPT",
  "email":"Kacemsimo@gmail.com",
  "gender":"M",
  "firstName":"Simo",
  "lastName":"Kacem",
  "phoneNumber":"0668864646",
  "adress":"Rabat",
  "student":true,
  "profilePic":"https://www.thesun.ie/wp-content/uploads/sites/3/2020/08/NINTCHDBPICT000604076009.jpg?strip=all&quality=100&w=1080&h=1080&crop=1",
  "articles": ["Jdk87JDkdH7e68Y","JKHL8Gf8F8FFY","HjhJ2Kh67IH7h","BJ4KJ24BVJ4HG634KvM"]

}

/*--------------------------dummyUser------------------------*/

const App = () => { 

  

  return (
    <div className="theWholePage">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Article/:id' element={<Article article= {dummyArticles[0]} />} />
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/New' element={<New/>}/>
        <Route path='/Search' element={<Search result={dummyArticles}/>}/>
        <Route path='/Profile' element={<Profile user={dummyUser}/>}/>
        <Route path='/Main' element={<Main dummyArticles={dummyArticles}/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Messaging' element={<Messaging/>}/>
      </Routes>
    <Footer/>
    </div>

  )
}

export default App