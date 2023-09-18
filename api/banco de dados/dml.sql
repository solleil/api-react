insert into tb_categoria(nm_categoria)
			values('Máscaras'), ('Limpadores'), ('Séruns'), ('Proteção solar'), ('Corpo'), ('Esfoliantes'), ('Hidratantes');
select * from tb_categoria;
--
insert into tb_tipo_pele(nm_tipo_pele)
			values('Todos os tipos'), ('Pele mista'), ('Pele seca'), ('Pele oleosa'), ('Pele sensível'), ('Pele normal');
select * from tb_tipo_pele;
--
insert into tb_necessidade(nm_necessidade)
			values('Acne'), ('Oleosidade'), ('Olheira'), ('Cicatrizes/textura'), ('Antipoluição'), ('Cravos'), ('Hiperpigmentação');
select * from tb_necessidade;
--
insert into tb_marca(nm_marca)
			values('Sallve'), ('Principia'), ('La Roche'), ('Cerave'), ('Laneige'), ('Creamy'), ('Hidratantes');
select * from tb_marca;




insert into tb_admin(nm_admin, ds_email, ds_senha)
		values('Davi Cavalcanti', 'davicvital@gmail.com', 'abc@123'), 
        ('Fernanda Silva', 'Fernandafernanda55.br@gmail.com', 'abc@123'),
        ('Kewry Brito', 'kewrybrito7@gmail.com', 'abc@123'), 
        ('Maria Clara Siqueira', 'sequeraclara2@gmail.com', 'abc@123'), 
        ('Paloma Jonson', 'palomajonson207@gmail.com', 'abc@123');
