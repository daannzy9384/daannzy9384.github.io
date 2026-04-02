export const Projetos = () => {
  return (
    <section style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      flexWrap: 'wrap-reverse', 
      backgroundColor: '#f4f4f4' 
    }}>
      {/* Lado Esquerdo - Espaço para a imagem do projeto */}
      <div style={{ 
        flex: 1, 
        minWidth: '320px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#ddd',
        fontSize: '5rem'
      }}>
        <img src="/src/assets/notesz.png"></img>
      
      </div>

      {/* Lado Direito - Texto do Projeto */}
      <div style={{ 
        flex: 1, 
        padding: '10% 5%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        minWidth: '320px'
      }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '300', color: '#333' }}>Meus Projetos</h2>
        <h3 style={{ color: '#a38383', marginTop: '1rem', fontSize: '1.5rem' }}>Notes-Z</h3>
        <p style={{ margin: '1.5rem 0', lineHeight: '1.8', color: '#555' }}>
          Um dos meus projetos principais. O Notes-Z é uma ferramenta focada em organização e anotações, 
          ajudando usuários a manterem suas ideias em ordem de forma simples e eficiente.
        </p>

        <a
          href="https://daannzy9384.github.io/Notes-Z/"
          target="_blank"
          rel="noopener noreferrer"
            
          style={{
          display:'inline-block',
          textDecoration: 'none',
          color: '#333',
          width: 'fit-content',
          padding: '12px 35px',
          borderRadius: '30px',
          border: '1px solid #333',
          background: 'none',
          cursor: 'pointer',
          letterSpacing: '1px',
          fontWeight: 'bold'
          }}>
          VISITAR NOTES-Z
        </a>
      </div>
    </section>
  );
};
export default Projetos;

