const express = require("express");
const app = express();


//criançao de rota get parametro res é para send 
app.get("/", function(req, res){
    res.send("Seja bem vindo ao Servidor");
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});




//Função é aultima linha do codigo com funcao de callback

