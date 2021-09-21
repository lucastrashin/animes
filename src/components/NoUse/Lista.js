/* import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./EuQfizPagination";

const Lista = () => {
  const [animes, setAnimes] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    atualizaAnimes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //NUMERO DE ITENS RENDERIZADOS POR PAG
  const LIMIT = 12;

  const atualizaAnimes = () => {
    axios
      .get(
        `https://api.aniapi.com/v1/anime?title=${pesquisa}&page[limit]=${LIMIT}`
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

  let listaDeAnimes;

  if (animes.length > 0) {
    listaDeAnimes = (
      <div>
        {animes.map((anime) => {
          return (
            <div key={anime.anilist_id}>
              <h3>{anime.titles.en}</h3>
              <img
                src={anime.cover_image}
                alt={anime.titles.en + " cover image"}
              />
              <p>{anime.genres.join(", ")}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    listaDeAnimes = <p>Nenhum anime encontrado :(</p>;
  }

  const [offset, setOffset] = useState(0);

  return (
    <div>
      <form
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
      {listaDeAnimes}
      <Pagination
        limit={LIMIT}
        total={20}
        offset={offset}
        setOffset={setOffset}
      ></Pagination>
    </div>
  );
};

export default Lista;
 */
