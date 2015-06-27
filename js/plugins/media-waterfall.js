/**
 *	new Waterfall 组件对象时可选的传入参数。
 * 如：
 	{
 		domObj:						$(".media-waterfall")
 		cols: 						2, 		// 控制list的列数。
 		loadWay:					0,      // 加载的方式，
                                            0:默认无动画方式加载。
                                            1:淡入方式;
 		initNum:					20,     //懒加载方式的初始数量
 		batchNum:					3,		//懒加载批次加载的数量。
 	}
 * 
 * **/


JZP.Plugin.MediaWaterfall = (function() {
    var statics = {
        info: {
            name: "瀑布流插件",
            type: 'Waterfall'
        }
    };
    var constructor = function(options) {
        // 限定传入的参数的范围并设置默认值。
        if(options.cols < 2 || options.cols > 5 || isNaN(parseInt(options.cols))) {
            options.cols = 3;
            alert("cols参数值的区间为[2,5]，否则默认为3 ！");
        }
        if(options.initNum < 1 || typeof options.initNum != "number" ||
            isNaN(parseInt(options.initNum))) {
            options.initNum = 10;
        }
        if(options.batchNum < 1 || typeof options.batchNum != "number" ||
            isNaN(parseInt(options.batchNum))) {
            options.batchNum = 3;
        }
        this.initData = {
            domSelector:	    ".jz-media-waterfall",
            cols: 				3,
            loadWay:			"default",
            animation:			"default",
            initNum:			10,
            batchNum:			3
        }
        // 接受参数
        this.opts = $.extend(true, this.initData, options);
        // 存放媒体项的瀑布流列数组，数组元素为存放媒体项的dom对象。
        this.colAry = [];
        // 懒加载时的起始item下标
        this.startIdx = 0;

        this.activeDom = null;
        
    };

    var methods = {
        //constructor: JZP.Plugin.MediaWaterfall,
        resetDom: function(domObj) {
            var tempDomObj = domObj;
            var colAry = this.colAry;
            var items = domObj.find(".jz-media-item").length == 0 ?
                domObj.find("li") : domObj.find(".jz-media-item");

            var newObj = document.createElement('div');
            var className = domObj.attr("class");
            $(newObj).addClass(className);
            domObj.after($(newObj));

            // domObj指向了新的dom
            domObj = $(newObj);
            this.activeDom = domObj;

            // 根据列数添加相应的className
            // 不处理的情况： 1， 列数位2的情况，因为样式默认是2列。
            //              2， 手动或者其他方式已经设置了列数
            if(this.opts.cols > 2) {
                domObj.addClass("jz-media-col" + this.opts.cols);
            }

            for(var i = 0; i < this.opts.cols; i++) {
                $(domObj).append("<ul class='jz-waterfall-list'></ul>");
            }
            colAry = domObj.find(".jz-waterfall-list");
            this.colAry = colAry;

            switch (this.opts.loadWay) {
                case "default":
                    this.addDom(items, 0);
                    break;
                case "lazy":
                    domObj.addClass("lazy-load");
                    this.lazyLoad(items);
                    break;
            }
            // 删除原来的 空 dom， ”空“是因为里面的item是都添加到新的dom中了。
            tempDomObj.remove();
        },

        addDom: function(items, startIdx, isLazyInit) {
            var colAry = this.colAry;
            var endIdx = 0;
            switch (this.opts.loadWay) {
                case "default":
                    endIdx = $(items).length;
                    break;
                case "lazy":
                    if(isLazyInit) { // 如果是懒加载的第一次渲染dom
                        endIdx = this.opts.initNum;// 如果是懒加载，第一次加载初始化数量。
                    } else {
                        endIdx = startIdx + this.opts.batchNum <= items.length ?
                        startIdx + this.opts.batchNum : items.length;
                    }
                    break;
            }
            for(var i = startIdx; i < endIdx; i++) {
                $(items[i]).css("visibility", "visible");
                switch (this.opts.animation) {
                    case "default":
                        break;
                    case "fade":
                        $(items[i]).fadeIn("slow");
                        break;
                }
                $(colAry[0]).append($(items[i]));
                colAry.sort(function(o1, o2) {
                    return o1.offsetHeight - o2.offsetHeight;
                })
            }
        },

        lazyLoad: function(items) {
            var that = this;
            var domObj = this.activeDom;
            var domObjWrap = domObj.parent();

            // 如果初始化加载数量大于总的item数，则一次性加载完毕。
            if(this.opts.initNum >= items.length) {
                this.opts.loadWay = "default";
                that.addDom(items, 0);
                return;
            }
            // 懒加载的第一次加载。
            that.addDom(items, 0, true);
            // 下面的逻辑是处理初始化加载后的页面内容高度小于浏览器窗口高度时，页面滚动懒加载失效问题。
            while(true) {
                // 第一次加载后，改变起始下标
                this.startIdx = this.opts.initNum;

                var clientHeight = domObjWrap.height();
                var oHeight = domObj.height();

                /*
                 * 如果页面内容高度小于浏览器窗口高度 且 起始下标小于总的item数的逻辑处理：
                 * 	自动加载batchNum的item，直到oHeight > clientHeight或者
                 *  加载完所有item停止循环的自动加载。
                 * */
                if(oHeight <= clientHeight && this.startIdx < items.length) {
                    if(this.startIdx + this.opts.batchNum < items.length) {
                        this.opts.initNum += this.opts.batchNum;
                    } else {
                        this.opts.initNum = items.length;
                    }
                    that.addDom(items, this.startIdx);
                } else {
                    // 停止循环的两种情况。
                    // 加载完了所有item，那么直接终止该方法。
                    if(items.length <= this.startIdx) {
                        return;
                    } else {  // oHeight > clientHeight时，跳出循环。
                        break;
                    }
                }
            }

            $(domObjWrap).scroll(function() {
                // 滚动的条到页面顶部的偏移量(也即是容器内容顶部隐藏的高度)
                var scrollTop = domObjWrap.scrollTop();
                var clientHeight = domObjWrap.height(); // 容器高度。
                var oHeight = domObj.height(); // 操作dom高度
                var excessHeight = oHeight - clientHeight;
                //页面滚动最下面时在ul中添加元素
                // 加10的目的是为了防止浏览器误差（即是jq的height，scrollTop的误差问题。
                if (scrollTop + 10 >= excessHeight) {
                    that.addDom(items, that.startIdx);
                    if(that.startIdx + that.opts.batchNum < items.length) {
                        that.startIdx += that.opts.batchNum;
                    } else {
                        $(domObjWrap).off("scroll");
                    }
                }
            });
        },

        run: function() {
            var domObj = $(this.opts.domSelector);
            // 在一个页面多个瀑布流组件的情况。
            if( domObj.length > 1) {
                for(var i = 0; i < domObj.length; i++) {
                    var obj = new this.constructor(this.opts);
                    var doms = obj.opts.domObj;
                    obj.resetDom($(doms[i]));
                }
            } else {
                this.resetDom(domObj);
            }
        }
    }

    return JZP.createClass(constructor, methods, null, statics);
})();

