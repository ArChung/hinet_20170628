var LoadTool = LoadTool || {};

(function() {

	//動態 load 外部js
    function loadJs(filename) {
        var fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);
        document.getElementsByTagName("head")[0].insertBefore(fileref);
    }

    //動態 load 外部 css
    function loadCss(filename) {
        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
        document.getElementsByTagName("head")[0].insertBefore(fileref);
    }

    LoadTool.loadJs=loadJs;
    LoadTool.loadCss=loadCss;



})();
