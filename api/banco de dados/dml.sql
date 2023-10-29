
insert into tb_categoria(nm_categoria)
	values('Máscaras'), ('Limpadores'), ('Séruns'), ('Proteção solar'), ('Corpo'), ('Esfoliantes'), ('Hidratantes');
select * from tb_categoria; 

insert into tb_tipo_pele(nm_tipo_pele)
	values('Todos os tipos'), ('Pele mista'), ('Pele seca'), ('Pele oleosa'), ('Pele sensível'), ('Pele normal');
select * from tb_tipo_pele;

insert into tb_necessidade(nm_necessidade)
	values('Acne'), ('Oleosidade'), ('Olheira'), ('Cicatrizes/textura'), ('Antipoluição'), ('Cravos'), ('Hiperpigmentação');
select * from tb_necessidade;

insert into tb_marca(nm_marca)
	values('Sallve'), ('Principia'), ('La Roche'), ('Cerave'), ('Laneige'), ('Creamy');
select * from tb_marca;

insert into tb_ingr_atv(nm_ingrediente, ds_ingrediente)
	values
    ('niacinamida', 'um dos ingredientes mais versáteis que existem: aqui a niacinamida tem ação anti-inflamatória, melhora a textura e regula a produção de sebo. ao mesmo tempo, fortalece a proteção da pele, evitando ressecamento e vermelhidão.'),
    ('extrato de moringa', 'derivado natural da moringa oleifera, o extrato promove a limpeza profunda da pele removendo até mesmo resíduos de poluição diária.'),
    ('phytoesqualano', 'de origem vegetal, derivado do óleo de oliva puro, sua alta compatibilidade com a pele ajuda a restaurar a barreira de proteção e a manter a maciez.'),
	('pantenol', 'também chamado de Pro-Vitamina B5, é conhecido pelo seu poder hidratante e suavizante, promove ação calmante e anti-inflamatória.');
select * from tb_ingr_atv;
            
insert into tb_admin(nm_admin, ds_email, ds_senha)
	values
    ('Davi Cavalcanti', 'davicvital@gmail.com', 'abc@123'), 
    ('Fernanda Silva', 'Fernandafernanda55.br@gmail.com', 'abc@123'),
    ('Kewry Brito', 'kewrybrito7@gmail.com', 'abc@123'), 
    ('Maria Clara Siqueira', 'sequeraclara2@gmail.com', 'abc@123'), 
    ('Paloma Jonson', 'palomajonson207@gmail.com', 'abc@123');
select * from tb_admin;

insert into tb_cliente (
nm_cliente,
ds_sobrenome,
ds_email,
ds_senha)
values 
('logTest', 'logTest', 'logteste@teste.com', 1234);

select 
    nm_produto      as nome 
    from tb_produto 
where nm_produto like '%t%';

insert into tb_produto (
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
id_necessidade)
values ('teste2', 'teste2', 'grande', 5, 'um teste', 1.00, false, 'sem ingredientes', 1, 1, 1, 1, 1, 1);
select * from tb_produto;
select * from tb_cliente;

select 
	id_cliente,
	ds_email
from tb_cliente 
where 
	ds_email = 'logteste@teste.com' 
	and
	ds_senha = '1234';
    
select 
    id_admin	as id,
    ds_email	as email
    from tb_admin where 
    ds_email = 'davicvital@gmail.com' 
    and
    ds_senha = 'abc@123'

