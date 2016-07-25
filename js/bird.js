/**
 * Created by meng on 2016/6/27.
 */
(function (w) {
    /**
     * 创建鸟类
     * 给鸟类，添加各种实例属性
     * 1.绘图上下文ctx
     * 2.图片帧数framIndex
     * 3.方向direction
     * 4.裁剪坐标clipx,clipy
     * 5.裁剪大小clipW,clipH
     * 6.渲染放置坐标x,y
     * 7.渲染大小width,height
     */


    /**
     * 
     * @param param
     * /** params说明：
     ctx  // 绘图上下文，必须传
     img   // 小鸟图片，必须传
     clipX  // 裁剪x轴开始位置，必须传
     clipY  // 裁剪y轴开始位置，必须传
     clipW  // 裁剪的宽度，必须传
     clipH  // 裁剪的高度，必须传


     frameIndex   // 显示的第几帧
     direction    // 方向
     x   //  渲染时的x轴坐标
     y    //  渲染时的y轴坐标
     width   //  渲染时的宽度
     height  //  渲染时的高度
     speed : 1  // 飞翔的速度（整数下飞，负数上飞）
     **/
    function Bird(param) {
        this.options = {
            frameIndex : 0,
            direction : 0,
            x : 0,
            y : 0,
            width : 52,
            height : 45,
            speed : 4,
            speedPlus : 0.1
        };
        
        extend(this.options,param);
    }

    // function Bird(ctx,birdImg,frameIndex,direction,clipW,clipH,x,y,width,height) {
    //     this.birdImg = birdImg;
    //     this.ctx = ctx;
    //     this.frameIndex = frameIndex;
    //     this.direction = direction;
    //     this.clipX = frameIndex*clipW;
    //     this.clipY = 0;
    //     this.clipW = clipW;
    //     this.clipH = clipH;
    //     this.x = x;
    //     this.y = y;
    //     this.width = width;
    //     this.height = height;
    //     this.speed = 2;
    // }
    //使用鸟类的实例属性，给Bird类原型添加bird实例能够继承的方法，用来显示或者叫绘制实例
    Bird.prototype.draw = function () {
        /*
         *
         * 步骤1：
         * 计算小鸟的中心点算法：
         * x轴：小鸟要渲染x轴坐标 + width / 2
         * y轴：小鸟要渲染y轴坐标 + height / 2
         *
         * 步骤2：
         * 平移坐标系到算好的图形中心点2
         *
         * 步骤3：
         * 旋转坐标系指定弧度
         *
         * 步骤4：
         * 绘制图形，x轴是-width/2,y轴是-height/2
         * */

        //保存状态
        this.options.ctx.save();

        //步骤1
        var birdOriginX = this.options.x + this.options.width/2;
        var birdOriginY = this.options.y + this.options.height/2;

        //步骤2，移动坐标系
        this.options.ctx.translate(birdOriginX,birdOriginY);
        
        //步骤3
        
        var resultAngle = angle(this.options.speed*10) > angle(40) ? angle(40) : angle(this.options.speed*10);
        this.options.ctx.rotate(resultAngle);

        this.options.ctx.drawImage(this.options.birdImg,
            this.options.clipX, this.options.clipY,
            this.options.clipW,this.options.clipH,
            -this.options.width/2,-this.options.height/2,
            this.options.width,this.options.height);

        //初始化状态
        this.options.ctx.restore();
    };
    
    Bird.prototype.updata = function () {
        this.options.frameIndex = ++this.options.frameIndex % 3;//最大值是2，当时3的时候是0
        this.options.y += this.options.speed;

        //通过frameIndex值的不断变化，来不断改变剪切位置的X轴，来显示不同的帧的小鸟
        this.options.clipX = this.options.frameIndex*this.options.clipW;
        this.options.speed += this.options.speedPlus;
    };
    w.Bird = Bird;

}(window));