import React from 'react';
import './FormButtons.css'; // Assurez-vous d'importer votre fichier CSS

function FormButtons({
  currentSection,
  totalSections,
  formSubmitted,
  handlePrevious,
  handleNext,
  handleSubmit,
}) {
  return (
    <div className="section-button-container">
      {currentSection === 0 && !formSubmitted &&
        <button className={`custom-button first-section-button`} onClick={handleNext}>Commencer</button>
      }
      {currentSection > 0 && !formSubmitted && currentSection <= 5 &&
        <button className={`custom-button section-previous-button`} onClick={handlePrevious}>Précédent</button>
      }
      {currentSection < totalSections - 1 && currentSection > 0 && currentSection <= 5 &&
        <button className={`custom-button section-next-button`} onClick={handleNext}>Suivant</button>
      }
      {currentSection === totalSections - 1 && !formSubmitted && currentSection <= 5 &&
        <button className="custom-button submit-button" onClick={handleSubmit}>Envoyer</button>
      }
    </div>
  );
}

export default FormButtons;
