/**
 *
 */
JZD.Widget.RichText = (function(){
    var statics = {
        info : {
            name : "富文件",
            type : 'RichText'
        }
    };

    var constructor = function() {
        // 默认的数据
        var data = {
            content: "this is a test value",
            fullscreen: false,
            bg_color: '#E2E2E2'
        };
        JZD.Widget.apply(this, arguments);
        this.data = data;
    };
    var methods = {
        getHtml : function(){
            var style = '';
            if(!this.data.fullscreen){
                style += ' padding:6px;'
            }

            if(this.data.bg_color.length > 0){
                style += ' background:' + this.data.bg_color;
            }

            var template = '<div class="custom-richtext" style="{style}">{content}</div>';

            return JZD.Html.template(template, {
                content : this.data.content,
                style : style
            }, true);
        }
    };

    return JZD.createClass(constructor, methods, JZD.Widget, statics);
})();


/**
 *
 *  富文本编辑器
 *  todo 增加editor
 */
JZD.Editor.RichText = (function(){
    var methods = {
        getHtml : function() {
            var template =
                '<div class="edit-rich-text">' +
                '    <form class="form-horizontal" novalidate="">' +
                '        <div class="control-group">' +
                '            <div class="">' +
                '                <label class="control-label">背景颜色：</label>' +
                '                <div class="input-append">' +
                '                    <input type="color" value="{bg_color}" name="color" class="span1">' +
                '                    <button class="btn js-reset-bg" type="button">重置</button>' +
                '                </div>' +
                '            </div>' +
                '            <div class="">' +
                '                <label class="control-label">是否全屏：</label>' +
                '                <label class="checkbox inline">' +
                '                    <input type="checkbox" name="fullscreen"> 全屏显示' +
                '                </label>' +
                '            </div>' +
                '        </div>' +
                '        <div class="control-group">' +
                '        <textarea name="editorValue" cols="30" rows="5" ' +
                            'id="ueditor_textarea_editorValue">{content}</textarea>' +
                '        </div>' +
                '    </form>' +
                '</div>';
            return JZD.Html.template(template, this.data, true);
        },

        initEvent : function(){
            var that = this;
            $('input[name=color]', this.cl).change(function(){
                that.trigger('data.change', 'bg_color', this.value);
            });
            $('input[name=fullscreen]', this.cl).change(function(){
                that.trigger('data.change', 'fullscreen', this.checked);
            });
            $('textarea[name=editorValue]', this.cl).change(function(){
                that.trigger('data.change', 'content', $(this).val());
            });
            $('.js-reset-bg', this.cl).click(function(){
                that.trigger('data.change', 'bg_color', '');
            });
        }
    };

    return JZD.createClass(null, methods, JZD.Editor);
})();