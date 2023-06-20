import React from 'react';
import '../CSS/Titre.css';
import '../CSS/Article.css';
import '../CSS/Ancre_personnaliser.css';

export default function Voir_tout_evenement() {
  return (
    <div>
      <h1 className='text-title3' id='top'>tout les événements</h1>
        <div className="ancre_personnalise_centre">
          <a className="ancre_personnalise" href="#mariage_ancre">
            Mariage
          </a>
          <a className="ancre_personnalise" href="#deuil_ancre">
            Deuil
          </a>
          <a className="ancre_personnalise" href="#naissance_ancre">
            Naissance
          </a>
        </div>
    </div>
  );
}