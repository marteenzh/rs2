               window._wpemojiSettings = {
                   "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2\/72x72\/",
                   "ext": ".png",
                   "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2\/svg\/",
                   "svgExt": ".svg",
                   "source": {
                       "concatemoji": "http:\/\/www.bu.edu\/researchsupport\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.6.9"
                   }
               };
               ! function(a, b, c) {
                   function d(a) {
                       var c, d, e, f, g, h = b.createElement("canvas"),
                           i = h.getContext && h.getContext("2d"),
                           j = String.fromCharCode;
                       if (!i || !i.fillText) return !1;
                       switch (i.textBaseline = "top", i.font = "600 32px Arial", a) {
                           case "flag":
                               return i.fillText(j(55356, 56806, 55356, 56826), 0, 0), !(h.toDataURL().length < 3e3) && (i.clearRect(0, 0, h.width, h.height), i.fillText(j(55356, 57331, 65039, 8205, 55356, 57096), 0, 0), c = h.toDataURL(), i.clearRect(0, 0, h.width, h.height), i.fillText(j(55356, 57331, 55356, 57096), 0, 0), d = h.toDataURL(), c !== d);
                           case "diversity":
                               return i.fillText(j(55356, 57221), 0, 0), e = i.getImageData(16, 16, 1, 1).data, f = e[0] + "," + e[1] + "," + e[2] + "," + e[3], i.fillText(j(55356, 57221, 55356, 57343), 0, 0), e = i.getImageData(16, 16, 1, 1).data, g = e[0] + "," + e[1] + "," + e[2] + "," + e[3], f !== g;
                           case "simple":
                               return i.fillText(j(55357, 56835), 0, 0), 0 !== i.getImageData(16, 16, 1, 1).data[0];
                           case "unicode8":
                               return i.fillText(j(55356, 57135), 0, 0), 0 !== i.getImageData(16, 16, 1, 1).data[0];
                           case "unicode9":
                               return i.fillText(j(55358, 56631), 0, 0), 0 !== i.getImageData(16, 16, 1, 1).data[0]
                       }
                       return !1
                   }

                   function e(a) {
                       var c = b.createElement("script");
                       c.src = a, c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
                   }
                   var f, g, h, i;
                   for (i = Array("simple", "flag", "unicode8", "diversity", "unicode9"), c.supports = {
                           everything: !0,
                           everythingExceptFlag: !0
                       }, h = 0; h < i.length; h++) c.supports[i[h]] = d(i[h]), c.supports.everything = c.supports.everything && c.supports[i[h]], "flag" !== i[h] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[i[h]]);
                   c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function() {
                       c.DOMReady = !0
                   }, c.supports.everything || (g = function() {
                       c.readyCallback()
                   }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function() {
                       "complete" === b.readyState && c.readyCallback()
                   })), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
               }(window, document, window._wpemojiSettings);