var ArrTool = ArrTool || {};

(function() {
	/* tips


	01.	join : 將陣列元素用固定符號串成字串 (常用)

			var arr = ["jack", "john", "may", "su", "Ada"];
			var str = arr.join("、");

			str 為 jack、john、may、su、Ada


	02.	清除陣列
			var arr = [1, 2, 3, 4, 5, 6];

			arr.length = 2;

			//  [1,2]

			arr.length = 0;

			//  []


	03. 刪除陣列元素

			var arr = [1, 2, 3, 4, 5, 6];

			delete arr[1];

			// [1,,3, 4, 5, 6]

	*/


    //	01. 取得陣列中不重複的元素值，輸出成新陣列 (with jQuery)
    function getUnique(inputArray) {
        var outputArray = [];

        for (var i = 0; i < inputArray.length; i++) {
            if ((jQuery.inArray(inputArray[i], outputArray)) == -1) {
                outputArray.push(inputArray[i]);
            }
        }

        return outputArray;
    }

    //	02.移除陣列中指定值的元素 
    //		ex:
    // 		var ary = ['three', 'seven', 'eleven'];
    // 		ary.remove('seven');

    Array.prototype.remove = function() {
        var what, a = arguments,
            L = a.length,
            ax;

        while (L && this.length) {

            what = a[--L];

            while ((ax = this.indexOf(what)) !== -1) {

                this.splice(ax, 1);

            }

        }

        return this;

    };




})();
