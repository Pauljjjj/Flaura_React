import React from 'react';
import '../CSS/Titre.css';
import '../CSS/Article.css';
import Saint_valentin1 from '../img/valentin1.jpg';
import Saint_valentin2 from '../img/valentin2.jpg';
import Saint_valentin3 from '../img/valentin3.jpg';
import Saint_valentin4 from '../img/valentin4.jpg';
import Saint_valentin5 from '../img/valentin5.jpg';
import Saint_valentin6 from '../img/valentin6.jpg';
import Saint_valentin7 from '../img/valentin7.jpg';
import Saint_valentin8 from '../img/valentin8.jpg';
import Saint_valentin9 from '../img/valentin9.jpg';
import Saint_valentin10 from '../img/valentin10.jpg';
import Saint_valentin11 from '../img/valentin11.jpg';
import Saint_valentin12 from '../img/valentin12.jpg';
import Saint_valentin13 from '../img/valentin13.jpg';
import fleche from '../img/fleche.png';

export default function Saint_valentin() {
  return (
    <div>
      <h1 className='text-title3' id='top'>Saint Valentin</h1>
      <main>
        <section className='article'>
          <img src={Saint_valentin1} width={300} height={400} alt='article1'/>
        </section>
        <section className='article'>
          <img src={Saint_valentin2} width={300} height={400} alt='article2'/>
        </section>
        <section className='article'>
          <img src={Saint_valentin3} width={300} height={400} alt='article3'/>
        </section>
        <section className='article'>
          <img src={Saint_valentin4} width={300} height={400} alt='article4'/>
        </section>
        <section className='article'>
          <img src={Saint_valentin5} width={300} height={400} alt='article5'/>
        </section>
        <section className='article'>
          <img src={Saint_valentin6} width={300} height={400} alt='article6'/>
        </section>
        <section className='article'>
          <img src={Saint_valentin7} width={300} height={400} alt='article7'/>
        </section>
        <section className='article'>
          <img src={Saint_valentin8} width={300} height={400} alt='article8'/>
        </section>
        <section className='article'>
          <img src={Saint_valentin9} width={300} height={400} alt='article9'/>
        </section>
        <section className='article'>
          <img src={Saint_valentin10} width={300} height={400} alt='article10'/>
        </section>
        <section className='article'>
          <img src={Saint_valentin11} width={300} height={400} alt='article11'/>
        </section>
        <section className='article'>
          <img src={Saint_valentin12} width={300} height={400} alt='article12'/>
        </section>
        <section className='article'>
          <img src={Saint_valentin13} width={300} height={400} alt='article13'/>
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
      <div className='condition_generale2'>
        <h6 className='text-title'>l’utilisation du site implique <br className='text-title'/> l’acceptation pleine et entière des <br className='text-title'/><a className='aa' href="condition_general"> conditions générales </a> <br className='text-title'/> d’utilisation décrites ci-après</h6>
      </div>
    </div>
  );
}