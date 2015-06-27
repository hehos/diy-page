/**
 * Created by hui on 2015/6/9.
 */
JZP.Plugin.NavScrollWatch = (function() {
    var statics = {
        info: {
            name: "导航滚动监听插件",
            type: 'NavScrollWatch',
            pluginProVal : "data-jz-plugin-scrollnav"
        }
    };
    var constructor = function(options) {
        this.initData = {
            direction: 				"h",
            animation:			"default",
            initNum:			10,
            batchNum:			3
        }
        // 接受参数
        this.opts = $.extend(true, this.initData, options);
    }
    var methods = {
        test: function() {

        },
        initParam: function() {
        }
    }


    return JZP.createClass(constructor, methods, null, statics);
})();