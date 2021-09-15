import React from "react";

// NUMERO IMPAR PARA TER BOTÃO NO CENTRO
const MaxItems = 9;
// -1 igual o botão do meio
const MaxLeft = (MaxItems - 1) / 2;

// LIMIT = itens renderizados por pagina
// TOTAL = total geral de itens
// OFFSET = itens para pular, para a pag não redenrizar items das anteriores

const Pagination = ({ limit, total, offset, setOffset }) => {
  //Pagina atual
  //Tem itens pulados? Se tem números pulados (int discreto), divide por quantos cabem na pagina, soma 1 para indicar que está na pag seguinte
  const current = offset ? offset / limit + 1 : 1;

  //Pages é o número de paginas, total de itens dividido pelo número de itens por página
  //Math.ceil arredonda pra cima dado que o número de páginas deve ser inteiro
  const pages = Math.ceil(total / limit);

  //First é a primeira página que aparece no botão
  //O valor é dado pela atual menos o número "para esquerda"
  //Math.max impede que tenha um valor menor que 1
  const first = Math.max(current - MaxLeft, 1);

  return (
    <ul>
      {/* Cria Array a partir da quantidade de botões da paginação                                  */}
      {/* map((item, index)=>{})                                                                    */}
      {/* .from Cria um array baseado em um obj com o comprimento MaxItems                          */}
      {Array.from({ length: MaxItems })
        .map((_, index) => index + first)
        .map((page) => {
          <li>
            {/* Para definir o offset(conteúdo das anteriores) tira 1 da atual e multiplica pelo max por pag */}
            <button onClick={() => setOffset((page - 1) * limit)}>
              {page}
            </button>
          </li>;
        })}
    </ul>
  );
};
export default Pagination;
