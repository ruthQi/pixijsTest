import $ from 'jquery';
import {guide, understand, intro, firstQuestion} from 'pages/rongge/jsondata';

class RonggeTest{
   constructor(){
      this.width = 750;
      this.scale = window.innerWidth / 750;
      this.height = window.innerHeight/ this.scale;
      this.loader = PIXI.loader;
      //Ae
      this.mainContainer = new PIXI.Container();
      this.mainContainer.width = this.width;
      this.mainContainer.height = this.height;
      //We
      this.endContainer = new PIXI.Container();
      this.endContainer.width = this.width;
      this.endContainer.height = this.height;

      this.bgContainer = new PIXI.Container();//rt
      this.operationFlag = false;
      this.positionY = 0;//jt
      this.curStage = "start_guide";//ct
      this.comparePosition = 0;//kt
 
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
      
      let bg = this.renderRect({
         color: 16119285,
         width: 750,
         height: 1e4,
         x: 0,
         y: 0
      })
      this.bgContainer.addChild(bg);
      //添加内容
      this.addContent();

      this.mainContainer.addChild(this.bgContainer);
      this.mainView.render(this.mainContainer);
      this.endView.render(this.endContainer);
      this.bgContainer.interactive = true;
      this.bgContainer.buttonMode = true;
      this.scroller.setDimensions(this.width, this.height, this.width, this.height);
      this.bindEvent();
      this.updateLoop();
      

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

   renderJsonAnimate(jsonData, jsonFile){//c
      let jsonContainer = new PIXI.Container();//i
      let jsonContainerHeight = 0;//a
      //let jsonPosition = 0;//o
      for(var i = 0; i < jsonData.length; i++){
         let itemContainer = new PIXI.Container();//r
         let sprite;
         if(jsonFile){
            sprite = new PIXI.Sprite(PIXI.loader.resources[this.imgSrc + jsonFile].textures[jsonData[i].bg])
         }else{
            sprite = new PIXI.Sprite(this.loader.resources[this.imgSrc + jsonData[i].bg].texture)
         }
         itemContainer.addChild(sprite);
         if(jsonData[i].content){
            let content = jsonData[i].content;
            for(var j = 0; j < content.length; j++){
               let contentItem = content[j];//h
               let contentSprite;//e
               let itemTween, itemTween1, itemTween2, itemTween3;
               if("image" == contentItem.type){
                  if(jsonFile){
                     contentSprite = new PIXI.Sprite(PIXI.loader.resources[this.imgSrc + jsonFile].textures[contentItem.url])
                  }else{
                     contentSprite = PIXI.Sprite.fromImage(this.imgSrc + contentItem.url)
                  }
                  if(content.length > 1){
                     contentSprite.position.set(40 + 50 * j, contentItem.positionY);
                  }else{
                     contentSprite.pivot.set(28, 28);
                     contentSprite.position.set(118, contentItem.positionY + 28);
                     itemTween = new TWEEN.Tween({
                        rotation: 0
                     }).to({
                        rotation: -15 / 180 * Math.PI
                     }, 140).onUpdate(function () {
                        contentSprite.rotation = this.rotation
                     });
                     itemTween1 = new TWEEN.Tween({
                        rotation: -15 / 180 * Math.PI
                     }).to({
                        rotation: 0
                     }, 140).onUpdate(function () {
                        contentSprite.rotation = this.rotation
                     });
                     itemTween2 = new TWEEN.Tween({
                        rotation: 0
                     }).to({
                        rotation: -15 / 180 * Math.PI
                     }, 140).onUpdate(function () {
                        contentSprite.rotation = this.rotation
                     });
                     itemTween3 = new TWEEN.Tween({
                        rotation: -15 / 180 * Math.PI
                     }).to({
                        rotation: 0
                     }, 140).onUpdate(function () {
                        contentSprite.rotation = this.rotation
                     })
                     contentSprite.tween = itemTween;
                     itemTween.chain(itemTween1);
                     itemTween1.chain(itemTween2);
                     itemTween2.chain(itemTween3);
                  }
               }else if("text_image" == contentItem.type){
                  contentSprite = new PIXI.Sprite(PIXI.loader.resources[this.imgSrc + jsonFile].textures[contentItem.url]);
                  contentSprite.position.set(40, contentItem.positionY)
               }
               itemContainer.addChild(contentSprite);
            }
         }
         itemContainer.duration = jsonData[i].duration;
         itemContainer._height = itemContainer.height - 17;
         itemContainer.pivot.set(14, itemContainer.height - 23);
         itemContainer.position.set(19, 30 + jsonContainerHeight + itemContainer.height - 23);
         //jsonPosition += itemContainer.height - 17;
         jsonContainerHeight += itemContainer._height;
         itemContainer.scale.set(0);
         jsonContainer.addChild(itemContainer)
      }
      jsonContainer._height = jsonContainerHeight;
      this.contentContainer.addChild(jsonContainer);
   }
   addContent(){//o
      this.contentContainer = new PIXI.Container();//Ke;
      this.renderJsonAnimate(guide, "animate/guide.json");
      this.renderJsonAnimate(understand, "animate/guide.json");
      this.renderJsonAnimate(intro, "animate/q1.json");
      this.renderJsonAnimate(firstQuestion, "animate/q1.json");

      this.btnContainer = new PIXI.Container();//Ze
      this.btnContainer.position.set(0, this.height);
      this.addBtnContent(); 
      this.showJsonAnimate(this.contentContainer.children[0]);
      setTimeout(() => {
         this.contentContainer.children[0].children[0].children[1].tween.start()
     }, 800),


      this.bgContainer.addChild(this.contentContainer);
      
   }

   showJsonAnimate(jsonContainer, num){//h
      console.log(jsonContainer)
      jsonContainer.position.set(0, this.positionY);
      let arr = [];
      if(num){
         let height = 0;
         jsonContainer.children.forEach(function (item, index) {
            if(index >= num){
               jsonContainer.position.set(19, 30 + height + jsonContainer._height + 17 - 23);
               height += jsonContainer._height;
            }
         })
      }else{
         num = 0;
      }
      for(let i = num; i < jsonContainer.children.length; i++){
         arr.push(()=>{
            let timer = null;
            let promise = new Promise((resolve, reject)=>{
               this.showTweenAnimate(jsonContainer.children[i]);
               timer = setTimeout(() => {
                  resolve();
               }, jsonContainer.children[i].duration || 1e3);
               
            })
            promise.timer = timer;
            return promise;
         })
      }
      this.forFun(arr).then(()=>{
         this.positionY += 30;
         //"startGuide" == ct ? x(Ze.children[0]) : "guide1" == ct ? x(Ze.children[1]) : "q1" == ct ? x(Ze.children[2]) : "guide_end2" == ct ? q() : "q2" == ct ? S() : "q3" == ct ? B() : "q4" == ct ? U() : "q5" == ct ? X() : "q6" == ct ? R() : "q6_state2" == ct ? F() : "input" == ct ? J() : "end" == ct && G()
      })
   }

   forFun(arr){//l
      let resolve = Promise.resolve();
      arr.forEach((e) => {
         resolve = resolve.then(e);
      });
      return resolve;
   }

   showTweenAnimate(subContainer, num){//u
      let bigTween = new TWEEN.Tween({
         scale: 0
      }).to({
         scale: 1.05
      }, 280).onUpdate(function(){
         subContainer.scale.set(this.scale);
      }).start();
      let smallTween = new TWEEN.Tween({
         scale: 1.05
      }).to({
         scale: 1
      }, 220).onUpdate(function(){
         subContainer.scale.set(this.scale);
      });
      bigTween.chain(smallTween);
      let height = subContainer._height;
      this.positionY += height;
      if("q4_state2" != this.curStage && "q6_state2" != this.curStage){
         if(!num){
            if(this.comparePosition <= subContainer.position.y - height){
               if("guide2" == this.curStage){
                  height += 90;
               }
               if('q1' == this.curStage){
                  height += 50;
               }
               if('q2' == this.curStage){
                  height += 140;
               }
               if('q3' == this.curStage){
                  height += 140;
               }
               if('q4' == this.curStage){
                  height += 145;
               }
               if('q5' == this.curStage){
                  height += 145;
               }
               if('q6' == this.curStage){
                  height += 170;
               }
               if('end' == this.curStage){
                  height += 50;
               }
               this.showQ3Animate(height);
            }else if(this.comparePosition < subContainer.position.y){
               this.showQ3Animate(subContainer.parent.position.y - this.comparePositiont)
            }
         }
      }
   }  
   showQ3Animate(height, time){
      this.comparePosition += height;
      // Ze.children.forEach(function (e) {
      //    e.chosen || e.position.set(0, kt)
      // });
     new TWEEN.Tween(this.bgContainer.position).to({
         y: -this.comparePosition
     }, time || 300).onUpdate(function () {
         //st.canMove || (st.position.y = -rt.position.y)
     }).start()
   }
   addBtnContent(){//g()
      
   }
}

new RonggeTest();