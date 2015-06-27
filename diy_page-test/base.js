var JZD =  {
    createClass : function(constructor, methods, supper, statics) {
        // 如果没有构造方法，那么有父类则继承父类，没有则创建一个空的构造函数。
        if(typeof constructor != 'function'){
            constructor = (typeof supper == 'function') ?
                function() {
                    // arguments表示在new对象时所传递的参数，与构造函数是否定义参数变量无关
                    supper.apply(this, arguments); }
                : function() {};
        }
        // 如果父类存在，继承父类方法。
        if(supper && typeof supper.prototype == 'object')
            this.extend(constructor.prototype, supper.prototype);
        // 创建自己的方法
        if(typeof methods == 'object')
            this.extend(constructor.prototype, methods);
        // 创建静态的属性。
        if(typeof statics == 'object')
            this.extend(constructor, statics);
        // 最后返回具有具有方法、属性、静态属性的构造方法。
        return constructor;
    },

    extend : function(A, $) {
        for (var _ in $) A[_] = $[_];
        return A
    }
};

JZD.Html = {
    template : function(s, config, reserve) {
        return s.replace(/\{([^}]*)\}/g,
            (typeof config == 'object') ?
            function(m, i) {
                var ret = config[i];
                return typeof ret == "undefined" && reserve ? m : ret;
            }: config);
    },

    radio : function(name, data, checked){
        var template = '' +
            '<label class="radio inline">' +
            '<input type="radio" {checked} name="{name}" value="{value}">{label}' +
            '</label>';

        var html = '', item;
        for(var i = 0; i < data.length; i++){
            item = JZD.extend({}, data[i]);
            item.name = name;
            if(typeof item.checked == 'undefined') {
                item.checked = item.value == checked ? 'checked' : '';
            }
            html += this.template(template, item, true);
        }
        return html;
    },

    checkbox : function(config, prefix, suffix){
        if(!(config instanceof Array)){
            return this.checkbox([config], prefix, suffix);
        }

        var data = config.concat();
        var template = '' +
            '<label class="checkbox inline">' +
            '<input type="checkbox" {checked} name="{name}" value="{value}">{label}' +
            '</label>';
        var html = '';
        var item ;
        for(var i = 0; i < data.length; i++){
            if(prefix){
                html += prefix;
            }
            item = data[i];
            item.checked = item.checked ? "checked" : '';
            html += this.template(template, item, true);
            if(suffix){
                html += suffix;
            }
        }
        return html;
    }
}

JZD.Event = {
    listeners : {},
    on : function(evt, callback){
        if(!this.listeners[evt]){
            this.listeners[evt] = [];
        }
        this.listeners[evt].push(callback);
        return this;
    },

    trigger : function(evt){
        if(!this.listeners[evt]){
            return;
        }

        args = [].slice.call( arguments, 1);
        var len = this.listeners[evt].length;
        for(var i = 0; i < len; i++){
            this.listeners[evt][i].apply(this, args);
        }
    }
}

// widget
JZD.Widget = (function(){
    var constructor = function(cl, data, options){
        this.cl = cl;
        if(typeof data == 'object'){
            JZD.extend(this.data, data);
        }
        this.options = options;
    };

    var methods = {
        data : {},
        bindEditor : function(editor){
            var that = this;
            editor.on('data.change', function(key, value){
                that.data[key] = value;
                that.render();
            });
        },

        getHtml : function(){
            console.log("Abstract method(getHtml)");
        },

        render : function(){
            var html = this.getHtml();
            this.cl.html(html);
        },

        getData : function(){
            return this.data;
        }
    };

    return JZD.createClass(constructor, methods);
})();

// editor
JZD.Editor = (function(){
    var constructor = function(cl, data, options){
        this.cl = cl;
        if(typeof data == 'object'){
            JZD.extend(this.data, data);
        }
        this.options = options;

        if(typeof this.init == 'function'){
            this.init();
        }
    };

    var methods = JZD.extend({
        init: null,

        data : {},

        getHtml : function(){
            console.log("Abstract method(getHtml)");
        },

        initEvent : function(){
            console.log("Abstract method(initEvent)");
        },

        render : function(){
            var html = this.getHtml();
            this.cl.html(html);
            this.initEvent();
        }
    }, JZD.Event);
    // createClass函数执行完毕就生成了一个Editor类。
    return JZD.createClass(constructor, methods);
})();

JZD.Page = (function () {
    var constructor = function(cl){
        this.cl = cl;
    };

    var methods = {
        addWidget : function(widget){
            // todo
            // create widget
            //
        },

        render : function(){
            // todo
            // read this widgets config/data
            // create widget, save to this prototype
            // create widget container(<div id="widget_id" class="drag_able"></div>)
            // render widget
            // add action event(on_mouse_over, on_click, on_mouse_out)
        },

        actionEdit : function(widget_id) {
            // todo
            // read config/data from widget_id
            // create editor
            // get widget and bindEditor
        },

        actionDel : function(widget_id){

        },

        actionAdd : function(type){
            // todo
            // type is null, render widgets editor
            // type is not null, addWidget
        },

        actionSave : function(){

        }
    };
})();