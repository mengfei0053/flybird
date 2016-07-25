/**
 * Created by meng on 2016/6/27.
 */
function Pipe(params) {
    this.options = {
        x : 0,
        y : 0,
        upY : 0,
        // width : 20,
        // height : 20,
        speed : -1,
        speedPlus : -0.005,
        distance : 160
    };

    extend(this.options,params);

    this.options.height = Math.random()*200 + 30;
    this.options.upY = this.options.height - this.options.upPipe.height;
    this.options.y = this.options.height + this.options.distance;
}

extend(Pipe.prototype,{
    draw : function () {
       this.options.ctx.drawImage(this.options.downPipe,
       this.options.x,this.options.y,
           this.options.downPipe.width,
           this.options.downPipe.height);
       
       this.options.ctx.drawImage(this.options.upPipe,
       this.options.x,this.options.upY,
           this.options.upPipe.width,
           this.options.upPipe.height);

        // this.options.ctx.strokeStyle = "red";
        this.options.ctx.rect(this.options.x,this.options.y,
            this.options.downPipe.width,
            this.options.downPipe.height);
        this.options.ctx.rect(this.options.x,this.options.upY,
            this.options.upPipe.width,
            this.options.upPipe.height);
        // this.options.ctx.stroke();
   },
    updata : function () {
        this.options.x += this.options.speed;
        if(this.options.speed <= -6){
            this.options.speed = -6;
        }else{
            this.options.speed += this.options.speedPlus;
        }
        if(this.options.x < -this.options.upPipe.width){
            this.options.x = this.options.upPipe.width*3*6 -this.options.upPipe.width;
        }
    }

});