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

const App = () => {
  return (
    <div className="theWholePage">
      <Header/>
    {/*
    <Login/>
    <Article article={dummyArticles[0]} others={dummyArticles}/>
    <Signup/>
    <New/>
    <Search result={dummyArticles}/>
    <Main dummyArticles={dummyArticles}/>
    
    */}
    <Home/>
    <Footer/>
    </div>

  )
}

export default App