/**
 * Created by hui on 2015/6/1.
 * JZP命名空间解释， JZ表示九正缩写，P表示plugin缩写。
 */
var JZP =  {
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

JZP.Plugin = (function() {
    var constructor = function() {
    }

    var methods = {
        run: function() {
        }
    }

    return JZP.createClass(constructor, methods);
})();