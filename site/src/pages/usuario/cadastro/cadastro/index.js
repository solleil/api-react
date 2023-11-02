import './index.scss';

export default function Cadastro() {


  return (

      <main classname="cadastro">
          <div classname="tudx">

            <div classname="imgx">
            <img className="imagex" src='/assets/images/usuario/cadastro/muie.svg' alt=''></img>
            </div>

            <div className='T-0'>
               <h1>Cadastro</h1>

               <form>
                <div>
                <input type='nome'  placeholder="Nome"></input>
                <input type='text'  placeholder="Sobrenome"></input>
                </div>

                <div>
                <input type='email'  placeholder="E-mail"></input>
                <input type='text'  placeholder="CPF"></input>
                <input type='password'  placeholder="Senha"></input>
                <input type='password'  placeholder="Confirmar senha"></input>

                <label></label>
                <input type='date'></input>
                </div>

                <div>

                  <select className='tipopele'></select>
                  <option id='Tipopele'></option>
                </div>

                <button type="submit">Cadastrar</button>


               </form>

            </div>

          </div>

      </main>
)
}