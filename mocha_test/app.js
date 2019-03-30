const Koa = require('koa');
const router     = require('koa-router')();
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(async(ctx, next) =>{
    if(/^\/api/.test(ctx.url) || /^\/cookie/.test(ctx.url)){
        if(!ctx.headers['authorization'] &&  !ctx.cookies.get('username')){
            ctx.body = {
                code   : -1,
                message: '请先登录'
            }
            return;
        }

    }
    await next().catch(e =>{
        ctx.body ={
            code   : -1,
            message: e.message
        }
    });
});

app.use(bodyParser());

router.get('/', async(ctx) =>{
    ctx.body = {
        code: 1,
        data: ['koa', 'router']
    }
});

router.put('/login', async(ctx) =>{

    const {username, passwd} = ctx.request.body;

    if(username && passwd){
        ctx.cookies.set('username',username);
        
        ctx.body = {
            code: 1,
            data: "登陆成功"
        }
    }else{
        ctx.throw('用户名或密码错误');
    }
});

router.get('/api/test', async(ctx) =>{
    ctx.body = {
        code: 1,
        data: 'test'
    }
});

router.get('/cookie/test_cookie', async(ctx) =>{
    ctx.body = {
        code: 1,
        data: 'test cookie'
    }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
console.log('server is running at 3000 port...');

module.exports = app;