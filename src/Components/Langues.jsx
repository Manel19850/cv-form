import React from 'react';

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
    <div>
      <h2>Langues</h2>
      {langues.map((langue, index) => (
        <div key={index}>
          <h3>Langue {index + 1}</h3>
          <div>
            <label htmlFor={`nomLangue${index}`}>Nom de la langue :</label>
            <input
              type="text"
              id={`nomLangue${index}`}
              value={langue.nom}
              onChange={(e) => handleLangueChange(index, 'nom', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`niveauLangue${index}`}>Niveau :</label>
            <input
              type="text"
              id={`niveauLangue${index}`}
              value={langue.niveau}
              onChange={(e) => handleLangueChange(index, 'niveau', e.target.value)}
            />
          </div>
          <button onClick={() => supprimerLangue(index)}>Supprimer cette langue</button>
        </div>
      ))}
      <button onClick={ajouterLangue}>Ajouter une langue</button>
    </div>
  );
};

export default Langue;
