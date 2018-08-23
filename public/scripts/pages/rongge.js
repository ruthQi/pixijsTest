import $ from 'jquery';

class RonggeTest{
   constructor(){
      this.width = 750;
      this.scale = window.innerWidth / 750;
      this.height = window.innerHeight/ this.scale;
      this.loader = PIXI.loader;
      this.operationFlag = false;
      
      //Ae
      this.mainContainer = new PIXI.Container();
      this.mainContainer.width = this.width;
      this.mainContainer.height = this.height;
      //We
      this.endContainer = new PIXI.Container();
      this.endContainer.width = this.width;
      this.endContainer.height = this.height;
      this.imgSrc = '/images/rongge/';
      $('#content').css({
         "-webkit-transform": "rotate(0deg) scale(" + this.scale + ") translate3d(0,0,0)",
         width: "750px",
         height: this.height
      })
      this.init();
   }

   init(){
      this.initView();
      this.initScroller(); 
   }

   initView(){
      this.mainView = new PIXI.CanvasRenderer(this.width, this.height);//Ue
      this.endView = new PIXI.CanvasRenderer(this.width, this.height, {
         backgroundColor: "0xffffff"
      });//Ve
      $('#main').append(this.mainView.view);
      this.loader.add(this.imgSrc + "end/black_bg.png")
                 .add(this.imgSrc + "text_stable/inner_text.png")
                 .add(this.imgSrc + "text_stable/outer_text.png")
                 .add(this.imgSrc + "text_stable/outer_big.png")
                 .add(this.imgSrc + "text_stable/inner_big.png")
                 .add(this.imgSrc + "bottom_logo.png")
                 .add(this.imgSrc + "animate/guide.json")
                 .add(this.imgSrc + "animate/q1.json")
                 .add(this.imgSrc + "animate/q2.json")
                 .add(this.imgSrc + "animate/q3.json")
                 .add(this.imgSrc + "animate/q4.json")
                 .add(this.imgSrc + "animate/q6.json")
                 .add(this.imgSrc + "animate/fire.json")
                 .add(this.imgSrc + "animate/btn2.json")
                 .add(this.imgSrc + "q5/dia_1.png")
                 .add(this.imgSrc + "q5/dia_2.png")
                 .add(this.imgSrc + "q5/dia_3.png")
                 .add(this.imgSrc + "q7/dia_1.png")
                 .add(this.imgSrc + "q7/dia_2.png")
                 .add(this.imgSrc + "q7/end_1.png")
                 .add(this.imgSrc + "q7/end_2.png")
                 .add(this.imgSrc + "q7/end_3.png")
                 .add(this.imgSrc + "q7/end_4.png")
                 .add(this.imgSrc + "q7/end_5.png")
                 .add(this.imgSrc + "q7/name_bg.png")
                 .add(this.imgSrc + "q7/end_6.png")
                 .add(this.imgSrc + "end/share_text.png")
                 .add(this.imgSrc + "end/weibo_share.png")
                 .add(this.imgSrc + "end/save_text.png")
                 .add(this.imgSrc + "end/block.png")
                 .add(this.imgSrc + "end/bottom_left_text.png")
                 .add(this.imgSrc + "end/final_text.png")
                 .add(this.imgSrc + "animate/btn_text.json")
                 .add(this.imgSrc + "end/3_bg.png")
                 .add(this.imgSrc + "end/3_rect.png")
                 .on("progress", (t, n)=>{
                     let progress = parseInt(t.progress);
                     $('#loading .splash-percentage').text(`${progress}%`)
                 })
                 .load(this.loaderMain);
   }
   loaderMain = () => {
      $("#loading").fadeOut();
      this.bgContainer = new PIXI.Container();//rt
      let bg = this.renderRect({
         color: 16119285,
         width: 750,
         height: 1e4,
         x: 0,
         y: 0
      })
      this.bgContainer.addChild(bg);
      this.mainContainer.addChild(this.bgContainer);
      this.mainView.render(this.mainContainer);
      this.endView.render(this.endContainer);
      this.bgContainer.interactive = true;
      this.bgContainer.buttonMode = true;
      console.log(this.scroller)
      this.scroller.setDimensions(this.width, this.height, this.width, 0);
      this.updateLoop();
      this.bindEvent();

   }
   bindEvent(){
      this.bgContainer.on('touchstart', (e)=>{
         let data = e.data.originalEvent;
         this.operationFlag = true;
         this.scroller.doTouchStart(data.touches, data.timeStamp)
      })
      this.bgContainer.on('touchmove', (e)=>{
         if (this.operationFlag) {
            let data = e.data.originalEvent;
            this.scroller.doTouchMove(data.touches, data.timeStamp, data.scale)
        }
      })
      this.bgContainer.on('touchend', (e)=>{
         let data = e.data.originalEvent;
         this.scroller.doTouchEnd(data.timeStamp);
         this.operationFlag = false;
      })
   }
   renderRect(config){
      let rect = new PIXI.Graphics();
      rect.beginFill(config.color);
      rect.drawRect(0, 0, config.width, config.height);
      rect.position.set(config.x ? config.x : 0, config.y ? config.y : 0);
      rect.endFill();
      return rect;
   }
   updateLoop(){
      TWEEN.update();
      requestAnimationFrame(()=>{this.updateLoop()});
      this.mainView.render(this.mainContainer);
      this.endView.render(this.endContainer);
   }
   initScroller(){
      this.scroller = new Scroller(this.scrollFun, {
         zooming: false,
         animating: true,
         bouncing: false,
         animationDuration: 1e3
     })
   }
   scrollFun = (left, top, bottom) => {
      console.log(left, top, bottom)
      this.bgContainer.position.y = -2 * top
   }
}

new RonggeTest();