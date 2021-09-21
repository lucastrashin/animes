import React from "react";
import axios from "axios";
import { useParams } from "react-router";

const Anime = () => {
  const { ID } = useParams();
  const [anime, setAnime] = useState([]);

  return axios.get(`https://api.aniapi.com/v1/anime/${ID}`).then((response) => {
    setAnime(response);
  });
};

export default Anime;
