import React from 'react';
import '../CSS/Titre.css';
import '../CSS/Article.css';

export default function Voir_tout_creations_originales() {
  return (
    <div>
      <h1 className='text-title3'>toute les créations originales</h1>
      <div className='condition_generale'>
        <h6 className='text-title'>l’utilisation du site implique <br className='text-title'/> l’acceptation pleine et entière des <br className='text-title'/><a className='aa' href="condition_general"> conditions générales </a> <br className='text-title'/> d’utilisation décrites ci-après</h6>
      </div>
    </div>
  );
}