//import { Player } from "./player";

window.addEventListener('load',function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class InputHandler {
        constructor(){
            this.keys = [];
            window.addEventListener('keydown',e => {
                if((e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight' ||
                    e.key === 'Enter'
                    ) && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key);
                }
                console.log(e.key , this.keys);
            });
            window.addEventListener('keyup',e => {
                console.log(e.key,this.keys);
                if( e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight' ||
                    e.key === 'Enter'){
                    this.keys.splice(this.keys.indexOf(e.key), 1)
                }
                console.log(e.key,this.keys);
            });            


        }
    }
    class Player {
        constructor(game){
            this.game = game;
            this.width = 100;
            this.height = 91.3;
            this.x = 0;
            this.y = this.game.height - this.height;
            this.vy = 0;
            this.weight = 1;
            this.image = document.getElementById('player')
            this.speed = 0;
            this.maxSpeed = 5;
            this.gameFrame = 0;
            this.staggerFrames = 5;
            this.sprinteAnimations = [];
            this.animationStates = [
                {
                    name: 'idle',
                    frames: 7,
                }
                {
                     name: 'jump',
                    frames: 7,
                }
                {
                    name: 'fall',
                    frames: 9,
                }
                {
                     name: 'run',
                    frames: 9,
                }
                {
                    name: 'dizzy',
                    frames: 11,
                }
                {
                     name: 'sit',
                    frames: 5,
                }
                {
                    name: 'roll',
                    frames: 7,
                }
                {
                     name: 'bite',
                    frames: 7,
                }
                {
                    name: 'ko',
                    frames: 12,
                }
            ];
        }
        animationStates.forEach((state, index) => {
            let frames = {
                loc: [],
            }
            for (let j = 0. j < state.frames; j++){
                let positionX = j * this.width;
                let positionY = index * this.height;
                frames.loc.push({x: positionX, Y: positionY});
            } 
            sprinteAnimations[state.name] = frames;
        });
        console.log(animationStates);                        
        update(input){
            //horizontal moviment
            this.x += this.speed;
            if(input.includes('ArrowRight')) this.speed = this.maxSpeed;
            else if(input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
            else this.speed = 0;
            if(this.x < 0 ) this.x = 0;
            if(this.x > this.game.width - this.width) this.x = this.game.width - this.width;
            //vertical moviment
            if(input.includes('ArrowUp') && this.onGround()) this.vy -= 20;
            this.y += this.vy;
            if(!this.onGround()) this.vy += this.weight;
            else this.vy = 0;
        }
        draw(context){
            let position = Math.floor(this.gameFrame/this.staggerFrames) % sprinteAnimations["idle"].loc.length;
            let frameX = this.width * position;
            let frameY = sprinteAnimations["idle"].loc.[position].y;
            context.drawImage(this.image,frameX,frameY,this.width,this.height,this.x,this.y,this.width,this.height );
            this.gameFrame++;
        }
        onGround(){
            return this.y >=this.game.height - this.height;
        }
    }

    class Game{
        constructor(width,height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.imput = new InputHandler();
        }
        update(){
            this.player.update(this.imput.keys);
        }
        draw(context){
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height );
    console.log(game);

    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();

});
