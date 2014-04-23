(function() {
    var sendUrl = function() {
        window.parent.postMessage(window.location.href, "*");
    };
    sendUrl();
    window.addEventListener('hashchange', sendUrl);
    window.addEventListener('popstate', sendUrl);
})();
