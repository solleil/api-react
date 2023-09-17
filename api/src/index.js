import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import produtoController from './controller/produtoController.js';


let servidor= express();
servidor.use(cors());
servidor.use(express.json());


servidor.use(produtoController);

servidor.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`));