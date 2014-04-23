var createIframe = function(src) {
    var iframe = document.createElement('iframe');
    iframe.frameBorder = 0;
    iframe.scrolling = 'auto';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = src;
    iframe.onload = function(event) {
        console.log("loading");
        console.log(event);
        console.log(event.srcElement.src);
    };
    document.body.appendChild(iframe);
}
createIframe('http://127.0.0.1/vs/home.html');