import React from 'react';
import './Categories.css';

// Luodaan ja exportataan Categories-komponentti, joka mahdollistaa kategorioiden näyttämisen ja hallinnan
export default function Categories({ categories, selectedCategoryIndex, setSelectedCategoryIndex }) {
  return (
    <div>
      {/* Käydään läpi kategoriat ja luodaan niille painikkeet */}
      {categories.map((category, index) => {
        // Tarkistetaan, onko kategoriassa havaintoja, jotka eivät ole järjestyksessä eivätkä niillä ole poikkeamia
        const observationStatus = category.observations.some(observation => observation.inOrder === 0 && observation.exceptions.length === 0) ? (
          // Jos kategorian havainnoilla on poikkeamia, näytetään tähti-ikoni
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
          </svg>
        ) : (
          // Jos kaikilla havainnoilla on järjestys ja/tai poikkeamia, näytetään täytetty tähti-ikoni
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
          </svg>
        );

        return (
          // Painike kategorian valitsemiseksi
          <button
            // Merkitään valittu kategoria eri luokalla
            className={selectedCategoryIndex === index ? "selectedcategory" : ""}
            id="buttonsforcategory"
            key={index}
            onClick={() => setSelectedCategoryIndex(index)} // Kutsutaan setSelectedCategoryIndex-funktiota kategoriaa klikattaessa
          >
            {category.name} {observationStatus} {/* Näytetään kategorian nimi ja havaintojen tila-ikoni */}
          </button>
        );
      })}
    </div>
  );
}
