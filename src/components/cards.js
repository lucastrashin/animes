import React, { useEffect, useState } from "react";
import axios from "axios";

const Cards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.aniapi.com/v1/anime/")
      .then((response) => {
        console.log(response);
        setPosts(response.data.data.documents);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  console.log(posts.titles);
  return (
    <div>
      {posts.map((posts, key) => {
        return (
          <div key={key}>
            <h1>{JSON.stringify(posts.titles.en)}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
