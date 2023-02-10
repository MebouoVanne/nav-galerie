import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Accueil from './Pages/Accueil/Accueil';
import Apropos from './Pages/Apropos/Apropos';
import Contact from './Pages/Contact/Contact';
import Portofolio from './Pages/Portofolio/Portofolio';
import Services from './Pages/Services/Services';
import Erreur from './Pages/Erreur/Erreur';
function App() {
  return (
   <BrowserRouter>
       <Routes>
         <Route path='/' element={<Accueil/>}/>
         <Route path='/Portofolio' element={<Portofolio/>}/>
         <Route path='/Services' element={<Services/>}/>
         <Route path='/Apropos' element={<Apropos/>}/>
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='*' element={<Erreur/>}/>
       </Routes>

   </BrowserRouter>
  );
}

export default App;
