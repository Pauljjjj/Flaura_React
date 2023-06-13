import React from 'react';
import '../CSS/Titre.css';
import '../CSS/Article.css';
import Halloween1 from '../img/halloween1.jpg';
import Halloween2 from '../img/halloween2.jpg';
import Halloween3 from '../img/halloween3.jpg';
import Halloween4 from '../img/halloween4.jpg';
import Halloween5 from '../img/halloween5.jpg';
import fleche from '../img/fleche.png';

export default function Halloween() {
  return (
    <div>
      <h1 className='halloween'>Halloween</h1>
      <main>
        <section className='article'>
          <img src={Halloween1} width={300} height={400} alt='article1'/>
        </section>
        <section className='article'>
          <img src={Halloween2} width={300} height={400} alt='article2'/>
        </section>
        <section className='article'>
          <img src={Halloween3} width={300} height={400} alt='article3'/>
        </section>
        <section className='article'>
          <img src={Halloween4} width={300} height={400} alt='article4'/>
        </section>
        <section className='article'>
          <img src={Halloween5} width={300} height={400} alt='article5'/>
        </section>
        <section className='article2'>
        </section>
      </main>
      <div className='ancre'>
        <a href="mai">
          <img src={fleche} width={75} height={75} alt=''/>
        </a>
      </div>
    </div>
  );
}