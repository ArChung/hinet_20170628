var FabricTool = FabricTool || {};



(function() {

    function addPicToCanvas(canvas, url, clearAll, fillDiv) {
        fabric.Image.fromURL(url, function(oImg) {
            if (clearAll) {
                canvas.clear().renderAll();
            }
            if (fillDiv) {

                var pw = oImg.getWidth();
                var ph = oImg.getHeight();
                var dw = canvas.getWidth();
                var dh = canvas.getHeight();
                var s;
                var l = false;

                if (pw / ph > dw / dh) {
                    s = dh / ph;
                } else {
                    s = dw / pw;
                    l = true;
                }

                if (s < 1) {
                    oImg.set({
                        width: pw * s,
                        height: ph * s,
                        lockMovementX: l,
                        lockMovementY: !l
                    })
                }
            }

            canvas.centerObject(oImg);
            canvas.add(oImg);
        });
    }


    function addFBPicToCanvas(canvas, url, clearAll, fillDiv) {
        var img = new Image();
        if (clearAll) {
            canvas.clear().renderAll();
        }
        img.onload = function() {
                var imgInstance = new fabric.Image(img);
                var pw = imgInstance.getWidth();
                var ph = imgInstance.getHeight();
                var dw = canvas.getWidth();
                var dh = canvas.getHeight();
                var s;
                var l = false;
                if (fillDiv) {



                    if (pw / ph > dw / dh) {
                        s = dh / ph;
                    } else {
                        s = dw / pw;
                        l = true;
                    }

                    if (s < 1) {
                        imgInstance.set({
                            width: pw * s,
                            height: ph * s,
                            lockMovementX: l,
                            lockMovementY: !l
                        })
                    } else {

                    }
                }

                canvas.centerObject(imgInstance);
                canvas.add(imgInstance);
            }
            // img.src = event.target.result;
        img.crossOrigin = 'Anonymous';
        img.src = url; // I also tried with full url http://example.com/logo.svg
    }

    function initFabricDeleteBtn(canvas) {


        canvas.on('object:selected', function(e) {

            addDeleteBtn(e)
        });

        canvas.on('object:modified', function(e) {
            addDeleteBtn(e);
        });

        canvas.on('mouse:down', function(e) {
            if (!canvas.getActiveObject()) {
                clearDeleteBtn();
            }
        });
        canvas.on('object:moving', clearDeleteBtn);
        canvas.on('object:scaling', clearDeleteBtn);
        canvas.on('object:rotating', clearDeleteBtn);
        canvas.on('object:added', clearDeleteBtn);
        canvas.on('selection:cleared', clearDeleteBtn);

        //THE DELETE BUTTON CLICK EVENT
        $(document).on('click', ".canvas_deleteBtn", function() {
            if (canvas.getActiveObject()) {
                canvas.remove(canvas.getActiveObject());
                $(this).remove();
                $(".canvas_deleteBtn").remove();
            }
        })

        function addDeleteBtn(e) {
            
            var deg = e.target.getAngle() + 'deg';
            var width = e.target.cornerSize*1.9;
            var btnLeft = e.target.oCoords.tr.x - width/2+2;
            var btnTop = e.target.oCoords.tr.y - width/2+2;
            var fontSize = 12;
            var mom = $(e.target.canvas.wrapperEl);

            $(".canvas_deleteBtn").remove();
            // console.log(e.target.cornerSize);

            var deleteBtn = '<p" class="canvas_deleteBtn" title="Delete" style="position:absolute;top:' + btnTop + 'px;left:' + btnLeft + 'px;cursor:pointer;-moz-transform: rotate(' + deg + ');  -ms-transform: rotate(' + deg + ');  -webkit-transform: rotate(' + deg + ');  transform: rotate(' + deg + ');  -moz-border-radius: 50%;  -webkit-border-radius: 50%;  border-radius: 50%;  background-color: white;  color: black;width:' + width + 'px;height:' + width + 'px;text-align: center;line-height: ' + width + 'px;font-size:' + fontSize + 'px;font-weight: bold;" title="Remove object">&#10005;</p>';

            // return deleteBtn;
            mom.append(deleteBtn);
        }


    }


    function clearDeleteBtn(e) {
        $(".canvas_deleteBtn").remove();
    }



    function canvasObjsNum(canvas) {
        return canvas.getObjects().length;
    }

    // 加圖到canvas
    FabricTool.addPicToCanvas = addPicToCanvas;
    // 加FB圖到canvas
    FabricTool.addFBPicToCanvas = addFBPicToCanvas;
    // 加圖到canvas時會有deleteBtn
    FabricTool.initFabricDeleteBtn = initFabricDeleteBtn;
    // 清deleteBtn
    FabricTool.clearDeleteBtn = clearDeleteBtn;
    // 取得裡面有幾個物件
    FabricTool.canvasObjsNum = canvasObjsNum;

})();
