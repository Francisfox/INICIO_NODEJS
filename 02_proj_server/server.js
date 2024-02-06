//npm init -y
//npm isntall express --save

const app = require('express')()
const server = require('http').createServer(app)
//const io = require("socket.io")(server)
//const io = require('Socket.io')(server,{cors: {origin:'https://3000-francisfox-inicionodejs-cbzu6jtzyy9.ws-us108.gitpod.io/'}})
const PORT = 3001
app.listen(PORT, () => console.log(`servidor rodandando`));
app.get('/',(req, res) => {
    res.send('Javascript and node programacao' );
    //res.send({javascript:10,node:10}); //pode usar um objeto que ele aparece em json na tela
});