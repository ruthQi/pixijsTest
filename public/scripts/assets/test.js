! function (e) {
   function t(t) {
       WIDTH = window.innerWidth, _e = window.innerHeight, WIDTH < _e ? (SCALE = WIDTH / 750, WIDTH = 750, _e /= SCALE, Ue && Ue.resize(750, _e), e("#content").css({
           "-webkit-transform": "rotate(0deg) scale(" + SCALE + ") translate3d(0,0,0)",
           width: "750px",
           height: _e
       }), !0 === t && (Ee = !0, qe || o())) : t || (Ee = !1, e("#content").hide(), e(".warning").show())
   }

   function n(e) {
       var t = document.getElementById(e),
           n = function e() {
               document.removeEventListener("WeixinJSBridgeReady", e), document.removeEventListener("YixinJSBridgeReady", e), t.play(), t.pause()
           };
       document.addEventListener("WeixinJSBridgeReady", n, !1), document.addEventListener("YixinJSBridgeReady", n, !1)
   }

   function i() {
       e(".qrcode img")[0].src ? ($e = e(".qrcode img")[0].src, e(".qrcode").remove()) : setTimeout(function () {
           i()
       }, 30)
   }

   function a(t, n) {
       var i = parseInt(t.progress);
       e("#loading .splash-percentage").html(i + "%")
   }

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

   function s(e) {
       var t = e.data.originalEvent;
       It = !0, qt.doTouchStart(t.touches, t.timeStamp)
   }

   function r(e) {
       if (It) {
           var t = e.data.originalEvent;
           qt.doTouchMove(t.touches, t.timeStamp, t.scale)
       }
   }

   function d(e) {
       var t = e.data.originalEvent;
       qt.doTouchEnd(t.timeStamp), It = !1
   }

   function c(e, t) {
       for (var n = e, i = new Ie, a = 0, o = 0, s = 0; s < n.length; s++) {
           var r = new Ie;
           if (t) var d = new Pe(Se[we + t].textures[n[s].bg]);
           else var d = new Pe(je.resources[we + n[s].bg].texture); if (r.addChild(d), n[s].content)
               for (var c = 0; c < n[s].content.length; c++) {
                   var h, l, p, u, f;
                   ! function () {
                       h = n[s].content[c];
                       var e = void 0;
                       "image" == h.type ? (e = t ? new Pe(Se[we + t].textures[h.url]) : PIXI.Sprite.fromImage(we + h.url), n[s].content.length > 1 ? e.position.set(40 + 50 * c, h.positionY) : (e.pivot.set(28, 28), e.position.set(118, h.positionY + 28), l = new TWEEN.Tween({
                           rotation: 0
                       }).to({
                           rotation: -15 / 180 * Math.PI
                       }, 140).onUpdate(function () {
                           e.rotation = this.rotation
                       }), p = new TWEEN.Tween({
                           rotation: -15 / 180 * Math.PI
                       }).to({
                           rotation: 0
                       }, 140).onUpdate(function () {
                           e.rotation = this.rotation
                       }), u = new TWEEN.Tween({
                           rotation: 0
                       }).to({
                           rotation: -15 / 180 * Math.PI
                       }, 140).onUpdate(function () {
                           e.rotation = this.rotation
                       }), f = new TWEEN.Tween({
                           rotation: -15 / 180 * Math.PI
                       }).to({
                           rotation: 0
                       }, 140).onUpdate(function () {
                           e.rotation = this.rotation
                       }), e.tween = l, l.chain(p), p.chain(u), u.chain(f))) : "text_image" == h.type && (e = new Pe(Se[we + t].textures[h.url]), e.position.set(40, h.positionY)), r.addChild(e)
                   }()
               }
           r.duration = n[s].duration, r._height = r.height - 17, r.pivot.set(14, r.height - 23), r.position.set(19, 30 + o + r.height - 23), o += r.height - 17, a += r._height, r.scale.set(0), i.addChild(r)
       }
       i._height = a, Ke.addChild(i)
   }

   function h(e, t) {
       e.position.set(0, jt);
       var n = [];
       if (t) {
           var i = 0;
           e.children.forEach(function (e, n) {
               n >= t && (e.position.set(19, 30 + i + e._height + 17 - 23), i += e._height)
           })
       } else t = 0;
       for (var a = t; a < e.children.length; a++)! function (t) {
           n.push(function () {
               var n, i = null,
                   a = new Promise(function (a, o) {
                       n = a, u(e.children[t]), i = setTimeout(function () {
                           a()
                       }, e.children[t].duration || 1e3)
                   });
               return a.timer = i, a.resolve = n, Tt = a, a
           })
       }(a);
       l(n).then(function () {
           jt += 30, "startGuide" == ct ? x(Ze.children[0]) : "guide1" == ct ? x(Ze.children[1]) : "q1" == ct ? x(Ze.children[2]) : "guide_end2" == ct ? q() : "q2" == ct ? S() : "q3" == ct ? B() : "q4" == ct ? U() : "q5" == ct ? X() : "q6" == ct ? R() : "q6_state2" == ct ? F() : "input" == ct ? J() : "end" == ct && G()
       })
   }

   function l(e) {
       var t = Promise.resolve();
       return e.forEach(function (e) {
           t = t.then(e)
       }), t
   }

   function p(e, t) {
       var n, i = new Promise(function (e, i) {
           n = e, timer = setTimeout(function () {
               e()
           }, t)
       });
       i.then(function () {
           e()
       }), i.timer = timer, i.resolve = n, Tt = i
   }

   function u(e, t) {
       var n = new TWEEN.Tween({
               scale: 0
           }).to({
               scale: 1.05
           }, 280).onUpdate(function (t) {
               e.scale.set(this.scale)
           }).start(),
           i = new TWEEN.Tween({
               scale: 1.05
           }).to({
               scale: 1
           }, 220).onUpdate(function (t) {
               e.scale.set(this.scale)
           });
       n.chain(i);
       var a = e._height;
       jt += a, "q4_state2" != ct && "q6_state2" != ct && (t || (kt <= e.parent.position.y - a ? ("guide2" == ct && (a += 90), "q1" == ct && (a += 50), "q2" == ct && (a += 140), "q3" == ct && (a += 140), "q4" == ct && (a += 145), "q5" == ct && (a += 145), "q6" == ct && (a += 170), "end" == ct && (a += 50), f(a)) : kt < e.parent.position.y && f(e.parent.position.y - kt)))
   }

   function f(e, t) {
       kt += e, Ze.children.forEach(function (e) {
           e.chosen || e.position.set(0, kt)
       });
       new TWEEN.Tween(rt.position).to({
           y: -kt
       }, t || 300).onUpdate(function () {
           st.canMove || (st.position.y = -rt.position.y)
       }).start()
   }

   function g() {
       for (var e = 0; e < 27; e++) Xt.push(Se[we + "animate/fire.json"].textures["yanhua1_000" + (e < 10 ? "0" + e : e) + ".png"]);
       for (var e = 0; e < 27; e++) Dt.push(Se[we + "animate/fire.json"].textures["yanhua2_000" + (e < 10 ? "0" + e : e) + ".png"]);
       for (var e = 0; e < 12; e++) Pt.push(Se[we + "animate/btn2.json"].textures["button1_000" + (e < 10 ? "0" + e : e) + ".png"]);
       for (var e = 0; e < 12; e++) Bt.push(Se[we + "animate/btn2.json"].textures["button2_000" + (e < 10 ? "0" + e : e) + ".png"]);
       for (var e = 0; e < 10; e++) At.push(Se[we + "animate/btn2.json"].textures["button3_000" + (e < 10 ? "0" + e : e) + ".png"]);
       for (var e = 0; e < 10; e++) Wt.push(Se[we + "animate/btn2.json"].textures["button4_000" + (e < 10 ? "0" + e : e) + ".png"]);
       for (var e = 0; e < 10; e++) Ut.push(Se[we + "animate/btn2.json"].textures["button6_000" + (e < 10 ? "0" + e : e) + ".png"]);
       for (var e = 0; e < 10; e++) Nt.push(Se[we + "animate/btn2.json"].textures["button6_2_000" + (e < 10 ? "0" + e : e) + ".png"]);
       for (var t = 0; t < Mt.length; t++) {
           for (var n = new Ie, e = 0; e < Mt[t].length; e++) {
               var i = Mt[t][e],
                   a = new Ie,
                   o = new PIXI.extras.AnimatedSprite(i.btnAni);
               if (o.loop = !1, o.animationSpeed = .4, i.text) {
                   var s = new Pe(Se[we + "animate/btn_text.json"].textures[i.text + ".png"]);
                   i.btnAni == Pt ? s.position.set((i.width - s.width) / 2, 17 + (90 - s.height) / 2) : i.btnAni == Bt ? s.position.set((i.width - s.width) / 2, 9 + (88 - s.height) / 2) : i.btnAni == At ? s.position.set((i.width - s.width) / 2, 9 + (88 - s.height) / 2) : i.btnAni == Wt && 2 == t ? s.position.set((i.width - s.width) / 2, 58 + (80 - s.height) / 2) : i.btnAni == Wt && 6 == t ? s.position.set((i.width - s.width) / 2, 58 + (80 - s.height) / 2) : i.btnAni == Wt && 8 == t && s.position.set((i.width - s.width) / 2, 30 + (88 - s.height) / 2)
               }
               var r = new PIXI.extras.AnimatedSprite(Xt);
               r.loop = !1, r.position.set(-60, -60), r.animationSpeed = .5, r.visible = !1, a.fire1 = r;
               var d = new PIXI.extras.AnimatedSprite(Dt);
               d.loop = !1, d.position.set(i.width - 80, -60), d.animationSpeed = .5, d.visible = !1, a.fire2 = d, i.btnAni == Wt && (r.position.set(-30, -30), d.position.set(i.width - 110, -30)), i.text ? a.addChild(o, s, r, d) : a.addChild(o, r, d), a.pivot.set(i.width / 2, i.height / 2), a.position.set(i.position.x + i.width / 2, i.position.y + i.height / 2), a.interactive = !0, a.buttonMode = !0, a.index = e, a.bg = o, a._width = i.width, a.state = i.state, a.on("tap", m), n.addChild(a)
           }
           n.visible = !1, Ze.addChild(n)
       }
   }

   function x(e) {
       e.visible = !0;
       var t = 100;
       be && (t = 130);
       var n = new TWEEN.Tween({
               y: 0
           }).to({
               y: -t - 12
           }, 240).onUpdate(function () {
               var t = this;
               e.children.forEach(function (e, n) {
                   e.position.y = t.y
               })
           }).onStart(function () {
               e.tween = n
           }).start(),
           i = new TWEEN.Tween({
               y: -112
           }).to({
               y: -t
           }, 260).onUpdate(function () {
               var t = this;
               e.children.forEach(function (e, n) {
                   e.position.y = t.y
               })
           }).onStart(function () {
               e.tween = i
           }),
           a = new TWEEN.Tween({
               scale: 1
           }).to({
               scale: 1.03
           }, 120).onUpdate(function () {
               var t = this;
               e.children.forEach(function (e, n) {
                   e.scale.set(t.scale)
               })
           }).onStart(function () {
               e.tween = a
           }),
           o = new TWEEN.Tween({
               scale: 1.03
           }).to({
               scale: .98
           }, 120).onUpdate(function () {
               var t = this;
               e.children.forEach(function (e, n) {
                   e.scale.set(t.scale)
               })
           }).onStart(function () {
               e.tween = o
           }),
           s = new TWEEN.Tween({
               scale: .98
           }).to({
               scale: 1.03
           }, 120).onUpdate(function () {
               var t = this;
               e.children.forEach(function (e, n) {
                   e.scale.set(t.scale)
               })
           }).onStart(function () {
               e.tween = s
           }),
           r = new TWEEN.Tween({
               scale: 1.03
           }).to({
               scale: .98
           }, 120).onUpdate(function () {
               var t = this;
               e.children.forEach(function (e, n) {
                   e.scale.set(t.scale)
               })
           }).onStart(function () {
               e.tween = r
           }),
           d = new TWEEN.Tween({
               scale: .98
           }).to({
               scale: 1
           }, 120).onUpdate(function () {
               var t = this;
               e.children.forEach(function (e, n) {
                   e.scale.set(t.scale)
               })
           }).onComplete(function () {
               qt.setDimensions(WIDTH, _e, WIDTH, kt / 2 + _e), qt.scrollTo(0, kt / 2, !1), Ct = !1
           }).onStart(function () {
               e.tween = d
           });
       n.chain(i), i.chain(a), a.chain(o), o.chain(s), s.chain(r), r.chain(d)
   }

   function m() {
       var t = this;
       if (!t.parent.chosen) {
           t.parent.chosen = !0, Ct = !0, t.parent.tween.stop();
           for (var n = 0; n < t.parent.children.length; n++)! function (e) {
               var n = t.parent.children[e];
               t !== n && new TWEEN.Tween({
                   scale: 1
               }).to({
                   scale: 0
               }, 200).onUpdate(function () {
                   n.scale.set(this.scale)
               }).start()
           }(n);
           var i = new TWEEN.Tween({
               scale: 1
           }).to({
               scale: 1.2
           }, 200).onUpdate(function () {
               t.scale.set(this.scale)
           }).onComplete(function () {
               t.bg.play()
           }).start();
           "q2" == t.state ? (setTimeout(function () {
               k(t.index)
           }), e("#sun")[0].pause(), e("#tail")[0].play(), e("#tail1")[0].play()) : "q3" == t.state && (setTimeout(function () {
               A(t.index)
           }), e("#tail1")[0].pause(), e("#click")[0].play(), e("#house")[0].play(), e("#music")[0].play(), un = setInterval(function () {
               pn ? (e("#music")[0].currentTime < 5 && (e("#music")[0].currentTime = be ? 5.5 : 5.2), it.music.gotoAndStop(parseInt((e("#music")[0].currentTime - 5) / 30 * 750))) : e("#music")[0].currentTime > 5 && (e("#music")[0].currentTime = 0)
           }, 10)), "guide1" == t.state ? e("#click")[0].play() : "q1" == t.state ? e("#click")[0].play() : "guide_end" == t.state ? e("#click")[0].play() : "guide_end2" == t.state ? e("#click")[0].play() : "q1_end" == t.state ? e("#sun")[0].play() : "q4" == t.state ? (e("#house")[0].pause(), e("#man")[0].play()) : "q5" == t.state ? (e("#man")[0].pause(), e("#click")[0].play(), e("#girl")[0].play()) : "q6" == t.state && (e("#girl")[0].pause(), e("#click")[0].play());
           var a = new TWEEN.Tween({
                   scale: 1.2
               }).to({
                   scale: .9
               }, 300).onUpdate(function () {
                   t.scale.set(this.scale)
               }).onComplete(function () {
                   t.fire1.visible = !0, t.fire1.play(), t.fire2.visible = !0, t.fire2.play()
               }),
               o = 750 - t._width + t.pivot.x;
           "guide_end2" != t.state && "q4" != t.state || (o += 35);
           var s = new TWEEN.Tween(t.position).to({
               x: o,
               y: 100 + jt - t.parent.position.y - _e
           }, 300).onComplete(function () {
               jt += t.height - 70 + 30, "guide1" == t.state ? (ct = "guide1", p(function () {
                   h(Ke.children[1])
               }, 500)) : "q1" == t.state ? (ct = "q1", h(Ke.children[2])) : "guide_end" == t.state ? (h(Ke.children[2]), ct = "q1") : "guide_end2" == t.state ? (h(Ke.children[3]), ct = "guide_end2") : "q1_end" == t.state ? I(t.index) : "q4" == t.state ? N(t.index) : "q5" == t.state ? D(t.index) : "q6" == t.state && H(t.index)
           });
           i.chain(a, s)
       }
   }

   function v(e) {
       for (var t = 0; t < e.length; t++)! function (t) {
           Rt.forEach(function (n) {
               n.index === e[t] && (n.score += 1)
           })
       }(t)
   }

   function b() {
       Rt = [];
       for (var e = 0; e < 12; e++) Rt[e] = {}, Rt[e].index = e, Rt[e].name = Lt[e], Rt[e].score = 0;
       for (var t = 0; t < Qt.length; t++) {
           var n = $t[t];
           v(Qt[t][n])
       }
       _(w(Rt))
   }

   function w(e) {
       for (var t = [], n = 0; n < 7; n++) t[n] = [];
       return e.forEach(function (e) {
           t[e.score].push({
               index: e.index,
               name: e.name,
               score: e.score
           })
       }), t
   }

   function _(e) {
       for (var t, n = 6; n >= 0; n--)
           if (e[n].length > 0) {
               t = e[n];
               break
           }
       for (var i = 0; i < t.length; i++) {
           var a = t[i];
           y(a), T(a)
       }
       for (var o = C(t), s = [], r = 0; r < o.length; r++)! function (e) {
           for (var t = o[e], n = 0; n < t.max.length; n++)! function (e) {
               var n = !1;
               s.forEach(function (i) {
                   i.index === t.max[e].originIdex && (n = !0)
               }), n || s.push({
                   index: t.max[e].originIdex
               })
           }(n)
       }(r);
       var d = 0,
           c = [],
           h = 0,
           l = [];
       s.forEach(function (e, t) {
           12 == e.index && (d++, c[0] = t), 17 == e.index && (d++, c[1] = t), 11 == e.index && (h++, l[0] = t), 14 == e.index && (h++, l[1] = t)
       });
       var p = [];
       s.forEach(function (e, t) {
           2 == d && (t == c[0] || t == c[1]) || 2 == h && (t == l[0] || t == l[1]) || p.push({
               index: e.index
           })
       }), 2 == d && (Rt[Kt[s[c[0]].index][0]].score >= Rt[Kt[s[c[1]].index][0]].score ? p.push({
           index: s[c[0]].index
       }) : Rt[Kt[s[c[0]].index][0]].score < Rt[Kt[s[c[1]].index][0]].score && p.push({
           index: s[c[1]].index
       })), 2 == h && (Rt[Kt[s[l[0]].index][0]].score >= Rt[Kt[s[l[1]].index][0]].score ? p.push({
           index: s[l[0]].index
       }) : Rt[Kt[s[l[0]].index][0]].score < Rt[Kt[s[l[1]].index][0]].score && p.push({
           index: s[l[1]].index
       }));
       var u = 0;
       u = $t[2] % p.length;
       var f = p[u];
       Vt[f.index]++, yt = f.index + 1
   }

   function y(e) {
       e.others = [], Kt.forEach(function (t, n) {
           t[0] == e.index ? e.others.push({
               index: n,
               value: Kt[n][1]
           }) : t[1] == e.index && e.others.push({
               index: n,
               value: Kt[n][0]
           })
       })
   }

   function T(e) {
       e.max = [];
       for (var t = 0, n = 0; n < e.others.length; n++) Rt[e.others[n].value].score >= t && (t = Rt[e.others[n].value].score);
       for (var i = 0; i < e.others.length; i++) Rt[e.others[i].value].score == t && e.max.push({
           index: e.others[i].value,
           score: Rt[e.others[i].value].score,
           name: Rt[e.others[i].value].name,
           originIdex: e.others[i].index
       })
   }

   function C(e) {
       for (var t = 0, n = [], i = 0; i < e.length; i++) {
           var a = e[i].score + e[i].max[0].score;
           a >= t && (t = a)
       }
       for (var o = 0; o < e.length; o++) {
           e[o].score + e[o].max[0].score === t && n.push(o)
       }
       for (var s = [], r = 0; r < n.length; r++) s.push(e[n[r]]);
       return s
   }

   function E() {
       for (var e = [], t = 0; t < 25; t++) e.push(Se[we + "animate/mirror1.json"].textures["mirror2_000" + (t < 10 ? "0" + t : t) + ".png"]);
       for (var n = [], t = 0; t < 25; t++) n.push(Se[we + "animate/mirror1_light.json"].textures["mirror2_light_000" + (t < 10 ? "0" + t : t) + ".png"]);
       for (var i = [], t = 0; t < 25; t++) i.push(Se[we + "animate/mirror2.json"].textures["mirror_000" + (t < 10 ? "0" + t : t) + ".png"]);
       for (var a = [], t = 0; t < 25; t++) a.push(Se[we + "animate/mirror2_light.json"].textures["mirror_light_000" + (t < 10 ? "0" + t : t) + ".png"]);
       et = new Ie;
       var o = new PIXI.extras.AnimatedSprite(e);
       o.interactive = !0, o.buttonMode = !0, o.animationSpeed = .2, o.position.set(30, 0);
       var s = new PIXI.extras.AnimatedSprite(n);
       s.animationSpeed = .2, s.position.set(30, 0);
       var r = new PIXI.extras.AnimatedSprite(i);
       r.animationSpeed = .2, r.position.set(370, -15), r.interactive = !0, r.buttonMode = !0;
       var d = new PIXI.extras.AnimatedSprite(a);
       d.animationSpeed = .2, d.position.set(370, -15), o.visible = !1, r.visible = !1, s.visible = !1, d.visible = !1, et.addChild(o, r, s, d), rt.addChild(et)
   }

   function q() {
       if (!et) return void setTimeout(function () {
           q()
       }, 100);
       et.position.set(0, jt + 80), f(jt - kt - 150 - 30, 600), jt += 80, setTimeout(function () {
           et.children[0].visible = !0, et.children[0].play(), et.children[1].visible = !0, et.children[1].play(), et.children[1].alpha = 0, new TWEEN.Tween({
               alpha: 0
           }).to({
               alpha: 1
           }, 300).onUpdate(function () {
               et.children[0].alpha = this.alpha
           }).start(), new TWEEN.Tween({
               alpha: 0
           }).to({
               alpha: 1
           }, 300).onUpdate(function () {
               et.children[1].alpha = this.alpha
           }).delay(200).onComplete(function () {
               jt += 550, x(Ze.children[3]), et.children[0].on("tap", function () {
                   m.call(Ze.children[3].children[0])
               }), et.children[1].on("tap", function () {
                   m.call(Ze.children[3].children[1])
               })
           }).start()
       }, 600)
   }

   function I(e) {
       et.children[e].visible = !1, et.children[e].stop(), et.children[e + 2].visible = !0, et.children[e + 2].play(), 0 == e ? c(Re, "animate/q1.json") : c(Fe, "animate/q1.json"), $t.push(e), p(function () {
           h(Ke.children[12]), ct = "q2"
       }, 2e3)
   }

   function j() {
       for (var e = 0; e < 17; e++) on.push(Se[we + "animate/tail1.json"].textures["weiba_000" + (e < 10 ? "0" + e : e) + ".png"]);
       for (var e = 0; e < 17; e++) sn.push(Se[we + "animate/tail1.json"].textures["weiba2_000" + (e < 10 ? "0" + e : e) + ".png"]);
       for (var e = 0; e < 17; e++) rn.push(Se[we + "animate/tail2.json"].textures["weiba3_000" + (e < 10 ? "0" + e : e) + ".png"]);
       for (var e = 0; e < 17; e++) dn.push(Se[we + "animate/tail2.json"].textures["weiba4_000" + (e < 10 ? "0" + e : e) + ".png"]);
       tt = new Ie;
       for (var t = new Ie, n = new Pe(Se[we + "animate/q2.json"].textures["bird.png"]), i = new Ie, a = 0; a < 4; a++) {
           var o = cn[a],
               s = new PIXI.extras.AnimatedSprite(o.frames);
           s.animationSpeed = .3, s.loop = 3, s.pivot.set(o.pivot.x, o.pivot.y), s.rotation = Math.PI * (13 / 180), s.position.set(o.position.x + o.pivot.x, o.position.y + o.pivot.y), i.addChild(s), s.interactive = !0, s.buttonMode = !0
       }
       i.visible = !1, tt.tailBox = i;
       for (var r = new Ie, d = [], c = [], h = [], e = 0; e < 32; e++) d.push(Se[we + "animate/feather.json"].textures["yumao_1_000" + (e < 10 ? "0" + e : e) + ".png"]);
       for (var e = 0; e < 32; e++) c.push(Se[we + "animate/feather.json"].textures["yumao_2_000" + (e < 10 ? "0" + e : e) + ".png"]);
       for (var e = 0; e < 32; e++) h.push(Se[we + "animate/feather.json"].textures["yumao_3_000" + (e < 10 ? "0" + e : e) + ".png"]);
       var l = new PIXI.extras.AnimatedSprite(d);
       l.animationSpeed = .4, l.position.set(-230, 80), l.loop = !1;
       var p = new PIXI.extras.AnimatedSprite(c);
       p.animationSpeed = .4, p.position.set(-230, 80), p.loop = !1;
       var u = new PIXI.extras.AnimatedSprite(h);
       u.animationSpeed = .4, u.position.set(-230, 70), u.loop = !1, l.onFrameChange = function () {
           31 == this.currentFrame && (this.visible = !1)
       }, p.onFrameChange = function () {
           31 == this.currentFrame && (this.visible = !1)
       }, u.onFrameChange = function () {
           31 == this.currentFrame && (this.visible = !1)
       }, r.addChild(l, p, u), tt.feather = r, t.addChild(i, r, n), t.position.set(230, 100);
       var f = new Pe(Se[we + "animate/q2.json"].textures["grass.png"]);
       f.position.set(55, 530);
       for (var e = 0; e < 32; e++) an.push(Se[we + "animate/bird.json"].textures["bird_000" + (e < 10 ? "0" + e : e) + ".png"]);
       var g = new PIXI.extras.AnimatedSprite(an);
       g.animationSpeed = .2, tt.birdAni = g, tt.bird = t, tt.bottomGrass = f, t.visible = !1, g.visible = !1, f.visible = !1;
       var x = new Pe(Se[we + "animate/q2.json"].textures["sun.png"]);
       x.position.set(570, 50), x.visible = !1, tt.sun = x;
       var m = new Pe(Se[we + "animate/q2.json"].textures["rect_1.png"]);
       m.pivot.set(14, m.height - 23), m.position.set(19, 600 + m.height - 23), m.visible = !1, m._height = 91, tt.dia = m;
       for (var v = new Ie, e = 0; e < 4; e++) {
           var b = new Pe(Se[we + "animate/q2.json"].textures["icon" + (e + 1) + ".png"]);
           b.position.set(55 + 170 * e, 0), v.addChild(b);
           var w = cn[e];
           i.children[e].scale.set(.6), 0 == e && i.children[e].scale.set(.7), 3 == e && i.children[e].scale.set(.7), i.children[e].position.set(w.scalePosition.x, w.scalePosition.y + 800 - 100)
       }
       v.visible = !1, v.position.set(0, 770), tt.chooseBox = v, tt.addChild(f, m, v, t, g, x), rt.addChild(tt)
   }

   function S() {
       if (!tt) return void setTimeout(function () {
           S()
       }, 100);
       ct = "q2_play", jt += 20, tt.position.set(0, jt), tt.bird.visible = !0, tt.birdAni.visible = !0, tt.bottomGrass.visible = !0, tt.sun.visible = !0, tt.bird.alpha = 0, tt.birdAni.play(), tt.birdAni.alpha = 0, tt.bottomGrass.alpha = 0, tt.sun.alpha = 0, new TWEEN.Tween({
           alpha: 0
       }).to({
           alpha: 1
       }, 800).onUpdate(function () {
           tt.sun.alpha = this.alpha
       }).start(), new TWEEN.Tween({
           alpha: 0
       }).to({
           alpha: 1
       }, 800).onUpdate(function () {
           tt.bird.alpha = this.alpha
       }).delay(400).start(), new TWEEN.Tween({
           alpha: 0
       }).to({
           alpha: 1
       }, 800).onUpdate(function () {
           tt.birdAni.alpha = this.alpha, tt.bottomGrass.alpha = this.alpha
       }).onComplete(function () {
           p(function () {
               tt.dia.visible = !0, tt.dia.scale.set(0), u(tt.dia), p(function () {
                   f(jt - kt - 50, 500), tt.chooseBox.visible = !0, tt.chooseBox.alpha = 0, tt.tailBox.visible = !0, tt.tailBox.alpha = 0, new TWEEN.Tween({
                       alpha: 0
                   }).to({
                       alpha: 1
                   }, 800).onUpdate(function () {
                       tt.chooseBox.alpha = this.alpha, tt.tailBox.alpha = this.alpha
                   }).start(), setTimeout(function () {
                       setTimeout(function () {
                           for (var e = 0; e < tt.tailBox.children.length; e++)! function (e) {
                               tt.tailBox.children[e].on("tap", function () {
                                   m.call(Ze.children[4].children[e])
                               })
                           }(e)
                       }, 30), x(Ze.children[4]), jt += 500
                   }, 500)
               }, 1e3)
           }, 500)
       }).delay(800).start()
   }

   function k(e) {
       $t.push(e), new TWEEN.Tween({
           alpha: 1
       }).to({
           alpha: 0
       }, 300).onUpdate(function () {
           var t = this;
           tt.tailBox.children.forEach(function (n, i) {
               i != e && (n.alpha = t.alpha)
           }), tt.chooseBox.alpha = this.alpha, tt.dia.alpha = this.alpha
       }).start();
       var t = new TWEEN.Tween({
               scale: .6
           }).to({
               scale: .7
           }, 200).onUpdate(function () {
               tt.tailBox.children[e].scale.set(this.scale)
           }).start(),
           n = new TWEEN.Tween({
               scale: .7
           }).to({
               scale: 1
           }, 500).onUpdate(function () {
               tt.tailBox.children[e].scale.set(this.scale)
           }),
           i = new TWEEN.Tween(tt.tailBox.children[e].position).to({
               x: cn[e].position.x + cn[e].pivot.x,
               y: cn[e].position.y + cn[e].pivot.y
           }, 500),
           a = new TWEEN.Tween({
               rotate: 13
           }).to({
               rotate: 0
           }, 300).onUpdate(function () {
               tt.tailBox.children[e].rotation = this.rotate / 180 * Math.PI
           }).onComplete(function () {
               tt.tailBox.children[e].play(), 0 == e && tt.feather.children[0].play(), 1 == e && tt.feather.children[2].play(), 2 != e && 3 != e || tt.feather.children[1].play()
           });
       t.chain(n, i), n.chain(a), setTimeout(function () {
           p(function () {
               h(Ke.children[5]), ct = "q3", setTimeout(function () {
                   new TWEEN.Tween({
                       alpha: 0
                   }).to({
                       alpha: 1
                   }, 2e3).onUpdate(function () {
                       st.alpha = this.alpha
                   }).onComplete(function () {
                       st.canMove = !0
                   }).start(), new TWEEN.Tween({
                       alpha: 0
                   }).to({
                       alpha: 1
                   }, 1500).onUpdate(function () {
                       Ke.children[5].children[0].children[0].alpha = 1 - .4 * this.alpha, Ke.children[5].children[1].children[0].alpha = 1 - .4 * this.alpha, Ke.children[5].children[2].children[0].alpha = 1 - .4 * this.alpha
                   }).start()
               }, 1e3)
           }, 2e3)
       }, 500)
   }

   function P() {
       nt = new Ie;
       var e = new Ie;
       e.scale.set(.9), nt.houseBox = e, e.y = 0;
       var t = new Pe(Se[we + "animate/q3.json"].textures["road.png"]);
       t.position.set(40, 256), t.alpha = 0, nt.road = t, e.addChild(t);
       var n = new Ie;
       e.addChild(n), n.alpha = 0, nt.numberBox = n;
       for (var i = 0; i < 5; i++) {
           for (var a = [], o = 1; o < 4; o++) a.push(Se[we + "animate/house.json"].textures[hn[i].name + o + ".png"]);
           var s = new PIXI.extras.AnimatedSprite(a);
           s.animationSpeed = .1, s.play(), s.position.set(hn[i].position.x, hn[i].position.y), s.alpha = 0, s.interactive = !0, s.buttonMode = !0, e.addChild(s);
           var r = new Pe(Se[we + "animate/q3.json"].textures[ln[i].name + ".png"]);
           r.position.set(ln[i].position.x, ln[i].position.y), n.addChild(r)
       }
       var d = new Pe(Se[we + "animate/q3.json"].textures["flower.png"]);
       d.alpha = 0, d.pivot.set(52, 49), d.position.set(320, 540);
       var c = new Pe(Se[we + "animate/q3.json"].textures["flower.png"]);
       c.alpha = 0, c.pivot.set(52, 49), c.position.set(455, 540), nt.flowerTween = new TWEEN.Tween({
           rotation: 0
       }).to({
           rotation: 2 * Math.PI
       }, 2e3).onUpdate(function () {
           d.rotation = this.rotation, c.rotation = -this.rotation
       }).repeat(1 / 0).start(), nt.flower1 = d, nt.flower2 = c, e.addChild(d, c), nt.houseBox = e, e.visible = !1, nt.addChild(e), rt.addChild(nt)
   }

   function B() {
       if (!nt) return void setTimeout(function () {
           B()
       }, 100);
       ct = "q3_play", f(203), nt.position.set(0, jt), nt.houseBox.visible = !0, new TWEEN.Tween({
           alpha: 0
       }).to({
           alpha: 1
       }, 800).onUpdate(function () {
           nt.road.alpha = this.alpha
       }).delay(700).start(), new TWEEN.Tween({
           alpha: 0
       }).to({
           alpha: 1
       }, 800).onUpdate(function () {
           nt.numberBox.alpha = this.alpha
       }).delay(500).start(), new TWEEN.Tween({
           alpha: 0
       }).to({
           alpha: 1
       }, 800).onUpdate(function () {
           for (var e = 2; e < 9; e++) nt.houseBox.children[e].alpha = this.alpha
       }).delay(300).start(), setTimeout(function () {
           x(Ze.children[5]), jt += 900;
           for (var e = 2; e < 7; e++)! function (e) {
               nt.houseBox.children[e].on("tap", function () {
                   m.call(Ze.children[5].children[e - 2])
               })
           }(e)
       }, 800)
   }

   function A(e) {
       $t.push(e), 2 != e ? nt.flowerTween.stop() : nt.flowerTween.onUpdate(function () {
           nt.flower1.rotation = 1.5 * this.rotation, nt.flower2.rotation = -1.5 * this.rotation
       });
       for (var t = 2; t < 7; t++) t - 2 != e ? nt.houseBox.children[t].stop() : nt.houseBox.children[t].animationSpeed = .2;
       setTimeout(function () {
           p(function () {
               ct = "q4", h(Ke.children[6])
           }, 2e3)
       }, 500)
   }

   function W() {
       it = new Ie;
       for (var e = [], t = 0; t < 749; t++) t < 271 ? e.push(Se[we + "music2/1.json"].textures["music_00" + (t < 10 ? "00" + t : t < 100 ? "0" + t : t) + ".png"]) : t < 516 ? e.push(Se[we + "music2/2.json"].textures["music_00" + t + ".png"]) : t < 741 ? e.push(Se[we + "music2/3.json"].textures["music_00" + t + ".png"]) : e.push(Se[we + "music2/4.json"].textures["music_00" + t + ".png"]);
       var n = new PIXI.extras.AnimatedSprite(e);
       n.position.set(-100, 30), n.alpha = 0, n.animationSpeed = .412, it.addChild(n), it.music = n, rt.addChild(it)
   }

   function U() {
       if (!it) return void setTimeout(function () {
           U()
       }, 100);
       pn = !0, e("#house")[0].pause(), e("#music")[0].currentTime = 5, f(190, 400), it.position.set(0, jt), new TWEEN.Tween({
           alpha: 0
       }).to({
           alpha: 1
       }, 500).onUpdate(function () {
           it.music.alpha = this.alpha
       }).start(), setTimeout(function () {
           jt += 150, ct = "q4_state2", h(Ke.children[7]), setTimeout(function () {
               x(Ze.children[6])
           }, 300), e("#bgm")[0].pause()
       }, 500)
   }

   function N(t) {
       e("#music")[0].pause(), e("#bgm")[0].play(), $t.push(t), p(function () {
           ct = "q5", h(Ke.children[8])
       }, 2e3)
   }

   function M() {
       at = new Ie;
       var e = new Ie;
       e.position.set(52, 0);
       for (var t = [], n = 0; n < 38; n++) n < 16 ? t.push(Se[we + "animate/paint1_1.json"].textures["nvhai_000" + (n < 10 ? "0" + n : n) + ".png"]) : n < 31 ? t.push(Se[we + "animate/paint1_2.json"].textures["nvhai_000" + (n < 10 ? "0" + n : n) + ".png"]) : t.push(Se[we + "animate/paint1_3.json"].textures["nvhai_000" + (n < 10 ? "0" + n : n) + ".png"]);
       var i = new PIXI.extras.AnimatedSprite(t);
       i.animationSpeed = .5, i.loop = !1, e.addChild(i);
       for (var a = [], o = 0; o < 26; o++) o < 16 ? a.push(Se[we + "animate/paint2_1.json"].textures["lang_000" + (o < 10 ? "0" + o : o) + ".png"]) : a.push(Se[we + "animate/paint2_2.json"].textures["lang_000" + (o < 10 ? "0" + o : o) + ".png"]);
       var s = new PIXI.extras.AnimatedSprite(a);
       s.animationSpeed = .4, s.loop = !1, e.addChild(s);
       for (var r = [], d = 0; d < 24; d++) r.push(Se[we + "animate/blood.json"].textures["liuxue_000" + (d < 10 ? "0" + d : d) + ".png"]);
       var c = new PIXI.extras.AnimatedSprite(r);
       c.animationSpeed = .5, c.loop = !1, c.position.set(170, 130);
       var h = new PIXI.extras.AnimatedSprite(r);
       h.animationSpeed = .4, h.position.set(437, 130), h.loop = !1, c.onFrameChange = function () {
           23 == this.currentFrame && (this.stop(), h.gotoAndPlay(0))
       }, h.onFrameChange = function () {
           23 == this.currentFrame && (this.stop(), c.gotoAndPlay(0))
       };
       var l = new PIXI.extras.AnimatedSprite(r);
       l.animationSpeed = .4, l.loop = !0, l.position.set(315, 200), l.onFrameChange = function () {
           this.currentFrame >= 18 ? this.alpha = 0 : this.alpha = 1
       }, e.addChild(c, h, l);
       var p = ie({
           color: 16777011,
           width: 180,
           height: 260,
           x: 40,
           y: 150
       });
       p.interactive = !0, p.buttonMode = !0, p.alpha = 0, at.rect1 = p, e.addChild(p);
       var u = ie({
           color: 16777011,
           width: 200,
           height: 280,
           x: 400,
           y: 50
       });
       u.interactive = !0, u.buttonMode = !0, u.alpha = 0, at.rect2 = u, e.addChild(u), i.alpha = 0, s.alpha = 0, at.paint1 = i, at.paint2 = s, at.blood1 = c, at.blood2 = h, at.blood0 = l, at.addChild(e), rt.addChild(at)
   }

   function X() {
       if (!at) return void setTimeout(function () {
           X()
       }, 100);
       clearInterval(un), f(130, 400), jt += 30, at.position.set(0, jt), new TWEEN.Tween({
           alpha: 0
       }).to({
           alpha: 1
       }, 500).onUpdate(function () {
           at.paint1.alpha = this.alpha
       }).onComplete(function () {
           x(Ze.children[7]), setTimeout(function () {
               at.rect1.on("tap", function () {
                   m.call(Ze.children[7].children[0])
               }), at.rect2.on("tap", function () {
                   m.call(Ze.children[7].children[1])
               })
           }, 30)
       }).start(), jt += 500
   }

   function D(e) {
       $t.push(e), 0 == e ? (at.paint1.play(), setTimeout(function () {
           at.blood0.play()
       }, 1e3)) : (at.paint1.alpha = 0, at.paint2.alpha = 1, at.paint2.play(), setTimeout(function () {
           at.blood1.play()
       }, 1e3)), p(function () {
           ct = "q6", jt += 30, setTimeout(function () {
               h(Ke.children[9])
           }, 830)
       }, 2e3)
   }

   function L() {
       ot = new Ie;
       for (var e = [], t = 0; t < 50; t++) t < 31 ? e.push(Se[we + "animate/bailing_1.json"].textures["niao_000" + (t < 10 ? "0" + t : t) + ".png"]) : e.push(Se[we + "animate/bailing_2.json"].textures["niao_000" + t + ".png"]);
       var n = new PIXI.extras.AnimatedSprite(e),
           i = new Pe(Se[we + "animate/q6.json"].textures["bird_foot.png"]);
       n.position.set(240, -402), i.position.set(336, -86), n.alpha = 0, ot.bailing = n, ot.bailing.animationSpeed = .4, ot.addChild(n, i), rt.addChild(ot)
   }

   function R() {
       if (!ot) return void setTimeout(function () {
           R()
       }, 100);
       ot.position.set(0, jt), ot.bailing.play(), new TWEEN.Tween({
           alpha: 0
       }).to({
           alpha: 1
       }, 500).onUpdate(function () {
           ot.bailing.alpha = this.alpha
       }).onComplete(function () {
           p(function () {
               ct = "q6_state2", jt -= 30, h(Ke.children[10])
           }, 500)
       }).start()
   }

   function F() {
       x(Ze.children[8]), jt -= 30
   }

   function H(e) {
       $t.push(e), b(), he(yt), je.add(we + "text_stable2/" + yt + ".json").add(we + "end_text2/" + Kt[yt - 1][0] + ".json").add(we + "end_text2/" + Kt[yt - 1][1] + ".json").add(we + "q_end2/" + yt + "-0.png").add(we + "q_end2/" + yt + "-1.png").add(we + "q_end2/" + yt + "-2.png").add(we + "result/" + (yt < 10 ? "0" + yt : yt) + ".png").load(z), p(function () {
           ct = "input", h(Ke.children[11])
       }, 2e3)
   }

   function Y() {
       return new Ie
   }

   function J() {
       inputBox.position.set(0, jt), e(".input").addClass("show")
   }

   function O(e) {
       V(e);
       var t = new Ie,
           n = new Pe(je.resources[we + "q7/name_bg.png"].texture);
       t._height = n.height - 17, t.pivot.set(n.width - 14, n.height - 23), t.position.set(736, 30 + n.height - 23);
       var i = new ke(e, {
           fontSize: "28px",
           fill: "#000000"
       });
       i.position.set((n.width - i.width) / 2, 6 + (n.height - 6 - 22 - i.height) / 2), t.addChild(n, i), t.scale.set(0), inputBox.addChild(t), u(t, !0);
       var a = [{
           bg: "q7/end_1.png"
       }, {
           bg: "q7/end_2.png"
       }, {
           bg: "q7/end_3.png"
       }, {
           bg: "result/" + (yt < 10 ? "0" + yt : yt) + ".png"
       }, {
           bg: "q7/end_5.png"
       }, {
           bg: "q_end2/" + yt + "-0.png"
       }, {
           bg: "q_end2/" + yt + "-1.png"
       }, {
           bg: "q_end2/" + yt + "-2.png"
       }, {
           bg: "q7/end_6.png"
       }];
       ct = "end", c(a), p(function () {
           h(Ke.children[13])
       }, 2e3)
   }

   function G() {
       e(".music_share .music_bg").css({
           background: "#" + xt[mt]
       }), e(".saved_main").css({
           top: jt - kt + 3 + 200 + "px"
       }), p(function () {
           e(".saved_main").css({
               top: jt - kt + 3 + "px"
           }), e(".saved_main").addClass("scale"), p(function () {
               e(".saved_main").css({
                   top: 0
               }), e(".saved_main").addClass("full_scene"), setTimeout(function () {
                   e(".check_outer,.check_inner").fadeIn(), e(".check_outer").bind("click", function () {
                       e(".check_outer,.check_inner").hide(), e(".saved_outer").fadeIn(50, function () {
                           e(".return").fadeIn()
                       }), e(".music_share").unbind(), e(".music_share").bind("click", function () {
                           CloudMusic.sharePic({
                               picUrl: tn,
                               text: "这是你的真实内外人格",
                               link: ye
                           })
                       })
                   }), e(".check_inner").bind("click", function () {
                       e(".check_outer,.check_inner").hide(), e(".saved_inner").fadeIn(50, function () {
                           e(".return").fadeIn()
                       }), e(".music_share").unbind(), e(".music_share").bind("click", function () {
                           CloudMusic.sharePic({
                               picUrl: nn,
                               text: "这是你的真实内外人格",
                               link: ye
                           })
                       })
                   }), e(".return").bind("click", function () {
                       e(".return").hide(), e(".saved_outer,.saved_inner").fadeOut(30, function () {
                           e(".check_outer,.check_inner").fadeIn()
                       }), e(".music_share").unbind(), e(".music_share").bind("click", function () {
                           CloudMusic.sharePic({
                               picUrl: en,
                               text: "这是你的真实内外人格",
                               link: ye
                           })
                       })
                   }), me && (e(".music_share").fadeIn(), window.CloudMusic.uploadDataURL(e(".saved_main img").eq(1)[0].src).then(function (t) {
                       en = t.url, e(".music_share").unbind(), e(".music_share").bind("click", function () {
                           CloudMusic.sharePic({
                               picUrl: t.url,
                               text: "这是你的真实内外人格",
                               link: ye
                           })
                       })
                   }, function (e) {
                       alert("出错了" + JSON.stringify(e))
                   }), window.CloudMusic.uploadDataURL(e(".saved_outer img").eq(1)[0].src).then(function (e) {
                       tn = e.url
                   }, function (e) {
                       alert("出错了" + JSON.stringify(e))
                   }), window.CloudMusic.uploadDataURL(e(".saved_inner img").eq(1)[0].src).then(function (e) {
                       nn = e.url
                   }, function (e) {
                       alert("出错了" + JSON.stringify(e))
                   }))
               }, 300)
           }, 8e3)
       }, 100)
   }

   function z() {
       e(".check_outer span").html(Rt[Kt[yt - 1][0]].name), e(".check_inner span").html(Rt[Kt[yt - 1][1]].name);
       var t = new Ie,
           n = new Pe(je.resources[we + "end/black_bg.png"].texture),
           i = ie({
               color: 16777215,
               width: 706,
               height: _e - 32 - 11,
               x: 22,
               y: 25
           }),
           a = new Pe(je.resources[bt.bg].texture);
       if (a.width = 732, a.height = 584, a.position.set(9, 11), n.height = _e, t.addChild(n, i, a), _e >= 1380) {
           var o = .95,
               s = 1.05,
               r = 85,
               d = 636,
               c = 57,
               h = 458;
           e(".check_outer").css({
               top: "523px",
               left: "62px"
           }), e(".check_inner").css({
               top: "1075px",
               left: "62px"
           })
       } else if (_e >= 1200) {
           var o = .9,
               s = .95,
               r = 50,
               d = 536,
               c = 72,
               h = 450;
           e(".check_outer").css({
               top: "465px",
               left: "80px"
           }), e(".check_inner").css({
               top: "955px",
               left: "80px"
           })
       } else if (_e >= 1150) {
           var o = .9,
               s = .95,
               r = 50,
               d = 528,
               c = 72,
               h = 450;
           e(".check_outer").css({
               top: "465px",
               left: "80px"
           }), e(".check_inner").css({
               top: "955px",
               left: "80px"
           })
       } else {
           var o = .8,
               s = .8,
               r = 50,
               d = 488,
               c = 72,
               h = 400;
           e(".check_outer").css({
               top: "420px",
               left: "80px"
           }), e(".check_inner").css({
               top: "870px",
               left: "80px"
           })
       }
       var l = Q(lt[0], !0),
           p = oe(wt[0]),
           u = oe(wt[1]);
       l.addChild(p, u), l.position.set(c, r), l.scale.set(o);
       var f = Q(lt[1], !1),
           g = oe(wt[5]),
           x = oe(wt[6]);
       f.addChild(g, x), x.scale.set(.95), f.isHideCircle && x.position.set(237, 183), f.scale.set(o), f.position.set(c, d);
       var m = $(ht[0][0], !0);
       wt[2].position.y = m._height1 + 25 + 23, wt[3].position.y = m._height2 + 27 + 35;
       var v = oe(wt[2]),
           b = oe(wt[3]),
           w = oe(wt[4]);
       v.scale.set(.947), b.scale.set(.947), w.scale.set(.947), m._height2 > 430 ? (b.position.y -= 30, _e >= 1380 && (b.position.y += 10)) : m._height2 >= 400 && m._height2 <= 420 && (b.position.y -= 20), _e >= 1380 && (b.position.y += 10, w.position.x -= 9), m.addChild(v, b, w), m.scale.set(s), m.position.set(h, r), _e >= 1380 && (m.position.x -= 12);
       var _ = $(ht[0][1], !1);
       wt[7].position.y = _._height1 + 25 + 23;
       var y = oe(wt[7]);
       y.scale.set(.947), _.addChild(y), _.scale.set(s), _.position.set(h, d), _e >= 1380 && (_.position.x -= 12);
       var T = new Ie;
       T.addChild(l, f, m, _), Ve.mainEnd = T, Ve.addChild(t, T);
       var C = K();
       Ve.endBottom = C, Ve.addChild(C);
       var E = Z(Kt[yt - 1][0], !0);
       E.visible = !1;
       var q = Z(Kt[yt - 1][1], !1);
       q.visible = !1, Ve.outerEnd = E, Ve.innerEnd = q, Ve.addChild(E, q)
   }

   function Q(e, t) {
       var n = Se[we + "text_stable2/" + yt + ".json"],
           i = new Ie,
           a = ee(),
           o = ie({
               color: vt,
               width: 367,
               height: 60,
               x: 1,
               y: 1
           }),
           s = ie({
               color: vt,
               width: 367,
               height: 17,
               x: 1,
               y: 205
           }),
           r = ie({
               color: vt,
               width: 367,
               height: 17,
               x: 1,
               y: 337
           }),
           d = ie({
               color: 0,
               width: 369,
               height: 145,
               x: 0,
               y: 60
           }),
           c = new ke(e.text1, {
               fontSize: "28px",
               fill: "#231e22"
           });
       t ? Ve.text1 = c : Ve.text2 = c, c.position.set(15, (60 - c.height) / 2);
       var h = new Pe(n.textures[e.bigText]);
       if (!t && h.width > 300 && (i.isHideCircle = !0), h.position.set((369 - h.width) / 2, 60 + (145 - h.height) / 2), t) {
           var l = new Pe(je.resources[we + "text_stable/outer_big.png"].texture);
           l.position.set(58, 246)
       } else {
           var l = new Pe(je.resources[we + "text_stable/inner_big.png"].texture);
           l.position.set(65, 243)
       }
       i.addChild(o, s, r, a, d, c, h, l);
       var p = new Pe(je.resources[bt.rect].texture);
       i.addChild(p), p.position.set(0, 356);
       for (var u = e.end, f = 0; f < 3; f++) {
           var g = new Pe(n.textures[u[f]]);
           0 == f ? g.position.set((128 - g.width) / 2, 356 + (80 - g.height) / 2) : 1 == f ? g.position.set(128 + (120 - g.width) / 2, 356 + (80 - g.height) / 2) : 2 == f && g.position.set(248 + (120 - g.width) / 2, 356 + (80 - g.height) / 2), i.addChild(g)
       }
       return i
   }

   function $(e, t) {
       for (var n = Se[we + "text_stable2/" + yt + ".json"], i = new Ie, a = 0; a < e.length; a++) {
           var o = new Ie;
           o.position.set(56 * a, 0);
           var s = new Ie,
               r = new Pe(n.textures[e[a]]);
           if (r.alpha = .85, 0 == a) {
               if (t) var d = new Pe(je.resources[we + "text_stable/outer_text.png"].texture);
               else var d = new Pe(je.resources[we + "text_stable/inner_text.png"].texture);
               d.alpha = .85, d.position.set((56 - d.width) / 2, 10), r.position.set((56 - r.width) / 2, 10 + d.height + 8), s.addChild(d, r)
           } else r.position.set((56 - r.width) / 2, 10), s.addChild(r);
           var c = ie({
                   color: 0,
                   width: 56,
                   height: s.height + 20,
                   x: 6,
                   y: 6
               }),
               h = ie({
                   color: 16777215,
                   width: 56,
                   height: s.height + 20,
                   x: 0,
                   y: 0
               });
           o.addChild(c, h);
           var l = new PIXI.Graphics;
           l.lineStyle(1, 13158087, 1), l.moveTo(56, 0), l.lineTo(0, 0), l.lineTo(0, s.height + 20), l.lineTo(56, s.height + 20), o.addChild(l), o.addChild(s), 0 == a ? i._height1 = s.height : 3 == a && (i._height2 = s.height), i.addChild(o)
       }
       return i
   }

   function K() {
       var e = new Ie;
       e.position.set(0, _e - 150);
       var t = ae({
               start: {
                   x: 22,
                   y: 0
               },
               end: {
                   x: 728,
                   y: 0
               },
               color: 7171437
           }),
           n = ae({
               start: {
                   x: 22,
                   y: 27
               },
               end: {
                   x: 728,
                   y: 27
               },
               color: 7171437
           }),
           i = ie({
               color: vt,
               width: 706,
               height: 27,
               x: 22,
               y: 0
           }),
           a = new Pe(je.resources[we + "bottom_logo.png"].texture);
       a.position.set(52, 54);
       var o = new Pe(je.resources[we + "end/share_text.png"].texture);
       o.visible = !1, e.shareText = o, o.position.set(538, 3);
       var s = new Pe(je.resources[we + "end/weibo_share.png"].texture);
       s.visible = !1, e.weiboShare = s, s.position.set(538, 3);
       var r = new Pe(je.resources[we + "end/bottom_left_text.png"].texture);
       r.position.set(54, 3);
       var d = new Pe(je.resources[we + "end/save_text.png"].texture);
       e.saveText = d, d.position.set(600, 3), me || xe || (s.visible = !0, d.visible = !1);
       var c = new Pe(je.resources[we + "end/block.png"].texture);
       e.blockText = c, c.visible = !1, c.position.set(440, 3);
       var h = new Pe(je.resources[we + "end/final_text.png"].texture);
       return h.visible = !1, me || xe || (h.visible = !0), h.position.set(560, 52), e.addChild(i, t, n, a, r, o, s, c, h), e
   }

   function V(t) {
       if (!Ve.mainEnd) return void setTimeout(function () {
           V(t)
       }, 100);
       Ve.outerEnd.text1.text = t + "的外在人格是", Ve.innerEnd.text1.text = t + "的内在人格是", Ve.text1.text = t + "的外在人格是", Ve.text2.text = t + "的内在人格是", setTimeout(function () {
           var t = le(e("canvas")[0]);
           e(".saved_main").append(t), Ve.endBottom.saveText.visible = !1, fn && xe ? Ve.endBottom.blockText.visible = !0 : Ve.endBottom.shareText.visible = !0, fn && me && (Ve.endBottom.blockText.visible = !0, Ve.endBottom.shareText.visible = !1), setTimeout(function () {
               var t = le(e("canvas")[0]);
               e(".saved_main").append(t), e(t).css({
                   opacity: 0
               }), me && e(t).css({
                   opacity: 1
               }), Ve.endBottom.saveText.visible = !0, me || xe || (Ve.endBottom.saveText.visible = !1, Ve.endBottom.weiboShare.visible = !1), fn && xe ? Ve.endBottom.blockText.visible = !1 : Ve.endBottom.shareText.visible = !1, fn && me && (Ve.endBottom.blockText.visible = !1, Ve.endBottom.shareText.visible = !1), Ve.mainEnd.visible = !1, Ve.outerEnd.visible = !0, setTimeout(function () {
                   var t = le(e("canvas")[0]);
                   e(".saved_outer").append(t), Ve.endBottom.saveText.visible = !1, fn && xe ? Ve.endBottom.blockText.visible = !0 : Ve.endBottom.shareText.visible = !0, fn && me && (Ve.endBottom.blockText.visible = !0, Ve.endBottom.shareText.visible = !1), setTimeout(function () {
                       var t = le(e("canvas")[0]);
                       e(".saved_outer").append(t), e(t).css({
                           opacity: 0
                       }), me && e(t).css({
                           opacity: 1
                       }), Ve.outerEnd.visible = !1, Ve.innerEnd.visible = !0, Ve.endBottom.saveText.visible = !0, me || xe || (Ve.endBottom.saveText.visible = !1, Ve.endBottom.weiboShare.visible = !1), fn && xe ? Ve.endBottom.blockText.visible = !1 : Ve.endBottom.shareText.visible = !1, fn && me && (Ve.endBottom.blockText.visible = !1, Ve.endBottom.shareText.visible = !1), setTimeout(function () {
                           var t = le(e("canvas")[0]);
                           e(".saved_inner").append(t), Ve.endBottom.saveText.visible = !1, fn && xe ? Ve.endBottom.blockText.visible = !0 : Ve.endBottom.shareText.visible = !0, fn && me && (Ve.endBottom.blockText.visible = !0, Ve.endBottom.shareText.visible = !1), setTimeout(function () {
                               var t = le(e("canvas")[0]);
                               e(".saved_inner").append(t), e(t).css({
                                   opacity: 0
                               }), me && e(t).css({
                                   opacity: 1
                               })
                           }, 100)
                       }, 100)
                   }, 100)
               }, 100)
           }, 100)
       }, 100)
   }

   function Z(e, t) {
       var n = Se[we + "end_text2/" + e + ".json"],
           i = new Ie,
           a = new Ie;
       a.position.set(62, 61);
       var o = te(),
           s = ie({
               color: vt,
               width: 366,
               height: 48,
               x: 1,
               y: 1
           });
       a.addChild(o, s);
       var r = new ke("你的外在十二人格是", {
           fontSize: "26px",
           fill: "#231e22"
       });
       i.text1 = r, r.position.set(15, (50 - r.height) / 2);
       var d = ie({
               color: 0,
               width: 369,
               height: 124,
               x: 0,
               y: 50
           }),
           c = ie({
               color: vt,
               width: 366,
               height: 21,
               x: 1,
               y: 174
           }),
           h = ie({
               color: vt,
               width: 366,
               height: 21,
               x: 1,
               y: 284
           }),
           l = ie({
               color: vt,
               width: 366,
               height: 21,
               x: 1,
               y: 482
           }),
           p = ie({
               color: 0,
               width: 369,
               height: 41,
               x: 0,
               y: 306
           });
       a.addChild(r, c, h, l, d, p);
       var u = new Pe(n.textures["left_text.png"]);
       u.position.set(gn[e].leftPosition.x, gn[e].leftPosition.y), a.addChild(u), i.addChild(a);
       var f = new Ie,
           g = ne(),
           x = ie({
               color: vt,
               width: 144,
               height: 88,
               x: 1,
               y: 1
           }),
           m = new Pe(n.textures["right_text.png"]);
       m.position.set(12, 9), f.addChild(g, x, m), f.position.set(448, 260), i.addChild(f);
       var v = new Ie;
       v.position.set(62, 605);
       var b = new Pe(n.textures["bottom_text.png"]);
       return v.addChild(b), _e >= 1380 && (i.position.set(0, 50), v.position.set(62, 635), f.position.set(450, 260)), i.addChild(v), i
   }

   function ee() {
       for (var e = new Ie, t = 0; t < xn.length; t++) {
           var n = ae({
               start: {
                   x: 0,
                   y: xn[t]
               },
               end: {
                   x: 369,
                   y: xn[t]
               }
           });
           e.addChild(n)
       }
       for (var i = 0; i < mn.length; i++) {
           var a = ae(mn[i]);
           e.addChild(a)
       }
       return e
   }

   function te() {
       for (var e = new Ie, t = 0; t < vn.length; t++) {
           var n = ae({
               start: {
                   x: 0,
                   y: vn[t]
               },
               end: {
                   x: 369,
                   y: vn[t]
               }
           });
           e.addChild(n)
       }
       for (var i = 0; i < bn.length; i++) {
           var a = ae(bn[i]);
           e.addChild(a)
       }
       return e
   }

   function ne() {
       for (var e = new Ie, t = 0; t < wn.length; t++) {
           var n = ae({
               start: {
                   x: 0,
                   y: wn[t]
               },
               end: {
                   x: 146,
                   y: wn[t]
               }
           });
           e.addChild(n)
       }
       for (var i = 0; i < _n.length; i++) {
           var a = ae(_n[i]);
           e.addChild(a)
       }
       return e
   }

   function ie(e) {
       var t = new Be;
       return t.beginFill(e.color), t.drawRect(0, 0, e.width, e.height), t.position.set(e.x ? e.x : 0, e.y ? e.y : 0), t.endFill(), t
   }

   function ae(e) {
       var t = new Be;
       return t.lineStyle(1, e.color || 0, 1), t.moveTo(e.start.x, e.start.y), t.lineTo(e.end.x, e.end.y), t
   }

   function oe(e) {
       var t = new Be;
       return t.beginFill("0x" + e.color), t.drawCircle(0, 0, 18), t.endFill(), t.position.set(e.position.x + 18, e.position.y + 18), t
   }

   function se(e) {
       CloudMusic.fetch("/api/activity/antispam/keyword/nickname/check", {
           method: "POST",
           data: {
               content: e
           }
       }).then(function (t) {
           200 == t.code ? !0 === t.data ? de(e) : alert("换个昵称试试^_^") : alert("出错了" + JSON.stringify(t))
       }, function (e) {
           alert("出错了" + JSON.stringify(e))
       })
   }

   function re() {
       switch (window.orientation) {
       case 0:
           e("#content").show(), e(".warning").hide(), setTimeout(function () {
               t(!0)
           }, 800);
           break;
       case -90:
       case 90:
           e("#content").hide(), e(".warning").show()
       }
   }

   function de(t) {
       Tn || (Tn = !0, e(".input").removeClass("show"), O(t))
   }

   function ce(e) {
       for (var t = 0, n = 0; n < e.length; n++) {
           var i = e.charCodeAt(n);
           i >= 1 && i <= 126 || 65376 <= i && i <= 65439 ? t++ : t += 2
       }
       return t
   }

   function he(e) {
       jQuery.ajax({
           type: "GET",
           url: "https://active.163.com/service/vote/v1/1893/digg.json",
           dataType: "jsonp",
           jsonp: "callback",
           data: {
               id: e
           }
       })
   }

   function le(e) {
       var t = new Image;
       return t.src = e.toDataURL("image/png"), t
   }

   function pe() {
       TWEEN.update(), requestAnimationFrame(pe), Ue.render(Ae), Ne.render(We)
   }
   var ue = window.navigator.userAgent.toLowerCase(),
       fe = navigator.userAgent,
       ge = /iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(ue) && !/pc=1/.test(location.search),
       xe = "micromessenger" == ue.match(/MicroMessenger/i),
       me = (ue.match(/WeiBo/i), CloudMusic.isInApp()),
       ve = (fe.indexOf("Android") > -1 || fe.indexOf("Adr"), !!fe.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)),
       be = /iphone/gi.test(navigator.userAgent) && 812 == screen.height && 375 == screen.width,
       we = "images/";
   if ("https://st.music.163.com" == window.location.origin && (we = "//s5c.music.126.net/static_public/5b519742aad18d1f9602c346/images/"), !ge) {
       var _e = window.innerHeight;
       return e("#content").height(_e), e("#content").html(""), void e("#content").css({
           "background-color": "#eee",
           "background-image": "url(images/pc.jpg)",
           "background-repeat": "no-repeat",
           "background-position": "center 50px",
           "background-size": "60%"
       })
   }
   e("#content").on("touchmove", function (e) {
       e.preventDefault()
   });
   var ye, Te = /market=wu/.test(location.href),
       Ce = ["http://m2.link/link/", "http://bdi.pub/link/"];
   ye = Te ? Ce[Math.floor(2 * Math.random())] + "" + Math.random().toString(36).substr(2) + "?target=https://st.music.163.com/c/rongge/?market=wu" : Ce[Math.floor(2 * Math.random())] + "" + Math.random().toString(36).substr(2) + "?target=https://st.music.163.com/c/rongge/", CloudMusic.setShareData({
       name: "rongge",
       title: "这是你的真实内外人格",
       subTitle: "基于“荣格心理学”产生的真实人格原型",
       text: "这是你的真实内外人格",
       picUrl: "https://st.music.163.com/c/rongge/images/share.jpg",
       link: ye
   }), CloudMusic.biLogPage("rongge", "homepage");
   var Ee = !0,
       qe = !1;
   ! function (e) {
       var t = document.getElementById(e),
           n = function e() {
               document.removeEventListener("WeixinJSBridgeReady", e), document.removeEventListener("YixinJSBridgeReady", e), t.play()
           };
       document.addEventListener("WeixinJSBridgeReady", n, !1), document.addEventListener("YixinJSBridgeReady", n, !1)
   }("bgm"), n("click"), n("music"), n("sun"), n("tail"), n("tail1"), n("house"), n("man"), n("girl"), n("bird"), t();
   var Ie = PIXI.Container,
       je = (PIXI.autoDetectRenderer, PIXI.loader),
       Se = PIXI.loader.resources,
       ke = (PIXI.utils.TextureCache, PIXI.Texture, PIXI.Text),
       Pe = (new PIXI.ticker.Ticker, PIXI.Sprite),
       Be = (PIXI.Rectangle, PIXI.Graphics),
       Ae = new Ie;
   Ae.width = WIDTH, Ae.height = _e;
   var We = new Ie;
   We.width = WIDTH, We.height = _e;
   var Ue = new PIXI.CanvasRenderer(WIDTH, _e, {
           backgroundColor: "0xffffff"
       }),
       Ne = new PIXI.CanvasRenderer(WIDTH, _e, {
           backgroundColor: "0xffffff"
       });
   e("#main").append(Ne.view), e("#main").append(Ue.view), e("#content").height(_e);
   var Me = [{
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
       }],
       Xe = [{
           bg: "rect_7.png"
       }, {
           bg: "rect_8.png"
       }, {
           bg: "rect_9.png"
       }, {
           bg: "rect_10.png"
       }],
       De = [{
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
       }],
       Le = [{
           bg: "d7.png"
       }, {
           bg: "d8.png"
       }],
       Re = [{
           bg: "end_1.png",
           duration: 1200
       }, {
           bg: "end_3.png",
           duration: 1200
       }, {
           bg: "end_4.png",
           duration: 1200
       }, {
           bg: "end_5.png",
           duration: 1200
       }],
       Fe = [{
           bg: "end_0.png",
           duration: 1200
       }, {
           bg: "end_2.png",
           duration: 1200
       }, {
           bg: "end_4.png",
           duration: 1200
       }, {
           bg: "end_5.png",
           duration: 1200
       }],
       He = [{
           bg: "dia_bg1.png",
           content: [{
               type: "text_image",
               url: "dia_1.png",
               positionY: 24
           }],
           duration: 1200
       }, {
           bg: "dia_bg2.png",
           content: [{
               type: "text_image",
               url: "dia_2.png",
               positionY: 30
           }],
           duration: 1200
       }, {
           bg: "dia_bg3.png",
           content: [{
               type: "text_image",
               url: "dia_3.png",
               positionY: 30
           }],
           duration: 1200
       }],
       Ye = [{
           bg: "dia_1.png"
       }, {
           bg: "dia_2.png"
       }, {
           bg: "dia_3.png"
       }, {
           bg: "dia_4.png"
       }],
       Je = [{
           bg: "dia_5.png"
       }],
       Oe = [{
           bg: "q5/dia_1.png"
       }, {
           bg: "q5/dia_2.png"
       }, {
           bg: "q5/dia_3.png"
       }],
       Ge = [{
           bg: "dia_1.png"
       }, {
           bg: "dia_2.png"
       }, {
           bg: "dia_3.png"
       }],
       ze = [{
           bg: "dia_4.png"
       }, {
           bg: "dia_5.png"
       }],
       Qe = [{
           bg: "q7/dia_1.png"
       }, {
           bg: "q7/dia_2.png"
       }];
   wxqrcode = new QRCode(e(".qrcode")[0], {
       width: 106,
       height: 106,
       correctLevel: QRCode.CorrectLevel.M
   }), wxqrcode.makeCode(ye);
   var $e;
   i();
   for (var Ke, Ve, Ze, et, tt, nt, it, at, ot, st, rt, dt = [Me, Xe, De, Le], ct = "startGuide", ht = [
       [
           ["type_0.png", "0.png", "1.png", "2.png"],
           ["type_1.png", "3.png", "4.png", "5.png"]
       ]
   ], lt = [{
       text1: "你的外在人格是",
       bigText: "name_0.png",
       end: ["char_0.png", "char_1.png", "char_2.png"]
   }, {
       text1: "你的内在人格是",
       bigText: "name_1.png",
       end: ["char_3.png", "char_4.png", "char_5.png"]
   }], pt = [
       ["ffb90b", "ff1800", "f40c5a", "ff1800", "f40c5a", "00c479", "ff1800", "ffb90b"],
       ["ff382e", "ecc806", "239cbc", "23bc67", "239cbc", "ff382e", "ffa90b", "239cbc"],
       ["527366", "527366", "dd8663", "e2b59a", "dd8663", "527366", "bf4d42", "dd8663"],
       ["d3aebf", "e19e14", "6e80b8", "e2b59a", "d3aebf", "6e80b8", "808c91", "d2adbe"],
       ["b82855", "eab491", "6e80b8", "eab491", "d3aebf", "6e80b8", "b82855", "697f7a"],
       ["ffbd2c", "aa8f52", "ff7f29", "aa8f52", "dd8663", "ff7f29", "ff382e", "dd8663"],
       ["ffb10b", "ff1800", "ec0c5a", "ff1800", "ec0c5a", "ff7f29", "00bc79", "ffb10b"],
       ["b16a80", "b16a80", "634b65", "243b4a", "c6b8ae", "634b65", "c6b8ae", "b16a80"],
       ["7676ff", "f47ce2", "f47ce2", "7676ff", "f48980", "7676ff", "f48980", "f48980"],
       ["f3a4de", "c2ffc2", "9998ff", "8b67ec", "dbcc75", "f3a4de", "c2ffc2", "ffaea1"],
       ["c19f47", "eca278", "4abea6", "eca278", "963967", "eca278", "963967", "c19f47"],
       ["ffb10b", "ff8000", "ffb10b", "ff8000", "ec0c5a", "00bc79", "ec0c5a", "ff8000"],
       ["6b7a92", "eca278", "eca278", "c82c2c", "dba142", "eca278", "c82c2c", "dba142"],
       ["ff1800", "ff1800", "ec0c5a", "ffb10b", "ec0c5a", "2ac3ad", "ffb10b", "ff1800"],
       ["ff1800", "fcdd39", "ff8500", "1fca8b", "1fca8b", "1fca8b", "fcdd39", "ff1800"],
       ["ff1800", "fcdd39", "ff8500", "1fca8b", "1fca8b", "1fca8b", "fcdd39", "ff1800"],
       ["8e75db", "b55c55", "c163b8", "8e75db", "e5a78f", "c163b8", "e5a78f", "b55c55"]
   ], ut = [{
       position: {
           x: 10,
           y: 162
       }
   }, {
       position: {
           x: 352,
           y: -18
       }
   }, {
       position: {
           x: 7,
           y: 390
       }
   }, {
       position: {
           x: 180,
           y: 485
       }
   }, {
       position: {
           x: 249,
           y: 55
       }
   }, {
       position: {
           x: -12,
           y: 420
       }
   }, {
       position: {
           x: 165,
           y: 114
       }
   }, {
       position: {
           x: 7,
           y: 390
       }
   }], ft = [], gt = 0; gt < 17; gt++) ft[gt] = {}, ft[gt].bg = we + "end/" + (gt + 1) + "_bg.png", ft[gt].rect = we + "end/" + (gt + 1) + "_rect.png";
   for (var xt = ["ffd6a9", "bcbcff", "dda391", "e9a693", "d4afc0", "ffd2b5", "ffd2a6", "c9a6ab", "df1c7eb", "ffcac4", "ffe9ca", "ffd7cd", "e8d0c8", "e8dcc9", "f7cbe2", "f9f0de", "e7c6c6"], mt = Math.floor(17 * Math.random()), vt = "0x" + xt[mt], bt = ft[mt], wt = [], _t = 0; _t < 8; _t++) wt[_t] = {}, wt[_t].color = pt[mt][_t], wt[_t].position = {
       x: ut[_t].position.x,
       y: ut[_t].position.y
   };
   var yt = 1;
   je.add(we + "end/black_bg.png").add(we + "text_stable/inner_text.png").add(we + "text_stable/outer_text.png").add(we + "text_stable/outer_big.png").add(we + "text_stable/inner_big.png").add(we + "bottom_logo.png").add(we + "animate/guide.json").add(we + "animate/q1.json").add(we + "animate/q2.json").add(we + "animate/q3.json").add(we + "animate/q4.json").add(we + "animate/q6.json").add(we + "animate/fire.json").add(we + "animate/btn2.json").add(we + "q5/dia_1.png").add(we + "q5/dia_2.png").add(we + "q5/dia_3.png").add(we + "q7/dia_1.png").add(we + "q7/dia_2.png").add(we + "q7/end_1.png").add(we + "q7/end_2.png").add(we + "q7/end_3.png").add(we + "q7/end_4.png").add(we + "q7/end_5.png").add(we + "q7/name_bg.png").add(we + "q7/end_6.png").add(we + "end/share_text.png").add(we + "end/weibo_share.png").add(we + "end/save_text.png").add(we + "end/block.png").add(we + "end/bottom_left_text.png").add(we + "end/final_text.png").add(we + "animate/btn_text.json").add(bt.bg).add(bt.rect).on("progress", a).load(o);
   var Tt, Ct = !0,
       Et = function (e, t, n) {
           Ct || (rt.position.y = -2 * t)
       },
       qt = new Scroller(Et, {
           zooming: !1,
           animating: !0,
           bouncing: !1,
           animationDuration: 1e3
       }),
       It = !1,
       jt = 0,
       St = !1;
   window.addEventListener("touchend", function () {
       St || (e("#bgm")[0].play(), St = !0), Tt && (clearTimeout(Tt.timer), Tt.resolve())
   });
   for (var kt = 0, Pt = [], Bt = [], At = [], Wt = [], Ut = [], Nt = [], Mt = [
       [{
           btnAni: Pt,
           text: "1_btn_1",
           width: 220,
           height: 150,
           position: {
               x: 100,
               y: 0
           },
           state: "guide1"
       }, {
           btnAni: Pt,
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
           btnAni: Pt,
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
           btnAni: Wt,
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
           btnAni: Pt,
           text: "2_btn_1",
           width: 220,
           height: 150,
           position: {
               x: 100,
               y: 0
           },
           state: "q1_end"
       }, {
           btnAni: Pt,
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
           btnAni: Bt,
           text: "3_btn_1",
           width: 160,
           height: 140,
           position: {
               x: 25,
               y: 0
           },
           state: "q2"
       }, {
           btnAni: Bt,
           text: "3_btn_2",
           width: 160,
           height: 140,
           position: {
               x: 205,
               y: 0
           },
           state: "q2"
       }, {
           btnAni: Bt,
           text: "3_btn_3",
           width: 160,
           height: 140,
           position: {
               x: 385,
               y: 0
           },
           state: "q2"
       }, {
           btnAni: Bt,
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
           btnAni: At,
           text: "4_btn_1",
           width: 130,
           height: 140,
           position: {
               x: 10,
               y: 0
           },
           state: "q3"
       }, {
           btnAni: At,
           text: "4_btn_2",
           width: 130,
           height: 140,
           position: {
               x: 160,
               y: 0
           },
           state: "q3"
       }, {
           btnAni: At,
           text: "4_btn_3",
           width: 130,
           height: 140,
           position: {
               x: 310,
               y: 0
           },
           state: "q3"
       }, {
           btnAni: At,
           text: "4_btn_4",
           width: 130,
           height: 140,
           position: {
               x: 460,
               y: 0
           },
           state: "q3"
       }, {
           btnAni: At,
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
           btnAni: Wt,
           text: "5_btn_1",
           width: 400,
           height: 200,
           position: {
               x: 0,
               y: 0
           },
           state: "q4"
       }, {
           btnAni: Wt,
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
           btnAni: Pt,
           text: "6_btn_1",
           width: 220,
           height: 150,
           position: {
               x: 100,
               y: 0
           },
           state: "q5"
       }, {
           btnAni: Pt,
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
           btnAni: Ut,
           width: 300,
           height: 175,
           position: {
               x: 50,
               y: 0
           },
           state: "q6"
       }, {
           btnAni: Nt,
           width: 380,
           height: 175,
           position: {
               x: 380,
               y: 0
           },
           state: "q6"
       }]
   ], Xt = [], Dt = [], Lt = ["天真者", "照顾者", "战士", "爱人者", "创造者", "追寻者", "愚者", "智者", "孤儿", "反叛者", "统治者", "魔术师"], Rt = [], Ft = 0; Ft < 12; Ft++) Rt[Ft] = {}, Rt[Ft].index = Ft, Rt[Ft].name = Lt[Ft], Rt[Ft].score = 0;
   for (var Ht = [
       [0, 1, 2, 4, 5],
       [8, 9, 10, 11, 6, 7, 3]
   ], Yt = [
       [1, 2, 10, 7, 4],
       [0, 8, 2, 5, 9, 3, 10, 7],
       [0, 5, 3, 4, 11, 6],
       [1, 8, 9, 4, 11, 6]
   ], Jt = [
       [8, 2, 5, 9, 7],
       [0, 5, 9, 3, 4, 10, 6, 7],
       [0, 1, 8, 3, 4, 11, 6, 5],
       [1, 8, 2, 3, 10, 7],
       [0, 1, 2, 9, 4, 10, 6, 11, 7]
   ], Ot = [
       [0, 1, 5, 3, 4, 11, 6],
       [8, 2, 9, 10, 11, 7, 6]
   ], Gt = [
       [0, 1, 5, 3, 10, 7, 8],
       [2, 9, 4, 11, 6, 7]
   ], zt = [
       [0, 1, 8, 3, 4, 6, 7, 11],
       [2, 5, 9, 10, 3]
   ], Qt = [Ht, Yt, Jt, Ot, Gt, zt], $t = [], Kt = [
       [11, 5],
       [8, 11],
       [3, 11],
       [1, 2],
       [0, 6],
       [2, 11],
       [9, 5],
       [10, 1],
       [7, 5],
       [4, 7],
       [7, 0],
       [3, 9],
       [6, 7],
       [4, 9],
       [9, 3],
       [6, 10],
       [8, 4],
       [7, 6],
       [2, 8],
       [11, 0]
   ], Vt = [], Zt = 0; Zt < 20; Zt++) Vt[Zt] = 0;
   var en, tn, nn, an = [],
       on = [],
       sn = [],
       rn = [],
       dn = [],
       cn = [{
           pivot: {
               x: 244,
               y: 86
           },
           position: {
               x: -170,
               y: 160
           },
           scalePosition: {
               x: -30,
               y: 40
           },
           frames: on
       }, {
           pivot: {
               x: 241,
               y: 310
           },
           position: {
               x: -140,
               y: -68
           },
           scalePosition: {
               x: 130,
               y: 130
           },
           frames: sn
       }, {
           pivot: {
               x: 346,
               y: 90
           },
           position: {
               x: -235,
               y: 165
           },
           scalePosition: {
               x: 325,
               y: 40
           },
           frames: rn
       }, {
           pivot: {
               x: 152,
               y: 90
           },
           position: {
               x: -96,
               y: 164
           },
           scalePosition: {
               x: 455,
               y: 28
           },
           frames: dn
       }],
       hn = [{
           name: "guiwu",
           position: {
               x: 474,
               y: 0
           }
       }, {
           name: "ufo",
           position: {
               x: 30,
               y: 125
           }
       }, {
           name: "fengche",
           position: {
               x: 286,
               y: 452
           }
       }, {
           name: "chengbao",
           position: {
               x: 30,
               y: 554
           }
       }, {
           name: "nangua",
           position: {
               x: 490,
               y: 625
           }
       }],
       ln = [{
           name: "number_1",
           position: {
               x: 680,
               y: 120
           }
       }, {
           name: "number_2",
           position: {
               x: 250,
               y: 225
           }
       }, {
           name: "number_3",
           position: {
               x: 486,
               y: 422
           }
       }, {
           name: "number_4",
           position: {
               x: 60,
               y: 584
           }
       }, {
           name: "number_5",
           position: {
               x: 650,
               y: 625
           }
       }],
       pn = !1,
       un = null,
       fn = !0,
       gn = [{
           leftPosition: {
               x: 33,
               y: 59
           }
       }, {
           leftPosition: {
               x: 33,
               y: 59
           }
       }, {
           leftPosition: {
               x: 21,
               y: 59
           }
       }, {
           leftPosition: {
               x: 33,
               y: 60
           }
       }, {
           leftPosition: {
               x: 20,
               y: 60
           }
       }, {
           leftPosition: {
               x: 20,
               y: 60
           }
       }, {
           leftPosition: {
               x: 33,
               y: 60
           }
       }, {
           leftPosition: {
               x: 33,
               y: 60
           }
       }, {
           leftPosition: {
               x: 33,
               y: 60
           }
       }, {
           leftPosition: {
               x: 33,
               y: 60
           }
       }, {
           leftPosition: {
               x: 20,
               y: 60
           }
       }, {
           leftPosition: {
               x: 33,
               y: 60
           }
       }],
       xn = [0, 60, 204, 223, 336, 355, 438],
       mn = [{
           start: {
               x: 0,
               y: 0
           },
           end: {
               x: 0,
               y: 438
           }
       }, {
           start: {
               x: 368,
               y: 0
           },
           end: {
               x: 368,
               y: 438
           }
       }, {
           start: {
               x: 184,
               y: 225
           },
           end: {
               x: 184,
               y: 336
           }
       }, {
           start: {
               x: 128,
               y: 356
           },
           end: {
               x: 128,
               y: 438
           }
       }, {
           start: {
               x: 250,
               y: 356
           },
           end: {
               x: 250,
               y: 438
           }
       }],
       vn = [0, 50, 173, 196, 283, 306, 346, 393, 439, 481, 504],
       bn = [{
           start: {
               x: 0,
               y: 0
           },
           end: {
               x: 0,
               y: 505
           }
       }, {
           start: {
               x: 368,
               y: 0
           },
           end: {
               x: 368,
               y: 505
           }
       }, {
           start: {
               x: 184,
               y: 197
           },
           end: {
               x: 184,
               y: 284
           }
       }, {
           start: {
               x: 128,
               y: 307
           },
           end: {
               x: 128,
               y: 482
           }
       }, {
           start: {
               x: 242,
               y: 307
           },
           end: {
               x: 242,
               y: 482
           }
       }],
       wn = [0, 90, 134, 177, 222, 264, 305],
       _n = [{
           start: {
               x: 0,
               y: 0
           },
           end: {
               x: 0,
               y: 306
           }
       }, {
           start: {
               x: 146,
               y: 0
           },
           end: {
               x: 146,
               y: 306
           }
       }];
   String.prototype.replaceAll = function (e, t) {
       return this.replace(new RegExp(e, "gm"), t)
   }, e("#name").on("focus", function () {
       e(".input").addClass("focus"), ve && e(".input").addClass("ios_focus")
   }), e("#name").on("blur", function () {
       ve && e(".input").removeClass("ios_focus");
       var t = e("#name")[0].value;
       t = t.replace(/(^\s*)|(\s*$)/g, ""), 0 == t.length && e(".input").removeClass("focus")
   });
   var yn = ["22815068", "482823", "1471515", "5184501", "19648871", "1270455", "26484057", "30284733", "31452733", "2531854", "5189652", "31861269", "26020723", "18468021", "26018017", "2532290", "571541787", "184250", "2531223", "1220020"];
   e(".confirm").bind("click", function () {
       var t = e("#name")[0].value;
       if (t = t.replace(/(^\s*)|(\s*$)/g, ""), ce(t) > 12) return alert("请将字数控制在6个以内^_^"), !1;
       se(t), e("#result")[0].src = "https://music.163.com/song/media/outer/url?id=" + yn[yt - 1], e("#result")[0].play(), e("#bgm")[0].pause()
   }), window.onorientationchange = re;
   var Tn = !1
}(jQuery);