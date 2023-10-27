create database solleil;
use solleil;


create table tb_admin(
id_admin        int primary key auto_increment,
nm_admin		varchar(100),
ds_sobrenome	varchar(100),
ds_cargo        varchar(100),
ds_email		varchar(100),
ds_senha		varchar(100)
);

create table tb_cliente(
id_cliente		int primary key auto_increment,
nm_cliente		varchar(100),
ds_sobrenome	varchar(100),
ds_telefone		varchar(100),
ds_email		varchar(100),
ds_cpf			varchar(100),
dt_nasc			varchar(100),
ds_senha		varchar(100)
);

create table tb_endereco(
id_endereco		int primary key auto_increment,
ds_cep			varchar(100),
ds_endereco		varchar(100),
nr_endereco		varchar(100),
ds_cidade		varchar(100)
);

create table tb_cartao(
id_cartao	int primary key auto_increment,
nm_cartao	varchar(100),
ds_cvc		varchar(100),
ds_numero	varchar(100),
ds_validade varchar(100)
);

create table tb_pedido(
id_pedido			int primary key auto_increment,
id_cliente			int,
id_endereco			int,
id_cartao			int,
ds_nota_fiscal		varchar(100),
qtd_parcelas		int,
dt_pedido			datetime,
ds_situacao			varchar(100),


foreign key (id_cliente) references tb_cliente(id_cliente),
foreign key (id_endereco) references tb_endereco(id_endereco),
foreign key (id_cartao) references tb_cartao(id_cartao)
);

create table tb_ingr_atv(
id_ingrediente		int primary key auto_increment,
nm_ingrediente		varchar(100),
ds_ingrediente		varchar(1000)
);


create table tb_tipo_pele(
id_tipo		int primary key auto_increment,
nm_tipo_pele	varchar(100)
);

create table tb_necessidade(
id_necessidade		int primary key auto_increment,
nm_necessidade		varchar(100)
);

create table tb_marca(
id_marca		int primary key auto_increment,
nm_marca		varchar(100)
);


create table tb_categoria(
id_categoria	int primary key auto_increment,
nm_categoria	varchar(100)
);

create table tb_produto(
id_produto 		int primary key auto_increment,
nm_produto		varchar(1000),
ds_produto		varchar(10000),
ds_tamanho		varchar(100),
id_categoria 	int,
id_marca		int,
id_necessidade	int,
id_tipo_pele	int,
vl_preco		decimal(15,2),
bt_disponivel	boolean,
qtd_estoque		int,
id_ingr_atv		int,
ds_avaliacao	varchar(5),
ds_indicacao    varchar(200),



foreign key (id_categoria) references tb_categoria (id_categoria),
foreign key (id_necessidade) references tb_necessidade(id_necessidade),
foreign key (id_necessidade) references tb_necessidade(id_necessidade),
foreign key (id_tipo_pele) references tb_tipo_pele(id_tipo),
foreign key(id_ingr_atv) references tb_ingr_atv(id_ingrediente)
);

create table tb_imagem(
id_imagem		int primary key auto_increment,
ds_imagem 		varchar(100),
id_produto		int,
foreign key (id_produto) references tb_produto(id_produto)

);
