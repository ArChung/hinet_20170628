(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-71489014-1', 'auto');
ga('send', 'pageview');

console.log(123);
function _gaPV(inv) {
    console.log('PAGE', inv);
    ga('send', 'pageview', inv);
}

function _gaCK(inv) {
    console.log('BUTTON', inv);
    ga('send', 'event', 'btn', inv);
}

function _gaEV(inv) {
    console.log('EVENT', inv);
    ga('send', 'event', 'eventTag', inv);
}
