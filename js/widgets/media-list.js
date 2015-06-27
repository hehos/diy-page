"use strict";
/**
 * Created by hui on 2015/5/7.
 *
 * 媒体
 */




JZD.Widget.MediaList = (function() {
    var statics = {
        info: {
            name: "媒体列表",
            type: 'media-list',
            plugins: [
                "media-waterfall"
            ]
        },
        configs: {
            template: {
                wrap:
                '<ul class="jz-media-list {widgetClassName}">' +
                '   {itemsHtml}' +
                '</ul>',
                item:
                '    <li data-item-id="{itemId}" class="jz-media-item {itemBigClassName}">' +
                '        <a class="a-block" href="{url}">' +
                '            <div class="jz-media-img">' +
                '                <img src="{imgSrc}" alt=""/>' +
                '            </div>' +
                '            {infoWrapTemplate}' +
                '        </a>' +
                '        {btnWrapTemplate}' +
                '    </li>',
                // media-info
                mediaInfoWrap:
                '            <div class="jz-media-info">' +
                '                {mediaInfoTemplate}' +
                '            </div>',
                title: '<p class="jz-media-title">{title}</p>',
                desc: '<p class="jz-media-desc">{desc}</p>',
                price: '<p class="jz-media-price">{price}</p>',
                originalPrice: '<p class="jz-media-original-price">原价：{originalPrice}</p>',
                promotioBadge: '<p class="jz-media-promotio-badge">{promotioBadge}</p>',
                // media-btns
                btnsWrap:
                '        <div class="jz-media-btns">' +
                '            {mediaBtnsTemplate}' +
                '        </div>',
                buyBtn: '<a href="" class="{buyBtn}"></a>',
                heartbtn: '<span class="jz-heart-btn"><i class="am-icon-heart"></i></span>'

            },
            data: {
                widgetClassName: "jz-media-small",
                // 一大两小的大小交替出现类型的 大图条目的className
                itemBigClassName: "jz-media-item-big",

                // media-info
                isTitle: false,
                isDesc: false, //  是否有产品描述
                isPrice: false,
                isOriginalPrice: false,
                promotioBadge: "我要抢购",

                // media-btns
                isBuyBtn: true,
                buyBtn: "icons-buy-btn1",
                isHeartBtn: true,

                // 瀑布流插件的数据
                iswaterfall: false,
                pluginData: {
                    domSelector:		".jz-media-waterfall",
                    cols: 				2,
                    loadWay:			"default",
                    animation:			"default",
                    initNum:			15,
                    batchNum:			3
                },

                // 处于活动的itemID
                //activeId: 0,
                itemDataTemplate: {
                    cateId: 0,
                    itemId: 0,
                    imgSrc: "../img/temp/1.jpg",
                    url: "javascript:void(0);",
                    title: "此处是媒体的名称",
                    desc: "此处是媒体的描述信息",
                    price: 888.88,
                    originalPrice: 666
                },
                cataDataTemplate: {
                    cateId: 0,
                    num: 5,
                    cataName: "最新产品"
                },
                // 调用接口返回的数据
                items: [],
                defaultItems: [
                    {
                        cateId: 0,
                        itemId: 0,
                        imgSrc: "../img/temp/media-default0.jpg",
                        url: "javascript:void(0);",
                        title: "此处是媒体的名称1",
                        desc: "此处是媒体的描述信息1",
                        price: 888.88,
                        originalPrice: 666
                    },
                    {
                        cateId: 0,
                        itemId: 1,
                        imgSrc: "../img/temp/media-default1.jpg",
                        url: "javascript:void(0);",
                        title: "此处是媒体的名称1",
                        desc: "此处是媒体的描述信息1",
                        price: 888.88,
                        originalPrice: 666
                    },
                    {
                        cateId: 1,
                        itemId: 2,
                        imgSrc: "../img/temp/media-default2.jpg",
                        url: "javascript:void(0);",
                        title: "此处是媒体的名称2",
                        desc: "此处是媒体的描述信息2",
                        price: 888.88,
                        originalPrice: 666
                    }
                ],
                // 分组类型
                isMediaGroup: false,
                cates: [],
                defaultCates: [
                    {
                        cateId: 0,
                        cateName: "最新商品"
                    },
                    {
                        cateId: 1,
                        cateName: "推荐商品"
                    }
                ]
            }
        }
    };


    var constructor = function() {
        JZD.Widget.apply(this, arguments);
        var data = {};
        this.data = JZD.extend(data,
            JZD.Tool.depthClone(this.constructor.configs.data)) ;
    };

    var methods = {
        getHtml: function() {
            this.filterType();

            var template = this.constructor.configs.template;
            var data = this.data;
            // 如果不是从接口获取数据模式那么数据使用默认数据。
            if(data.items == null || data.items.length == 0) {
                data.items = data.defaultItems;
            }
            if(data.cates == null || data.cates.length == 0) {
                data.cates = data.defaultCates;
            }
            var items = data.items;
            var itemsHtml = "";

            // 拼接和解析生成媒体项的模版
            var itemTemplate = template.item;

            var infoWrapTemplate = "";
            var mediaInfoTemplate = "";
            var isPromotion = (data.widgetClassName.search("jz-media-promotion") != -1);
            if(data.isTitle || data.isDesc || data.isPrice || data.isOriginalPrice || isPromotion) {
                if(data.isTitle) { mediaInfoTemplate += template.title; }
                if(data.isDesc) {  mediaInfoTemplate += template.desc; }
                if(data.isPrice) { mediaInfoTemplate += template.price; }
                if(data.isOriginalPrice) { mediaInfoTemplate += template.originalPrice; }
                // 促销类型
                if(isPromotion) { mediaInfoTemplate += template.promotioBadge; }
                infoWrapTemplate = JZD.Html.template(template.mediaInfoWrap,{
                    mediaInfoTemplate: mediaInfoTemplate
                }, true);
            }

            var btnWrapTemplate = "";
            var mediaBtnsTemplate = "";
            if(data.isBuyBtn || data.isHeartBtn) {
                if(data.isBuyBtn) { mediaBtnsTemplate += template.buyBtn; }
                if(data.isHeartBtn) {  mediaBtnsTemplate += template.heartbtn; }
                btnWrapTemplate = JZD.Html.template(template.btnsWrap,{
                    mediaBtnsTemplate: mediaBtnsTemplate
                }, true);
            }

            itemTemplate =  JZD.Html.template(itemTemplate,{
                infoWrapTemplate: infoWrapTemplate,
                btnWrapTemplate: btnWrapTemplate
            }, true);

            for(var i in items) {
                var itemData = items[i];
                // 如果是图片大小一大两小交替出现类型
                if(data.widgetClassName.search("jz-media-size-alternately") != -1 && i%3 == 0) {
                    itemData["itemBigClassName"] = data.itemBigClassName;
                } else { // 其他类型时清除大图项的特定className
                    itemData["itemBigClassName"] = "";
                }
                // 促销类型
                if(data.widgetClassName.search("jz-media-promotion") != -1) {
                    itemData.promotioBadge = data.promotioBadge;
                }
                if(data.isBuyBtn) { itemData.buyBtn = data.buyBtn; }
                itemsHtml += JZD.Html.template(itemTemplate, itemData, true);
            }

            return JZD.Html.template(template.wrap, {
                widgetClassName: data.widgetClassName,
                itemsHtml: itemsHtml
            }, true);
        },
        //domAction: function() {
        //    var that = this;
        //    var data = this.data;
        //
        //    var className = "#view-wrap .jz-media-list .jz-media-item";
        //    var items =  $(className);
        //
        //    // 样式标记当前编辑的item
        //    $("#view-wrap .jz-media-list [data-item-id='" + data.activeId +"']")
        //        .addClass("item-editoring");
        //
        //    items.click(function() {
        //        JZD.Comm.itemState.call(this, that, items);
        //    });
        //},
        //bindEditor: function(editor) {
        //    var that = this;
        //    var data = this.data;
        //    JZD.Widget.prototype.bindEditor.apply(this,arguments);
        //    // 编辑器缩略图选中时，通知显示视图的对应item显示样式。
        //    editor.on('modify.view.active', function(){
        //        var activeId = that.activeId;
        //        that.cl.find(".jz-media-item").removeClass("item-editoring");
        //        that.cl.find("[data-item-id='" + activeId + "']").addClass("item-editoring");
        //    });
        //},

        //  下面是判断具体的媒体相似类型
        filterType: function() {
            switch(this.options.type) {
                case "goodsGroup1":

                    break;
                case "goodsGroup2":

                    break;
            }
        }
    }

    return JZD.createClass(constructor, methods, JZD.Widget, statics);
})();

JZD.Editor.MediaList = (function() {
    var statics = {
        info: {
            name: "媒体列表",
            type: 'media-list',
            plugins: [
                "media-waterfall"
            ]
        },
        configs: {
            itemTemplate:
            '<li data-item-id="{itemId}" class="editor-item js-editorItem">' +
            '   <a  href="{url}">' +
            '       <img src="{imgSrc}" alt=""/>' +
            '   </a>' +
            '   <span class="del-btn js-delBtn"><i>×</i></span>' +
            '</li>',
            cateTemplate:
            '<div data-item-id="{cateId} class="editor-item js-editorItem">' +
            '   {cateName}' +
            '    <span class="del-btn js-delBtn"><i>×</i></span>' +
            '</div>',
            optionList:
            '        <div class="am-form-group am-form-group-sm">' +
            '            <label class="am-u-sm-2 am-form-label">商品来源</label>' +
            '            <div class="am-u-sm-10 js-radioGroup">' +
            '                <a>从商品分组中选择</a><a href="">修改</a>' +
            '            </div>' +
            '        </div>' +
            '        <div class="am-form-group am-form-group-sm">' +
            '            <label class="am-u-sm-2 am-form-label">商品来源</label>' +
            '            <div class="am-u-sm-10 js-radioGroup">' +
            '               {radio-html}{radio-html}{radio-html}' +
            '            </div>' +
            '        </div>',
            template:
            '<div class="am-form media-list am-form-horizontal">' +
            '    <div class="am-form-group">' +
            '        <label class="am-u-sm-2 am-form-label">添加项</label>' +
            '        <div class="am-u-sm-10 add-media-item">' +
            '            <a href="javascript:void(0);" ' +
            '               class="am-fl add-item-btn js-addItemBtn">' +
            '                <i class="am-icon-plus"></i></a>' +
            '            <input class="js-itemOrder" type="hidden" value=""/>' +
            '            <div class="js-optionHtml">' +
            '               <ul class="editor-items js-editorItems"></ul>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '    <div class="js-changeClassName">' +
            '        <div class="am-form-group am-form-group-sm">' +
            '            <label class="am-u-sm-2 am-form-label">列表类型</label>' +
            '            <div class="am-u-sm-10 js-radioGroup js-media-type">' +
            '                {radio-html}' +
            '                {radio-html}' +
            '                {radio-html}' +
            '                {radio-html}' +
            '                {radio-html}' +
            '            </div>' +
            '        </div>' +
            '        <div class="am-form-group am-form-group-sm">' +
            '            <label class="am-u-sm-2 am-form-label">显示模式</label>' +
            '            <div class="am-u-sm-10 js-radioGroup js-show-pattern" ' +
            '               style="padding-bottom: 0; border-bottom: none;">' +
            '                {radio-html}' +
            '                {radio-html}' +
            '                {radio-html}' +
            '                {radio-html}' +
            '            </div>' +
            '        </div>' +
            '        <div class="am-form-group am-form-group-sm">' +
            '            <label class="am-u-sm-2 am-form-label"></label>' +
            '            <div class="am-u-sm-10 js-radioGroup js-show-cols">' +
                // 瀑布流和图册类型  控制列的数量
            '                {radio-html}' +
            '                {radio-html}' +
            '                {radio-html}' +
            '                {radio-html}' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '    <div class="am-form-group am-form-group-sm js-waterfall">' +
            '        <label class="am-u-sm-2 am-form-label">瀑布流参数配置</label>' +
            '        <div class="am-u-sm-10">' +
            '            <div class="js-plugin-radios">' +
            '               <div class="am-form-group js-radioGroup js-load-way">' +
            '                    <label style="line-height: 1em; margin-bottom: 0;' +
            '                        vertical-align: bottom;">加载方式：</label>' +
            '                   {radio-html}' +
            '                   {radio-html}' +
            '               </div>' +
            '               <div class="am-form-group js-radioGroup">' +
            '                    <label style="line-height: 1em; margin-bottom: 0;' +
            '                        vertical-align: bottom;">加载动画：</label>' +
            '                   {radio-html}' +
            '                   {radio-html}' +
            '               </div>' +
            '            </div>' +
            '            <div class="js-plugin-inputs">' +
            '               <div class="am-form-group">' +
            '                懒加载初始化数目：<input type="number" min="3"' +
            '                    style="display: inline-block; width: auto;"' +
            '                   data-prop-name="initNum">' +
            '               </div>' +
            '               <div class="am-form-group">' +
            '                懒加载的批次数量：<input type="number" min="3"' +
            '                   style="display: inline-block; width: auto;"' +
            '                   data-prop-name="batchNum">' +
            '               </div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '    <div class="am-form-group am-form-group-sm js-show-cont-wrap">' +
            '        <label class="am-u-sm-2 am-form-label js-show-cont-label">显示内容</label>' +
            '        <div class="am-u-sm-10 js-show-cont">' +
            '            {checkbox-html}' +
            '            {checkbox-html}' +
            '            {checkbox-html}' +
            '            {checkbox-html}' +
            '            {checkbox-html}' +
            '            {checkbox-html}' +
            '        </div>' +
                // 四种类型的购买按钮样式选择
            '        <label class="am-u-sm-2 am-form-label js-buyBtns-label">购买样式</label>' +
            '        <div class="js-radioGroup js-buyBtns am-u-sm-10">' +
            '           {radio-html}{radio-html}{radio-html}{radio-html}' +
            '        </div>' +
            '    </div>' +
            '</div>',
            radios: {
                labels: [
                    "大图", "小图", "一大两小交替", "详细列表", "瀑布流",
                    "卡片", "极简", "促销", "图册或者广告",
                    "2列", "3列", "4列", "5列",
                    // 瀑布流参数配置
                    "default", "懒加载", "default", "淡入",
                    // 购买按钮样式
                    "样式1", "样式2", "样式3", "样式4"
                ],
                values: [
                    "jz-media-big", "jz-media-small", "jz-media-size-alternately", "jz-media-rowlist", "jz-media-waterfall",
                    "", "jz-media-simple", "jz-media-promotion", "jz-media-imgs",
                    "", "jz-media-col3", "jz-media-col4", "jz-media-col5",
                    "default", "lazy", "default", "fade",
                    "icons-buy-btn1", "icons-buy-btn2", "icons-buy-btn3", "icons-buy-btn4"
                ],
                propNames: [
                    "widgetClassName", 1, 1, 1, 1,
                    1, 1, 1, 1,
                    "widgetClassName", 1, 1, 1,
                    "loadWay", "loadWay", "animation", "animation",
                    "buyBtn", 1, 1, 1
                ]
            },
            checkboxs: {
                labels: [
                    "标题", "描述信息", "价格", "原价", "购买按钮", "收藏心形图标"
                ],
                values: [

                ],
                propNames: [
                    "isTitle", "isDesc", "isPrice", "isOriginalPrice", "isBuyBtn", "isHeartBtn"
                ]
            }

        }
    };

    var methods = {
        init: function() {
            if(this.options.type.search("goodsGroup") != -1) {
                var conf = this.constructor.configs
                conf.itemTemplate = conf.cateTemplate;
            }
        },
        getHtml: function() {
            return this._getHtml(this.constructor.configs);
        },
        initEvent: function() {
            var that = this;
            var data = this.data;
            JZD.Editor.prototype.initEvent.apply(this,arguments);
        },
        // 监听添加媒体项
        watchAddItemBtn: function() {
            var that = this;
            $(".js-addItemBtn").click(function() {
                // 分组的类型。
                if(that.options.type.search("goodsGroup") != -1) {
                    that.addCate();
                } else {
                    that.addItem();
                }
                if(that.data.iswaterfall) {
                    that.trigger("invoke.plugin", "media-waterfall",
                        that.data.pluginData);
                }
            });
        },
        initDom: function() {
            JZD.Editor.prototype.initDom.apply(this, arguments);
            if(this.data.items != this.data.defaultItems) {
                // 显示缩略图
                this.showThumb();
            }

            // 缩略图拖动排序
            if(this.options.type.search("goodsList") != -1) {
                this.watchItemOrder();
                this.itemDragsort();
            }
        },
        // 显示缩略图
        showThumb: function() {
            this.addItemHtml(this.constructor.configs);
        },
        // 编辑视图的条目的逻辑：拖动排序，删除事件绑定等。
        watchDelItem: function() {
            var that = this;
            // 删除
            var delsDom =  $(".js-delBtn");
            var delDom =  $(delsDom[delsDom.length-1]);
            delDom.click(function() {
                if(that.options.type.search("goodsGroup") != -1) {
                    that.delCate.apply(this, [that]);
                } else {
                    JZD.Editor.prototype.delItem.apply(this, [that]);
                }

                if(that.data.iswaterfall) {
                    that.trigger("invoke.plugin", "media-waterfall",
                        that.data.pluginData);
                }
            });
        },
        // 使用一个钩子监听条目顺序的变化，并触发重新渲染视图。
        watchItemOrder: function() {
            var that = this;
            var data = this.data;
            //  值的改变触发视图重新排序
            $(".js-itemOrder").change(function() {
                var itemOrder = this.value.split("|");
                // 重新排序data中的items
                if(this.options.type.search("goodsGroup") != -1) {
                    sortItem(itemOrder, "cates");
                } else {
                    sortItem(itemOrder, "items");
                }
            });
            function sortItem(itemOrder, type) {
                var items = data[type];
                var tempAry = [];
                for(var i in itemOrder) {
                    for(var j in items) {
                        if(items[j].itemId == itemOrder[i]) {
                            tempAry.push(items[j]);
                            break;
                        }
                    }
                }
                data[type] = tempAry;
                that.trigger("data.change", type, tempAry);
                if($(".js-media-type [value='jz-media-waterfall']")[0].checked) {
                    that.trigger("invoke.plugin", "media-waterfall",
                        data.data.pluginData);
                }
            }
        },
        //showItemThumb: function() {
        //    var that = this;
        //    var items = this.data.items;
        //    var data = this.data;
        //
        //    $(".js-itemThumbnail .thumb-item").remove();
        //    $.each(items, function(i, item) {
        //        var thumbData = {
        //            itemId: item.itemId,
        //            url: item.url,
        //            imgName: item.imgName
        //        }
        //        var thumbTemplate =
        //            '<a data-item-id="{itemId}" href="{url}" class="thumb-item">' +
        //            '    <img src="../img/temp/{imgName}" alt=""/>' +
        //            '    <i>×</i>' +
        //            '</a>';
        //
        //        $(".js-itemThumbnail").append(
        //            JZD.Html.template(thumbTemplate, thumbData, true)
        //        );
        //    });
        //    $(".js-itemThumbnail .thumb-item").removeClass("item-editoring");
        //    $(".js-itemThumbnail [data-item-id='" + data.activeId + "']").
        //        addClass("item-editoring");
        //
        //    $(".js-itemThumbnail .thumb-item").click(function() {
        //        JZD.Comm.itemState.call(this, that, $(".js-itemThumbnail .thumb-item"));
        //        that.trigger("data.change.onlyRender");
        //        if($(".js-media-type [value='jz-media-waterfall']")[0].checked) {
        //            that.trigger("invoke.plugin", "media-waterfall",
        //                data.pluginData);
        //        }
        //    });
        //
        //    // 删除按钮绑定事件
        //    var delBtns = $(".js-itemThumbnail .thumb-item i");
        //    $(delBtns).click(function() {
        //        var itemId = $(this).parent().attr("data-item-id");
        //
        //        if(itemId == data.activeId) {
        //            data.activeId = -1; // 如果删除的是当前的标记的item，那么废除当前活动id。
        //        }
        //        that.trigger("del.data.item", "items", itemId);
        //        $(this).parent().remove();
        //
        //        if(that.data.iswaterfall) {
        //            that.trigger("invoke.plugin", "media-waterfall",
        //                data.pluginData);
        //        }
        //    });
        //},
        domAction: function() {
            var that = this;

            // 组件单选按钮关联显示逻辑
            this.radioLogic();

            // 购买按钮现实逻辑
            this.buyBtnShowLogic();
            $("input[data-prop-name='isBuyBtn']").change(function() {
                that.buyBtnShowLogic();
            });
            // 不同的显示模式 不同的显示内容
            this.contFromShowLogic();
            $(".js-show-pattern input").change(function() {
                that.contFromShowLogic();
            });

            // 瀑布流form事件
            this.pluginFormData();  // 映射插件form的数据。
            this.pluginFormEvent(); // 通知插件form监听事件
            // 监听切换到瀑布流模式的处理事件。
            $(".js-media-type input").change(function() {
                if($(".js-media-type input")[4].checked) { // 如果是瀑布流类型
                    that.data.pluginData.domSelector = "." + this.value;
                    // 渲染初始数据
                    that.trigger("invoke.plugin", "media-waterfall",
                            that.data.pluginData);
                    that.data.iswaterfall = true;
                } else {
                    that.data.iswaterfall = false;
                }
                if($(".js-media-type input")[3].checked) {
                    that.data.isTitle = true;
                    that.data.isPrice = true;
                    that.data.isBuyBtn = true;
                    that.trigger("data.change.onlyRender");
                }
            });
        },
        radioLogic: function() {
            var that = this;

            var doms = $(".js-changeClassName input");

            // 根据对应的className让相关的单选按钮显示正确的状态
            // （在生成编辑试图的时候初始化单选按钮的状态）
            var className = this.data.widgetClassName;
            className = $.trim(className);
            var classNAry = className.split(/\s+/);

            if(classNAry[1] == undefined) { classNAry[1] = ""; }
            if(classNAry[2] == undefined) { classNAry[2] = ""; }

            $(".js-media-type [value='" + classNAry[0] +"']").attr("checked", true);
            $(".js-show-pattern [value='" + classNAry[1] +"']").attr("checked", true);
            $(".js-show-cols [value='" + classNAry[2] +"']").attr("checked", true);

            this.radioShowLogic();
            doms.change(function() {
                that.radioShowLogic();

                // 合并className
                var property = $(this).attr("data-prop-name");
                var className = "";
                for(var i = 0; i < doms.length; i++) {
                    if(doms[i].checked) {
                        var colsDom = $(".js-show-cols input");
                        if(jQuery.inArray(doms[i], colsDom) == -1) {
                            className += " " +  doms[i].value;
                        }
                        // 在准备合并的是控制列的className时，只有小图类型才合并控制列的className
                        if(jQuery.inArray(doms[i], colsDom) != -1 &&
                            $(".js-media-type input")[1].checked) {
                            className += " " +  doms[i].value;
                        } else {
                            continue;
                        }
                    }
                }
                className = $.trim(className);
                that.trigger('data.change', property, className);
            });

            // 瀑布流form显示逻辑
            $(".js-plugin-inputs").hide();
            $(".js-load-way input").change(function() {
                if($(".js-load-way input")[1].checked) {
                    $(".js-plugin-inputs").show();
                } else {
                    $(".js-plugin-inputs").hide();
                }
            });

        },
        radioShowLogic: function() {
            var types = $(".js-media-type input");
            var patterns = $(".js-show-pattern input");
            var cols = $(".js-show-cols input");
            // 单选显示和选中逻辑
            cols.parent().hide();
            patterns.parent().show();
            $(".js-waterfall").hide();
            if(types[1].checked || types[4].checked) {
                cols.parent().show();
            }
            if(types[0].checked || types[2].checked) {
                if(patterns[2].checked) {
                    patterns[0].checked  = true;
                }
                $(patterns[2]).parent().hide();
            }
            if(types[3].checked) {
                if(patterns[2].checked || patterns[3].checked) {
                    patterns[0].checked  = true;
                }
                $(patterns[2]).parent().hide();
                $(patterns[3]).parent().hide();
            }
            if(types[4].checked) {
                $(".js-waterfall").show();
            }
        },
        buyBtnShowLogic: function() {
            var btn = $("input[data-prop-name='isBuyBtn']");
            if(btn[0].checked) {
                $(".js-buyBtns-label").show();
                $(".js-buyBtns").show();
            } else {
                $(".js-buyBtns-label").hide();
                $(".js-buyBtns").hide()
            }
        },
        contFromShowLogic: function() {
            var showWays = $(".js-show-pattern input");
            var contRadios = $(".js-show-cont label");
            if(showWays[0].checked) {
                contRadios.show();
                this.buyBtnShowLogic();
                $(".js-show-cont-wrap").show();
            } else {
                contRadios.hide();
                $(".js-buyBtns-label").hide();
                $(".js-buyBtns").hide();
                $(".js-show-cont-wrap").hide();
            }
            if(showWays[1].checked || showWays[3].checked) {
                $(".js-show-cont-wrap").show();
            }
            if(showWays[1].checked) {
                $(contRadios[2]).show();
            }
            if(showWays[2].checked) {
                // 注销模式强制执行下面逻辑
                $(".js-show-cont input")[2].checked = true;
                $(".js-show-cont input")[3].checked = true;
                this.data.isPrice = true;
                this.data.isOriginalPrice = true;
                this.trigger("data.change.onlyRender");
            }
            if(showWays[3].checked) {
                $(contRadios[0]).show();
            }
        },
        // 瀑布流相关表单数据改变触发事件
        pluginFormEvent: function() {
            var that = this;
            var pluginData = this.data.pluginData;
            // 瀑布流form的值改变时，同时改变它的数据，即是pluginData
            $(".js-show-cols input").change(function() {
                var value = this.value;
                var p = /\D*(\d+)/g;
                var m  = p.exec(this.value);
                // 在列为2列时的特殊处理
                value = (m == null) ? 2 : m[1];
                pluginData["cols"] = value;
            });
            $(".js-waterfall input").change(function() {
                var property = $(this).attr("data-prop-name");
                pluginData[property] = this.value;
                that.trigger("data.change.onlyRender");
            });
            // 在瀑布流被选中的情况下,监听相关form数据改变后触发瀑布流执行。
            var className =
                ".js-show-pattern input, " +
                ".js-show-cols input, " +
                ".js-waterfall input, " +
                ".js-show-cont input, " +
                ".js-buyBtns input";
            $(className).change(function() {
                if(that.data.iswaterfall) {
                    that.trigger("invoke.plugin", "media-waterfall", pluginData);
                }
            });
        },
        pluginFormData: function() {
            var data = this.data.pluginData;
            for(var key in data) {
                if (typeof data[key] == "string" || typeof data[key] == "number") {
                    var className1 = ".js-plugin-radios [data-prop-name='" + key + "'], " +
                        "   js-show-cols [data-prop-name='" + key + "']";
                    var className2 = ".js-plugin-inputs [data-prop-name='" + key + "']";
                    var doms = $(className1);
                    for(var i = 0; i < doms.length; i++) {
                        if($(doms[i]).attr("value") == data[key]) {
                            doms[i].checked= true;
                        }
                    }
                    // 输入框赋值
                    $(className2).attr("value", data[key]);

                }
                if(key == "cols") {
                    var value = data[key] == 2 ? "" : "jz-media-col" + data[key];
                    var className = ".js-show-cols input[value='" + value + "']"
                    $(className).attr("checked", true);
                }
            }
        },
        getSynItemData: function() {
            // todo
            // 获取接口的数据的逻辑
            var data = null;
            return data;
        },
        getTestItemData: function(itemData) {
            // 下面是随机构建一个item数据
            var num = parseInt(Math.random() * 20);
            for(var key in itemData) {
                var item = itemData[key];
                if(key == "url") {
                    continue;
                }
                if(key == "imgSrc") {
                    var p = /\/[\w-]+\./; // 改变图片的名字。
                    itemData[key] = item.replace(p, "/" +  num + ".");
                    continue;
                }
                if (typeof item == "string") {
                    itemData[key] = num + item;
                }
                if(typeof item == "numbter") {
                    itemData[key] = num * 100;
                }
            }
            return itemData;
        },


        // 分组的类型的方法。
        addCate: function() {
            if(JZD.schema) {
                this.addSynCate();
            } else {
                this.addTestCate();
            }
            this.trigger("data.change.onlyRender");
            this.showItemThumb();
        },
        // 添加一个分组，同时要添加分组的item
        addTestCate: function() {
            var data = this.data;
            var cates = data.cates;
            var cataData = data.cataDataTemplate;
            cataData = JZD.Tool.depthClone(cataData);

            cataData = this.addCateTestData(cataData);
            cataData.cateId = cates.length;
            cates.push(cataData);
            this.addItemHtml(this.constructor.configs, cataData);

            // 添加分组的item
            for(var i = 0; i < cataData.num; i++) {
                var itemData = this.getTestItemData(data.itemDataTemplate);
                itemData.cataId = cataData.cateId;
                data.items.push(itemData);
            }
            // 对item根据cateId从小到大排序
            items.sort(function(o1, o2) {
                return o1.cateId - o2.cateId;
            })
        },
        addCateTestData: function(cataData) {
            for(var key in cataData) {
                if(key == "cataId") {
                    cataData[key]++;
                }
            }
            return cataData;
        },
        addSynCate:function() {
            var data = this.getSynItemCate();
            this.data.cates = this.data.cates.concat(data);
            this.addItemHtml(this.constructor.configs, data);
        },
        getSynItemCate: function() {
            // todo
            // 获取结构的数据
            var data = null;
            this.data.items.push(data.items);
            return data.cates;
        },
        delCate: function() {
            var that = arguments[0];
            var cates = that.data.cates;
            var cateDom = $(this).parent(".js-editorItem");
            var cateId = cateDom.attr("data-item-id");
            cateDom.remove();
            for(var i in cates) {
                if(cates[i].cateId == cateId) {
                    JZD.Tool.delAryByIdx(i, cates);
                    break;
                }
            }
            // 删除类型关联的item
            var items = that.data.items;
            for(var i in items) {
                if(items[i].cateId == cateId) {
                    JZD.Tool.delAryByIdx(i, items);
                }
            }
            that.trigger("data.change.onlyRender");
        }

    }

    return JZD.createClass(null, methods, JZD.Editor, statics);
})();