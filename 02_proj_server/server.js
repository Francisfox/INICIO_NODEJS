//npm init -y
//npm isntall express --save

const app = require('express')()
const server = require('http').createServer(app)
const PORT = 3001

const io = require("socket.io")(server)

app.listen(PORT, () => console.log(`servidor rodandando`));
app.get('/',(req, res) => {
    res.send('Javascript and node programacao' );
    //res.send({javascript:10,node:10}); //pode usar um objeto que ele aparece em json na tela
});