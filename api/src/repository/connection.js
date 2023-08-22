import msql from "mysql/promise"

const connection = await msql.createConnection({
    host: process.env.MSQL_HOST,
    user: process.env.MSQL_USER,
    password: process.env.MSQL_PWD,
    database: process.env.MSQL_DB
})

export {connection}