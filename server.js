//npm init -y
//npm isntall express --save

const app = require('express')();
app.listen(3000, () => console.log(`servidor rodandando`));
app.get('/',(req, res) => {
    res.send('Javascript and node');
    //res.send({javascript:10,node:10}); //pode usar um objeto que ele aparece em json na tela
});