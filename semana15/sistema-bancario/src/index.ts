import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {accounts} from "./users"

const app: Express = express()

app.use(express.json());
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando no http://localhost:3003")
})