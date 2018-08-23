   function o() {
       if (Ee) {
           qe = !0, t(), e("#loading").fadeOut(), rt = new Ie;
           var n = ie({
               color: 16119285,
               width: 750,
               height: 1e4,
               x: 0,
               y: 0
           });
           rt.addChild(n), Ke = new Ie, c(dt[0], "animate/guide.json"), c(dt[1], "animate/guide.json"), c(dt[2], "animate/q1.json"), c(dt[3], "animate/q1.json"), Ze = new Ie, Ze.position.set(0, _e), g(), h(Ke.children[0]), setTimeout(function () {
               Ke.children[0].children[0].children[1].tween.start()
           }, 800), c(Fe, "animate/q1.json"), c(He, "animate/q3.json"), c(Ye, "animate/q4.json"), c(Je, "animate/q4.json"), c(Oe), c(Ge, "animate/q6.json"), c(ze, "animate/q6.json"), c(Qe), inputBox = Y(), st = new Pe(Se[we + "animate/q3.json"].textures["cover.png"]), st.alpha = 0, rt.addChild(st), rt.addChild(Ke, inputBox, Ze), setTimeout(function () {
               je.add(we + "animate/mirror1.json").add(we + "animate/mirror1_light.json").add(we + "animate/mirror2.json").add(we + "animate/mirror2_light.json").load(function () {
                   E(), je.add(we + "animate/tail1.json").add(we + "animate/tail2.json").add(we + "animate/bird.json").add(we + "animate/feather.json").load(function () {
                       j(), je.add(we + "animate/house.json").load(function () {
                           P(), je.add(we + "music2/1.json").add(we + "music2/2.json").add(we + "music2/3.json").add(we + "music2/4.json").load(function () {
                               W(), je.add(we + "animate/paint1_1.json").add(we + "animate/paint1_2.json").add(we + "animate/paint1_3.json").add(we + "animate/paint2_1.json").add(we + "animate/paint2_2.json").add(we + "animate/blood.json").load(function () {
                                   M(), je.add(we + "animate/bailing_1.json").add(we + "animate/bailing_2.json").add($e).load(function () {
                                       L()
                                   })
                               })
                           })
                       })
                   })
               })
           }, 500), Ve = new Ie, Ae.addChild(rt), We.addChild(Ve), Ue.render(Ae), Ne.render(We), pe(), rt.on("touchstart", s).on("touchmove", r).on("touchend", d), rt.interactive = !0, rt.buttonMode = !0, qt.setDimensions(WIDTH, _e, WIDTH, 0)
       }
   }

   function ie(e) {
       var t = new Be;
       return t.beginFill(e.color), t.drawRect(0, 0, e.width, e.height), t.position.set(e.x ? e.x : 0, e.y ? e.y : 0), t.endFill(), t
   }