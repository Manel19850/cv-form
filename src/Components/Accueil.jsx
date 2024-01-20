import React from 'react';
import './Accueil.css'

const Accueil = () => {
  return (
    <div className="accueil-container">
      <div className="banniere">
      <video className='video' width="100%" height="auto" autoPlay muted loop>
          <source src='video.mp4' type="video/mp4" />
      </video>
      </div>

      <div className="presentation">
        <div className='bloc-titre'>
        <img src="Logo_White_H.png" alt="logo RH Consulting" />
        </div>
        
        <p>
          RH Consulting vous propose un outil convivial pour renseigner vos informations professionnelles et
          simplifier la création de votre CV. 
        </p>
        <p>
        Nous nous chargeons de transformer ces données en un CV professionnel et percutant.
        </p>
        
      </div>
    </div>
  );
};

export default Accueil;
