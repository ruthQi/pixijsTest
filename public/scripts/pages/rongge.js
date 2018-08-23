import $ from 'jquery';

class RonggeTest{
   constructor(){
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.loader = PIXI.loader;
      this.imgSrc = '/images/rongge/'
      $('#content').css({
         "-webkit-transform": "rotate(0deg) scale(" + this.scale + ") translate3d(0,0,0)",
         width: "750px",
         height: this.height
      })
      this.init();
   }

   init(){
      this.initView();
      
   }

   initView(){
      this.mainView = new PIXI.CanvasRenderer(this.width, this.height, {
         backgroundColor: '0xffffff'
      });//Ue
      this.endView = new PIXI.CanvasRenderer(this.width, this.height, {
         backgroundColor: '0xffffff'
      });//Ve
      $('#main').append(this.endView.view);
      $('#main').append(this.mainView.view);
      $('#content').height(this.height);
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
      

   }
   
}

new RonggeTest();