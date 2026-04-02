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

        <img src="https://github.com/user-attachments/assets/6a13b78f-677b-47e0-94a1-075de2cee697" ></img>

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
        <h3 style={{ color: '#a38383', marginTop: '1rem', fontSize: '1.5rem' }}>POS-System (PDV)</h3>
        <p style={{ margin: '1.5rem 0', lineHeight: '1.8', color: '#555' }}>
                    Este projeto é um sistema de Ponto de Venda (PDV) projetado para simular o processo de finalização de compra em um supermercado ou loja de varejo.
                    O objetivo é construir um sistema funcional capaz de gerenciar produtos, processar compras e transações de forma simples e eficiente.
                    O projeto está sendo desenvolvido como uma experiência de aprendizado colaborativo, com foco em desenvolvimento full-stack e arquitetura de software aplicada ao mundo real.
        </p>

        <a
          href="https://github.com/daannzy9384/POS-System/"
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
          VISITAR PDV
        </a>
      </div>
    </section>
  );
};
export default Projetos;

