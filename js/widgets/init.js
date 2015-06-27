/**
 * Created by hui on 2015/5/7
 *
 * 模块名
 */


JZD.Widget.Nav = (function() {
    var statics = {
        info: {
            name: "进入店铺",
            type: 'store-bar'
        }
    };

    var configs = {
        template: null,
        data: {

        }
    };

    var constructor = function() {
        JZD.Widget.apply(this, arguments);
        var data = {};
        this.data = JZD.extend(data, JZD.Tool.depthClone(configs.data)) ;
    };

    var methods = {
        getHtml: function() {
            return JZD.Html.template(configs.template,
                this.data, true);
        }
    }

    return JZD.createClass(constructor, methods, JZD.Widget, statics);

})();

JZD.Editor.Nav = (function() {
    var configs = {
        template: null
    };

    var methods = {
        getHtml: function() {
            return this._getHtml(configs);
        }
    }

    return JZD.createClass(null, methods, JZD.Editor);
})();