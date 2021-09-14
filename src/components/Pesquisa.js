import { StylesContext } from "@material-ui/styles";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Pesquisa = () => {
  const [text, setText] = useState();
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.aniapi.com/v1/anime?title=${text}`)
      .then((response) => setInfo(JSON.stringify(response)));
  }, [text]);

  return (
    <div>
      <input
        type="text"
        onChance={(e) => {
          setText(e.target.value);
          console.log(text);
        }}
      ></input>
      <p> pesquisar:{text}</p>
      <ul>
        <li>oi</li>
      </ul>
    </div>
  );
};

export default Pesquisa;
