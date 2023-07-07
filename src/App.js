import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Accueil from './components/pages/Accueil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Deuil from './components/pages/Deuil';
import Mariage from './components/pages/Mariage';
import Voir_tout_evenement from './components/pages/Voir_tout_evenement';
import Creation_de_mini_jardin from './components/pages/Creation_de_mini_jardin';
import Voir_tout_creations_originales from './components/pages/Voir_tout_creations_originales';
import Qui_sommes_nous from './components/pages/qui_sommes_nous';
import Saint_valentin from './components/pages/Saint_valentin';
import Mai from './components/pages/Mai';
import Paques from './components/pages/Paques';
import Fete_des_meres from './components/pages/Fete_des_meres';
import Halloween from './components/pages/Halloween';
import Noel from './components/pages/Noel';
import Voir_tout_fetes from './components/pages/Voir_tout_fetes';
import les_compositions_piquees from './components/pages/Les_compositions_piquees';
import nos_bouquets_ronds from './components/pages/Nos_bouquets_ronds';
import Error from './components/pages/Error';
import condition_general from './components/pages/Condition_generale';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Accueil} />
        <Route path='/deuil' component={Deuil} />
        <Route path='/mariage' component={Mariage} />
        <Route path='/voir_tout_evenement' component={Voir_tout_evenement} />
        <Route path='/creation_de_mini_jardin' component={Creation_de_mini_jardin} />
        <Route path='/voir_tout_creations_originales' component={Voir_tout_creations_originales} />
        <Route path='/qui_sommes_nous' component={Qui_sommes_nous} />
        <Route path='/saint_valentin' exact component={Saint_valentin} />
        <Route path='/mai' exact component={Mai} />
        <Route path='/paques' exact component={Paques} />
        <Route path='/fete_des_meres' exact component={Fete_des_meres} />
        <Route path='/halloween' exact component={Halloween} />
        <Route path='/noel' exact component={Noel} />
        <Route path='/voir_tout_fetes' exact component={Voir_tout_fetes} />
        <Route path='/les_compositions_piquees' exact component={les_compositions_piquees} />
        <Route path='/nos_bouquets_ronds' exact component={nos_bouquets_ronds} />
        <Route path='/condition_general' exact component={condition_general} />
        <Route path='/*' component={Error} />
      </Switch>
    </Router>
  );
}

export default App;