import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.get('/', (ctx, next) => {
    ctx.body = 'Hello Koa';
    // ctx.router available
    console.log('----------- GET')
});

router.post('/', (ctx, next) => {
    // ctx.router available
    console.log('----------- POST', ctx.request.body);
});
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);