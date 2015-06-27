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

    var method = {
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

    return JZD.createClass(null, method, JZD.Widget, statics);
})();
