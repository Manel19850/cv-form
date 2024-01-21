import React, { useState } from 'react';
import './App.css';
import Accueil from './Components/Accueil';
import NomPosteSection from './Components/NomPosteSection';
import InfoPerso from './Components/InfoPerso';
import Experience from './Components/Experiences';
import Formation from './Components/Formations';
import Langue from './Components/Langues';
import Logiciel from './Components/Logiciels';
import ConfirmationPage from './Components/Confirmation';
import FormButtons from './Components/FormButtons';

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
  };

  const handlePrevious = () => {
    setCurrentSection(currentSection - 1);
  };

  const handleSubmit = async () => {
    const response = await fetch('https://formspree.io/f/xkndglrk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Formulaire soumis avec succès!');
      setFormSubmitted(true);
    } else {
      console.error('Erreur lors de la soumission du formulaire.');
    }
  };

  const sections = [
    <Accueil />,
    <NomPosteSection formData={formData} setFormData={setFormData} />,
    <InfoPerso formData={formData} setFormData={setFormData} />,
    <Experience formData={formData} setFormData={setFormData} />,
    <Formation formData={formData} setFormData={setFormData} />,
    <Langue formData={formData} setFormData={setFormData} />,
    currentSection === 5 ? <Logiciel formData={formData} setFormData={setFormData} /> : null,
    currentSection === 6 && formSubmitted ? <ConfirmationPage /> : null,
  ];
  
  return (
    <div className="App">
      {sections[currentSection]}

      <div className='distance'>
        <FormButtons
          currentSection={currentSection}
          totalSections={totalSections}
          formSubmitted={formSubmitted}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
