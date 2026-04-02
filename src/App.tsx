import Banner from './components/banner';
import Projetos from './components/notesz';
import Footer from './components/footer';
import Pdv from './components/pdv';

function App() {
  return (
    <div id="wrapper"
      className="divided">
      {/* Aqui o React troca o logo do Vite pelos SEUS componentes */}
      <Banner />
      <Projetos />
      <Pdv />
      <Footer />
    </div>
  );
}

export default App;