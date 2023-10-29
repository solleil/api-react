import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({

    host: process.env.HOST_LOCAL,
    user: process.env.USER_LOCAL,
    password: process.env.PWD_LOCAL,
    database: process.env.MYSQL_DB

});


console.log(`BD CONECTADO NA PORTA ${process.env.PORT}`);

export { connection }
