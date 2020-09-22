import Koa from 'koa'
import cors from '@koa/cors'
import Router from'koa-router'
import bodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'
import api from './api'


const app = new Koa() 
const router = new Router()

const PORT = process.env.PORT

console.log(PORT)

app.use(bodyParser())
app.use(cors())
     
app.use(function(ctx, next) {
    // the parsed body will store in this.request.body
    // if nothing was parsed, body will be undefined
    ctx.body = ctx.request.body
    console.log(next())
    return next()
})

router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`)
})
