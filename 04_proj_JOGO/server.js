//npm init -y
//npm isntall express --save
//npm install socket.io

//para rodar a aplicação no servidor node entrar na pasta 
//cd 04_proj_JOGO
//node .

const http = require("http");
const express = require("express");
const app = express();

const servidorHTTP = http.createServer(app);
const io = require("socket.io")(servidorHTTP);

app.use(express.static("public"));

app.listen(3000, () => {
    console.log(`> Server listening on port: 3000`)
})