import React from 'react';

const NomPosteSection = ({ formData, setFormData }) => {
  const handlePosteChange = (index, value) => {
    setFormData({
      ...formData,
      postes: formData.postes.map((poste, i) => (i === index ? value : poste)),
    });
  };

  return (
    <div>
      <h2>Postes recherchés</h2>
      {formData.postes.map((poste, index) => (
        <div key={index}>
          <label htmlFor={`poste${index + 1}`}>Poste {index + 1} :</label>
          <input
            type="text"
            id={`poste${index + 1}`}
            value={poste}
            onChange={(e) => handlePosteChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default NomPosteSection;
