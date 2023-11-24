
import './index.scss'
import Cabecalho from '../../../../components/cabecalho'
import { useRef, useState } from 'react';
import storage from 'local-storage';
import { InserirCartao, conectarPedido } from '../../../../api/postAPi';
import { listarCartao, listarEndereco } from '../../../../api/getAPI';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar'
import { useNavigate } from 'react-router-dom';



export default function Escolherpagamento() {
    const [cartao, setCartao] = useState(false);
    const [nomeCartao, setNomeCartao] = useState('');
    const [cvcCartao, setCVCCartao] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [validadeCartao, setValidadeCartao] = useState('');
    const [mesValidade, setMesValidade] = useState('')
    const [anoValidade, setanoValidade] = useState('');
    const [valorTL, setValorTL] = useState(0);
    const [pgFrete, setPgFrete] = useState(0);
    const [parcelas, setParcelas] = useState(0);
    const [quantidade, setQTd] = useState(0);
    const [cartaoID, setCartaoID] = useState({});
    const [enderecoS, setEnderecoS] = useState([]);

    const navigate = useNavigate();
    const ref = useRef();


    if (storage('usuario-logado')) {
        var id = storage('usuario-logado').id
    }

    function pagamento() {
        if (storage('pagamento')) {
            const [valorTotal] = storage('pagamento');
            setValorTL(valorTotal.total);
            setQTd(valorTotal.quantidade);
            if (valorTotal < 120) {
                setPgFrete(valorTotal.total + 15);
            }
            else {
               setPgFrete(valorTotal.total)
            }
        }
    }

    async function pedido() {
        ref.current.continuousStart();
        await conectarPedido(id, enderecoS.id, cartaoID.id, valorTL, parcelas, quantidade );
        setTimeout(() => {
            navigate('/aprovado')
        }, 6000)
    }

    async function carregarCartao() {
        const respo = await listarCartao(id);
        if (respo) {
            setNomeCartao(respo.nome)
            setCVCCartao(respo.cvc)
            setNumeroCartao(respo.numero)
        }
        setCartaoID(respo);
    }


    async function cadastrarcartao() {
        try {
            setValidadeCartao(`${anoValidade}/${mesValidade}`);
            const id = storage('usuario-logado').id;
            await InserirCartao(nomeCartao, cvcCartao, numeroCartao, validadeCartao, id);
            toast.success('cartão cadastrado');
        } catch (err) {
            toast.error(err.message);
        }
    }


    async function carregarEndereco() {
        const respo = await listarEndereco(id);
        setEnderecoS(respo);
    }


    function MudarCartao() {
        setCartao(!cartao)
    }

    useEffect(() => {
        if (storage('pagamento')) {
            pagamento();
        };
        carregarCartao();
        carregarEndereco();
    }, []);

    return (
        <div className='s1'>
            <Cabecalho />
            <LoadingBar ref={ref} />
            <div className='s-2'>

                <div className='s2-1'>
                    <div className='c'></div>

                    <div className='l'></div>

                    <div className='c'></div>

                    <div className='l'></div>

                    <div className='cv'></div>
                </div>


                <div className='p'>
                    <p id='lo'>Carrinho</p>
                    <p id='en'>Entrega</p>
                    <p id='pag'><strong>Pagamento</strong></p>
                </div>
            </div>


            <div className='s-3'>

                <div className='s-1-2-3'>
                    <p><strong>Entrega</strong></p>
                    <img src='/assets/images/usuario/pagamento/verificar.png' alt='' />
                </div>
                {enderecoS.map((item) =>
                    <div className='s3-2' key={item.id}>
                        <p>{item.rua}, {item.endereco} - {item.bairro}, {item.cidade}, {item.cep}</p>
                    </div>
                )}
            </div>


            <div className='s-4'>
                <p id='t-2'><strong>MÉTODO DE PAGAMENTO</strong></p>
                <div className='s-4-3' onClick={MudarCartao}>
                    <p className='credito' >Cartão de crédito</p>
                    <img src='/assets/images/usuario/pagamento/cartao-de-credito.png' alt='' />
                </div>
                {cartao === true &&
                    <>
                        <div className='cadastrarcartao'>

                            <div className='cabe'>
                                <p>cadastre seu cartão</p>
                                <div className='linha'></div>
                            </div>

                            <div className='info-tudo'>
                                <div className='info'>
                                    <input type='number' placeholder='número do cartão' className='i' onChange={(e) => setNumeroCartao(e.target.value)}></input>


                                    <div className='info-1'>
                                        <p>validade:</p>


                                        <div className='info-2'>
                                            <select value={mesValidade} onChange={(e) => setMesValidade(e.target.value)}>
                                                <option value={0}>mês</option>
                                                <option value={1}>janeiro</option>
                                                <option value={2}>fevereiro</option>
                                                <option value={3}>março</option>
                                                <option value={4}>abril</option>
                                                <option value={5}>maio</option>
                                                <option value={6}>junho</option>
                                                <option value={7}>julho</option>
                                                <option value={8}>agosto</option>
                                                <option value={9}>setembro</option>
                                                <option value={10}>outubro</option>
                                                <option value={11}>novembro</option>
                                                <option value={12}>dezembro</option>
                                            </select>

                                            <select value={anoValidade} onChange={(e) => setanoValidade(e.target.value)}>
                                                <option value={0}>ano</option>
                                                <option value={24}>2024</option>
                                                <option value={25}>2025</option>
                                                <option value={26}>2026</option>
                                                <option value={27}>2027</option>
                                                <option value={28}>2028</option>
                                                <option value={29}>2029</option>
                                                <option value={30}>2030</option>
                                            </select>
                                        </div>
                                    </div>
                                    <p id='texto'>parcelamento:</p>
                                    <div className='info-3'>

                                        <select id='s-p' value={parcelas} onChange={(e) =>  setParcelas(Number(e.target.value))}>
                                            <option value={0}>escolha a quantidade</option>
                                            <option value={2}>02</option>
                                            <option value={3}>03</option>
                                            <option value={4}>04</option>
                                            <option value={5}>05</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='info-lado'>
                                    <input className='nome-cartao' type='text' placeholder='nome impresso no cartão' onChange={(e) => setNomeCartao(e.target.value)}></input>

                                    <p id='cod'>código de segurança:</p>
                                    <div className='infoo'>
                                        <input className='codigo' type='text' onChange={(e) => setCVCCartao(e.target.value)}></input>
                                        <input className='codigo2' type='text' placeholder='CPF do titular'></input>
                                    </div>
                                    <div className='infoo2'>


                                        <div className='espaco'><input className='ch' type='checkbox' /></div>

                                        <label className='cont'>guardar para próxima compra</label>
                                        <div className='espaco'><input className='ch' type='checkbox' /></div>
                                        <label className='gua'> definir como padrão</label>
                                    </div>
                                </div>
                            </div>
                            <div className='botao'>

                                <button onClick={cadastrarcartao}>concluir cadastro</button>

                            </div>

                        </div>
                    </>
                }




            </div>


            <div className='k'> <div className='l-c'></div> </div>

            <div className='s5-todes'>
                <div className='s-5'>
                    <div className='s-5-1'>
                        <p><strong>Valor total:</strong></p>
                        <p className='t-4'>R${valorTL}</p>
                    </div>
                    {valorTL < 120 &&
                        <div className='s-5-1'>
                            <b>Taxa de envio:</b>
                            <p className='t-4'>R$5,00</p>
                        </div>
                    }
                    {valorTL > 120 &&
                        <div className='s-5-1'>
                            <b>Taxa de envio:</b>
                            <p className='t-4'>R$0,00</p>
                        </div>
                    }
                    <div className='s-5-1'>
                        <b>Subtotal:</b>
                        <p className='t-4'>R${pgFrete}</p>
                    </div>
                </div>

                <div className='k'> <div className='l-c'></div> </div>

                <div className='r-1'>
                    <div className='s-5-1'>
                        <p><strong>Valor total:</strong></p>
                        <p className='t-4'>R${pgFrete}</p>
                    </div>

                    <p id='final' onClick={pedido}><b>FINALIZAR PAGAMENTO</b></p>

                </div>
            </div>


        </div>
    )

}    