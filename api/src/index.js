import 'dotenv/config';
import express from 'express';
import cors from 'cors';


const servidor= express();
servidor.use(cors());
servidor.use(express.json());


import produtoController from './controller/produtoController.js';
servidor.use(produtoController);

servidor.use('/storage/fotos_gerais_produtos', express.static('storage/fotos_gerais_produtos'))

import usuarioController from './controller/usuarioController.js';
servidor.use(usuarioController);

import adminController from './controller/adminController.js';
servidor.use(adminController);

import cartaoController from './controller/cartaoController.js';
servidor.use(cartaoController);

import tipoPeleController from './controller/tipoPeleController.js'
servidor.use(tipoPeleController);

import marcaController from './controller/marcaController.js'
servidor.use(marcaController);

import nessecidadeController from './controller/necessidadeController.js'
servidor.use(nessecidadeController);

import ingrAtvController from './controller/ingrAtvController.js'
servidor.use(ingrAtvController);

import categoriaController from './controller/categoriaController.js';
servidor.use(categoriaController);

import enderecoController from './controller/enderecoController.js';
servidor.use(enderecoController);

import pedidoController from './controller/pedidoController.js';
servidor.use(pedidoController);



import carrinhoController from './controller/carrinhoController.js';
servidor.use(carrinhoController)


servidor.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.MYSQL_PORT}`));