import React, { useState } from 'react';
import './App.css';
import NomPosteSection from './Components/NomPosteSection';
import InfoPerso from './Components/InfoPerso';
import Experience from './Components/Experiences';
import Formation from './Components/Formations';
import Langue from './Components/Langues';
import Logiciel from './Components/Logiciels';
import ConfirmationPage from './Components/Confirmation';

function App() {
  const totalSections = 6;

  const [formData, setFormData] = useState({
    postes: ['', ''],
    infoPerso: {
      nom: '',
      prenom: '',
      dateNaissance: '',
      adresse: '',
      codePostale: '',
      ville: '',
      email: '',
      numeroTelephone: '',
      nationalite: '',
      permisConduire: '',
    },
    experiences: [
      {
        debut: '',
        fin: '',
        poste: '',
        entreprise: '',
        ville: '',
        missions: ['', '', '', '', ''],
      },
    ],
    formations: [
      {
        date: '',
        intitule: '',
        organisme: '',
        ville: '',
      },
    ],
    langues: [
      {
        nom: '',
        niveau: '',
      },
    ],
    logiciels: [
      {
        nom: '',
        niveau: '',
      },
    ],
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNext = () => {
    setCurrentSection(currentSection + 1);
    // Mettez à jour les données du formulaire si nécessaire
  };

  const handlePrevious = () => {
    setCurrentSection(currentSection - 1);
    // Mettez à jour les données du formulaire si nécessaire
  };

  const handleSubmit = async () => {
    // Soumettez le formulaire à Formspree
    const response = await fetch('https://formspree.io/f/xkndglrk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Formulaire soumis avec succès!');
      // Ajoutez ici votre logique de redirection ou de confirmation
      setFormSubmitted(true);
    } else {
      console.error('Erreur lors de la soumission du formulaire.');
    }
  };

  return (
    <div className="App">
      {currentSection === 0 && <NomPosteSection formData={formData} setFormData={setFormData} />}
      {currentSection === 1 && <InfoPerso formData={formData} setFormData={setFormData} />}
      {currentSection === 2 && <Experience formData={formData} setFormData={setFormData} />}
      {currentSection === 3 && <Formation formData={formData} setFormData={setFormData} />}
      {currentSection === 4 && <Langue formData={formData} setFormData={setFormData} />}

      {formSubmitted && currentSection === totalSections - 1 ? (
        <ConfirmationPage />
      ) : (
        // Afficher le composant Logiciel uniquement si le formulaire n'a pas encore été soumis
        currentSection === 5 && <Logiciel formData={formData} setFormData={setFormData} />
      )}

      <div>
        {/* Condition pour afficher ou non le bouton "Précédent" */}
        {currentSection > 0 && !formSubmitted && <button onClick={handlePrevious}>Précédent</button>}
        {currentSection < totalSections - 1 && <button onClick={handleNext}>Suivant</button>}
        {currentSection === totalSections - 1 && !formSubmitted && <button onClick={handleSubmit}>Envoyer</button>}
      </div>
    </div>
  );
}

export default App;
