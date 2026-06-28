import minhaFoto from '../assets/myself.jpg';

const Banner = () => {
  return (
    <section className="banner style1 orient-left content-align-left image-position-right fullscreen">
      <div className="content reveal delay-1 onload-content-fade-right"> 
        <h1>Blog do Dan</h1>
        <p className="major">
          Compartilhando minha jornada pelo mundo.
        </p>
        <p>
           Aobah me chamo Daniel. Atualmente estou aprendendo programação sem cursos mas estou investindo bastante em cursos e certificações.
        </p>
        <ul className="actions stacked">
          <li>
            <a href="#first" className="button big wide smooth-scroll-middle">
              ainda nao tem nada aqui ^^
            </a>
          </li>
        </ul>
      </div>
      <div className="image reveal delay-2 onload-image-fade-in">
        <img src={minhaFoto} alt="Daniel Oliveira" />
      </div>
    </section>
  );
};

export default Banner;