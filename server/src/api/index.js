import Router from 'koa-router'
import axios from 'axios'


const api = new Router();

api.get('/', ctx => {
    ctx.body = 'routing testing'
})

api.get('/test', ctx => {
    //ctx.body = axios.get('http://data.mafra.go.kr/opendata/data/indexOpenDataDetail.do?data_id=20150827000000000465&filter_ty=O&getBack=G&sort_id=&s_data_nm=&instt_id=&cl_code=&shareYn=')
    ctx.body = axios.get('http://211.237.50.150:7080/openapi/sample/xml/Grid_20150827000000000227_1/1/5')
});

export default api
