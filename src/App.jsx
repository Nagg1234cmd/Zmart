import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Correct import for Bootstrap CSS
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './stores/pages/LandingPage';
import Kitchen from './stores/components/Kitchen';
import Speakers from './stores/components/Speakers';
import MobilePage from './stores/pages/MobilePage';
import ComputerPage from './stores/pages/ComputerPage';
import SignupPage from './stores/pages/SignupPage';
import LoginPage from './stores/pages/LoginPage';
import FridgesPage from './stores/pages/FridgesPage';
import WatchesPage from './stores/pages/WatchesPage';
import MensPage from './stores/pages/MensPage';
import WomensPage from './stores/pages/WomensPage';
import AcPage from './stores/pages/AcPage';
import WashingPage from './stores/pages/WashingPage';
import SpeakersPage from './stores/pages/SpeakersPage';
import TvPage from './stores/pages/TvPage';
import KitchenPage from './stores/pages/KitchenPage';
import MobileSingle from './singles/MobileSingle';
import AcSingle from './singles/AcSingle';
import ComputerSingle from './singles/ComputerSingle';
import TvSingle from './singles/TvSingle';
import KitchenSingle from './singles/KitchenSingle';
import MensSingle from './singles/MensSingle';
import WashingSingle from './singles/WashingSingle';
import Signup from './Signup';
import Loginn from './Loginn';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/landingpage' element={<LandingPage />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/kitchen' element={<Kitchen />} />
        <Route path='/mobilepage' element={<MobilePage />} />
        <Route path='/computerspage' element={<ComputerPage />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/fridgespage' element={<FridgesPage />} />
        <Route path='/watchespage' element={<WatchesPage />} />
        <Route path='/menspage' element={<MensPage />} />
        <Route path='/womenspage' element={<WomensPage />} />
        <Route path='/acpage' element={<AcPage />} />
        <Route path='/washingpage' element={<WashingPage />} />
        <Route path='/speakerpage' element={<SpeakersPage />} />
        <Route path='/tvpage' element={<TvPage />} />
        <Route path='/kitchenpage' element={<KitchenPage />} />
        <Route path='/mobiles/:id' element={<MobileSingle />} />
        <Route path='/ac/:id' element={<AcSingle />} />
        <Route path='/computer/:id' element={<ComputerSingle />} />
        <Route path='/tv/:id' element={<TvSingle />} />
        <Route path='/kitchen/:id' element={<KitchenSingle />} />
        <Route path='/men/:id' element={<MensSingle />} />
        <Route path='/washing/:id' element={<WashingSingle />} />
        <Route path='/' element={<SignupPage />} />
        <Route path='/login' element={<Loginn />} />
      </Routes>
    </div>
  );
};

export default App;
