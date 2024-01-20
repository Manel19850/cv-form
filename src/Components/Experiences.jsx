import React from 'react';

const Experience = ({ formData, setFormData }) => {
  const { experiences } = formData;

  const ajouterExperience = () => {
    console.log('Ajout d\'expérience');
    setFormData({
      ...formData,
      experiences: [
        ...experiences,
        { debut: '', fin: '', poste: '', entreprise: '', ville: '', missions: ['', '', '', '', ''] },
      ],
    });
  };

  const supprimerExperience = (index) => {
    console.log('Suppression d\'expérience à l\'index', index);
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
  <div className="experience-container">
    <h2 className="experience-title">Expériences Professionnelles</h2>
    {experiences.map((experience, index) => (
      <div key={index}>
        <h3 className="experience-title">Expérience {index + 1}</h3>
        {/* ... */}
        <div className="experience-input">
          <label className="experience-label" htmlFor={`debut${index}`}>Début de la mission :</label>
          <input
            type="text"
            id={`debut${index}`}
            value={experience.debut}
            onChange={(e) => handleExperienceChange(index, 'debut', e.target.value)}
          />
        </div>
        {/* ... */}
        <div className="experience-mission">
          <h4>Missions principales :</h4>
          {experience.missions.map((mission, missionIndex) => (
            <div key={missionIndex} className="experience-input">
              <label className="experience-label" htmlFor={`mission${index}_${missionIndex}`}>Mission {missionIndex + 1} :</label>
              <input
                type="text"
                id={`mission${index}_${missionIndex}`}
                value={mission}
                onChange={(e) => handleMissionChange(index, missionIndex, e.target.value)}
              />
            </div>
          ))}
        </div>
        <button className="experience-button" onClick={() => supprimerExperience(index)}>Supprimer cette expérience</button>
      </div>
    ))}
    <button className="experience-button" onClick={ajouterExperience}>Ajouter une expérience</button>
  </div>
);
};

export default Experience;
