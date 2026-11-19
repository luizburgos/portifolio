"use client";

import { useEffect, useState } from "react";

const USER = "luizburgos";

export default function RepoList() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`https://api.github.com/users/${USER}/repos?sort=updated&per_page=30`)
      .then((res) => {
        if (!res.ok) throw new Error("Falha na API");
        return res.json();
      })
      .then((data) => {
        setRepos(data.filter((r) => !r.fork));
        setStatus("ok");
      })
      .catch(() => setStatus("error"));
  }, []);

  if (status === "loading") return <p className="state-msg">Carregando repositórios...</p>;
  if (status === "error")
    return <p className="state-msg">Não foi possível carregar os repositórios agora.</p>;
  if (repos.length === 0) return <p className="state-msg">Nenhum repositório público ainda.</p>;

  return (
    <div className="grid">
      {repos.map((r) => (
        <div className="card" key={r.id}>
          <h3>{r.name}</h3>
          <p>{r.description || "Sem descrição."}</p>
          <div className="repo-meta">
            {r.language && <span className="chip">{r.language}</span>}
            <span>⭐ {r.stargazers_count}</span>
          </div>
          <a className="repo-link" href={r.html_url} target="_blank" rel="noreferrer">
            Ver no GitHub →
          </a>
        </div>
      ))}
    </div>
  );
}