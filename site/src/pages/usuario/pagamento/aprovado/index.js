

import { useEffect, useState } from 'react'
import './index.scss'
import { listarPedido2 } from '../../../../api/getAPI';

export default function Pagaprovado() {
  const [id, setId] = useState(0)
  const [vt, setVt] = useState(0);

  async function carregarPedido() {
    const [respo] = await listarPedido2();
    setId(respo.id);
    setVt(respo.total);
  }

  useEffect(() => {
    carregarPedido()
  }, [])

  return (
    <div className='pg-aprovado'>
      <div className='cabecalho'>
        <div className='lg-img'>
          <img src='/assets/images/usuario/cabecalho/logo_preta.png' alt='' />
          <p id='logo'> SOLLEIL</p>
        </div>
        <div className='linha'></div>
      </div>





      <div className='s1-apv'>
        <h1>Pagamento Aprovado</h1>
        <h5>Seu pedido está em separação e preparo para envio.</h5>
      </div>

      <div className='acompanhar' >
        <div className='acomps-2'>


          <div className='todes'>
            <h1>Informações</h1>

            <div className='acp-1'>
              <p>PEDIDO: </p>
              <p id='blue'>#{id}</p>
            </div>

            <div className='acp-2'>
              <p>Valor Total:</p>
              <p id='negri'>R${vt}</p>
            </div>

            <a href='/'><h3>Voltar para Página inicial</h3></a>
            <a className='acompanhar' href='/conta'><h3>Acompanhar meu pedido</h3></a>

          </div>

        </div>


      </div>




    </div>
  )


}