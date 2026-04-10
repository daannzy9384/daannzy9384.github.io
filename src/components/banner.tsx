import minhaFoto from '../assets/myself.jpg';

const Banner = () => {
  return (
    <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
      <div className="content">
        <h1>Blog do Dan</h1>
        <p className="major">
          Compartilhando minha jornada pelo mundo.
        </p>
        <p>
          Olá! Meu nome é Daniel Oliveira Santos. Atualmente estou aprendendo novas 
          línguas através de cursos e certificações ^^.
        </p>
        <ul className="actions stacked">
          <li>
            <a href="#first" className="button big wide smooth-scroll-middle">
              ainda nao tem nada aqui ^^
            </a>
          </li>
        </ul>
      </div>
      <div className="image">
        <img src={minhaFoto} alt="Daniel Oliveira" />
      </div>
    </section>
  );
};

export default Banner;