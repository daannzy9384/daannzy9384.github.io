import Banner from './components/banner';
import Projetos from './components/projetos';
import Footer from './components/footer';

function App() {
  return (
    <div id="wrapper"
      className="divided">
      {/* Aqui o React troca o logo do Vite pelos SEUS componentes */}
      <Banner />
      <Projetos />
      <Footer />
    </div>
  );
}

export default App;