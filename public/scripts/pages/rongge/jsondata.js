let imgSrc = '/images/rongge/';
let loader = PIXI.loader;

exports.loadResource = () => {
   loader.add(imgSrc + "end/black_bg.png")
         .add(imgSrc + "text_stable/inner_text.png")
         .add(imgSrc + "text_stable/outer_text.png")
         .add(imgSrc + "text_stable/outer_big.png")
         .add(imgSrc + "text_stable/inner_big.png")
         .add(imgSrc + "bottom_logo.png")
         .add(imgSrc + "animate/guide.json")
         .add(imgSrc + "animate/q1.json")
         .add(imgSrc + "animate/q2.json")
         .add(imgSrc + "animate/q3.json")
         .add(imgSrc + "animate/q4.json")
         .add(imgSrc + "animate/q6.json")
         .add(imgSrc + "animate/fire.json")
         .add(imgSrc + "animate/btn2.json")
         .add(imgSrc + "q5/dia_1.png")
         .add(imgSrc + "q5/dia_2.png")
         .add(imgSrc + "q5/dia_3.png")
         .add(imgSrc + "q7/dia_1.png")
         .add(imgSrc + "q7/dia_2.png")
         .add(imgSrc + "q7/end_1.png")
         .add(imgSrc + "q7/end_2.png")
         .add(imgSrc + "q7/end_3.png")
         .add(imgSrc + "q7/end_4.png")
         .add(imgSrc + "q7/end_5.png")
         .add(imgSrc + "q7/name_bg.png")
         .add(imgSrc + "q7/end_6.png")
         .add(imgSrc + "end/share_text.png")
         .add(imgSrc + "end/weibo_share.png")
         .add(imgSrc + "end/save_text.png")
         .add(imgSrc + "end/block.png")
         .add(imgSrc + "end/bottom_left_text.png")
         .add(imgSrc + "end/final_text.png")
         .add(imgSrc + "animate/btn_text.json")
         .add(imgSrc + "end/3_bg.png")
         .add(imgSrc + "end/3_rect.png")
   return loader
}  

exports.guide = [{
      bg: "rect_1.png",
      content: [{
         type: "image",
         url: "hand1.png",
         positionY: 26
      }]
   }, {
      bg: "rect_2.png",
      duration: 1500
   }, {
      bg: "rect_3.png",
      content: [{
         type: "image",
         url: "hand2.png",
         positionY: 26
      }, {
         type: "image",
         url: "hand2.png",
         positionY: 26
      }, {
         type: "image",
         url: "hand2.png",
         positionY: 26
      }]
   }, {
      bg: "rect_4.png",
      duration: 1500
   }, {
      bg: "rect_5.png"
   }, {
      bg: "rect_6.png",
      duration: 1e3
   }];

exports.understand = [{
      bg: "rect_7.png"
   }, {
      bg: "rect_8.png"
   }, {
      bg: "rect_9.png"
   }, {
      bg: "rect_10.png"
   }]

exports.intro = [{
      bg: "d0.png"
   }, {
      bg: "d10.png"
   }, {
      bg: "d1.png"
   }, {
      bg: "d2.png"
   }, {
      bg: "d3.png"
   }, {
      bg: "d4.png"
   }];

exports.firstQuestion = [{
      bg: "d7.png"
   }, {
      bg: "d8.png"
   }]

let yanhua1 = [], yanhua2 = [], button1 = [], button2 = [], button3 = [], button4 = [], button6 = [], button6_2 = [];
exports.addBtnResource = () => {
   for(let i = 0; i < 27; i++){//Xt
      yanhua1.push(loader.resources[imgSrc + 'animate/fire.json'].textures['yanhua1_000' + (i < 10 ? '0'+i : i) + '.png']);
   }
   for(let i = 0; i < 27; i++){//Dt
      yanhua2.push(PIXI.loader.resources[imgSrc + 'animate/fire.json'].textures['yanhua2_000' + (i < 10 ? '0'+i : i) + '.png']);
   }
   for(let i = 0; i < 12; i++){//Pt
      button1.push(PIXI.loader.resources[imgSrc + 'animate/btn2.json'].textures['button1_000' + (i < 10 ? '0'+i : i) + '.png']);
   }
   for(let i = 0; i < 12; i++){//Bt
      button2.push(PIXI.loader.resources[imgSrc + 'animate/btn2.json'].textures['button2_000' + (i < 10 ? '0'+i : i) + '.png']);
   }
   for(let i = 0; i < 10; i++){//At
      button3.push(PIXI.loader.resources[imgSrc + 'animate/btn2.json'].textures['button3_000' + (i < 10 ? '0'+i : i) + '.png']);
   }
   for(let i = 0; i < 10; i++){//Wt
      button4.push(PIXI.loader.resources[imgSrc + 'animate/btn2.json'].textures['button4_000' + (i < 10 ? '0'+i : i) + '.png']);
   }
   for(let i = 0; i < 10; i++){//Ut
      button6.push(PIXI.loader.resources[imgSrc + 'animate/btn2.json'].textures['button6_000' + (i < 10 ? '0'+i : i) + '.png']);
   }
   for(let i = 0; i < 10; i++){//Nt
      button6_2.push(PIXI.loader.resources[imgSrc + 'animate/btn2.json'].textures['button6_2_000' + (i < 10 ? '0'+i : i) + '.png']);
   }
}

exports.button1 = button1;
exports.button2 = button2;
exports.button3 = button3;
exports.button4 = button4;
exports.button6 = button6;
exports.button6_2 = button6_2;
exports.yanhua1 = yanhua1;
exports.yanhua2 = yanhua2;

exports.btnArr = [
   [{
       btnAni: button1,
       text: "1_btn_1",
       width: 220,
       height: 150,
       position: {
           x: 100,
           y: 0
       },
       state: "guide1"
   }, {
       btnAni: button1,
       text: "1_btn_2",
       width: 220,
       height: 150,
       position: {
           x: 430,
           y: 0
       },
       state: "q1"
   }],
   [{
       btnAni: button1,
       text: "1_btn_2",
       width: 220,
       height: 150,
       position: {
           x: 265,
           y: 0
       },
       state: "guide_end"
   }],
   [{
       btnAni: button4,
       text: "1_btn_3",
       width: 400,
       height: 200,
       position: {
           x: 175,
           y: 0
       },
       state: "guide_end2"
   }],
   [{
       btnAni: button1,
       text: "2_btn_1",
       width: 220,
       height: 150,
       position: {
           x: 100,
           y: 0
       },
       state: "q1_end"
   }, {
       btnAni: button1,
       text: "2_btn_2",
       width: 220,
       height: 150,
       position: {
           x: 430,
           y: 0
       },
       state: "q1_end"
   }],
   [{
       btnAni: button2,
       text: "3_btn_1",
       width: 160,
       height: 140,
       position: {
           x: 25,
           y: 0
       },
       state: "q2"
   }, {
       btnAni: button2,
       text: "3_btn_2",
       width: 160,
       height: 140,
       position: {
           x: 205,
           y: 0
       },
       state: "q2"
   }, {
       btnAni: button2,
       text: "3_btn_3",
       width: 160,
       height: 140,
       position: {
           x: 385,
           y: 0
       },
       state: "q2"
   }, {
       btnAni: button2,
       text: "3_btn_4",
       width: 160,
       height: 140,
       position: {
           x: 565,
           y: 0
       },
       state: "q2"
   }],
   [{
       btnAni: button3,
       text: "4_btn_1",
       width: 130,
       height: 140,
       position: {
           x: 10,
           y: 0
       },
       state: "q3"
   }, {
       btnAni: button3,
       text: "4_btn_2",
       width: 130,
       height: 140,
       position: {
           x: 160,
           y: 0
       },
       state: "q3"
   }, {
       btnAni: button3,
       text: "4_btn_3",
       width: 130,
       height: 140,
       position: {
           x: 310,
           y: 0
       },
       state: "q3"
   }, {
       btnAni: button3,
       text: "4_btn_4",
       width: 130,
       height: 140,
       position: {
           x: 460,
           y: 0
       },
       state: "q3"
   }, {
       btnAni: button3,
       text: "4_btn_5",
       width: 130,
       height: 140,
       position: {
           x: 610,
           y: 0
       },
       state: "q3"
   }],
   [{
       btnAni: button4,
       text: "5_btn_1",
       width: 400,
       height: 200,
       position: {
           x: 0,
           y: 0
       },
       state: "q4"
   }, {
       btnAni: button4,
       text: "5_btn_2",
       width: 400,
       height: 200,
       position: {
           x: 350,
           y: 0
       },
       state: "q4"
   }],
   [{
       btnAni: button1,
       text: "6_btn_1",
       width: 220,
       height: 150,
       position: {
           x: 100,
           y: 0
       },
       state: "q5"
   }, {
       btnAni: button1,
       text: "6_btn_2",
       width: 220,
       height: 150,
       position: {
           x: 430,
           y: 0
       },
       state: "q5"
   }],
   [{
       btnAni: button6,
       width: 300,
       height: 175,
       position: {
           x: 50,
           y: 0
       },
       state: "q6"
   }, {
       btnAni: button6_2,
       width: 380,
       height: 175,
       position: {
           x: 380,
           y: 0
       },
       state: "q6"
   }]
]