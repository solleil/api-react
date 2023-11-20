import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [pesquisa, setPesquisa] = useState('');
  const [produto, setProduto] = useState([]);

  

  const clickPesquisa = async () => {
    try {
      const resposta = await axios.get(`produto/busca/produtos?nome=${pesquisa}`);
      setProduto(resposta.data); 
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={pesquisa}
        onChange={e => setPesquisa(e.target.value)}
      />
      <button onClick={clickPesquisa}>Buscar</button>

      <div>
        {produto.map(produto => (
          <div key={produto.id}>
            <h3>{produto.name}</h3>
            <p>{produto.preco}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;