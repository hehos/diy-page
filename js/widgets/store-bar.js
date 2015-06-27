/**
 * Created by hui on 2015/5/7.
 */

/**
 * 模块名
 */



JZD.Widget.StoreBar = (function() {
    var statics = {
        info: {
            name: "进入店铺",
            type: 'store-bar'
        }
    };

    var configs = {
        template:
            '<div class="jz-store-bar am-cf">' +
            '    <a href="javascript:void(0);">' +
            '            <span class="am-fr right-txt">' +
            '                进入店铺' +
            '                <i class="am-icon-angle-right"></i>' +
            '            </span>' +
            '        <div class="left-txt">' +
            '            <i class="jz-icon jz-icon-dianpu"></i>' +
            '            九正建材网微商城' +
            '        </div>' +
            '    </a>' +
            '</div>',
        data: {

        }
    };

    var constructor = function() {
        var data = {};
        this.data = JZD.extend(data, JZD.Tool.depthClone(configs.data)) ;
        JZD.Widget.apply(this, arguments);
    };

    var methods = {
        getHtml: function() {
            return configs.template;
        }
    }

    return JZD.createClass(constructor, methods, JZD.Widget, statics);
})();

JZD.Editor.StoreBar = (function() {
    var configs = {
        template: null
    };

    var methods = {
        getHtml: function() {
            return null;
        }
    };

    return JZD.createClass(null, methods, JZD.Editor);
})();