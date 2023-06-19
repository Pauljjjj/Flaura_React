import React from 'react';
import '../CSS/Titre.css';
import '../CSS/Article.css';
import paques1 from '../img/paques1.jpg';
import paques2 from '../img/paques2.jpg';
import paques3 from '../img/paques3.jpg';
import paques4 from '../img/paques4.jpg';
import paques5 from '../img/paques5.jpg';
import paques6 from '../img/paques6.jpg';
import paques7 from '../img/paques7.jpg';
import fleche from '../img/fleche.png';

export default function Paques() {
  return (
    <div>
      <h1 className="text-title" id='top'>Pâques</h1>
      <main>
        <section className='article'>
          <img src={paques1} width={300} height={400} alt='article1'/>
        </section>
        <section className='article'>
          <img src={paques2} width={300} height={400} alt='article2'/>
        </section>
        <section className='article'>
          <img src={paques3} width={300} height={400} alt='article3'/>
        </section>
        <section className='article'>
          <img src={paques4} width={300} height={400} alt='article4'/>
        </section>
        <section className='article'>
          <img src={paques5} width={300} height={400} alt='article5'/>
        </section>
        <section className='article'>
          <img src={paques6} width={300} height={400} alt='article6'/>
        </section>
        <section className='article'>
          <img src={paques7} width={300} height={400} alt='article7'/>
        </section>
        <section className='article2'>
        </section>
        <section className='article2'>
        </section>
      </main>
      <div className='ancre'>
        <a href="#top">
          <img src={fleche} width={75} height={75} alt=''/>
        </a>
      </div>
    </div>
  );
}