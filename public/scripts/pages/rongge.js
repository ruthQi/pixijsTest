import $ from 'jquery';
import {loadResource, addBtnResource, guide, understand, intro, firstQuestion, btnArr, button1, button2, button3, button4, button6, button6_2, yanhua1, yanhua2} from 'pages/rongge/jsondata';

class RonggeTest{
   constructor(){
      this.width = 750;
      this.scale = window.innerWidth / 750;
      this.height = window.innerHeight/ this.scale;
      this.loader = loadResource();
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
      this.scrollFlag = true;//Ct
      this.positionY = 0;//jt
      this.curStage = "startGuide";//ct
      this.comparePosition = 0;//kt
      this.indexArr = [];//$t
      this.promise;//Tt
 
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
      this.loader.on("progress", (t, n)=>{
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
      this.scroller.setDimensions(this.width, this.height, this.width, this.height);
      //添加内容
      this.addContent();

      this.mainContainer.addChild(this.bgContainer);
      this.mainView.render(this.mainContainer);
      this.endView.render(this.endContainer);
      this.bgContainer.interactive = true;
      this.bgContainer.buttonMode = true;
      
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
      });
      // window.addEventListener("touchend",  () => {
      //    console.log('!!!!!!!!!!!!!!!!!!!!!!!!',this.promise)
      //    this.promise && (clearTimeout(this.promise.timer), this.promise.resolve())
      // });
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

      if(!this.scrollFlag){
         this.bgContainer.position.y = -2 * top
      }
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

      this.bgContainer.addChild(this.contentContainer, this.btnContainer);
      
   }

   showJsonAnimate(jsonContainer, num){//h
      //console.log(jsonContainer)
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
         let time = jsonContainer.children[i].duration ? jsonContainer.children[i].duration : 1000;
         arr.push(()=>{
            let timer = null;
            var resolveFun;
            let promise = new Promise((resolve, reject)=>{
               resolveFun = resolve;
               this.showTweenAnimate(jsonContainer.children[i]);
               timer = setTimeout(() => {
                  resolve();
               }, time);
               
            })
            promise.timer = timer;
            promise.resolve = resolveFun;
            this.promise = promise;
            return promise;
         })
      }
      this.forFun(arr).then(()=>{
         this.positionY += 30;
         if("startGuide" == this.curStage){
            this.showBtn(this.btnContainer.children[0]);
         }
         if("guide1" == this.curStage){
            this.showBtn(this.btnContainer.children[1]);
         }
         if("q1" == this.curStage){
            this.showBtn(this.btnContainer.children[2]);
         }
         if("guide_end2" == this.curStage){
            
         }
         if("q2" == this.curStage){
            
         }
         if("q3" == this.curStage){
            
         }
         if("q4" == this.curStage){
            
         }
         if("q5" == this.curStage){
            
         }
         if("q6" == this.curStage){
            
         }
         if("q6_state2" == this.curStage){
            
         }
         if("input" == this.curStage){
            
         }
         if("end" == this.curStage){
            
         }
         //"startGuide" == ct ? x(Ze.children[0]) : "guide1" == ct ? x(Ze.children[1]) : "q1" == ct ? x(Ze.children[2]) : 
         //"guide_end2" == ct ? q() : "q2" == ct ? S() : "q3" == ct ? B() : "q4" == ct ? U() : "q5" == ct ? X() : "q6" == ct ? R() : "q6_state2" == ct ? F() : "input" == ct ? J() : "end" == ct && G()
      })
   }

   forFun(arr){//l()
      let resolve = Promise.resolve();
      arr.forEach((e) => {
         resolve = resolve.then(e);
      });
      
      return resolve;
   }

   showBtn(obj){//x()
      //console.log(obj)
      obj.visible = true;
      let height = 100;
      let tween1 = new TWEEN.Tween({
         y: 0
      }).to({
         y: -height - 12
      }, 240).onUpdate(function () {
         let self = this;
         obj.children.forEach(function (e, n) {
            e.position.y = self.y
         })
      }).onStart(function () {
         obj.tween = tween1;
      }).start(),
      tween2 = new TWEEN.Tween({
         y: -112
      }).to({
         y: -height
      }, 260).onUpdate(function () {
         let self = this;
         obj.children.forEach(function (e, n) {
            e.position.y = self.y
         })
      }).onStart(function () {
         obj.tween = tween2;
     }),
      tween3 = new TWEEN.Tween({
         scale: 1
      }).to({
         scale: 1.03
      }, 120).onUpdate(function () {
         let self = this;
         obj.children.forEach(function (e, n) {
             e.scale.set(self.scale)
         })
     }).onStart(function () {
         obj.tween = tween3;
     }),
      tween4 = new TWEEN.Tween({
         scale: 1.03
      }).to({
         scale: .98
      }, 120).onUpdate(function () {
         let self = this;
         obj.children.forEach(function (e, n) {
            e.scale.set(self.scale)
         })
     }).onStart(function () {
         obj.tween = tween4
     }),
      tween5 = new TWEEN.Tween({
         scale: .98
      }).to({
         scale: 1.03
      }, 120).onUpdate(function () {
         let self = this;
         obj.children.forEach(function (e, n) {
            e.scale.set(self.scale)
         })
     }).onStart(function () {
         obj.tween = tween5
     }),
      tween6 = new TWEEN.Tween({
         scale: 1.03
      }).to({
         scale: .98
      }, 120).onUpdate(function () {
         let self = this;
         obj.children.forEach(function (e, n) {
            e.scale.set(self.scale)
         })
      }).onStart(function () {
         obj.tween = tween6;
      }),
      tween7 = new TWEEN.Tween({
         scale: .98
      }).to({
         scale: 1
      }, 120).onUpdate(function () {
         var self = this;
         obj.children.forEach(function (e, n) {
            e.scale.set(self.scale)
         })
      }).onComplete( () => {
         this.scroller.setDimensions(this.width, this.height, this.width, this.comparePosition / 2 + this.height);
         //this.scroller.scrollTo(0, this.comparePosition / 2, 0);
         this.scrollFlag = false;
      }).onStart(function () {
         obj.tween = tween7;
      });
      tween1.chain(tween2);
      tween2.chain(tween3);
      tween3.chain(tween4);
      tween4.chain(tween5);
      tween5.chain(tween6);
      tween6.chain(tween7);
   }

   

   promiseFun(fun, time){//p()
      let timer;
      var resolveFun;
      let promise = new Promise((resolve, reject)=>{
         resolveFun = resolve;
         timer = setTimeout(() => {
            resolve();
         }, time);
      });
      promise.then(()=>{
         fun();
      });
      promise.resolve = resolveFun;
      promise.timer = timer;
      this.promise = promise;
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
            if(this.comparePosition <= subContainer.parent.position._y - height){
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
            }else if(this.comparePosition < subContainer.parent.position._y){
               this.showQ3Animate(subContainer.parent.position._y - this.comparePosition)
            }
         }
      }
   }  
   showQ3Animate(height, time){//f()
      this.comparePosition += height;
      time = time ? time : 300;
      this.btnContainer.children.forEach((e) => {
         //console.log(e.chosen)
         if(!e.chosen){
            e.position.set(0, this.comparePosition)
         }
      });
      let position = this.bgContainer.position;
      new TWEEN.Tween(position).to({
         _y: -this.comparePosition
      }, 1000).onUpdate(() => {
         this.bgContainer.position.set(0, -this.comparePosition);
         //console.log('++++++++++++++++++++++++', this.bgContainer.position)
         //st.canMove || (st.position.y = -rt.position.y)
     }).start()
   }
   addBtnContent(){//g()
      addBtnResource();
      for(var i = 0; i < btnArr.length; i++){
         let btnContainer = new PIXI.Container();
         for(var j = 0; j < btnArr[i].length; j++){
            let obj = btnArr[i][j];
            let objContainer = new PIXI.Container();
            let spriteAni = new PIXI.extras.AnimatedSprite(obj.btnAni);
            spriteAni.loop = false;
            spriteAni.animationSpeed = 0.4;
            let btnSprite;
            if(obj.text){
               btnSprite = new PIXI.Sprite(PIXI.loader.resources[this.imgSrc + 'animate/btn_text.json'].textures[obj.text + '.png']);
               if(obj.btnAni == button1){
                  btnSprite.position.set((obj.width - btnSprite.width)/2, 17 + (90 - btnSprite.height) / 2);
               }else if(obj.btnAni == button2){
                  btnSprite.position.set((obj.width - btnSprite.width)/2, 9 + (88 - btnSprite.height) / 2);
               }else if(obj.btnAni == button3){
                  btnSprite.position.set((obj.width - btnSprite.width)/2, 9 + (88 - btnSprite.height) / 2);
               }else if(obj.btnAni == button4){
                  if(i == 2){
                     btnSprite.position.set((obj.width - btnSprite.width)/2, 58 + (80 - btnSprite.height) / 2);
                  }
                  if(i == 6){
                     btnSprite.position.set((obj.width - btnSprite.width)/2, 58 + (80 - btnSprite.height) / 2);
                  }
                  if(i == 8){
                     btnSprite.position.set((obj.width - btnSprite.width)/2, 30 + (88 - btnSprite.height) / 2);
                  }
               }
            }
            let yanhua1Sprite = new PIXI.extras.AnimatedSprite(yanhua1);
            yanhua1Sprite.loop = false;
            yanhua1Sprite.position.set(-60, -60);
            yanhua1Sprite.animationSpeed = 0.5;
            yanhua1Sprite.visible = false;
            objContainer.fire1 = yanhua1Sprite;
            let yanhua2Sprite = new PIXI.extras.AnimatedSprite(yanhua2);
            yanhua2Sprite.loop = false;
            yanhua2Sprite.position.set(obj.width - 80, -60);
            yanhua2Sprite.animationSpeed = 0.5;
            yanhua2Sprite.visible = false;
            objContainer.fire2 = yanhua2Sprite;
            if(obj.btnAni == button4){
               yanhua1Sprite.position.set(-30, -30);
               yanhua2Sprite.position.set(obj.width - 110, -30)
            }
            if(obj.text){
               objContainer.addChild(spriteAni, btnSprite, yanhua1Sprite, yanhua2Sprite);
            }else{
               objContainer.addChild(spriteAni, yanhua1Sprite, yanhua2Sprite);
            }
            objContainer.pivot.set(obj.width/2, obj.height/2)
            objContainer.position.set(obj.position.x + obj.width / 2, obj.position.y + obj.height / 2);
            objContainer.interactive = true;
            objContainer.buttonMode = true;
            objContainer.index = j;
            objContainer.bg = spriteAni;
            objContainer._width = obj.width;
            objContainer.state = obj.state;
            objContainer.on('tap', (e)=>{
               this.btnClick(e)
            });
            btnContainer.addChild(objContainer);
         }
         btnContainer.visible = false;
         this.btnContainer.addChild(btnContainer);
      }
   }
   btnClick(e){//m()
      let target = e.target;
      if(!target.parent.chosen){
         target.parent.chosen = true;
         this.scrollFlag = true;
         target.parent.tween.stop();
         for(let i = 0; i < target.parent.children.length; i++){
            let child = target.parent.children[i];
            if(target !== child){
               new TWEEN.Tween({
                  scale: 1
               }).to({
                  scale: 0
               }, 200).onUpdate(function(){
                  child.scale.set(this.scale);
               }).start();
            }
         }
         let tweenBig = new TWEEN.Tween({
            scale: 1
         }).to({
            scale: 1.2
         }, 200).onUpdate(function () {
            target.scale.set(this.scale)
         }).onComplete(function () {
            target.bg.play();
         }).start();

         if("q2" == target.state){
            this.showTailAni(target.index);
         }
         if("q3" == target.state){
            this.showHouseAni(target.index);
         }
         let tweenSmall = new TWEEN.Tween({
            scale: 1.2
         }).to({
            scale: .9
         }, 300).onUpdate(function () {
            target.scale.set(this.scale)
         }).onComplete(function () {
            target.fire1.visible = true;
            target.fire1.play();
            target.fire2.visible = true;
            target.fire2.play();
         });

         let positionX = 750 - target._width + target.pivot.x;
         let positionTween = new TWEEN.Tween(target.position).to({
            _x: positionX,
            _y: 100 + this.positionY - target.parent.position.y - this.height
         }, 300).onComplete(() => {
            this.positionY += target.height - 70 + 30;
            if("guide1" == target.state){
               this.curStage = 'guide1';
               console.log(this.contentContainer.children[1])
               this.promiseFun(()=>{
                  this.showJsonAnimate(this.contentContainer.children[1]);
               }, 500)
            }else if("q1" == target.state){
               this.curStage = 'q1';
               this.showJsonAnimate(this.contentContainer.children[2]);
            }else if("guide_end" == target.state){
               this.showJsonAnimate(this.contentContainer.children[2]);
               this.curStage = 'q1';
            }else if("guide_end2" == target.state){
               this.showJsonAnimate(this.contentContainer.children[3]);
               this.curStage = 'guide_end2';
            }else if("q1_end" == target.state){
               
            }else if("q4" == target.state){
               
            }else if("q5" == target.state){
               
            }else if("q6" == target.state){
               
            }
         });
         tweenBig.chain(tweenSmall, positionTween);
      }   
   }
   showTailAni(index){//k()

   }
   showHouseAni(index){//A()

   }
}

new RonggeTest();