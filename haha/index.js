const Koa = require("koa");

const Router = require("koa-router");

const server = require("koa-static");

const app = new Koa();

const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "hello yzx-koa";
});

app.use(router.routes());

app.use(server(__dirname + "/static"));

app.listen(8080, () => {
  console.log("open server localhost:8080");
});
