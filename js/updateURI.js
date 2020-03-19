(function() {
    var originEncodeURI = window.encodeURI;
    // window.originEncodeURI = window.encodeURI;
    window.encodeURI = function(uri) {
        var patt = new RegExp("^.*:\\/\\/(.*?):\\d+\\/", "g");
        var results = patt.exec(uri);
        if (results && results.length == 2) {
            var protocolHostPort = results[0]; // http://[::1]:8090
            var host = results[1]; // [::1]
            // 如果host包含[]，则认为是ipv6
            if (host.charAt(0) == "[" && host.charAt(host.length - 1) == "]") {
                var resourcePath = originEncodeURI(uri.replace(
                    protocolHostPort, ""));
                return protocolHostPort + resourcePath;
            } else {
                return originEncodeURI(uri);
            }
        } else {
            return originEncodeURI(uri);
        }
    }
})();