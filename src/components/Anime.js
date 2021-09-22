import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const Anime = () => {
  const { id } = useParams();
  const [ani, setAni] = useState();

  useEffect(() => {
    atualizaAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ani]);

  const atualizaAnime = () => {
    axios
      .get(`https://api.aniapi.com/v1/anime/${id}`)
      .then((response) => {
        if (response.data.status_code === 404) {
          setAni([]);
        } else {
          console.log(response);
          setAni(response.data.data);
          console.log(ani);
        }
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  console.log(ani);

  let listaDeAnimes;

  if (ani) {
    listaDeAnimes = (
      <div className="flex">
        <div className="margin">
          <img src={ani.cover_image} alt={ani.titles.en + " cover image"} />
          <h2>{ani.titles.jp}</h2>
          <h3>{ani.titles.en}</h3>
          <h4> Descrição: {ani.descriptions.en}</h4>
          <h4> Quantidade de episódios: {ani.episodes_count}</h4>
          <h4> Duração do episódio: {ani.episode_duration}</h4>
          <h4>Gêneros:</h4>
          <ul>
            {ani.genres.map((genero) => {
              return <li>{genero}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    listaDeAnimes = <p>Nenhum anime encontrado :(</p>;
  }

  return <div>{listaDeAnimes}</div>;
};

export default Anime;
