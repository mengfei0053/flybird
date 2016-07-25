/**
 * Created by meng on 2016/6/28.
 */
(function (w) {
    function Sky(params) {
        this.options = {
            x : 0,
            y : 0,
            // width : 20,
            // height : 20,
        };

        extend(this.options,params);
    }
    extend(Sky.prototype,{
        draw : function () {
            this.options.ctx.drawImage(this.options.skyImg,
                this.options.x,this.options.y,
                this.options.skyImg.width,
                this.options.skyImg.height);
        }
        // updata : function () {
        //     this.options.x += this.options.speed;
        //     this.options.speed += this.options.speedPlus;
        //     if(this.options.x < -this.options.landImg.width){
        //         this.options.x = this.options.landImg.width*3;
        //     }
        // }

    });
    
    
    w.Sky = Sky;
    
    
})(window);