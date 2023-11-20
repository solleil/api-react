import Cabecalho from '../../../../components/cabecalho';
import Rodape from '../../../../components/rodape';
import './index.scss';

import MolduraProdutos from '../../../../components/produtos';
import { useParams } from 'react-router-dom';



export default function Produtos() {
  const { filtro } = useParams();

  return (
    <div className="pag-produtos">
      <Cabecalho />
      <div className='s1'>
        <h3> <strong></strong></h3>

        <div className='s1-row'>
          <MolduraProdutos idt={filtro} />
        </div>

      </div>


      <Rodape />

    </div>
  );
}
