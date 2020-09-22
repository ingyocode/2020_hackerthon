import Router from "koa-router";
import axios from "axios";

const api = new Router();

api.get("/", async (ctx) => {
  const data = await axios.get(
    `http://211.237.50.150:7080/openapi/${process.env.serviceKey}/json/Grid/1/10`
  );
  console.log(data.data.Grid_20150827000000000227_1);
});

export default api;
