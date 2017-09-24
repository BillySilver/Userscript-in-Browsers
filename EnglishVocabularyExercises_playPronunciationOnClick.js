// ==UserScript==
// @name        EnglishVocabularyExercises : Play Pronunciation on Click
// @namespace   EnglishVocabularyExercises
// @include     http://www.englishvocabularyexercises.com/AWL/id*.htm*
// @require     http://code.jquery.com/jquery-latest.min.js
// @version     [170919]
// @grant       none
// ==/UserScript==

$(document).ready(function() {
    $("a").click(function() {
        var strHref = $(this).attr("href");
        if ( null !== strHref.match(/mp3|wav/) ) {
            var audio = new Audio(strHref);
            audio.play();
            return false;
        }
    });
});
