import React from 'react';
import '../CSS/Titre.css';
import '../CSS/Article.css';
import '../CSS/Ancre_personnaliser.css';
import Evenement1 from '../img/mariage1.jpg';
import Evenement2 from '../img/mariage2.jpg';
import Evenement3 from '../img/mariage3.jpg';
import Evenement4 from '../img/mariage4.jpg';
import Evenement5 from '../img/mariage5.jpg';
import Evenement6 from '../img/mariage6.jpg';
import Evenement7 from '../img/mariage7.jpg';
import Evenement8 from '../img/mariage8.jpg';
import Evenement9 from '../img/mariage9.jpg';
import Evenement10 from '../img/mariage10.jpg';
import fleche from '../img/fleche.png';

export default function Voir_tout_evenement() {
  return (
    <div>
      <h1 className='text-title3' id='top'>tout les événements</h1>
        <div className="ancre_personnalise_centre">
          <a className="ancre_personnalise" href="#mariage_ancre">
            Mariage
          </a>
          <a className="ancre_personnalise" href="#deuil_ancre">
            Deuil
          </a>
          <a className="ancre_personnalise" href="#naissance_ancre">
            Naissance
          </a>
        </div>
      <main>
        <section className='article'>
          <img src={Evenement1} width={300} height={400} alt='article1' id="mariage_ancre"/>
        </section>
        <section className='article'>
          <img src={Evenement2} width={300} height={400} alt='article2'/>
        </section>
        <section className='article'>
          <img src={Evenement3} width={300} height={400} alt='article3'/>
        </section>
        <section className='article'>
          <img src={Evenement4} width={300} height={400} alt='article4'/>
        </section>
        <section className='article'>
          <img src={Evenement5} width={300} height={400} alt='article5'/>
        </section>
        <section className='article'>
          <img src={Evenement6} width={300} height={400} alt='article6'/>
        </section>
        <section className='article'>
          <img src={Evenement7} width={300} height={400} alt='article7'/>
        </section>
        <section className='article'>
          <img src={Evenement8} width={300} height={400} alt='article8'/>
        </section>
        <section className='article'>
          <img src={Evenement9} width={300} height={400} alt='article9'/>
        </section>
        <section className='article'>
          <img src={Evenement10} width={300} height={400} alt='article10'/>
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