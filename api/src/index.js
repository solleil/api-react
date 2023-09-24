import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const servidor= express();
servidor.use(cors());
servidor.use(express.json());


import produtoController from './controller/produtoController.js';
servidor.use(produtoController);

import usuarioController from './controller/usuarioController.js';
servidor.use(usuarioController);

import adminController from './controller/adminController.js';
servidor.use(adminController);


servidor.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`));