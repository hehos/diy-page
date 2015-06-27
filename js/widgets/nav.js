/**
 * Created by hui on 2015/4/10.
 *
 * 导航
 */
JZD.Widget.Nav = (function(){
    var statics = {
        info : {
            name : "导航",
            type : 'nav'
        }
    };
    var configs = {
        template: [
            {
                wrap:
                    '<ul class="jz-nav {widgetClassName}">' +
                    '   {itemsHtml}' +
                    '</ul>',
                item:
                    '    <li><a href="javascript: void(0)">' +
                    '        <span class="jz-item-icon">{iconContent}</span>' +
                    '        <div class="jz-item-txt">{itemContent}' +
                    '            <span class="jz-right-icon"><i class="am-icon-angle-right"></i></span>' +
                    '            <p class="jz-item-explain">{explainContent}</p>' +
                    '        </div>' +
                    '    </a></li>'
            },
            {
                wrap:
                    '<ul class="am-nav {widgetClassName}">' +
                    '   {itemsHtml}' +
                    '</ul>',
                item: '<li><a href="javascript: void(0)">{itemContent}<i class=""></i></a></li>',
                hasSubNavItem:
                    '<li class="am-dropdown" data-am-dropdown="">' +
                    '    <a class="am-dropdown-toggle" href="javascript: void(0)">{itemContent}' +
                    '        <i class="am-icon-caret-down"></i></a>' +
                    '   {subNavHtml}' +
                    '</li>',
                subNav:
                    '<ul class="am-dropdown-content">' +
                    '   {subItemsHtml}' +
                    '</ul>',
                subItem: '<li><a href="javascript: void(0)">{subItemContent}</a></li>'
            },
            {
                wrap:
                    '<header class="{widgetClassName}">' +
                    '  <h1 class="am-topbar-brand">' +
                    '    <a href="#">Amaze UI</a>' +
                    '  </h1>' +
                    '  <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: \'#doc-topbar-collapse\'}"><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>' +
                    '  <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">' +
                    '    <ul class="am-nav am-nav-pills am-topbar-nav">' +
                    '       {itemsHtml}' +
                    '    </ul>' +
                    '    {searchBoxContent}' +
                    '    {rightInfoContent}' +
                    '  </div>' +
                    '</header>',
                item: '<li><a href="javascript: void(0)">{itemContent}</a></li>',
                hasSubNavItem:
                    '<li class="am-dropdown" data-am-dropdown="">' +
                    '    <a class="am-dropdown-toggle" href="javascript: void(0)">{itemContent}' +
                    '        <i class="am-icon-caret-down"></i></a>' +
                    '   {subNavHtml}' +
                    '</li>',
                subNav:
                    '<ul class="am-dropdown-content">' +
                    '   {subItemsHtml}' +
                    '</ul>',
                subItem: '<li><a href="javascript: void(0)">{subItemContent}</a></li>',

                searchBox:
                    '    <form class="am-topbar-form am-topbar-left am-form-inline" role="search">' +
                    '      <div class="am-form-group am-form-group-sm">' +
                    '        <input type="text" class="am-form-field am-input-sm" placeholder="搜索">' +
                    '      </div>' +
                    '    </form>',
                rightInfo:
                    '    <div class="am-topbar-right">' +
                    '      <div class="am-dropdown" data-am-dropdown="{boundary: \'.am-topbar\'}">' +
                    '        <button class="am-btn am-btn-secondary am-topbar-btn am-btn-sm am-dropdown-toggle" data-am-dropdown-toggle>其他 <span class="am-icon-caret-down"></span></button>' +
                    '        <ul class="am-dropdown-content">' +
                    '          <li><a href="#">注册</a></li>' +
                    '          <li><a href="#">随便看看</a></li>' +
                    '        </ul>' +
                    '      </div>' +
                    '    </div>' +
                    '    <div class="am-topbar-right">' +
                    '      <button class="am-btn am-btn-primary am-topbar-btn am-btn-sm">登录</button>' +
                    '    </div>'
            },
            {
                wrap:
                    '<nav data-am-widget="menu" class="am-menu {widgetClassName}" data-am-menu-collapse>' +
                    '    <a href="javascript: void(0)" class="am-menu-toggle">' +
                    '        <i class="am-menu-toggle-icon am-icon-bars"></i>' +
                    '    </a>' +
                    '    <ul class="am-menu-nav am-avg-sm-3 am-collapse">' +
                    '       {itemsHtml}' +
                    '    </ul>' +
                    '</nav>',
                wrap2:
                    '<nav data-am-widget="menu" class="am-menu  {widgetClassName}" data-am-menu-offcanvas>' +
                    '    <a href="javascript: void(0)" class="am-menu-toggle">' +
                    '        <i class="am-menu-toggle-icon am-icon-bars"></i>' +
                    '    </a>' +
                    '    <div class="am-offcanvas">' +
                    '        <div class="am-offcanvas-bar">' +
                    '            <ul class="am-menu-nav am-avg-sm-1">' +
                    '            	{itemsHtml}' +
                    '            </ul>' +
                    '        </div>' +
                    '    </div>' +
                    '</nav>',
                item: '<li><a href="javascript: void(0)">{itemContent}</a></li>',
                hasSubNavItem:
                    '<li class="am-parent">' +
                    '    <a href="javascript: void(0)" class="">{itemContent}</a>' +
                    '   {subNavHtml}' +
                    '</li>',
                subNav:
                    '<ul class="am-menu-sub am-collapse am-avg-sm-3">' +
                    '   {subItemsHtml}' +
                    '</ul>',
                subItem: '<li><a href="javascript: void(0)">{subItemContent}</a></li>'
            }
        ],
        data: {
            widgetClassName: "jz-nav-icon1",

            isIcon: true,
            iconType: "img",

            isExplain: true, // 是否有

            // type = 3 时
            isSearchBox: true,
            isDarkColor: false,
            isRightInfo: true,

            // 是否是菜单导航的子类型3
            isMenuNav3: false,

            activeId: 0,
            itemDataTemplate: {
                itemId: 0,
                itemContent: "新闻",
                img: "nav-img1.png",
                iconfont: "am-icon-home",
                explainContent: "简单介绍1",
                isSubNav: true,
                subItems: "下拉条目1.1  下拉条目1.2"
            },
            items: [],
            defaultItems: [
                {
                    itemId: 0,
                    itemContent: "新闻",
                    img: "nav-img1.png",
                    iconfont: "am-icon-home",
                    explainContent: "简单介绍1",
                    isSubNav: true,
                    subItems: "下拉条目1.1  下拉条目1.2"
                },
                {
                    itemId: 1,
                    itemContent: "产品",
                    img: "nav-img1.png",
                    iconfont: "am-icon-home",
                    explainContent: "简单介绍2",
                    isSubNav: true,
                    subItems: "下拉条目2.1  下拉条目2.2"
                },
                {
                    itemId: 2,
                    itemContent: "案例",
                    img: "nav-img1.png",
                    iconfont: "am-icon-home",
                    explainContent: "简单介绍3",
                    isSubNav: true,
                    subItems: "下拉条目3.1 下拉条目3.2"
                }
            ]
        }
    }


    var constructor = function() {
        JZD.Widget.apply(this, arguments);
        var data = {
            _type: 0
        };

        // 是用concatJson方法里面的 JSON.stringify能实现对象的深度克隆
        data = JZD.extend(data, JZD.Tool.depthClone(configs.data)) ;

        // 改变导航type时。默认组件className。
        Object.defineProperty(data, "type", {
            get: function() {
                return this._type;
            },
            set: function(newType) {
                this._type = newType;
                switch (newType) {
                    case 0:
                        this.widgetClassName = "jz-nav-icon1";
                        break;
                    case 1:
                        this.widgetClassName = "";
                        break;
                    case 2:
                        this.widgetClassName = "";
                        break;
                    case 3:
                        this.widgetClassName = "am-menu-default";
                        break;
                }
            }
        });
    };
    var methods = {
        getHtml : function(){
            var template = configs.template[data.type];
            var data = data;

            // 如果不是从接口获取数据模式那么数据使用默认数据。
            if(data.items == null || data.items.length == 0) {
                data.items = data.defaultItems;
            }
            var items = data.items;
            var itemsHtml = "";

            for(var i = 0; i < items.length; i++ ) {

                var itemData = items[i];

                var itemTemplate = "";
                var subNavHtml = "";

                var itemContent = itemData.itemContent;
                var explainContent = "";
                var iconContent = "";

                if(data.isIcon) {
                    var value = itemData[data.iconType];
                    if(data.iconType == "img") {
                        iconContent = JZD.Html.template(JZD.Html.imgHtml,{
                            imgFileName: value
                        }, true);
                    }
                    if(data.iconType == "iconfont") {
                        iconContent = JZD.Html.template(JZD.Html.iconHtml,{
                            className: value
                        }, true);
                    }
                }

                if(data.isExplain) {
                    explainContent = itemData.explainContent;
                    // 条目简单介绍为可选，在添加条目时或者某些情况为空字符串或者null时设置默认值。
                    if(itemData.explainContent == null || itemData.explainContent == "") {
                        itemData.explainContent = "条目简单介绍（默认值）";
                    }
                }


                // type == 0 时不执行下面代码，因为该类型没有hasSubNavItem。
                if(data.type != 0 && itemData.isSubNav) {
                    itemTemplate = template.hasSubNavItem;

                    var subItems = $.trim(itemData.subItems);
                    subItems = subItems.split(/\s+/);
                    var subItemsCount = subItems.length;


                    var subItemsHtml = "";
                    for(var j = 0; j < subItemsCount; j++) {
                        var subItemData = subItems[j];

                        subItemsHtml += JZD.Html.template(template.subItem,{
                            subItemContent: subItemData
                        }, true);
                    }

                    subNavHtml = JZD.Html.template(template.subNav,{
                        subItemsHtml: subItemsHtml
                    }, true);
                } else {
                    itemTemplate = template.item;
                }

                var itemHtml = JZD.Html.template(itemTemplate, {
                    itemContent: itemContent,
                    iconContent: iconContent,
                    explainContent: explainContent,
                    subNavHtml: subNavHtml
                }, true);

                itemsHtml += itemHtml;
            }

            var searchBoxContent = "";
            var rightInfoContent = "";
            if(data.type == 2) {
                if(data.isDarkColor) {
                    data.widgetClassName += " am-topbar-inverse";
                } else {
                    data.widgetClassName =
                        data.widgetClassName.replace(/ am-topbar-inverse/, "");
                }
                if(data.isSearchBox) {
                    searchBoxContent = template.searchBox;
                }
                if(data.isRightInfo) {
                    rightInfoContent = template.rightInfo;
                }
            }


            var wrapTemplate = template.wrap;
            if(data.type == 3 && data.isMenuNav3) {
                wrapTemplate = template.wrap2;
            }
            var widgetHtml = JZD.Html.template(wrapTemplate, {
                widgetClassName : data.widgetClassName,
                itemsHtml: itemsHtml,
                // type = 3
                searchBoxContent: searchBoxContent,
                rightInfoContent: rightInfoContent
            }, true);

            return widgetHtml;
        },
        render: function() {
            JZD.Widget.prototype.render.apply(this,arguments);

            // 使动态加载dom对框架的js效果生效。
            JZD.Tool.loadJs();
        },
        domAction: function() {
            var that = this;
            var data = data;

            var className = "#view-wrap .am-menu-nav > li," +
                " #view-wrap .am-nav > li," +
                " #view-wrap .jz-nav > li";
            var items =  $(className);

            // 样式标记当前编辑的item
            if(data.activeItem.idx != -1) {
                $(items[data.activeItem.idx]).addClass("item-editoring");
            }

            items.click(function() {
                var idx = jQuery.inArray(this, items);
                data.activeItem = data.items[idx];
                data.activeItem.idx = idx;
                // 样式标记当前编辑的item
                items.removeClass("item-editoring");
                $(this).addClass("item-editoring");
            });
        }

    };

    return JZD.createClass(constructor, methods, JZD.Widget, statics);
})();


JZD.Editor.Nav = (function(){
    /**
     * 数据结构设计说明：
     *    labels: 表示控制标签显示的文字
     *    values：表示控制标签将改变的data相应属性的值
     *    typeAttrNames: 表示将被values改变的对应属性
     *
     *    注：typeAttrNames的值可能是多对一。
     *      设计方式：若相同属性对应关系，使用数值1填充。
     *      数值1形象逻辑：true转数值对应1，表示是跟前面的值相同。
     */
	var configs = {
        template:
            '<div class="am-tabs am-form am-form-horizontal" data-am-tabs>' +
            '    <ul class="am-tabs-nav am-nav am-nav-tabs js-type">' +
            '        {navTabsHtml}' +
            '    </ul>' +
            '    <div class="am-tabs-bd js-type-panel js-radioGroup js-radioWrap">' +
            '        <div class="am-tab-panel js-type0-panel am-active">' +
            '            <div class="am-form-group am-form-group-sm am-fr js-isIconCheckbox">' +
            '               {checkbox-html}' +
            '            </div>' +
            '            <div class="am-form-group am-form-group-sm js-type0Radios">' +
            '               {radio-html}' +
            '               {radio-html}' +
            '               {radio-html}' +
            '            </div>' +
            '            <div class="am-form-group am-form-group-sm js-radioGroup js-iconType">' +
            '               {radio-html}' +
            '               {radio-html}' +
            '            </div>' +
            '        </div>' +
            '        <div class="am-tab-panel js-type1-panel">' +
            '            <div class="am-form-group am-form-group-sm js-type1Radios">' +
            '               {radio-html}' +
            '               {radio-html}' +
            '               {radio-html}' +
            '               {radio-html}' +
            '            </div>' +
            '        </div>' +
            '        <div class="am-tab-panel js-type2-panel">' +
            '            <div class="am-form-group am-form-group-sm am-fr js-otherCont">' +
            '                {checkbox-html}' +
            '                {checkbox-html}' +
            '                {checkbox-html}' +
            '            </div>' +
            '            <div class="am-form-group am-form-group-sm js-type2Radios">' +
            '                {radio-html}' +
            '            </div>' +
            '        </div>' +
            '        <div class="am-tab-panel js-type3-panel">' +
            '            <div class="am-tabs" data-am-tabs>' +
            '                <ul class="am-tabs-nav am-nav am-nav-tabs js-subtype">' +
            '                    <li class="am-active"><a href="javascript: void(0)">横排</a></li>' +
            '                    <li><a href="javascript: void(0)">竖排</a></li>' +
            '                    <li><a href="javascript: void(0)">侧滑</a></li>' +
            '                </ul>' +
            '                <div class="am-tabs-bd">' +
            '                   <div class="am-tab-panel am-active js-type3RadioGroup">' +
            '                       {radio-html}' +
            '                       {radio-html}' +
            '                       {radio-html}' +
            '                   </div>' +
            '                   <div class="am-tab-panel js-type3RadioGroup">' +
            '                       {radio-html}' +
            '                       {radio-html}' +
            '                   </div>' +
            '                   <div class="am-tab-panel js-type3RadioGroup">' +
            '                       {radio-html}' +
            '                       {radio-html}' +
            '                       {radio-html}' +
            '                   </div>' +
            '                </div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '	<div class="inputArea js-inputsToItem">' +
            '		<div class="am-form-group am-form-group-sm js-inputFont">' +
            '		    <label class="am-u-sm-3 am-form-label" for="className">className</label>' +
            '		    <div class="am-u-sm-9">' +
            '		        <input type="text" placeholder="输入字体图标className"' +
            '                   data-attr-name="iconfont" value="{iconfont}">' +
            '		    </div>' +
            '		</div>' +
            '		<div class="am-form-group am-form-group-sm js-inputImg">' +
            '		    <label class="am-u-sm-3 am-form-label" for="imgName">图片名称</label>' +
            '		    <div class="am-u-sm-9">' +
            '		        <input type="text" placeholder="输入图片名称"' +
            '                   data-attr-name="img" value="{img}">' +
            '		    </div>' +
            '		</div>' +
            '		<div class="am-form-group am-form-group-sm js-InputItem">' +
            '		    <label class="am-u-sm-3 am-form-label" for="itemName-0">' +
            '		        <span class="a-red">*</span>导航名称</label>' +
            '		    <div class="am-u-sm-9">' +
            '		        <input type="text" placeholder="输入导航名称"' +
            '                   data-attr-name="itemContent" value="{itemContent}">' +
            '		    </div>' +
            '		</div>' +
            '		<div class="am-form-group am-form-group-sm js-inputExplain">' +
            '		    <label class="am-u-sm-3 am-form-label" for="intro-0">介绍信息</label>' +
            '		    <div class="am-u-sm-9">' +
            '		        <input type="text" placeholder="输入导航条目的简单介绍"' +
            '                   data-attr-name="explainContent" value="{explainContent}">' +
            '		    </div>' +
            '		</div>' +
            '		<div class="am-form-group am-form-group-sm js-inputSubItems">' +
            '		    <label class="am-u-sm-3 am-form-label" for="dropdown-0">下拉导航名称</label>' +
            '		    <div class="am-u-sm-9">' +
            '		        <input type="text" placeholder="输入下拉导航条目名称"' +
            '                   data-attr-name="subItems" value="{subItems}">' +
            '		    </div>' +
            '		</div>' +
            '		<p class="a-red">图标填写说明：字体图标填写className，图片填写图片名，并将图片加入项目中。<br/>' +
            '       下拉导航填写说明：输入下拉导航条目名称，条目之间以空格隔开（可多个空格）。如：item1 item2"</p>' +
            '		<div class="am-margin-top add-item">' +
            '		    <a href="javascript: void(0)" data-attr-name="items" ' +
            '               class="am-btn am-btn-primary js-addItemBtn"' +
            '               data-attr-name="items"><i class="am-icon-plus"></i>添加一条导航</a>' +
            '		    <a href="javascript: void(0)" ' +
            '               class="am-btn am-btn-primary am-btn-sm js-addSubNavBtn">' +
            '               <i class="am-icon-plus"></i>添加下拉菜单</a>' +
            '		</div>' +
            '	</div>' +
            '   <div class="item-thumbnail js-itemThumbnail"></div>' +
            '</div>',
        // 导航类型
        types: {
            labels: [
                "简单导航", "普通导航", "导航条", "菜单导航"
            ],
            values: [0, 1, 2, 3],
            typeAttrNames: ["type", 1, 1, 1]
        },
        //  单选类型
        radios: {
            labels: [
                // 简单类型
                "大图标", "竖排列表", "简单介绍信息", "图标", "字体图标",
                // 普通类型
                "default","水平导航","标签式","宽度自适应",
                // 导航条
                "default",
                // 菜单导航

                "default", "下拉1","下拉2",
                "default","图标触发下拉",
                "左侧滑","右侧滑","侧滑横排"

            ],
            values: [
                // 简单类型
                "jz-nav-icon1", "jz-nav-icon2", "jz-nav-icon3", "img", "iconfont",

                // 普通类型
                "", "am-nav-pills", "am-nav-tabs", "am-nav-pills am-nav-justify",
                // 导航条
                "am-topbar",
                // 菜单
                "am-menu-default", "am-menu-dropdown2", "am-menu-slide1",
                "am-menu-stack", "am-menu-dropdown1",
                "am-menu-offcanvas1", "am-menu-offcanvas1 am-offcanvas-bar-flip", "am-menu-offcanvas2"
            ],
            typeAttrNames: [
                // 简单类型
                "widgetClassName", 1, 1, "iconType", 1,
                // 普通类型
                "widgetClassName", 1, 1, 1,
                // 导航条
                "widgetClassName",
                // 菜单

                "widgetClassName", 1, 1,
                "widgetClassName", 1,
                "widgetClassName", 1, 1

            ]
        },
        /**
         * checkbox控制data属性值的方式是：若为选中，那么讲对应的属性值设为 true。否则false
         * 并且设置方式用this.checked的值设置。所以checkboxs没有values数组
         */
        checkboxs: {
            labels: [
                // 简单类型
                "是否显示图标",
                // 导航条
                "搜索框", "深色", "右边栏内容"
            ],
            values: [],
            typeAttrNames: [
                // 简单类型
                "isIcon",
                // 导航条
                "isSearchBox", "isDarkColor", "isRightInfo"
            ]
        }

    }

    var constructor = function() {
        JZD.Editor.apply(this, arguments);
    }
	
    var methods = {
        getHtml : function() {
            var tempTemplate = this._getHtml(configs);

            var navTabsHtml = this.getNavTabs();
            navTabsHtml = {"navTabsHtml": navTabsHtml};

            // 具有items的组件映射input值的对象
            // todo  待改进
            var activeItem = data.activeItem;

            var templateData = JZD.Tool.concatJson(navTabsHtml, activeItem);


            return JZD.Html.template(tempTemplate, templateData, true);
        },
        render: function() {
            JZD.Editor.prototype.render.apply(this,arguments);

            // 使动态加载dom对框架的js效果生效。
            JZD.Tool.loadJs();
        },
        initEvent : function(){
            var that = this;
            JZD.Editor.prototype.initEvent.apply(this,arguments);

            // 导航类型切换
            $(".js-type > li").click(function() {
                var value = parseInt($(this).attr("data-type-value"));
                var property = $(this).attr("data-attr-name");
                that.trigger('data.change.notRender', property, value);
            });

            // type=3 时子标签为 侧滑类型。
            $(".js-subtype > li").click(function() {
                var className = $($(".js-subtype > li")[2]).attr("class");
                if(className && className.search("am-active") != -1) {
                    that.trigger('data.change.notRender', 'isMenuNav3', true);
                } else {
                    that.trigger('data.change.notRender', 'isMenuNav3', false);
                }
            });

            // 具有items属性的输入框值得变化绑定逻辑
            var data = data;
            $(".js-inputsToItem input").change(function() {
                var property = $(this).attr("data-attr-name");
                data.activeItem[property] = this.value;
                that.trigger("data.change", "activeItem", data.activeItem);
                that.showItemThumbnail();
            });

            $(".js-addSubNavBtn").click(function() {
                data.activeItem.isSubNav = true;
                that.trigger("data.change", "activeItem", data.activeItem);
            });

            $(".js-addItemBtn").click(function() {
                data.activeItem = JZD.Tool.depthClone(data.activeItem);
                data.activeItem.idx = data.items.length;
                data.activeItem.isSubNav = false;
                that.trigger("add.data.item", "items", data.activeItem);
                that.showItemThumbnail();
            });
        },
        // 根据对象的data映射相应视图。
        initDom: function() {
            JZD.Editor.prototype.initDom.apply(this,arguments);

            var that = this;
            var data = data;

            // 设置正确的活动标签。
            // ----------------------------------
            for(key in data) {
                // type状态
                if(key == "_type") {
                    $(".js-type [data-type-value]").removeClass("am-active");
                    $(".js-type-panel > .am-tab-panel").removeClass("am-active");

                    $($(".js-type [data-type-value]")[data[key]]).addClass("am-active")
                    $($(".js-type-panel > .am-tab-panel")[data[key]]).addClass("am-active");
                }
            }
            // type = 3时 定位菜单导航子标签
            var type3RadioGroups = $(".js-type3RadioGroup");
            $.each(type3RadioGroups, function(i, radioGroup) {
                var radios = $(radioGroup).find("input[type='radio']");
                $.each(radios, function(j, radio) {
                    if(radio.checked) {
                        type3RadioGroups.removeClass("am-active");
                        $(".js-subtype > li").removeClass("am-active");

                        $(radioGroup).addClass("am-active");
                        $($(".js-subtype > li")[i]).addClass("am-active");
                    }
                });
            });

            // input logic
            // 关于下拉导航相关信息的显示逻辑
            $(".js-inputSubItems").hide();
            this.subNavShowLogic();
            $(".js-type > li").click(function() {
                that.subNavShowLogic();
            })

            // item缩略图
            this.showItemThumbnail();
        },
        subNavShowLogic: function() {
            $(".js-inputSubItems").hide();
            var data = data;
            var typesDom = $(".js-type > li");
            var type = 0;
            $.each(typesDom, function(i, item) {
                var className = $(item).attr("class");
                if(className && className.search("am-active") != -1) {
                    type = i;
                }
            });
            if(type == 0) {
                $(".js-addSubNavBtn").hide();
            } else {
                $(".js-addSubNavBtn").show();
                if(data.activeItem.isSubNav && data.activeItem.idx != -1) {
                    $(".js-inputSubItems").show();
                }
                $(".js-addSubNavBtn").click(function() {
                    $(".js-inputSubItems").show();
                });

                // 隐藏type = 0时的输入框
                $(".js-inputFont, .js-inputImg, .js-inputExplain").hide();
            }

        },

        // 显示item缩略图
        showItemThumbnail: function() {
            var that = this;
            var items = data.items;
            var data = data;

            $(".js-itemThumbnail").empty();
            $.each(items, function(i, item) {
                $(".js-itemThumbnail").append(
                    "<span>" + item.itemContent + "<i>×</i></span>");
            });
            // 删除按钮绑定事件
            var delBtns = $(".js-itemThumbnail i");
            $(delBtns).click(function() {
                var idx = jQuery.inArray(this, delBtns);

                data.activeItem.idx = -1; // 废弃掉当前编辑的item
                that.trigger("del.data.item", "items", idx);
                $(this).parent().remove();
            });
        },
        domAction: function() {
            var that = this;

            // type = 0时 按钮的关联显示 及 相关事件绑定。
            this.type0FormShow();

            // type = 1时 的单选按钮的关联显示。
            this.type1FormShow();

            // type = 2时 按钮的关联显示
            this.type2FormShow();

            $(".js-radioWrap input[type='radio']").click(function() {
                that.type0FormShow();
                that.type1FormShow();
                that.type2FormShow();
            });

            $(".js-addItemBtn").click(function() {
                $(".js-inputSubItems").hide();
            });

        },

        /**
         * 下面的方法是不同type下的单选或者多选按钮或者 输入框的显示逻辑
         * 及部分事件绑定。
         * ===============================
         */
        // type = 0时 按钮的关联显示 及 相关事件绑定
        type0FormShow: function() {
            var that = this;
            var radios = $(".js-type0Radios input[type='radio']");

            if(radios[1].checked) {
                $('.js-isIconCheckbox').show();
                if($(".js-isIconCheckbox [type='checkbox']")[0].checked) {
                    $(".js-iconType").show();
                    // input logic
                    that.fontAndImg();
                } else {
                    $(".js-iconType").hide();
                    // input logic
                    that.fontAndImg();
                }
            } else {
                $('.js-isIconCheckbox, .js-iconType').hide();
            }

            $(".js-isIconCheckbox [type='checkbox']").click(function() {
                if(this.checked) {
                    $(".js-iconType").show();
                    // input logic
                    that.fontAndImg();
                } else {
                    $(".js-iconType").hide();
                    // input logic
                    $(".js-inputFont, .js-inputImg").hide();
                }
            });

            // input logic
            if(radios[2].checked) {
                $(".js-inputExplain").show();
            }
            if(radios[0].checked || radios[1].checked) {
                $(".js-inputExplain").hide();
            }

            // 如果是大图标、简单介绍信息 类型，那么图标限制为图片
            if(radios[0].checked || radios[2].checked) {
                that.trigger('data.change', "isIcon", true);
                that.trigger('data.change', "iconType", "img");

                $(".js-isIconCheckbox input[type='checkbox']")[0].checked = true;
                $(".js-iconType [value='img']")[0].checked = true;

                // input logic
                $(".js-inputFont").hide();
                $(".js-inputImg").show();
            }

            // input logic
            $(".js-iconType input[type='radio']").click(function() {
                that.fontAndImg();
            });

        },
        // input logic
        fontAndImg: function() {
            // 在是否显示图标的复选框为选中的情况的逻辑
            if($(".js-iconType [value='img']")[0].checked) {
                $(".js-inputFont").hide();
                $(".js-inputImg").show();
            } else {
                $(".js-inputFont").show();
                $(".js-inputImg").hide();
            }
        },

        // type = 1时 的单选按钮的关联显示。
        type1FormShow: function() {
            var that = this;
            if($(".js-type1Radios input[type='radio']")[0].checked) {
               $(".js-itemType").show();
            } else {
               $(".js-itemType").hide();
            }
        },
        // type = 2时 的单选按钮的关联显示。
        type2FormShow: function() {
            if($(".js-type2Radios input[type='radio']")[0].checked) {
                $(".js-otherCont").show();
            } else {
                $(".js-otherCont").hide();
            }
        },

        getNavTabs: function() {
            var template =
                '<li data-type-value="{value}" data-attr-name="{typeAttrName}"><a href="javascript: void(0)">' +
                '    {label}' +
                '</a></li>';
            var data = configs.types;
            return this._getHtml2(template, data);
        },
        _getHtml2: function(template, data) {
            var html = "";
            for(var i = 0; i < data.labels.length; i++) {
                var typeAttrNames = data.typeAttrNames[i];
                // 如果该处的属性值为1，那么就跟前面的属性值相同。（参见nav导航模块的数据结构说明）。
                if(typeAttrNames == 1) {
                    data.typeAttrNames[i] = data.typeAttrNames[i-1];
                }
                html += JZD.Html.template(template, {
                    label: data.labels[i],
                    value: (typeof data.values) == "undefined" ?
                        data[typeAttrNames[i]]: data.values[i],
                    typeAttrName: data.typeAttrNames[i]
                }, true);
            }
            return html;
        },
        addItemTest: function() {
            var items = data.items;
            var itemDataTemplate = data.itemDataTemplate;
            itemDataTemplate = JZD.Tool.depthClone(itemDataTemplate)
            var num = parseInt(Math.random() * 20);
            for(key in itemDataTemplate) {
                var item = itemDataTemplate[key];
                if(key == "url") {
                    continue;
                } else if (typeof item == "string") {
                    itemDataTemplate[key] = num + item;
                }
                if(typeof item == "numbter") {
                    itemDataTemplate[key] = num * 100;
                }
            }
            itemDataTemplate.itemId = items.length;
            items.push(itemDataTemplate);
        },
        getSynItems: function() {
            // todo
            // 获取接口的数据的逻辑
        }
    }

    return JZD.createClass(constructor, methods, JZD.Editor);
})();