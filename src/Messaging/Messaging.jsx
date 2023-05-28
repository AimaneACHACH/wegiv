import React from 'react';
import { useParams } from 'react-router-dom';
import './Messaging.css';
import { RiSendPlaneFill } from 'react-icons/ri';
import User from '../Assets/DummyUser/photo.jpg';
import Art from '../Assets/DummyArticle/1.jpg';



const Messaging = () => {
  const { id ,articleId } = useParams();
  function autoResize() {
    const textarea = document.getElementById('myTextarea');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  return (
    <div className="messaging">
      <div className="messagingContact">
        <h1>Khobza Li drto f figma</h1>
        <div className="messagingImg">
          <img src={User} alt="" />
          <img src={Art} alt="" />
        </div>
        <h2>Simo Lmoharib</h2>
      </div>
      <div className="messagingContent">
        <div className="messagingYou">khbza mzyana 3ndek al3awd</div>
        <div className="messagingThem">simo lmoharib dima makayn gha kjadid</div>
        <div className="messagingYou">mat3y9ch</div>
        <div className="messagingThem">srry hh</div>
      </div>
      <div className="messagingInput">
        <textarea id="myTextarea" onInput={autoResize}></textarea>
        <RiSendPlaneFill />
      </div>
    </div>
  );
};

export default Messaging;
