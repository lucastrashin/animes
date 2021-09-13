import React from "react";

const Pesquisa = () => {
  const [pesquisa, setPesquisa] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.aniapi.com/v1/anime/${id}")
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

export default Pesquisa;
