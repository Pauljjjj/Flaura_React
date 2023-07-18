import React from 'react';
import '../CSS/Titre.css';
import fleche from '../img/fleche.png';
import jardin1 from '../img/jardin1.jpg';
import jardin2 from '../img/jardin2.jpg';
import jardin3 from '../img/jardin3.jpg';

export default function Creation_de_mini_jardin () {
    return (
        <div>
            <h1 className='text-title3' id='top'>mini jardin</h1>   
            <main>
                <section className='article'>
                    <img src={jardin1} width={300} height={400} alt='article1'/>
                </section>
                <section className='article'>
                    <img src={jardin2} width={300} height={400} alt='article2'/>
                </section>
                <section className='article'>
                    <img src={jardin3} width={300} height={400} alt='article3'/>
                </section>
            </main>
            <div className='condition_generale'>
            <div className='ancre'>
                <a href="#top">
                    <img src={fleche} width={75} height={75} alt=''/>
                </a>
            </div>
                <h6 className='text-title'>l’utilisation du site implique <br className='text-title'/> l’acceptation pleine et entière des <br className='text-title'/><a className='aa' href="condition_general"> conditions générales </a> <br className='text-title'/> d’utilisation décrites ci-après</h6>
            </div>
        </div>
    );
};
