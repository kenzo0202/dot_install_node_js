var express = require("express"),
    app = express(),
    logger = require("morgan"),
    bodyParser = require("body-parser");

app.set("views",__dirname + "/views");
app.set("view engine","ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//middleware
//リクエストが来た時に順次これらを実行してくださいという意味
app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));
app.use(function(req,res,next){
    console.log("my custom middleware");
    next();
});
//app.get ("/users/:name?",function(req,res){
//    
//    if(req.params.name){
//        res.send(req.params.name);
//    }else{
//        res.send("何もないよ！！");
//    }
//
//});
//
//app.get ("/items/:id([0-9]+)", function(req, res){
//    res.send("item.no"+ req.params.id);
//});
////正規表現も使えるよ

//app.get("/",function(req,res){
//    res.render("index", {title: "title"});
//});
//
//app.param("id",function(req,res,next,id){
//    var users = ["kenzo", "taro" , "yujiro"];
//    req.params.name = users[id];
//    next();
//})

app.get("/new", function(req,res){
    res.render("new");
});
app.post("/create", function(req,res){
    res.send(req.body.name);
});



app.listen(3000);
console.log("server starting");