import Router from 'koa-router'

const api = new Router();

api.get('/', ctx => {
    ctx.body = 'routing testing'
})

api.get('/test', ctx => {
    ctx.body = 'testing'
})

export default api
