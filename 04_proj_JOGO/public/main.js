//import { Player } from "./player";

window.addEventListener('load',function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Player {
        constructor(game){
            this.game = game;
            this.width = 100;
            this.height = 91.3;
            this.x = 0;
            this.y = this.game.height - this.height;
        }
        update(){

        }
        draw(context){
            context.fillStyle = 'red'
            context.fillRect(this.x,this.y, this.width,this.height);
        }
    }

    class Game{
        constructor(width,height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
        }
        update(){

        }
        draw(context){
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height );
    console.log(game);

    function animate(){
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();

});