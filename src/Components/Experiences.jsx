import React from 'react';

const Experience = ({ formData, setFormData }) => {
  const { experiences } = formData;

  const ajouterExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...experiences,
        { debut: '', fin: '', poste: '', entreprise: '', ville: '', missions: ['', '', '', '', ''] },
      ],
    });
  };

  const supprimerExperience = (index) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setFormData({
      ...formData,
      experiences: newExperiences,
    });
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    setFormData({
      ...formData,
      experiences: newExperiences,
    });
  };

  const handleMissionChange = (experienceIndex, missionIndex, value) => {
    const newExperiences = [...experiences];
    newExperiences[experienceIndex].missions[missionIndex] = value;
    setFormData({
      ...formData,
      experiences: newExperiences,
    });
  };

  return (
    <div>
      <h2>Expériences Professionnelles</h2>
      {experiences.map((experience, index) => (
        <div key={index}>
          <h3>Expérience {index + 1}</h3>
          <div>
            <label htmlFor={`debut${index}`}>Début de la mission :</label>
            <input
              type="text"
              id={`debut${index}`}
              value={experience.debut}
              onChange={(e) => handleExperienceChange(index, 'debut', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`fin${index}`}>Fin de la mission :</label>
            <input
              type="text"
              id={`fin${index}`}
              value={experience.fin}
              onChange={(e) => handleExperienceChange(index, 'fin', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`poste${index}`}>Intitulé du poste :</label>
            <input
              type="text"
              id={`poste${index}`}
              value={experience.poste}
              onChange={(e) => handleExperienceChange(index, 'poste', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`entreprise${index}`}>Nom de l'entreprise :</label>
            <input
              type="text"
              id={`entreprise${index}`}
              value={experience.entreprise}
              onChange={(e) => handleExperienceChange(index, 'entreprise', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`ville${index}`}>Ville :</label>
            <input
              type="text"
              id={`ville${index}`}
              value={experience.ville}
              onChange={(e) => handleExperienceChange(index, 'ville', e.target.value)}
            />
          </div>
          <div>
            <h4>Missions principales :</h4>
            {experience.missions.map((mission, missionIndex) => (
              <div key={missionIndex}>
                <label htmlFor={`mission${index}_${missionIndex}`}>Mission {missionIndex + 1} :</label>
                <input
                  type="text"
                  id={`mission${index}_${missionIndex}`}
                  value={mission}
                  onChange={(e) => handleMissionChange(index, missionIndex, e.target.value)}
                />
              </div>
            ))}
          </div>
          <button onClick={() => supprimerExperience(index)}>Supprimer cette expérience</button>
        </div>
      ))}
      <button onClick={ajouterExperience}>Ajouter une expérience</button>
    </div>
  );
};

export default Experience;
