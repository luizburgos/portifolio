export default function Profissional() {
  return (
    <>
      <h1 className="page-title">Experiência Profissional</h1>
      <p className="page-subtitle">Onde venho aplicando o que aprendo.</p>

      <div className="timeline">
        <div className="timeline-item card">
         <span className="period">2025.2 | 2026.1 | 2026.2</span>
          <h3>Residência Tecnológica</h3>
          <p>
           Embarque Digital · Porto Digital, Recife, PE. A residência me coloca para trabalhar
           em projetos reais com empresas e instituições parceiras, com contato direto com o
           mercado de tecnologia.
          </p>
         <ul>
          <li>
          <strong>1º período:</strong> foco na dinâmica de criação de projetos em equipe.
          Desenvolvi, junto com meu time, o protótipo de um aplicativo gamificado que
          incentiva a leitura entre crianças.
          </li>
          <li>
          <strong>2º período:</strong> projeto de robótica em parceria com a Prefeitura do
          Recife, voltado à educação. Criei um console interativo que une uma aplicação web
          a sistemas embarcados, para atividades avaliativas imersivas de matemática nos
          anos iniciais. Ele também serve de ferramenta para o professor identificar a
          dificuldade de cada aluno em cada assunto.
          </li>
          <li>
          <strong>3º período (atual):</strong> trabalho com o Instituto do Cabo (ISAC) em
          uma plataforma que conecta comerciantes locais do Cabo de Santo Agostinho aos
          clientes, substituindo a comunicação feita por grupos de WhatsApp, que era
          desorganizada.
          </li>
         </ul>
         <div className="chips">
         <span className="chip">Trabalho em equipe</span>
         <span className="chip">Web</span>
         <span className="chip">Sistemas embarcados</span>
         <span className="chip">Prototipação</span>
        </div>
      </div>
     </div>
    </>
  );
}
