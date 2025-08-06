import { Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/navbar';
import Hero from './components/pages/hero';

import Exploreroom from './components/pages/rooms/exploreroom';
import { HotelMenu } from './components/shared/menu';
import Contact from './components/pages/contact/contact';
import Rooms from './components/pages/rooms/rooms';
import Dinning from './components/pages/dinning/dinning';
import Wellness from './components/pages/wellness/wellness';
import KonsultatsiyaForm from './components/pages/contact/bronRoom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
         <Route path="/exploreroom" element= {<Exploreroom/>}/>
         <Route path='/menu' element={<HotelMenu/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/bron' element={<KonsultatsiyaForm/>}/>
         <Route path='/rooms' element={<Rooms/>}/>
         <Route path='/dining' element={<Dinning/>}/>
         <Route path='/wellness' element={<Wellness/>}/>
      </Routes>
    </div>
  );
};

export default App;
