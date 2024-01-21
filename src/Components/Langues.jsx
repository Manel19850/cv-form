import React from 'react';
import './Langues.css'

const Langue = ({ formData, setFormData }) => {
  const { langues } = formData;

  const ajouterLangue = () => {
    setFormData({
      ...formData,
      langues: [...langues, { nom: '', niveau: '' }],
    });
  };

  const supprimerLangue = (index) => {
    const newLangues = [...langues];
    newLangues.splice(index, 1);
    setFormData({
      ...formData,
      langues: newLangues,
    });
  };

  const handleLangueChange = (index, field, value) => {
    const newLangues = [...langues];
    newLangues[index][field] = value;
    setFormData({
      ...formData,
      langues: newLangues,
    });
  };

  return (
    <div className="langue-container">
      <h2 className="langue-title">Langues</h2>
      {langues.map((langue, index) => (
        <div key={index} className="langue-input">
          <h3 className="langue-subtitle">Langue {index + 1}</h3>
          <div>
            <label className="langue-label1" htmlFor={`nomLangue${index}`}>Nom de la langue :</label>
            <input
              type="text"
              id={`nomLangue${index}`}
              value={langue.nom}
              onChange={(e) => handleLangueChange(index, 'nom', e.target.value)}
            />
          </div>
          <div>
            <label className="langue-label2" htmlFor={`niveauLangue${index}`}>Niveau :</label>
            <input
              type="text"
              id={`niveauLangue${index}`}
              value={langue.niveau}
              onChange={(e) => handleLangueChange(index, 'niveau', e.target.value)}
            />
          </div>
          <button className="langue-button" onClick={() => supprimerLangue(index)}>Supprimer cette langue</button>
        </div>
      ))}
      <button className="langue-button" onClick={ajouterLangue}>Ajouter une langue</button>
    </div>
  );
};

export default Langue;
