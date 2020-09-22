import Router from "koa-router";
import axios from "axios";

const api = new Router();

api.get("/", async (ctx) => {
  const info = {
    name: [],
    sumry: [],
    category: [],
  };
  const data = await axios.get(
    `http://openapi.foodsafetykorea.go.kr/api/${process.env.serviceKey}/COOKRCP01/json/1/1`
  );

  const items = data.data.COOKRCP01.row
  console.log(items)


  //console.log(data.data.COOKRCP01)
 
 // console.log(info);
});

export default api;
