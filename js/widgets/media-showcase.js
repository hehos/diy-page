/**
 * Created by hui on 2015/5/7
 *
 * 模块名
 */


JZD.Widget.MediaShowcase = (function() {
    var statics = {
        info: {
            name: "橱窗",
            type: 'media-showcase'
        }
    };

    var configs = {
        template: {
            wrap:
                '<div class="{widgetClassName}">' +
                '    {headingTemplate}' +
                '    <div class="jz-media-body">' +
                '        <ul class="jz-media-items">' +
                '            {itemsHtml}' +
                '        </ul>' +
                '        {headlineTemplate}' +
                '        {explainTemplate}' +
                '    </div>' +
                '</div>',
            item:
                '<li class="jz-media-item" data-item-id="{itemId}">' +
                '    {itemContTemplate}' +
                '</li>',
            url:
                '    <a href="{url}">' +
                '        {imgTemplate}' +
                '    </a>',
            img:  '<img src="{imgSrc}" alt=""/>',

            heading: '<h4 class="jz-media-heading">{heading}</h4>',
            headline: '<p class="jz-media-headline">{headline}</p>',
            explain: '<p class="jz-media-explain">{explain}</p>'
        },
        data: {
            widgetClassName: "jz-media-showcase",
            // 橱窗类型的属性
            heading: "橱窗标题",
            headline: "内容区标题",
            explain: "内容区说明",
            itemDataTemplate: {
                imgSrc: "../img/temp/0.jpg",
                url: "javascript:void(0);"
            },
            // 调用接口返回的数据
            items: [],
            defaultItems: [
                {
                    itemId: 0,
                    imgSrc: "../img/temp/0.jpg",
                    url: "javascript:void(0);"
                },
                {
                    itemId: 1,
                    imgSrc: "../img/temp/1.jpg",
                    url: "javascript:void(0);"
                },
                {
                    itemId: 2,
                    imgSrc: "../img/temp/2.jpg",
                    url: "javascript:void(0);"
                }
            ]
        }
    };

    var constructor = function() {
        JZD.Widget.apply(this, arguments);
        var data = {};
        this.data = JZD.extend(data, JZD.Tool.depthClone(configs.data)) ;
    };

    var methods = {
        getHtml: function() {
            var data = this.data;
            var template = configs.template;
            if(data.items == null || data.items.length == 0) {
                data.items = data.defaultItems;
            }

            var itemContTemplate = "";
            var itemsHtml = "";
            var items = data.items;
            for(i in items) {
                if(items[i].url != "") {
                    itemContTemplate = JZD.Html.template(template.url, {
                        imgTemplate: template.img
                    }, true);
                } else {
                    itemContTemplate = template.img;
                }
                var itemTemplata = JZD.Html.template(template.item, {
                    itemContTemplate: itemContTemplate
                }, true);
                itemsHtml += JZD.Html.template(itemTemplata, items[i], true);
            }

            var headingTemplate = "";
            var headlineTemplate = "";
            var explainTemplate = "";
            if(data.heading != "") {
                headingTemplate = template.heading;
            }
            if(data.heading != "") {
                headlineTemplate = template.headline;
            }
            if(data.heading != "") {
                explainTemplate = template.explain;
            }

            return JZD.Html.template(
                JZD.Html.template(template.wrap, {
                    headingTemplate: headingTemplate,
                    itemsHtml: itemsHtml,
                    headlineTemplate: headlineTemplate,
                    explainTemplate: explainTemplate
                }, true),
            data, true);
        }
    }

    return JZD.createClass(constructor, methods, JZD.Widget, statics);

})();

JZD.Editor.MediaShowcase = (function() {
    var configs = {
        template:
            '<div class="am-form am-form-horizontal media-showcase">' +
            '    <div class="am-form-group am-form-group-sm">' +
            '        {input-html}' +
            '    </div>' +
            '    <div class="am-form-group am-form-group-sm">' +
            '        <label class="am-u-sm-2 am-form-label">显示方式</label>' +
            '        <div class="am-u-sm-10 js-radioGroup">' +
            '            {radio-html}' +
            '            {radio-html}' +
            '        </div>' +
            '    </div>' +
            '    <div class="am-form-group am-form-group-sm">' +
            '        {input-html}' +
            '    </div>' +
            '    <div class="am-form-group am-form-group-sm">' +
            '        {textarea-html}' +
            '    </div>' +
            '    <div class="media-items js-editorItems">'+
            '    </div>' +
            '</div>',
        itemTemplate:
            '        <div class="am-form-group am-form-group-sm editor-item' +
            '           js-editorItem">' +
            '            <span class="js-delItem"><i class="editor-del-btn">×</i></span>' +
            '            <div class="am-u-sm-4 img-act">' +
            '                <div class="img-upload">' +
            '                    <i class="am-icon-plus editor-add-item-icon"></i>' +
            '                    <a href="">添加图片</a>' +
            '                </div>' +
            '                <div class="img-result">' +
            '                    <img src="" alt=""/>' +
            '                    <a class="img-anew-upload" href="">重新上传</a>' +
            '                </div>' +
            '            </div>' +
            '            <div class="am-u-sm-8 set-link-wrap">' +
            '                <div class="set-link-act-wrap">' +
            '                    <label class="am-fl">链接：</label>' +
            '                    <a href="javascript:void(0);" class="am-block am-cf">' +
            '                        <div class="set-link-trigger am-fl">' +
            '                            设置链接到的页面地址</div>' +
            '                        <div class="set-link-result  am-fl">' +
            '                            <span class="am-fl">商品 | </span>' +
            '                            <span class="set-link-result-cont">测试商品，不发货，不退款测试商品，不发货，不退款测试商品，不发货，不退款</span>' +
            '                            <i class="editor-del-btn">×</i>' +
            '                            <span class="set-link-modify">修改</span>' +
            '                        </div>' +
            '                        <span class="sort-desc-icon am-fl"><i class="am-icon-sort-desc"></i></span>' +
            '                    </a>' +
            '                </div>' +
            '                <ul class="set-link-pulldown">' +
            '                    <li><a href="">微页面及分类</a></li>' +
            '                    <li><a href="">店铺主页</a></li>' +
            '                    <li><a href="">店铺主页</a></li>' +
            '                    <li><a href="">会员主页</a></li>' +
            '                </ul>' +
            '            </div>' +
            '        </div>',
        radios: {
            labels: [
                "默认", "PC"
            ],
            values: [
                "jz-media-showcase", "jz-media-showcase-pc",
            ],
            propNames: [
                "widgetClassName", 1,
            ]
        },
        checkboxs: {

        },
        inputs: {
            labels: [
                "橱窗标题名", "内容区标题"
            ],
            values: [],
            propNames: [
                "heading", "headline"
            ]
        },
        textareas: {
            labels: [
                "内容区说明"
            ],
            values: [],
            propNames: [
                "explain"
            ]
        }
    };

    var methods = {
        getHtml: function() {
            return this._getHtml(configs);
        },
        initDom: function() {
            JZD.Editor.prototype.initDom.apply(this, arguments);
            // 生成编辑器的三个编辑item

        },
        addItemTest: function() {
            var items = this.data.items;
            var itemDataTemplate = this.data.itemDataTemplate;
            itemDataTemplate = JZD.Tool.depthClone(itemDataTemplate)
            itemDataTemplate.itemId = items.length;
            items.push(itemDataTemplate);

            this.addItemHtml(configs);
        },
        getSynItems: function() {
            // todo
            // 获取接口的数据的逻辑
        }
    }

    return JZD.createClass(null, methods, JZD.Editor);
})();