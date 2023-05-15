import React from 'react'
import './New.css'

const New = () => {
  return (
   <div className="new">
        <div className="newTitle"><h1>LISTER UN ARTICLE: </h1></div>
        <form action="submit" className='newInfo'>
          <div className="newElement"><input type="text" placeholder='Type d’article'/></div>
          <div className="newElement"><label for="img">Image d’article(.png,.jpeg)</label><input type="file" id="img" class="hidden"/></div>
          <div className="newElement"><input type="text" placeholder='Adresse'/></div>
          <div className="newElement"><label htmlFor="date">Date limite</label><input type="date"/></div>
          <div className="newElement"><textarea name="description" cols="30" rows="10" placeholder='Description'></textarea></div>
          <button className='btn'>Soumettre</button>
        </form>
   </div>
  )
}

export default New