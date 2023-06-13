import React from 'react';
import '../CSS/Titre.css';
import '../CSS/Article.css';
import noel1 from '../img/noel1.jpg';
import noel2 from '../img/noel2.jpg';
import noel3 from '../img/noel3.jpg';
import noel4 from '../img/noel4.jpg';
import noel5 from '../img/noel5.jpg';
import noel6 from '../img/noel6.jpg';
import noel7 from '../img/noel7.jpg';
import noel8 from '../img/noel8.jpg';
import noel9 from '../img/noel9.jpg';
import noel10 from '../img/noel10.jpg';
import noel11 from '../img/noel11.jpg';
import noel12 from '../img/noel12.jpg';
import noel13 from '../img/noel13.jpg';
import noel14 from '../img/noel14.jpg';
import noel15 from '../img/noel15.jpg';
import noel16 from '../img/noel16.jpg';
import noel17 from '../img/noel17.jpg';
import noel18 from '../img/noel18.jpg';
import noel19 from '../img/noel19.jpg';
import fleche from '../img/fleche.png';

export default function Noel() {
  return (
    <div>
      <h1 className='noel'>Noël</h1>
      <main>
        <section className='article'>
          <img src={noel1} width={300} height={400} alt='article1'/>
        </section>   
        <section className='article'>
          <img src={noel2} width={300} height={400} alt='article2'/>
        </section>
        <section className='article'>
          <img src={noel3} width={300} height={400} alt='article3'/>
        </section>
        <section className='article'>
          <img src={noel4} width={300} height={400} alt='article4'/>
        </section>
        <section className='article'>
          <img src={noel5} width={300} height={400} alt='article5'/>
        </section>
        <section className='article'>
          <img src={noel6} width={300} height={400} alt='article6'/>
        </section>
        <section className='article'>
          <img src={noel7} width={300} height={400} alt='article7'/>
        </section>
        <section className='article'>
          <img src={noel8} width={300} height={400} alt='article8'/>
        </section>
        <section className='article'>
          <img src={noel9} width={300} height={400} alt='article9'/>
        </section>
        <section className='article'>
          <img src={noel10} width={300} height={400} alt='article10'/>
        </section>
        <section className='article'>
          <img src={noel11} width={300} height={400} alt='article11'/>
        </section>
        <section className='article'>
          <img src={noel12} width={300} height={400} alt='article12'/>
        </section>
        <section className='article'>
          <img src={noel13} width={300} height={400} alt='article13'/>
        </section>
        <section className='article'>
          <img src={noel14} width={300} height={400} alt='article14'/>
        </section>
        <section className='article'>
          <img src={noel15} width={300} height={400} alt='article15'/>
        </section>
        <section className='article'>
          <img src={noel16} width={300} height={400} alt='article16'/>
        </section>
        <section className='article'>
          <img src={noel17} width={300} height={400} alt='article17'/>
        </section>
        <section className='article'>
          <img src={noel18} width={300} height={400} alt='article18'/>
        </section>
        <section className='article'>
          <img src={noel19} width={300} height={400} alt='article19'/>
        </section>
      </main>
      <div className='ancre'>
        <a href="noel">
          <img src={fleche} width={75} height={75} alt=''/>
        </a>
      </div>
    </div>
  );
}