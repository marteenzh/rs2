    (function(b) {
        function d(c, a, e, b) {
            var f, d = location.pathname.split("/");
            try {
                f = {
                    category: "file downloaded - /" + d[1],
                    action: a,
                    label: e
                }, bu_ga_track_event(f), "_blank" == b ? window.open(c) : setTimeout(function() {
                    window.top.location.href = c
                }, 150)
            } catch (h) {}
        }
        var a = "";
        downloadOptions.trackedTypes.forEach(function(c) {
            a = a + "a[href$='." + c + "'],"
        });
        a = a.slice(0, -1);
        b(document).on("click", a, function(a) {
            if (b("body").hasClass("ga-dont-track-downloads")) return !0;
            var g = this.href.split(".").pop(),
                e = this.href.replace(window.location.protocol +
                    "//" + window.location.host, "");
            a.preventDefault();
            d(this.href, g, e, this.target)
        })
    })(jQuery);