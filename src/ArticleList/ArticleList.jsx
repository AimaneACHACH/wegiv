import React from 'react'
import './ArticleList.css'
import {MdAccessTimeFilled} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'


const ArticleList = ({ Articles }) => {
  function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  return (
    <div className="articleList">
      {Articles.map(({ id, img, title, date, place }) => {
        return <div className="articleListArticle" key={id}>

            <div className="articleListImg"><img src={img[0]} alt="" /></div>
            <div className="articleListTitle"><h3>{title}</h3></div>
            <div className="articleListInfo">
              <div className="articleListDate"><MdAccessTimeFilled/>{formatDate(date)}</div>
              <div className="articleListPlace"><MdLocationOn/>{place}</div>
            </div>

        </div>
      })}
    </div>
  )
}

export default ArticleList