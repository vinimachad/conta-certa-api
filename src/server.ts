import db from './database'
import express from "express";
import 'express-async-errors'
import { routes } from './routes';

db().then(() => startServerSetup()).catch(error => console.log(`Failure ${error}`))

function startServerSetup() {
    const app = express()

    app.use(express.json())
    app.use(routes)

    app.listen(process.env.PORT || 8080, () => {
        console.log('Server is running')
    })
}