import React from 'react';
import '../CSS/Titre.css';
import '../CSS/Article.css';
import bouquet_rond1 from '../img/bouquet_rond1.jpg';
import bouquet_rond2 from '../img/bouquet_rond2.jpg';
import bouquet_rond3 from '../img/bouquet_rond3.jpg';
import bouquet_rond4 from '../img/bouquet_rond4.jpg';
import bouquet_rond5 from '../img/bouquet_rond5.jpg';
import bouquet_rond6 from '../img/bouquet_rond6.jpg';
import bouquet_rond7 from '../img/bouquet_rond7.jpg';
import bouquet_rond8 from '../img/bouquet_rond8.jpg';
import bouquet_rond9 from '../img/bouquet_rond9.jpg';
import bouquet_rond10 from '../img/bouquet_rond10.jpg';
import bouquet_rond11 from '../img/bouquet_rond11.jpg';
import bouquet_rond12 from '../img/bouquet_rond12.jpg';
import bouquet_rond13 from '../img/bouquet_rond13.jpg';
import bouquet_rond14 from '../img/bouquet_rond14.jpg';
import bouquet_rond15 from '../img/bouquet_rond15.jpg';
import bouquet_rond16 from '../img/bouquet_rond16.jpg';
import fleche from '../img/fleche.png'

export default function nos_bouquets_ronds() {
  return (
    <div>
      <h1 className='nos_bouquets_ronds'>Les bouquets ronds</h1>
      <main>
        <section className='article'>
          <img src={bouquet_rond1} width={300} height={400} alt='article1'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond2} width={300} height={400} alt='article2'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond3} width={300} height={400} alt='article3'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond4} width={300} height={400} alt='article4'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond5} width={300} height={400} alt='article5'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond6} width={300} height={400} alt='article6'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond7} width={300} height={400} alt='article7'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond8} width={300} height={400} alt='article8'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond9} width={300} height={400} alt='article9'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond10} width={300} height={400} alt='article10'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond11} width={300} height={400} alt='article11'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond12} width={300} height={400} alt='article12'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond13} width={300} height={400} alt='article13'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond14} width={300} height={400} alt='article14'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond15} width={300} height={400} alt='article15'/>
        </section>
        <section className='article'>
          <img src={bouquet_rond16} width={300} height={400} alt='article16'/>
        </section>
        <section className='article2'>
        </section>
        <section className='article2'>
        </section>
      </main>
      <div className='ancre'>
        <a href="nos_bouquets_ronds">
          <img src={fleche} width={75} height={75} alt=''/>
        </a>
      </div>
    </div>
  );
}