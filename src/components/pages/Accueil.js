import React from 'react';
import '../../App.css';
import '../CSS/Accueil.css';
import facebook from '../img/logo-facebook.png';
import instagram from '../img/logo-instagram.png';
import tiktok from '../img/logo-tiktok.png';
import flaura from '../img/bg2.png';
import localisation from '../img/emplacement.png';
import phone from '../img/telephone.png';
import horaire from '../img/horaire.png';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from '../img/accueil.jpg'
import img2 from '../img/accueil2.jpg'
import img3 from '../img/accueil3.jpg'
import img4 from '../img/accueil4.jpg'
import img5 from '../img/accueil5.jpg'
import img6 from '../img/accueil6.jpg'
import img7 from '../img/accueil7.jpg'
import img8 from '../img/accueil8.jpg'
import img9 from '../img/accueil9.jpg'
import img10 from '../img/accueil10.jpg'

export default function Accueil() {
  return (
    <div>
      <body>
        <div className='Flaura'>
          <img src={flaura} width={757} height={757} alt='1'/>
        </div>
        <div className='centre'>
          <div className='carousel'>
            <AliceCarousel autoPlay autoPlayInterval="8000" disableDotsControls disableButtonsControls infinite="true">
              <img src={img1} width={500} height={600} className="slider" alt="" />
              <img src={img2} width={500} height={600} className="slider" alt="" />
              <img src={img3} width={500} height={600} className="slider" alt="" />
              <img src={img4} width={500} height={600} className="slider" alt="" />
              <img src={img5} width={500} height={600} className="slider" alt="" />
              <img src={img6} width={500} height={600} className="slider" alt="" />
              <img src={img7} width={500} height={600} className="slider" alt="" />
              <img src={img8} width={500} height={600} className="slider" alt="" />
              <img src={img9} width={500} height={600} className="slider" alt="" />
              <img src={img10} width={500} height={600} className="slider" alt="" />
            </AliceCarousel>
          </div>  
        </div>
        <div className='condition_generale'>
          <h6>l’utilisation du site implique <br/> l’acceptation pleine et entière des <br/><a className='aa' href="condition_general.html"> conditions générales </a> <br/> d’utilisation décrites ci-après</h6>
        </div>
      </body>
      <footer className='footer'>
        <h2>suivez-nous sur les réseaux sociaux</h2>
        <div className='reseau'>
          <div>
            <a href='https://www.facebook.com/profile.php?id=100078716487156'>
              <img className='img-reseau' src={facebook} width={30} height={30} alt='2'/>
            </a>
          </div>
          <div className='padding'>
            <div >
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
        <div className='divider'></div>
        <div className='footer_down'>
          <ul className="vertical-line">
            <div className='centre'>
            <img src={localisation} width={50} height={50} alt='5'/>
              <br/>
                <p>17 cours Victor Leydet</p>
                <p>13790 Fuveau</p>
            </div>
          </ul>
          <ul className="vertical-line2">
            <div className='centre'>
              <img src={phone} width={50} height={50} alt='6'/>
              <br/>
              <p>04 42 58 74 27</p>
            </div>
          </ul>
          <ul className="vertical-line3">
            <div className='centre'>
              <img src={horaire} width={50} height={50} alt='6'/>
            </div>
            <p>❌ Lundi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fermé&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fermé</p>
            <p>✔️ Mardi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00/12:00&nbsp;&nbsp;&nbsp;&nbsp;15:30/19:30</p>
            <p>✔️ Mercredi&nbsp;&nbsp;&nbsp;&nbsp;09:00/12:00&nbsp;&nbsp;&nbsp;&nbsp;15:30/19:30</p>
            <p>✔️ Jeudi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00/12:00&nbsp;&nbsp;&nbsp;&nbsp;15:30/19:30</p>
            <p>✔️ Vendredi&nbsp;&nbsp;&nbsp;&nbsp;09:00/12:00&nbsp;&nbsp;&nbsp;&nbsp;15:30/19:30</p>
            <p>✔️ Samedi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00/12:00&nbsp;&nbsp;&nbsp;&nbsp;15:30/19:30</p>
            <p>✔️ Dimanche&nbsp;&nbsp;09:00/12:00&nbsp;&nbsp;&nbsp;&nbsp;fermé</p>
          </ul>
        </div>
        <div className='divider2'></div>
        <h5 className="copyright">&copy; 2023 F'Laura, Tous droits réservés.</h5>
      </footer>
    </div>
  );
}