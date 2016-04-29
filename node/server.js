var http =require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    qs = require('querystring');
var settings = require('./settings');
console.log(settings);
var server = http.createServer();
var template = fs.readFileSync(__dirname + '/public_html/bbs.ejs','utf-8');
var posts = [];
function renderForm(posts,res){
    var data = ejs.render(template, {
        posts: posts
    });
            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.write(data);
            res.end();
};
//ブロッキングな処理
server.on('request', function(req,res){
    if (req.method ==="POST"){
        //初期化
        req.data = "";
        req.on("readable",function(){
            req.data += req.read();
        });
        req.on("end",function(){
            var query = qs.parse(req.data);
            posts.push(query.name);
            renderForm(posts,res);
        });
    }else{
        renderForm(posts,res);
    }
    });
    
//    var data = ejs.render(template,{
//        title: "hello",
//        content: "<strong>Hello!</strong>",
//        n: n
//    });
//            res.writeHead(200,{'Content-Type' : 'text/html'});
//            res.write(data);
//            res.end();
//    switch(req.url){
//        case '/about' :
//            msg = "about this page";
//            break;
//        case '/profile':
//            msg = "about me";
//            break;
//        default:
//            msg ="wrong page"
//    }


server.listen(settings.port,settings.host);
console.log("login server...")