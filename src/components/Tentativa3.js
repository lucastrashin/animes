import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "@material-ui/lab";
import { Link } from "react-router-dom";

const Tentativa3 = () => {
  //RECEBE O FILTRO QUE SERÁ PESQUISADO
  const [pesquisa, setPesquisa] = useState("");

  //NUMERO DA PAGINA ATUAL
  const [pagina, setPagina] = useState(1);

  //NUMERO DE ITENS POR PAGINA
  const [itensPorPaginas, SetItensPorPagina] = useState(10);

  //RECEBE A RESPONSE DO GET
  const [animes, setAnimes] = useState([]);

  const [count, setCount] = useState(1);

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
          setCount(response.data.data.last_page);
          setPagina(response.data.data.current_page);
          console.log(response);
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
              <h2>
                <Link to={`/animes/${anime.id}`}>{anime.titles.en}</Link>
              </h2>
            </div>
          );
        })}
      </div>
    );
  } else {
    listaDeAnimes = <p>Nenhum anime encontrado :(</p>;
  }

  const handleChange = (event, value) => {
    setPagina(value);
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
        <p
          style={{
            padding: 0,
            marginLeft: 15,
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          Itens por página:
        </p>
        <select
          onChange={(e) => {
            SetItensPorPagina(e.target.value < 0 ? 1 : e.target.value);
          }}
        >
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      {listaDeAnimes}
      <Pagination
        count={count}
        size="large"
        page={pagina}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
};
export default Tentativa3;
