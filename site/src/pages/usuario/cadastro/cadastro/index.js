import './index.scss';

export default function Cadastro() {


  return (
    <main className='index-cadastro'>
      <section className='fundo'>
        <div className='backgroud_cadastro'>
          <div className='tela_cadastro'>
            <h1>CADSATRO</h1>
            <div>
              <input placeholder='Nome'/>
              <input placeholder='Sobrenome'/>
            </div>
            <div>
              <input placeholder='CPF'/>
              <input placeholder='E-mail'/>
            </div>
            <div>
              <input placeholder='Senha'/>
              <input placeholder='Confirme sua senha'/>
            </div>
            <div>
              <input type='date'/>
              <select>
                <option></option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

}