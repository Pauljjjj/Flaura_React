import React from 'react';
import '../CSS/Titre.css';
import Mariage1 from '../img/mariage1.jpg';
import Mariage2 from '../img/mariage2.jpg';
import Mariage3 from '../img/mariage3.jpg';
import Mariage4 from '../img/mariage4.jpg';
import Mariage5 from '../img/mariage5.jpg';
import Mariage6 from '../img/mariage6.jpg';
import Mariage7 from '../img/mariage7.jpg';
import Mariage8 from '../img/mariage8.jpg';
import Mariage9 from '../img/mariage9.jpg';
import Mariage10 from '../img/mariage10.jpg';
import fleche from '../img/fleche.png';

export default function Mariage() {
  return (
    <div>
      <h1 className='text-title3' id='top'>Mariage</h1>
      <main>
        <section className='article'>
          <img src={Mariage1} width={300} height={400} alt='article1'/>
        </section>
        <section className='article'>
          <img src={Mariage2} width={300} height={400} alt='article2'/>
        </section>
        <section className='article'>
          <img src={Mariage3} width={300} height={400} alt='article3'/>
        </section>
        <section className='article'>
          <img src={Mariage4} width={300} height={400} alt='article4'/>
        </section>
        <section className='article'>
          <img src={Mariage5} width={300} height={400} alt='article5'/>
        </section>
        <section className='article'>
          <img src={Mariage6} width={300} height={400} alt='article6'/>
        </section>
        <section className='article'>
          <img src={Mariage7} width={300} height={400} alt='article7'/>
        </section>
        <section className='article'>
          <img src={Mariage8} width={300} height={400} alt='article8'/>
        </section>
        <section className='article'>
          <img src={Mariage9} width={300} height={400} alt='article9'/>
        </section>
        <section className='article'>
          <img src={Mariage10} width={300} height={400} alt='article10'/>
        </section>
      </main>
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