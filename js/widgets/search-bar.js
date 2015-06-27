/**
 * Created by hui on 2015/5/7
 *
 * 模块名
 */


JZD.Widget.SearchBar = (function() {
    var statics = {
        info: {
            name: "搜索条",
            type: 'search-bar'
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

JZD.Editor.SearchBar = (function() {
    var configs = {
        template: null
    };

    var methods = {
        getHtml: function() {
            return JZD.Html.template(configs.template,
                this.data, true);
        }
    }

    return JZD.createClass(null, methods, JZD.Editor);
})();