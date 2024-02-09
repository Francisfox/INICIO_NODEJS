   export default class Player {
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
	    this.playerState = 'idle';
            this.staggerFrames = 5;
            this.sprinteAnimations = [];
	    this.animationStates = [
                {
                    name: 'idle',
                    frames: 7,
                },
                {
                     name: 'jump',
                    frames: 7,
                },
                {
                    name: 'fall',
                    frames: 9,
                },
                {
                     name: 'run',
                    frames: 9,
                },
                {
                    name: 'dizzy',
                    frames: 11,
                },
                {
                     name: 'sit',
                    frames: 5,
                },
                {
                    name: 'roll',
                    frames: 7,
                },
                {
                     name: 'bite',
                    frames: 7,
                },
                {
                    name: 'ko',
                    frames: 12,
                }
            ];
            this.animationStates.forEach((state, index) => {
                let frames = {
                    loc: [],
                }
                for (let j = 0; j < state.frames; j++){
                    let positionX = j * this.width;
                    let positionY = index * this.height;
                    frames.loc.push({x: positionX, Y: positionY});
                } 
            this.sprinteAnimations[state.name] = frames;
            });
		this.posicao = Math.floor(this.gameFrame/this.staggerFrames)  % this.sprinteAnimations[this.playerState].loc.length;
console.log(this.sprinteAnimations[this.playerState].loc.length);
console.log(this.gameFrame);
console.log(this.staggerFrames);
console.log(Math.floor(this.gameFrame/this.staggerFrames));
console.log(this.posicao);
        } 
                 
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
            let position = Math.floor(this.gameFrame/this.staggerFrames) % this.sprinteAnimations[this.playerState].loc.length;
            let frameX = this.width * position;
            let frameY = 0  * this.height; //this.sprinteAnimations[this.playerState].loc[position].y;
	    context.drawImage(this.image, frameX, frameY,this.width, this.height, this.x ,this.y, this.width, this.height);    
            this.gameFrame++;
        }
        onGround(){
            return this.y >=this.game.height - this.height;
        }
    }
