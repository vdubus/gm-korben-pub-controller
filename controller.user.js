// ==UserScript==
// @name        Korben.info Publicity Article Controller
// @namespace   com.github.vdubus.greasemonkey.userscript
// @description Remove publicities articles forn Korben.info website 
// @include     http://korben.info/*
// @version     1
// @grant       none
// @downloadURL https://cdn.rawgit.com/vdubus/gm-korben-pub-controller/master/controller.user.js
// @updateURL   https://cdn.rawgit.com/vdubus/gm-korben-pub-controller/master/controller.user.js
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// @require     https://cdn.rawgit.com/jonnyreeves/js-logger/master/src/logger.js
// ==/UserScript==
var jQuery2 = jQuery.noConflict(true);
(function ($) {
  function initialization() {
    Logger.useDefaults();
    var publicities = $('.post-date>p:contains(\'Publicité\')').closest('div[id^=\'post-\']');
    publicities.css({
		'background-color' : '#FFBBBB',
		'border-style' : 'solid',
		'border-color' : 'red'
	});
    var title = publicities.find('h2.post-title>a');
    title.text('[Publicity] ' + title.text());
    Logger.info('Found %d publicity(ies) article(s)', publicities.length);
  }
  $(document).ready(initialization);
}) (jQuery2);
