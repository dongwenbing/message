var kitserver = {}



//str,  必传参数，字符串
//time   可不传，默认弹窗3.5s后消失，
kitserver.message1gw = function(str, time) {
    var alerttime = time ? time : 3500;
    var misstime = alerttime - 950;
    if (str) {
        var dom = document.createElement("div");
        dom.id = "Message1gw";
        dom.className = "Message1gw";
        var alertdom = '<h3>' + str + '</h3>';
        dom.innerHTML = alertdom;
        document.body.appendChild(dom);

        var t = setInterval(function() {
            clearInterval(t);
            document.getElementById('Message1gw').remove();
        }, alerttime);
        var x = setInterval(function() {
            document.getElementById('Message1gw').className = "Message1gw Message1gw-miss";
            clearInterval(x);
        }, misstime);

    }



}