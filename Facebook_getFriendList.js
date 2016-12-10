// ==UserScript==
// @name        Facebook: Get Friend List (JSON)
// @namespace   Facebook
// @include     /https://www.facebook.com/[^/]+/friends(\?.*)?/
// @version     [161210]
// @grant       none
// ==/UserScript==

// var old_onload = window.onload || function() {};

window.onload = function() {
    // old_onload();

    var domAnchorFirends = document.querySelector("h3#medley_header_friends > a");
    domAnchorFirends.text += " (Get Friend List)";
    domAnchorFirends.setAttribute("href", "javascript:;");
    domAnchorFirends.addEventListener("click", function() {
        var friendList = {};
        var jsonFriends = "{";
        var domFriends = document.querySelectorAll("div.uiProfileBlockContent div.fsl.fwb.fcb > a");
        for (var i = 0; i < domFriends.length; i++) {
            var strName = domFriends[i].text;
            var strHref = domFriends[i].getAttribute("href");
            var strID = (function() {
                if ( null !== strHref.match(/profile.php\?id=\d+/) ) {
                    return parseInt(strHref.match(/\d+/)[0]);
                } else if ( null !== strHref.match(/\.com\/[^?]+/) ) {
                    return strHref.match(/\.com\/[^?]+/)[0].replace(".com/", "");
                } else {
                    return null;
                }
            })();
            friendList[strName] = strID;
            jsonFriends +=
                "\"" + strName + "\": " +
                (("string" === typeof strID) ? "\"" : "") +
                strID +
                (("string" === typeof strID) ? "\"" : "") +
                ",";
        }
        jsonFriends = jsonFriends.substring(0, jsonFriends.length-1);
        jsonFriends += "}";
        prompt("Ctrl+C, Enter.", jsonFriends);
    });
};
