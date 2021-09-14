import React, { useEffect, useState } from "react";
import axios from "axios";

const Lista = () => {
  const [animes, setAnimes] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    atualizaAnimes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const atualizaAnimes = () => {
    axios
      .get(`https://api.aniapi.com/v1/anime?title=${pesquisa}`)
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
    </div>
  );
};

export default Lista;
