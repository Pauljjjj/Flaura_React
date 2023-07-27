import React from 'react';
import '../CSS/Titre.css';
import '../CSS/Article.css';
import '../CSS/Qui_sommes_nous.css';
import '../CSS/Footer.css';
import localisation from '../img/emplacement.png';
import phone from '../img/telephone.png';
import horaire from '../img/horaire.png';
import facebook from '../img/logo-facebook.png';
import instagram from '../img/logo-instagram.png';
import tiktok from '../img/logo-tiktok.png';
import fleche from '../img/fleche.png';
import map from '../img/map.png';

export default function Qui_sommes_nous() {
    return (
        <div>
            <div className='body_qui_sommes_nous'>
                <h1 className='text-title3' id='top'>Qui sommes-nous</h1>
                <div className='condition_generale2'>
                    <div className='ancre'>
                        <a href="#top">
                            <img src={fleche} width={75} height={75} alt=''/>
                        </a>
                    </div>
                    <h6 className='text-title-qui'>l’utilisation du site implique <br className='text-title'/> l’acceptation pleine et entière des <br className='text-title'/><a className='aa' href="condition_general"> conditions générales </a> <br className='text-title'/> d’utilisation décrites ci-après</h6>
                </div>
            </div>
            <footer className='footer_qui_sommes_nous'>
                <h2 className='text-title2'>suivez-nous sur les réseaux sociaux</h2>
                <div className='reseau'>
                    <div>
                        <a href='https://www.facebook.com/profile.php?id=100078716487156'>
                            <img className='img-reseau' src={facebook} width={30} height={30} alt='2'/>
                        </a>
                    </div>
                    <div className='padding'>
                        <div>
                            <a href='https://www.instagram.com/flauraflowershop/?fbclid=IwAR3vghKBHYqw1ugv1KMiuFl3TcIC3Oi6aT3i-QVhNV5iXZf7AAKe0Y9tkRI'>
                                <img className='img-reseau' src={instagram} width={30} height={30} alt='3'/>
                            </a>
                        </div>
                    </div>          
                    <div>
                        <a href='https://www.tiktok.com/@flaura_flaura'>
                            <img className='img-reseau' src={tiktok} width={30} height={30} alt='4'/>
                        </a>
                    </div>
                </div>
                <div className='divider'>
                </div>
                <div className='footer_down'>
                    <ul className="vertical-line">
                        <div className='centre'>
                            <img className='text-title2' src={localisation} width={50} height={50} alt='5'/>
                            <br className='text-title2'/>
                            <p className='text-title2'>17 cours Victor Leydet</p>
                            <p className='text-title2'>13790 Fuveau</p>
                        </div>
                    </ul>
                    <ul className="vertical-line2">
                        <div className='centre'>
                            <img className='text-title2' src={phone} width={50} height={50} alt='6'/>
                            <br className='text-title2'/>
                            <p className='text-title2'>04 42 58 74 27</p>
                        </div>
                    </ul>
                    <ul className="vertical-line3">
                        <div className='centre'>
                            <img className='text-title2' src={horaire} width={50} height={50} alt='6'/>
                        </div>
                        <p className='text-title2'>❌ Lundi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fermé&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fermé</p>
                        <p className='text-title2'>✔️ Mardi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00/12:00&nbsp;&nbsp;&nbsp;&nbsp;15:30/19:30</p>
                        <p className='text-title2'>✔️ Mercredi &ensp; 09:00/12:00&nbsp;&nbsp;&nbsp;&nbsp;15:30/19:30</p>
                        <p className='text-title2'>✔️ Jeudi&thinsp;&nbsp;&ensp;&nbsp;&nbsp;&ensp;&ensp;09:00/12:00&nbsp;&nbsp;&nbsp;&nbsp;15:30/19:30</p>
                        <p className='text-title2'>✔️ Vendredi&nbsp;&ensp;&ensp;09:00/12:00&nbsp;&nbsp;&nbsp;&nbsp;15:30/19:30</p>
                        <p className='text-title2'>✔️ Samedi&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;&thinsp;09:00/12:00&nbsp;&nbsp;&nbsp;&nbsp;15:30/19:30</p>
                        <p className='text-title2'>✔️ Dimanche&ensp;&ensp;&thinsp;09:00/12:00&nbsp;&nbsp;&nbsp;&nbsp;fermé</p>
                    </ul>
                </div>
                <div className='divider2'></div>
                <h3 className='coordonnee'> Coordonnée </h3>
                <div className='center'>
                    <div className='map'>
                        <img src={map} width={400} height={300} alt="" className='map'/>
                    </div>
                </div>
                <div className='divider3'></div>
                <h5 className="copyright">&copy; 2023 F'Laura, Tous droits réservés.</h5>
            </footer>
        </div>
    );
}