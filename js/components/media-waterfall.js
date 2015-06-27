/**
 *	new Waterfall 组件对象时可选的传入参数。
 * 如：
 	{
 		domObj:						$(".media-waterfall")
 		cols: 						2, 			// 控制list的列数。
 		loadWay:					0,      // 加载的方式，
		 																0:默认无动画方式加载。
		 																1:淡入方式;  
 		initNum:					20,     //懒加载方式的初始数量
 		batchNum:					3,			//懒加载批次加载的数量。
 	}
 * 
 * **/


function Waterfall(options) {
	// 限定传入的参数的范围。
	if(options.cols < 2 || options.cols > 5) {
		options.cols = 3;
		alert("cols参数值的区间为[2,5]，否则默认为3 ！");
	}
	if(options.loadWay < 0 || options.loadWay > 1) {
		options.loadWay = 0;
		alert("loadWay参数值的区间为[0,1]，否则默认为0 ！");
	}
	
	// 接受参数
	this.opts = $.extend(true, {
		"domObj":						$(".media-waterfall"),
 		"cols": 						3,
 		"loadWay":						0,
 		"initNum":						15,
 		"batchNum":						3,
 		
	}, options);
	
	this.colAry = [];
}
Waterfall.prototype = {
	resetDom: function() {
		var tempDomObj = this.opts.domObj;
		var tempItems = tempDomObj.find("li") || tempDomObj.find(".media-item");
		var items = $(tempItems).clone();
		var colAry = this.colAry;
		var waterfallCln = $(tempDomObj).attr("class");
		var newObj = document.createElement('div');
		$(newObj).addClass(waterfallCln);
		tempDomObj.after($(newObj));
		tempDomObj.remove();  
		tempDomObj = null;
		var domObj = $(newObj);
		
		// 根据列数添加相应的className
		switch (this.opts.cols) {
            case 2:  // 若传递的参数是两列，不做任何操作，因为样式默认是2列。
                break;
			case 3:
				domObj.addClass("jz-media-col3");
				break;
			case 4:
				domObj.addClass("jz-media-col4");
				break;
			case 5:
				domObj.addClass("jz-media-col5");
				break;
		}		
		
		for(var i = 0; i < this.opts.cols; i++) {
			$(domObj).append("<ul class='waterfall-list'></ul>");
		}
		colAry = domObj.find("ul");
		this.colAry = colAry;
		
		switch (this.opts.loadWay) {
			case 0:
				this.addDom(items, 0, this.opts.loadWay);
				break;
			case 1:
				domObj.addClass("lazy-load");
				this.lazyLoad(items, this.opts.loadWay);
				break;
		}
	},
	
	addDom: function(items, startIdx, loadWay, isLazyInit) {
		
		var colAry = this.colAry;
		var endIdx = 0;
		if(loadWay == 0) {
			endIdx = $(items).length;
		} else if(isLazyInit) {
			endIdx = this.opts.initNum;// 如果是懒加载，第一次加载20个。
		} else {
			endIdx = startIdx + this.opts.batchNum <= items.length ? 
				startIdx + this.opts.batchNum : items.length;
		}
		for(var i = startIdx; i < endIdx; i++) {
			$(items[i]).css("visibility", "visible");
			if(loadWay == 1 && !isLazyInit) {
				$(items[i]).fadeIn("slow");
			}
			$(colAry[0]).append($(items[i]));
		 	colAry.sort(function(o1, o2) {
			 	return o1.offsetHeight - o2.offsetHeight;
		 	})
		}
	},
	
	lazyLoad: function(items, loadWay) {
		var other = this;
		var startIdx = 0;
		other.addDom(items, startIdx, loadWay, true);
		startIdx = this.opts.initNum;
		$(window).scroll(function() {
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动条向下拉动
			var clientHeight = document.documentElement.clientHeight; // 可见高度
			var oHeight = document.body.scrollHeight; // 元素的整个高度。
			//页面滚动最下面时在ul下面添加元素
			if (scrollTop >= oHeight - clientHeight) {
				other.addDom(items, startIdx, loadWay);
				if(startIdx + other.opts.batchNum < items.length) {
					startIdx = startIdx + other.opts.batchNum;
				} else {
					$(window).off("scroll");
				}
			}
		});
	},
	
	run: function() {
		this.resetDom();
	}
}
