import './index.scss';

export default function Cadastro() {


  return (
    <main className='index-cadastro'>
      <section className='fundo'>
        <div className='background_cadastro'>
          <div className='tela_cadastro'>
            <h1>CADASTRO</h1>
            <div id='in_puts'>
              <input placeholder='Nome' id='campos' type='text' />
              <input placeholder='Sobrenome' id='campos' type='text' />
            </div>
            <div id='in_puts'>
              <input placeholder='CPF' id='campos' type='text' />
              <input placeholder='E-mail' type='text' id='campos' />
            </div>
            <div id='in_puts'>
              <input placeholder='Senha' type='password' id='campos' />
              <input placeholder='Confirme sua senha' type='password' id='campos' />
            </div>
            <div className='seletores'>
              <input type='date' id='campos' className='campos_seletores' />
              <select id='campos' className='campos_seletores'>
                <option>Selecione</option>
              </select>
            </div>
            <button>Cadastrar</button>
          </div>
        </div>
      </section>
    </main>
  );

}