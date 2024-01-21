import React, { useRef } from 'react';
import './Experiences.css';

const Experience = ({ formData, setFormData }) => {
  const { experiences } = formData;
  const lastExperienceRef = useRef(null);

  const ajouterExperience = () => {
    console.log('Ajout d\'expérience');
    setFormData({
      ...formData,
      experiences: [
        ...experiences,
        {
          debut: '',
          fin: '',
          poste: '',
          entreprise: '',
          ville: '',
          missions: ['', '', '', '', ''],
        },
      ],
    });
    lastExperienceRef.current.scrollIntoView({ behavior: 'smooth' });
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
        <div key={index} ref={index === experiences.length - 1 ? lastExperienceRef : null}>
          <h3 className="experience-subtitle">Expérience {index + 1}</h3>
          <div className='input-mission'>
            <div className="experience-input1">
              <label className="experience-label1" htmlFor={`debut${index}`}>Début de la mission :</label>
              <input
                type="text"
                id={`debut${index}`}
                value={experience.debut}
                onChange={(e) => handleExperienceChange(index, 'debut', e.target.value)}
              />
            </div>

            <div className="experience-input2">
              <label className="experience-label" htmlFor={`fin${index}`}>Fin de la mission :</label>
              <input
                type="text"
                id={`fin${index}`}
                value={experience.fin}
                onChange={(e) => handleExperienceChange(index, 'fin', e.target.value)}
              />
            </div>
          </div>

          <div className='body-experience'>
            <div className="experience-input">
              <label className="experience-label1" htmlFor={`poste${index}`}>Poste occupé :</label>
              <input
                type="text"
                id={`poste${index}`}
                value={experience.poste}
                onChange={(e) => handleExperienceChange(index, 'poste', e.target.value)}
              />
            </div>

            <div className="experience-input">
              <label className="experience-label2" htmlFor={`entreprise${index}`}>Nom de l'entreprise :</label>
              <input
                type="text"
                id={`entreprise${index}`}
                value={experience.entreprise}
                onChange={(e) => handleExperienceChange(index, 'entreprise', e.target.value)}
              />
            </div>

            <div className="experience-input">
              <label className="experience-label3" htmlFor={`ville${index}`}>Ville :</label>
              <input
                type="text"
                id={`ville${index}`}
                value={experience.ville}
                onChange={(e) => handleExperienceChange(index, 'ville', e.target.value)}
              />
            </div>
          </div>

          <div className="experience-mission">
            <div className='mission-title'>
              <h4>Missions principales :</h4>
            </div>
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

          <div className="experience-buttons-container">
            <button className="experience-button" onClick={() => supprimerExperience(index)}>Supprimer cette expérience</button>
            <button className="experience-button" onClick={ajouterExperience}>Ajouter une expérience</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
