import RepoList from "../../components/RepoList";

export default function Projetos() {
  return (
    <>
      <h1 className="page-title">Projetos Desenvolvidos</h1>
      <p className="page-subtitle">
        Lista carregada em tempo real da API pública do GitHub.
      </p>
      <RepoList />
    </>
  );
}