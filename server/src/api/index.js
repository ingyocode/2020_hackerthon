import Router from 'koa-router'

const api = new Router();

api.get('/', ctx => {
    ctx.body = 'routing testing'
})

export default api
