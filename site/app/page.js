import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div>
        <p className="tag-hello">Olá, eu sou</p>
        <h1>
          Luiz Henrique <span className="gradient">Burgos de Souza</span>
        </h1>
        <p>
          Estudante do 3º período de Sistemas para Internet na Universidade Católica de
          Pernambuco, participante do Embarque Digital e da Residência Tecnológica do
          Porto Digital.
        </p>
        <div className="btn-row">
          <Link href="/projetos" className="btn primary">Ver projetos</Link>
          <a href="https://github.com/luizburgos" target="_blank" rel="noreferrer" className="btn">
            GitHub
          </a>
        </div>
      </div>
      <div className="hero-avatar">
        <img src="https://github.com/luizburgos.png" alt="Foto de Luiz Burgos" />
      </div>
    </section>
  );
}