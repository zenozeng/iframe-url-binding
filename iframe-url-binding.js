(function() {

    var sync = function(url, direction) {
        console.log(url, direction);

        var from, to; // index
        if(direction === "fromOutside") {
            from = 0;
            to = 1;
        } else {
            from = 1;
            to = 0;
        }

        var binding = window.bindings.filter(function(elem) {
            return url.indexOf(elem[from]) > -1;
        })[0];
        binding = binding || window.defaultBinding;
        url = binding[to] + url.split(binding[from]).pop();

        if(direction === "fromOutside") {
            window.document.getElementById("main").src = url;
        } else {
            window.history.pushState({}, "", url);
        }
    }

    window.addEventListener("message", function(event) {
        var url = event.data;
        sync(url, "fromInside");
    });
    window.onhashchange = function() {
        sync(window.location.href, "fromOutside");
    };
    sync(window.location.href, "fromOutside");
})();
