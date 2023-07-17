import React from 'react';
import '../CSS/Titre.css';
import fleche from '../img/fleche.png';

export default function Fete_des_meres() {
  return (
    <div>
      <h1 className='text-title3' id='top'> Fêtes des mères</h1>
      <div className='condition_generale2'>
      <div className='ancre'>
        <a href="#top">
          <img src={fleche} width={75} height={75} alt=''/>
        </a>
      </div>
        <h6 className='text-title'>l’utilisation du site implique <br className='text-title'/> l’acceptation pleine et entière des <br className='text-title'/><a className='aa' href="condition_general"> conditions générales </a> <br className='text-title'/> d’utilisation décrites ci-après</h6>
      </div>
    </div>
  );
}