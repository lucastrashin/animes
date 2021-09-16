import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import ReactPaginate from "react-paginate";
import "./Pesquisa.css";

const Pesquisa = () => {
  //RECEBE O FILTRO QUE SERÁ PESQUISADO
  const [pesquisa, setPesquisa] = useState("");

  //NUMERO DA PAGINA ATUAL
  const [pagina, setPagina] = useState(1);

  //NUMERO DE ITENS POR PAGINA
  const [itensPorPaginas, SetItensPorPagina] = useState(10);

  //RECEBE A RESPONSE DO GET
  const [animes, setAnimes] = useState([]);

  const [numeroPagina, setNumeroPagina] = useState(0);

  useEffect(() => {
    atualizaAnimes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pesquisa, pagina, itensPorPaginas]);

  const atualizaAnimes = () => {
    axios
      .get(
        `https://api.aniapi.com/v1/anime?title=${pesquisa}&per_page=${itensPorPaginas}&page=${pagina}`
      )
      .then((response) => {
        if (response.data.status_code === 404) {
          setAnimes([]);
        } else {
          setAnimes(response.data.data.documents);
        }
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  console.log(animes);
  let listaDeAnimes;

  if (animes.length > 0) {
    listaDeAnimes = (
      <div className="flex">
        {animes.map((anime) => {
          return (
            <div className="margin" key={anime.anilist_id}>
              <img
                src={anime.cover_image}
                alt={anime.titles.en + " cover image"}
              />
              <h3>{anime.titles.en}</h3>
            </div>
          );
        })}
      </div>
    );
  } else {
    listaDeAnimes = <p>Nenhum anime encontrado :(</p>;
  }

  const changePage = ({ selected }) => {
    setNumeroPagina(selected);
  };

  return (
    <div>
      <div className="flex margin">
        {/* FORM DO PESQUISAR */}

        <form
          className="margin-left"
          onSubmit={(e) => {
            e.preventDefault();
            atualizaAnimes();
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              setPesquisa(e.target.value);
            }}
          ></input>
          <button type="submit">Pesquisar</button>
        </form>

        {/* FORM DO ITENS POR PAGINA */}

        <form
          onSubmit={(e) => {
            atualizaAnimes();
          }}
        >
          <input
            type="number"
            onChange={(e) => {
              SetItensPorPagina(e.target.value);
            }}
          ></input>
          <button type="submit">Número de resultados por página:</button>
        </form>
      </div>

      {listaDeAnimes}
    </div>
  );
};

export default Pesquisa;
