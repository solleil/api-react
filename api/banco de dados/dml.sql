insert into
    tb_categoria(nm_categoria)
values
('Máscaras'),
    ('Limpadores'),
    ('Séruns'),
    ('Proteção solar'),
    ('Corpo'),
    ('Esfoliantes'),
    ('Hidratantes');

select
    *
from
    tb_categoria;

insert into
    tb_tipo_pele(nm_tipo_pele)
values
('Todos os tipos'),
    ('Pele mista'),
    ('Pele seca'),
    ('Pele oleosa'),
    ('Pele sensível'),
    ('Pele normal');

select
    *
from
    tb_tipo_pele;

insert into
    tb_necessidade(nm_necessidade)
values
('Acne'),
    ('Oleosidade'),
    ('Olheira'),
    ('Cicatrizes/textura'),
    ('Antipoluição'),
    ('Cravos'),
    ('Hiperpigmentação');

select
    *
from
    tb_necessidade;

insert into
    tb_marca(nm_marca)
values
('Sallve'),
    ('Principia'),
    ('La Roche'),
    ('Cerave'),
    ('Laneige'),
    ('Creamy');

select
    *
from
    tb_marca;

insert into
    tb_ingr_atv(nm_ingrediente, ds_ingrediente)
values
    (
        'niacinamida',
        'um dos ingredientes mais versáteis que existem: aqui a niacinamida tem ação anti-inflamatória, melhora a textura e regula a produção de sebo. ao mesmo tempo, fortalece a proteção da pele, evitando ressecamento e vermelhidão.'
    ),
    (
        'extrato de moringa',
        'derivado natural da moringa oleifera, o extrato promove a limpeza profunda da pele removendo até mesmo resíduos de poluição diária.'
    ),
    (
        'phytoesqualano',
        'de origem vegetal, derivado do óleo de oliva puro, sua alta compatibilidade com a pele ajuda a restaurar a barreira de proteção e a manter a maciez.'
    ),
    (
        'pantenol',
        'também chamado de Pro-Vitamina B5, é conhecido pelo seu poder hidratante e suavizante, promove ação calmante e anti-inflamatória.'
    );

select
    *
from
    tb_ingr_atv;

insert into
    tb_admin(nm_admin, ds_email, ds_senha)
values
    (
        'Davi Cavalcanti',
        'davicvital@gmail.com',
        'abc@123'
    ),
    (
        'Fernanda Silva',
        'Fernandafernanda55.br@gmail.com',
        'abc@123'
    ),
    (
        'Kewry Brito',
        'kewrybrito7@gmail.com',
        'abc@123'
    ),
    (
        'Maria Clara Siqueira',
        'sequeraclara2@gmail.com',
        'abc@123'
    ),
    (
        'Paloma Jonson',
        'palomajonson207@gmail.com',
        'abc@123'
    );

select
    *
from
    tb_admin;

insert into
    tb_cliente (
        nm_cliente,
        ds_sobrenome,
        ds_email,
        ds_senha
    )
values
    ('logTest', 'logTest', 'logteste@teste.com', 1234);

insert into
    tb_cliente (
        nm_cliente,
        ds_sobrenome,
        ds_email,
        ds_senha
    )
values
    ('usuario', 'teste', 'usuario.com', 'abc@123');

select
    nm_produto as nome
from
    tb_produto
where
    nm_produto like '%t%';

insert into
    tb_produto (
        nm_produto,
        ds_produto,
        ds_tamanho,
        ds_avaliacao,
        ds_indicacao,
        vl_preco,
        bt_disponivel,
        ds_ingrediente,
        qtd_estoque,
        id_tipo_pele,
        id_categoria,
        id_ingr_atv,
        id_marca,
        id_necessidade
    )
values
    (
        'teste2',
        'teste2',
        'grande',
        5,
        'um teste',
        1.00,
        false,
        'sem ingredientes',
        1,
        1,
        1,
        1,
        1,
        1
    );

select
    *
from
    tb_produto;

select
    *
from
    tb_cliente;

update
    tb_produto
set
    img_produto = 'storage/nlebsbqoe'
where
    id_produto = 1;

select
    id_cliente,
    ds_email
from
    tb_cliente
where
    ds_email = 'logteste@teste.com'
    and ds_senha = '1234';

select
    id_admin as id,
    ds_email as email
from
    tb_admin
where
    ds_email = 'davicvital@gmail.com'
    and ds_senha = 'abc@123';

select
    *
from
    tb_produto
where
    nm_produto like '%t%';

select
    id_produto as id,
    nm_produto as nome,
    ds_produto as descricao,
    ds_tamanho as tamanho_ml,
    id_categoria as categoria,
    id_marca as marca,
    id_necessidade as necessidade,
    id_tipo_pele as tipo_pele,
    vl_preco as preco,
    bt_disponivel as disponivel,
    qtd_estoque as quantidade,
    id_ingr_atv as ingrediente_atv,
    ds_indicacao as indicacao
from
    tb_produto
where
    id_produto = 5;

select
    nm_cliente as nome,
    ds_sobrenome as sobrenome,
    ds_telefone as telefone,
    ds_email as email,
    ds_cpf as cpf,
    dt_nasc as nascimento,
    ds_senha as senha
from
    tb_cliente;

select
    *
from
    tb_cliente;

insert into
    tb_endereco(
        ds_cep,
        ds_rua,
        nr_endereco,
        ds_cidade,
        ds_bairro
    )
values
('teste', 'teste', 'teste', 'teste', 'teste');

select
    *
from
    tb_endereco;

update
    tb_endereco
set
    ds_cep = "teste",
    ds_rua = "teste",
    nr_endereco = "teste",
    ds_cidade = "teste",
    ds_bairro = "teste"
where
    id_endereco = 1;

select
    ds_cep as cep,
    ds_rua as rua,
    nr_endereco as endereco,
    ds_cidade as cidade,
    ds_bairro as bairro
from
    tb_endereco;

select
    id_cartao as id,
    nm_cartao as nome,
    ds_cvc as cvs,
    ds_numero as numero,
    ds_validade as validade,
    id_cliente as cliente
from
    tb_cartao;

insert into
    tb_cartao(
        nm_cartao,
        ds_cvc,
        ds_numero,
        ds_validade,
        id_cliente
    )
values
('teste', '000', '000-000-000', '23', 2);



  
 select *
from tb_carrinho
inner join tb_cliente on tb_carrinho.id_cliente = tb_cliente.id_cliente
inner join tb_produto on tb_carrinho.id_produto = tb_produto.id_produto
order by id_carrinho
;

select * from tb_carrinho;

insert into tb_carrinho (id_cliente, id_produto)
values (1,2);

insert into tb_produto(nm_produto)
values ('teste');

select * from tb_cliente;


insert into tb_admin(ds_email, ds_senha)
values ('adm.com', 1234)

