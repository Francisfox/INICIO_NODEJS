//npm init -y
//npm isntall express --save

//para rodar a aplicação no servidor node entrar na pasta 
//cd 01_proj_inicial
//node .
const app = require('express')()

app.listen(3000, () => console.log(`servidor rodandando`));
app.get('/',(req, res) => {
    res.send('Javascript and node francismar');
    //res.send({javascript:10,node:10}); //pode usar um objeto que ele aparece em json na tela
});