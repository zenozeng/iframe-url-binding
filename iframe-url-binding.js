(function() {
    var bindings = [
      ["http://localhost/iframe-url-binding/#vs/", "http://127.0.0.1/vs/"],
      ["http://localhost/iframe-url-binding/#color/", "http://127.0.0.1/color/"]
    ];
    var defaultBinding = ["http://localhost/iframe-url-binding/", "http://127.0.0.1/"];
    var onUrlChange = function(url) {
        console.log(url);
        var binding = bindings.filter(function(elem) {
            return url.indexOf(elem[1]) > -1;
        })[0];
        binding = binding || defaultBinding;
        url = binding[0] + url.split(binding[1]).pop();
        window.history.pushState({}, "", url);
        window.location.href = url;
    }
    var createIframe = function() {
        var iframe = document.createElement('iframe');
        var url = window.location.href;
        var binding = bindings.filter(function(elem) {
            return url.indexOf(elem[0]) > -1;
        })[0];
        binding = binding || defaultBinding;
        url = binding[1] + url.split(binding[0]).pop();
        iframe.frameBorder = 0;
        iframe.scrolling = 'auto';
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.src = url;
        document.body.appendChild(iframe);
    }
    createIframe();
    window.addEventListener("message", function(event) {
        var url = event.data;
        onUrlChange(url);
    });
})();