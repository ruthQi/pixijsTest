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