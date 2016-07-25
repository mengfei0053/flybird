/**
 * Created by meng on 2016/6/28.
 */
(function (w) {
    function Land(params) {
        this.options = {
            x : 0,
            y : 0,
            // width : 20,
            // height : 20,
            speed : -1,
            speedPlus : -0.005
        };

        extend(this.options,params);
    }

    extend(Land.prototype,{
        draw : function () {
            this.options.ctx.drawImage(this.options.landImg,
                this.options.x,this.options.y,
                this.options.landImg.width,
                this.options.landImg.height);

            // this.options.ctx.strokeStyle = "red";
            this.options.ctx.rect(this.options.x,this.options.y,
                this.options.landImg.width,
                this.options.landImg.height);
            // this.options.ctx.stroke();
        },
        updata : function () {
            this.options.x += this.options.speed;
            this.options.speed += this.options.speedPlus;
            if(this.options.x < -this.options.landImg.width){
                this.options.x = this.options.landImg.width*3;
            }
        }

    });

    w.Land = Land;

})(window);

    
    
