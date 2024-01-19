import React from 'react';

const Formation = ({ formData, setFormData }) => {
  const { formations } = formData;

  const ajouterFormation = () => {
    setFormData({
      ...formData,
      formations: [...formations, { date: '', intitule: '', organisme: '', ville: '' }],
    });
  };

  const supprimerFormation = (index) => {
    const newFormations = [...formations];
    newFormations.splice(index, 1);
    setFormData({
      ...formData,
      formations: newFormations,
    });
  };

  const handleFormationChange = (index, field, value) => {
    const newFormations = [...formations];
    newFormations[index][field] = value;
    setFormData({
      ...formData,
      formations: newFormations,
    });
  };

  return (
    <div>
      <h2>Formations</h2>
      {formations.map((formation, index) => (
        <div key={index}>
          <h3>Formation {index + 1}</h3>
          <div>
            <label htmlFor={`dateFormation${index}`}>Date de la formation :</label>
            <input
              type="text"
              id={`dateFormation${index}`}
              value={formation.date}
              onChange={(e) => handleFormationChange(index, 'date', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`intituleFormation${index}`}>Intitulé de la formation :</label>
            <input
              type="text"
              id={`intituleFormation${index}`}
              value={formation.intitule}
              onChange={(e) => handleFormationChange(index, 'intitule', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`organismeFormation${index}`}>Nom de l'organisme :</label>
            <input
              type="text"
              id={`organismeFormation${index}`}
              value={formation.organisme}
              onChange={(e) => handleFormationChange(index, 'organisme', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`villeFormation${index}`}>Ville :</label>
            <input
              type="text"
              id={`villeFormation${index}`}
              value={formation.ville}
              onChange={(e) => handleFormationChange(index, 'ville', e.target.value)}
            />
          </div>
          <button onClick={() => supprimerFormation(index)}>Supprimer cette formation</button>
        </div>
      ))}
      <button onClick={ajouterFormation}>Ajouter une formation</button>
    </div>
  );
};

export default Formation;
