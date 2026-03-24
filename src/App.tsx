import Banner from './components/banner';
import Projetos from './components/projetos';

function App() {
  return (
    <div id="wrapper"
      className="divided">
      {/* Aqui o React troca o logo do Vite pelos SEUS componentes */}
      <Banner />
      <Projetos />
    </div>
  );
}

export default App;