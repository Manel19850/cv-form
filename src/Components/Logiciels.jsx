import React from 'react';

const Logiciel = ({ formData, setFormData }) => {
  const { logiciels } = formData;

  const ajouterLogiciel = () => {
    setFormData({
      ...formData,
      logiciels: [...logiciels, { nom: '', niveau: '' }],
    });
  };

  const supprimerLogiciel = (index) => {
    const newLogiciels = [...logiciels];
    newLogiciels.splice(index, 1);
    setFormData({
      ...formData,
      logiciels: newLogiciels,
    });
  };

  const handleLogicielChange = (index, field, value) => {
    const newLogiciels = [...logiciels];
    newLogiciels[index][field] = value;
    setFormData({
      ...formData,
      logiciels: newLogiciels,
    });
  };

  return (
    <div>
      <h2>Logiciels</h2>
      {logiciels.map((logiciel, index) => (
        <div key={index}>
          <h3>Logiciel {index + 1}</h3>
          <div>
            <label htmlFor={`nomLogiciel${index}`}>Nom du logiciel :</label>
            <input
              type="text"
              id={`nomLogiciel${index}`}
              value={logiciel.nom}
              onChange={(e) => handleLogicielChange(index, 'nom', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`niveauLogiciel${index}`}>Niveau :</label>
            <input
              type="text"
              id={`niveauLogiciel${index}`}
              value={logiciel.niveau}
              onChange={(e) => handleLogicielChange(index, 'niveau', e.target.value)}
            />
          </div>
          <button onClick={() => supprimerLogiciel(index)}>Supprimer ce logiciel</button>
        </div>
      ))}
      <button onClick={ajouterLogiciel}>Ajouter un logiciel</button>
    </div>
  );
};

export default Logiciel;
