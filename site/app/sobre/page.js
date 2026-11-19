const techs = [
  { nome: "Next.js", desc: "Framework React usado para rotas, layout e build do site (App Router)." },
  { nome: "React", desc: "Biblioteca para construir os componentes e controlar o estado da interface." },
  { nome: "JavaScript", desc: "Linguagem de todo o projeto, incluindo fetch e lógica do tema." },
  { nome: "CSS3", desc: "Estilização feita à mão: variáveis, grid, flexbox, animações e responsividade." },
  { nome: "API do GitHub", desc: "Lista meus repositórios públicos automaticamente na página de Projetos." },
  { nome: "next/font", desc: "Carrega as fontes Inter e Space Grotesk do Google Fonts." },
  { nome: "ESLint", desc: "Análise estática para manter o código limpo e sem erros comuns." },
  { nome: "Node.js / npm", desc: "Ambiente de execução e gerenciador de pacotes do projeto." },
  { nome: "Git e GitHub", desc: "Controle de versão e hospedagem do código-fonte." },
  { nome: "Vercel", desc: "Plataforma onde o site está publicado, com deploy automático." },
  { nome: "VS Code", desc: "Editor usado no desenvolvimento." },
];

export default function Sobre() {
  return (
    <>
      <h1 className="page-title">Sobre</h1>
      <p className="page-subtitle">
         Sou o Luiz, estudante de Sistemas para Internet em busca de experiência prática na
         área de tecnologia. Este portfólio foi feito do zero e reúne as tecnologias que usei
         para desenvolvê-lo.
      </p>

      <div className="grid">
        {techs.map((t) => (
          <div className="card" key={t.nome}>
            <h3>{t.nome}</h3>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}