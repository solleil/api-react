import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [pesquisa, setPesquisa] = useState('');
  const [produtos, setProdutos] = useState([]);

  

  const clickPesquisa = async () => {
    try {
      const resposta = await axios.get(`/produto/busca?nome=${pesquisa}`);
      setProdutos(resposta.data); 
    } catch (error) {
      console.error('Erro ao buscar produtos: testeee', error);
    }
  };

  return (
    <div>

      <div className='input-row'>
        <input
        type="text"
        placeholder="buscar produtos..."
        value={pesquisa}
        onChange={e => setPesquisa(e.target.value)}
        />
        <button onClick={clickPesquisa}>Buscar</button>
      </div>


      <div>
        {produtos.map(item => 
          <div key={item.id}>
            <p> teste</p>
            <h3>{item.name}</h3>
            <p>{item.preco}</p>
          
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;