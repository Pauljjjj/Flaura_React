import React from 'react';
import '../CSS/Titre.css';
import '../CSS/Article.css';
import Mai1 from '../img/muguet1.jpg';
import Mai2 from '../img/muguet2.jpg';
import Mai3 from '../img/muguet3.jpg';
import Mai4 from '../img/muguet4.jpg';
import Mai5 from '../img/muguet5.jpg';
import Mai6 from '../img/muguet6.jpg';
import Mai7 from '../img/muguet7.jpg';
import Mai8 from '../img/muguet8.jpg';
import Mai9 from '../img/muguet9.jpg';
import Mai10 from '../img/muguet10.jpg';
import Mai11 from '../img/muguet11.jpg';
import Mai12 from '../img/muguet12.jpg';
import Mai13 from '../img/muguet13.jpg';
import Mai14 from '../img/muguet14.jpg';
import Mai15 from '../img/muguet15.jpg';
import Mai16 from '../img/muguet16.jpg';
import Mai17 from '../img/muguet17.jpg';
import fleche from '../img/fleche.png';

export default function Mai() {
  return (
    <div>
      <h1 className='mai'>1er Mai</h1>
      <main>
        <section className='article'>
          <img src={Mai1} width={300} height={400} alt='article1'/>
        </section>
        <section className='article'>
          <img src={Mai2} width={300} height={400} alt='article2'/>
        </section>
        <section className='article'>
          <img src={Mai3} width={300} height={400} alt='article3'/>
        </section>
        <section className='article'>
          <img src={Mai4} width={300} height={400} alt='article4'/>
        </section>
        <section className='article'>
          <img src={Mai5} width={300} height={400} alt='article5'/>
        </section>
        <section className='article'>
          <img src={Mai6} width={300} height={400} alt='article6'/>
        </section>
        <section className='article'>
          <img src={Mai7} width={300} height={400} alt='article7'/>
        </section>
        <section className='article'>
          <img src={Mai8} width={300} height={400} alt='article8'/>
        </section>
        <section className='article'>
          <img src={Mai9} width={300} height={400} alt='article9'/>
        </section>
        <section className='article'>
          <img src={Mai10} width={300} height={400} alt='article10'/>
        </section>
        <section className='article'>
          <img src={Mai11} width={300} height={400} alt='article11'/>
        </section>
        <section className='article'>
          <img src={Mai12} width={300} height={400} alt='article12'/>
        </section>
        <section className='article'>
          <img src={Mai13} width={300} height={400} alt='article13'/>
        </section>
        <section className='article'>
          <img src={Mai14} width={300} height={400} alt='article14'/>
        </section>
        <section className='article'>
          <img src={Mai15} width={300} height={400} alt='article15'/>
        </section>
        <section className='article'>
          <img src={Mai16} width={300} height={400} alt='article16'/>
        </section>
        <section className='article'>
          <img src={Mai17} width={300} height={400} alt='article17'/>
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