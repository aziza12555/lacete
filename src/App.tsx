import { Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/navbar';
import Hero from './components/pages/hero';

import Exploreroom from './components/pages/exploreroom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
         <Route path="/exploreroom" element= {<Exploreroom/>}/>
      </Routes>
    </div>
  );
};

export default App;
