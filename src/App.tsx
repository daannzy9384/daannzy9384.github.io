import { useEffect } from 'react';
import './App.css';
import Banner from './components/banner';
import Projetos from './components/notesz';
import Footer from './components/footer';
import Pdv from './components/pdv';


function App() {
  useEffect(() => {
    
    document.body.classList.remove('is-preload');
  }, []);
  

  return (
    <div id="wrapper"
      className="divided">    
      <Banner />
      <Projetos />
      <Pdv />
      <Footer />
    </div>
  );
}

export default App;