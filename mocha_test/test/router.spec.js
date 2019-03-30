const superagent = require('supertest');
const app = require('../app');

function request(){
    // 代理启动node服务
    return superagent(app.listen());
}

// 以下断言库由mocha提供 describe it
describe('Node的接口测试', () =>{
    it("/接口测试", (done) =>{
        // 下面一连串的链式调用来自supertest提供
        request()
            .get('/')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) =>{
                if(err){
                    done(err);
                }
                //这里需要注意，返回的结果都包装在body下了
                if(res.body.code === 1){
                    done();
                }else{
                    done(new Error("接口数据异常"));
                }
            })
    }),
    it("/login接口测试", (done) =>{
        request()
            .put('/login')
            // 发送请求参数 只能在post或者put请求下发送
            .send({username: 'huangss', passwd: '123456'})
            // 设置请求头
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) =>{
                if(err){
                    done(err);
                }

                if(res.body.code === 1){
                    done();
                }else{
                    done(new Error(res.body.message));
                }
            })
    }),
    it("/api/test接口测试, 需要登陆", (done) =>{
        request()
            .get('/api/test')
            .set('authorization', '12321')
            .expect('Content-Type', /json/)
            .end((err, res) =>{
                if(err){
                    done(err);
                }

                if(res.body.code === 1){
                    // 如果没有测试用例没有调用done()接受测试，默认会等待两秒，然后报错
                    done();
                }else{
                    done(new Error(res.body.message));
                }
            })
    })

})