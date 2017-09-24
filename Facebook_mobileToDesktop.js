// ==UserScript==
// @name        Facebook : Mobile to Desktop
// @namespace   Facebook
// @include     https://m.facebook.com/*
// @version     [170924]
// @grant       none
// ==/UserScript==

if ( "/story.php" === location.pathname ) {
    location.href = "https://www.facebook.com/permalink.php" + location.search;
} else {
    location.href = location.href.replace("m.facebook.com", "www.facebook.com");
}
