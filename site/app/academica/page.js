export default function Academica() {
  return (
    <>
      <h1 className="page-title">Experiência Acadêmica</h1>
      <p className="page-subtitle">Minha formação até aqui.</p>

      <div className="timeline">
        <div className="timeline-item card">
          <span className="period">2025.2 – atual</span>
          <h3>Sistemas para Internet · 3º período</h3>
          <p>Universidade Católica de Pernambuco (UNICAP)</p>
          <ul>
            <li>Disciplinas de programação, banco de dados e desenvolvimento web.</li>
            <li>Desenvolvimento front end com React e Next.js.</li>
            <li>[adicione outras matérias ou projetos de que você gostou]</li>
          </ul>
        </div>

        <div className="timeline-item card">
          <span className="period">2025.2 – atual</span>
          <h3>Embarque Digital</h3>
          <p>Porto Digital · em parceria com a UNICAP</p>
          <ul>
            <li>Programa de formação em tecnologia do Porto Digital, em parceria com a UNICAP, que aproxima estudantes do mercado por meio de projetos com empresas parceiras.</li>
          </ul>
        </div>
      </div>
    </>
  );
}