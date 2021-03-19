import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {accounts} from "./users"

const app: Express = express()

app.use(express.json());
app.use(cors())