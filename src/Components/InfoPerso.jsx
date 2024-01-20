import React from 'react';
import './InfoPerso.css';

const InfoPerso = ({ formData, setFormData }) => {
  const { nom, prenom, dateNaissance, adresse, codePostale, ville, email, numeroTelephone, nationalite, permisConduire } = formData;

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="info-perso-container">
      <h2>Informations Personnelles</h2>
      <div>
        <label htmlFor="nom">Nom :</label>
        <input type="text" id="nom" value={nom} onChange={(e) => handleInputChange('nom', e.target.value)} />
      </div>
      <div>
        <label htmlFor="prenom">Prénom :</label>
        <input type="text" id="prenom" value={prenom} onChange={(e) => handleInputChange('prenom', e.target.value)} />
      </div>
      <div>
        <label htmlFor="dateNaissance">Date de naissance :</label>
        <input type="date" id="dateNaissance" value={dateNaissance} onChange={(e) => handleInputChange('dateNaissance', e.target.value)} />
      </div>
      <div>
        <label htmlFor="adresse">Adresse postale :</label>
        <input type="text" id="adresse" value={adresse} onChange={(e) => handleInputChange('adresse', e.target.value)} />
      </div>
      <div>
        <label htmlFor="codePostale">Code postal :</label>
        <input type="text" id="codePostale" value={codePostale} onChange={(e) => handleInputChange('codePostale', e.target.value)} />
      </div>
      <div>
        <label htmlFor="ville">Ville :</label>
        <input type="text" id="ville" value={ville} onChange={(e) => handleInputChange('ville', e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Adresse e-mail :</label>
        <input type="email" id="email" value={email} onChange={(e) => handleInputChange('email', e.target.value)} />
      </div>
      <div>
        <label htmlFor="numeroTelephone">Numéro de téléphone :</label>
        <input type="tel" id="numeroTelephone" value={numeroTelephone} onChange={(e) => handleInputChange('numeroTelephone', e.target.value)} />
      </div>
      <div>
        <label htmlFor="nationalite">Nationalité :</label>
        <input type="text" id="nationalite" value={nationalite} onChange={(e) => handleInputChange('nationalite', e.target.value)} />
      </div>
      <div>
        <label htmlFor="permisConduire">Permis de conduire :</label>
        <input type="text" id="permisConduire" value={permisConduire} onChange={(e) => handleInputChange('permisConduire', e.target.value)} />
      </div>
    </div>
  );
};

export default InfoPerso;
