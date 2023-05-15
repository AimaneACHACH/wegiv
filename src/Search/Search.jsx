import React from 'react'
import './Search.css'
import {MdAccessTimeFilled} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'

const Search = ({result}) => {
    function formatDate(date) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
      }
      return (
        <div className="search">
            <h2>Toutes les catégories à votre proximité ({result.length} articles).</h2>
            <div className="searchMain">
          {result.map(({ id, img, title, date, place }) => {
            return <div className="searchArticle" key={id}>
    
                <div className="searchArticleImg"><img src={img[0]} alt="" /></div>
                <div className="searchArticleTitle"><h3>{title}</h3></div>
                <div className="searchArticleInfo">
                  <div className="searchArticleDate"><MdAccessTimeFilled/>{formatDate(date)}</div>
                  <div className="searchArticlePlace"><MdLocationOn/>{place}</div>
                </div>
    
            </div>
          })}
        </div>
        </div>
      )
}

export default Search