/* import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Pesquisa = () => {
  //RECEBE O FILTRO QUE SERÁ PESQUISADO
  const [pesquisa, setPesquisa] = useState("");

  //NUMERO DA PAGINA ATUAL
  const [pagina, setPagina] = useState(1);

  //NUMERO DE ITENS POR PAGINA
  const [itensPorPaginas, SetItensPorPagina] = useState(10);

  //RECEBE A RESPONSE DO GET
  const [animes, setAnimes] = useState([]);

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

  const setBtn1 = () => {
    if (pagina === 1) {
      return <button>1</button>;
    } else if (pagina === 2) {
      return <button onClick={() => setPagina(1)}>{pagina - 1}</button>;
    } else {
      return (
        <button onClick={() => setPagina(pagina - 2)}>{pagina - 2}</button>
      );
    }
  };

  const setBtn2 = () => {
    if (pagina === 1) {
      return <button onClick={() => setPagina(2)}>2</button>;
    } else if (pagina === 2) {
      return <button>2</button>;
    } else {
      return (
        <button onClick={() => setPagina(pagina - 1)}>{pagina - 1}</button>
      );
    }
  };

  const setBtn3 = () => {
    if (pagina === 1) {
      return <button onClick={() => setPagina(3)}>3</button>;
    } else if (pagina === 2) {
      return <button onClick={() => setPagina(3)}>3</button>;
    } else {
      return <button>{pagina}</button>;
    }
  };

  const setBtn4 = () => {
    if (pagina === 1) {
      return <button onClick={() => setPagina(4)}>4</button>;
    } else if (pagina === 2) {
      return <button onClick={() => setPagina(4)}>4</button>;
    } else {
      return (
        <button onClick={() => setPagina(pagina + 1)}>{pagina + 1}</button>
      );
    }
  };

  const setBtn5 = () => {
    if (pagina === 1) {
      return <button onClick={() => setPagina(5)}>5</button>;
    } else if (pagina === 2) {
      return <button onClick={() => setPagina(5)}>5</button>;
    } else {
      return (
        <button onClick={() => setPagina(pagina + 2)}>{pagina + 2}</button>
      );
    }
  };

  return (
    <div>
      <div className="flex margin">
        {/* FORM DO PESQUISAR */

/*   <form
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

        {/* FORM DO ITENS POR PAGINA */
