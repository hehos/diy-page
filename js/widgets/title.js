/**
 * Created by hui on 2015/5/7.
 */

/**
 * 标题
 */

JZD.Widget.Title = (function() {
    var statics = {
        info: {
            name: "标题",
            type: 'title'
        }
    };

    var configs = {
        template:
            '<div class="jz-title {widgetClassName} {textAlign}" style="background-color: {backgroundColor}">' +
            '    <h2 class="jz-title-title">{title}' +
            '        <span class="title-link-container">' +
            '            <span class="title-split">-</span>' +
            '            <a href="{titleLinkUrl}" class="title-link">{titleLinkTxt}</a>' +
            '        </span>' +
            '    </h2>' +
            '    <div class="jz-sub-title">' +
            '        <span class="sub-title-txt">{subTitle}</span>' +
            '        <span class="sub-title-date">{subTitleDate}</span>' +
            '        <span class="sub-title-author">{subTitleAuthor}</span>' +
            '        <a href="{subTitleLinkUrl}" class="sub-title-link">{subTitleLinkTxt}</a>' +
            '    </div>' +
            '</div>',
        data: {
            widgetClassName: 'jz-title-normal',
            title: '标题内容',
            subTitle: '副标题内容',
            titleLinkTxt: '链接文本',
            titleLinkUrl: 'www.jc001.cn',
            subTitleDate: '2015-8-8',
            subTitleAuthor: '张三',
            subTitleLinkTxt: '副标题链接文本',
            subTitleLinkUrl: 'www.jc001.cn',

            textAlign: 'am-text-right',
            backgroundColor: '#fff'
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

JZD.Editor.Title = (function() {
    var configs = {
        template:
            '<div class="am-form am-form-horizontal">' +
            '    <div class="am-form-group am-form-group-sm">' +
            '        {input-html}' +
            '    </div>' +
            '    <div class="am-form-group am-form-group-sm">' +
            '        <label class="am-u-sm-2 am-form-label">标题模板</label>' +
            '        <div class="am-u-sm-10 js-radioGroup js-type">' +
            '            {radio-html}' +
            '            {radio-html}' +
            '        </div>' +
            '    </div>' +
            '    <div class="js-normal">' +
            '       <div class="am-form-group am-form-group-sm normalDate js-normalDate">' +
            '           {input-html}' +
            '           <a class="js-normalDateLink normalDateLink a-blue">日期</a>' +
            '       </div>' +
            '       <div class="am-form-group am-form-group-sm">' +
            '           <label class="am-u-sm-2 am-form-label">显示</label>' +
            '           <div class="am-u-sm-10 js-radioGroup">' +
            '               {radio-html}' +
            '               {radio-html}' +
            '               {radio-html}' +
            '           </div>' +
            '       </div>' +
            '       <div class="am-form-group am-form-group-sm js-bgInput">' +
            '           {input-html}' +
            '       </div>' +
            '    </div>' +
            '    <div class="am-form-group am-form-group-sm add-title-link-block js-addTitleLink">' +
            '        <a href="javascript:void(0);" class="add-title-link-close js-close">×</a>' +
            '        <p class="js-addTitleLinkBtn addTitleLinkBtn">' +
            '           <i class="a-green am-icon-plus-circle"></i>' +
            '            添加一条文本导航</p>' +
            '        <div class="am-form-group am-form-group-sm">' +
            '            {input-html}' +
            '        </div>' +
            '        <div class="am-form-group am-form-group-sm">' +
            '            {input-html}' +
            '        </div>' +
            '    </div>' +
            '    <div class="js-weixin">' +
            '        <div class="am-form-group am-form-group-sm js-weixinDate">' +
            '            {input-html}' +
            '        </div>' +
            '        <div class="am-form-group am-form-group-sm">' +
            '            {input-html}' +
            '        </div>' +
            '        <div class="am-form-group am-form-group-sm">' +
            '            {input-html}' +
            '        </div>' +
            '        <div class="am-form-group am-form-group-sm">' +
            '            {input-html}' +
            '        </div>' +
            '    </div>' +
            '</div>',
        radios: {
            labels: [
                "传统样式", "模仿微信图文页样式",
                "居左显示", "居中显示", "居右显示"
            ],
            values: [
                "jz-title-normal", "jz-title-weixin",
                "am-text-left", "am-text-center", "am-text-right"
            ],
            typeAttrNames: [
                "widgetClassName", 1,
                "textAlign", 1, 1
            ]
        },
        checkboxs: {

        },
        inputs: {
            labels: [
                "标题名", "副标题", "背景颜色", "标题链接名", "标题链接",
                "日期", "作者", "副标题链接名", "链接地址"
            ],
            values: [],
            typeAttrNames: [
                "title", "subTitle", "backgroundColor", "titleLinkTxt", "titleLinkUrl",
                "subTitleDate", "subTitleAuthor", "subTitleLinkTxt", "subTitleLinkUrl"
            ]
        }
    };

    //var constructor = function() {
    //
    //};

    var methods = {
        getHtml: function() {
            var template = configs.template;
            template = JZD.Tool.parseTemplateStr("radio",
                JZD.Tool.parseTemplateStr("input", template));
            var radios = configs.radios;
            var inputs = configs.inputs;

            var radiosData = this._getHtml(JZD.Html.radioHtml, radios, "radio");
            var inputsData = this._getHtml(JZD.Html.inputHtml, inputs, "input");

            var templateData =
                JZD.Tool.concatJson(radiosData, inputsData);

            //for(key in templateData) {
            //    console.log(key + ":" + templateData[key]);
            //}

            return JZD.Html.template(
                template,
                templateData, true);

        },
        initDom: function() {
            JZD.Editor.prototype.initDom.apply(this,arguments);
        },
        domAction: function() {
            var that = this;
            this.typeFormShowLogic();
            var radios = $(".js-type input[type=radio]");
            radios.click(function() {
                that.typeFormShowLogic();
            });

            this.addTitleLink();

            // 生成日期组件
            var dateInput = $(".js-normalDate input, .js-weixinDate input")
            dateInput.attr("data-am-datepicker", "");
            dateInput.blur(function() {
                var property = $(this).attr("data-attr-name");
                that.trigger('data.change', property, this.value);
            });

            $(".js-bgInput input").attr("type", "color");
        },
        typeFormShowLogic: function () {
            var radios = $(".js-type input[type=radio]");
            $.each(radios, function(i, item) {
                if(item.checked && item.value == "jz-title-normal") {
                    $(".js-normal").show();
                    $(".js-weixin").hide();
                    $(".js-addTitleLink").show();
                }
                if(item.checked && item.value == "jz-title-weixin") {
                    $(".js-weixin").show();
                    $(".js-normal").hide();
                    $(".js-addTitleLink").hide();
                }
            });
        },
        addTitleLink: function() {
            $(".js-addTitleLink .js-close").hide();
            $(".js-addTitleLink .am-form-group").hide();
            $(".js-addTitleLinkBtn").click(function() {
                $(".js-addTitleLinkBtn").hide();
                $(".js-addTitleLink .js-close").show();
                $(".js-addTitleLink .am-form-group").show();
            });
            $(".js-addTitleLink .js-close").click(function() {
                $(".js-addTitleLinkBtn").show();
                $(".js-addTitleLink .js-close").hide();
                $(".js-addTitleLink .am-form-group").hide();
            });
        }

    }


    return JZD.createClass(null, methods, JZD.Editor);
})();