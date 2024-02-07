
function setup(){
    createCanvas(300, 200);
}
function draw(){
    background(220);

      // Desenha um círculo que se move horizontalmente
      ellipse(x, height / 2, 100, 100);

      // Atualiza a posição x para criar a animação
      x = x + 2;

      // Reinicia a posição quando atinge o final da tela
      if (x > width) {
        x = 0;
      }
  
}