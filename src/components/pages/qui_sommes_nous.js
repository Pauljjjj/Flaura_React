import React from 'react';
import '../CSS/Titre.css';
import '../CSS/Article.css';

export default function Qui_sommes_nous() {
  return (
        <div>
            <h1 className='text-title3'>Qui sommes-nous</h1>
            <div className='condition_generale2'>
                <h6 className='text-title'>l’utilisation du site implique <br className='text-title'/> l’acceptation pleine et entière des <br className='text-title'/><a className='aa' href="condition_general"> conditions générales </a> <br className='text-title'/> d’utilisation décrites ci-après</h6>
            </div>
        </div>
    );
}