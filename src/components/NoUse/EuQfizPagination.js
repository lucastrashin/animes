/* import React from "react";

const Pagination = (props) => {
  const setBtn1 = (pagina, setPagina) => {
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

  const setBtn2 = (pagina, setPagina) => {
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

  const setBtn3 = (pagina, setPagina) => {
    if (pagina === 1) {
      return <button onClick={() => setPagina(3)}>3</button>;
    } else if (pagina === 2) {
      return <button onClick={() => setPagina(3)}>3</button>;
    } else {
      return <button>{pagina}</button>;
    }
  };

  const setBtn4 = (pagina, setPagina) => {
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

  const setBtn5 = (pagina, setPagina) => {
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
    <ul>
      <li>
        <button onClick={() => props.setPagina(props.pagina - 1)}>
          Anterior
        </button>
      </li>
      <li>{setBtn1(props.pagina, props.setPagina())}</li>
      <li>{setBtn2(props.pagina, props.setPagina())}</li>
      <li>{setBtn3(props.pagina, props.setPagina())}</li>
      <li>{setBtn4(props.pagina, props.setPagina())}</li>
      <li>{setBtn5(props.pagina, props.setPagina())}</li>
      <li>
        <button onClick={() => props.setPagina(props.pagina + 1)}>
          Próxima
        </button>
      </li>
    </ul>
  );
};
export default Pagination;
 */
