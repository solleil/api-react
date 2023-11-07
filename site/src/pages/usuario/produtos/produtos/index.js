import Cabecalho from '../../../../components/cabecalho';
import Rodape from '../../../../components/rodape';
import './index.scss';

import MolduraProdutos from '../../../../components/produtos';



export default function Produtos() {
  return (
    <div className="pag-produtos">
      <Cabecalho/>
      <div className='s1'>
        <h3>FILTRADO POR MARCA: <strong>SALLVE</strong></h3>

        <div className='s1-row'>
          <MolduraProdutos/>
        </div>
        
      </div>
     

<Rodape/>

    </div>
  );
}
