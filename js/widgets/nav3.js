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

            // 辅助性属性
            subData: {
                // 是否是菜单导航的子类型3
                isMenuNav3: false
            },

            items: [
                {
                    itemContent: "新闻",


                    img: "nav-img1.png",
                    iconfont: "am-icon-home",

                    explainContent: "简单介绍2",

                    isSubNav: true,

                    subItems: [
                        {
                            subItemContent: "下拉条目1.1"
                        },
                        {
                            subItemContent: "下拉条目1.2"
                        }
                    ]
                },
                {
                    itemContent: "产品",

                    img: "nav-img1.png",
                    iconfont: "am-icon-home",

                    explainContent: "简单介绍",

                    isSubNav: true,

                    subItems: [
                        {
                            subItemContent: "下拉条目2.1"
                        },
                        {
                            subItemContent: "下拉条目2.2"
                        }
                    ]
                },
                {
                    itemContent: "案例",

                    img: "nav-img1.png",
                    iconfont: "am-icon-home",

                    explainContent: "简单介绍",

                    isSubNav: true,

                    subItems: [
                        {
                            subItemContent: "下拉条目3.1"
                        },
                        {
                            subItemContent: "下拉条目3.2"
                        }
                    ]
                }
            ]
        }
    }


    var constructor = function() {
        var data = {
            _type: 0
        };

        this.data = JZD.extend(data, configs.data) ;

        JZD.Widget.apply(this, arguments);

        // 改变导航type时。默认组件className。
        Object.defineProperty(this.data, "type", {
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
            var template = configs.template[this.data.type];
            var items = this.data.items;

            var itemsCount = items.length;
			var itemsHtml = "";

            for(var i = 0; i < itemsCount; i++ ) {
                var itemData = items[i];

                var itemTemplate = "";
                var subNavHtml = "";

                var itemContent = itemData.itemContent;
                var explainContent = "";
                var iconContent = "";

                if(this.data.isIcon) {
                    var value = itemData[this.data.iconType];
                    if(this.data.iconType == "img") {
                        iconContent = JZD.Html.template(JZD.Html.imgHtml,{
                            imgFileName: value
                        }, true);
                    }
                    if(this.data.iconType == "iconfont") {
                        iconContent = JZD.Html.template(JZD.Html.iconHtml,{
                            className: value
                        }, true);
                    }
                }

                if(this.data.isExplain) {
                    explainContent = itemData.explainContent;
                    // 条目简单介绍为可选，在添加条目时或者某些情况为空字符串或者null时设置默认值。
                    if(itemData.explainContent == null || itemData.explainContent == "") {
                        itemData.explainContent = "条目简单介绍（默认值）";
                    }
                }


                // type == 0 时不执行下面代码，因为该类型没有hasSubNavItem。
                if(itemData.isSubNav && this.data.type != 0) {
                    itemTemplate = template.hasSubNavItem;

                    var subItems = itemData.subItems;
                    var subItemsCount = subItems.length;


                    var subItemsHtml = "";
                    for(var j = 0; j < subItemsCount; j++) {
                        var subItemData = subItems[j];

                        subItemsHtml += JZD.Html.template(template.subItem,{
                            subItemContent: subItemData.subItemContent
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
            if(this.data.type == 2) {
                if(this.data.isDarkColor) {
                    this.data.widgetClassName += " am-topbar-inverse";
                } else {
                    this.data.widgetClassName =
                        this.data.widgetClassName.replace(/ am-topbar-inverse/, "");
                }
                if(this.data.isSearchBox) {
                    searchBoxContent = template.searchBox;
                }
                if(this.data.isRightInfo) {
                    rightInfoContent = template.rightInfo;
                }
            }


            var wrapTemplate = template.wrap;
            if(this.data.type == 3 &&
                this.data.subData.isMenuNav3) {
                wrapTemplate = template.wrap2;
            }
            var widgetHtml = JZD.Html.template(wrapTemplate, {
                widgetClassName : this.data.widgetClassName,
                itemsHtml: itemsHtml,
                // type = 3
                searchBoxContent: searchBoxContent,
                rightInfoContent: rightInfoContent
            }, true);


            return widgetHtml;

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
                [
                    ["大图标", "竖排列表", "简单介绍信息"],
                    ["图标", "字体图标"]
                ],
                // 普通类型
                ["default","水平导航","标签式","宽度自适应"],
                // 导航条
                ["default"],
                // 菜单导航
                [
                    ["default", "下拉1","下拉2"],
                    ["default","图标触发下拉"],
                    ["左侧滑","右侧滑","侧滑横排"]
                ]
            ],
            values: [
                // 简单类型
                [
                    ["jz-nav-icon1", "jz-nav-icon2", "jz-nav-icon3"],
                    ["img", "iconfont"]
                ],
                // 普通类型
                ["", "am-nav-pills", "am-nav-tabs", "am-nav-pills am-nav-justify"],
                // 导航条
                ["am-topbar"],
                // 菜单
                [
                    ["am-menu-default", "am-menu-dropdown2", "am-menu-slide1"],
                    ["am-menu-stack","am-menu-dropdown1"],
                    ["am-menu-offcanvas1","am-menu-offcanvas1 am-offcanvas-bar-flip","am-menu-offcanvas2"]
                ]

            ],
            typeAttrNames: [
                // 简单类型
                [
                    ["widgetClassName", 1, 1],
                    ["iconType", 1]
                ],
                // 普通类型
                ["widgetClassName", 1, 1, 1],
                // 导航条
                ["widgetClassName"],
                // 菜单
                [
                    ["widgetClassName", 1, 1],
                    ["widgetClassName", 1],
                    ["widgetClassName", 1, 1]
                ]
            ]
        },
        /**
         * checkbox控制data属性值的方式是：若为选中，那么讲对应的属性值设为 true。否则false
         * 并且设置方式用this.checked的值设置。所以checkboxs没有values数组
         */
        checkboxs: {
            labels: [
                // 简单类型
                ["是否显示图标"],
                // 普通类型
                [],
                // 导航条
                ["搜索框", "深色", "右边栏内容"],
                []
            ],
            typeAttrNames: [
                // 简单类型
                ["isIcon"],
                // 普通类型
                [],
                // 导航条
                ["isSearchBox", "isDarkColor", "isRightInfo"],
                []
            ]
        },

        template:
            '<div class="am-tabs am-form am-form-horizontal" data-am-tabs>' +
            '    <ul class="am-tabs-nav am-nav am-nav-tabs js-type">' +
            '        {navTabsHtml}' +
            '    </ul>' +
            '    <div class="am-tabs-bd js-type-panel">' +
            '        <div class="am-tab-panel js-type0-panel am-active">' +
            '            <div class="am-form-group am-form-group-sm am-fr isIconCheckbox">' +
            '               {type0CheckboxsHtml}' +
            '            </div>' +
            '            {type0RadiosHtml}' +
            '        </div>' +
            '        <div class="am-tab-panel js-type1-panel">' +
            '            {type1RadiosHtml}' +
            '            <div class="am-form-group am-form-group-sm ">' +
            '                <label class="am-radio-inline">' +
            '                    <input type="radio"  value="" name="docInlineRadio">导航标题' +
            '                </label>' +
            '                <label class="am-radio-inline">' +
            '                    <input type="radio" name="docInlineRadio">导航分隔线' +
            '                </label>' +
            '            </div>' +
            '        </div>' +
            '        <div class="am-tab-panel js-type2-panel">' +
            '            <div class="am-form-group am-form-group-sm am-fr">' +
            '                {type2CheckboxsHtml}' +
            '            </div>' +
            '            <div class="am-form-group am-form-group-sm">' +
            '                {type2RadiosHtml}' +
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
            '                    {type3RadiosHtml}' +
            '                </div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '	<div class="inputArea js-input">' +
            '		<div class="am-form-group am-form-group-sm js-iconfont">' +
            '		    <label class="am-u-sm-3 am-form-label" for="className">className</label>' +
            '		    <div class="am-u-sm-9">' +
            '		        <input type="text" id="className" placeholder="输入字体图标className">' +
            '		    </div>' +
            '		</div>' +
            '		<div class="am-form-group am-form-group-sm js-img">' +
            '		    <label class="am-u-sm-3 am-form-label" for="imgName">图片名称</label>' +
            '		    <div class="am-u-sm-9">' +
            '		        <input type="text" id="imgName" placeholder="输入图片名称">' +
            '		    </div>' +
            '		</div>' +
            '		<div class="am-form-group am-form-group-sm js-item">' +
            '		    <label class="am-u-sm-3 am-form-label" for="itemName-0">' +
            '		        <span class="a-red">*</span>导航名称</label>' +
            '		    <div class="am-u-sm-9">' +
            '		        <input type="text" id="itemName-0" placeholder="输入导航名称">' +
            '		    </div>' +
            '		</div>' +
            '		<div class="am-form-group am-form-group-sm js-intro">' +
            '		    <label class="am-u-sm-3 am-form-label" for="intro-0">介绍信息</label>' +
            '		    <div class="am-u-sm-9">' +
            '		        <input type="text" id="intro-0" placeholder="输入导航条目的简单介绍">' +
            '		    </div>' +
            '		</div>' +
            '		<div class="am-form-group am-form-group-sm js-sub-item">' +
            '		    <label class="am-u-sm-3 am-form-label" for="dropdown-0">下拉导航名称</label>' +
            '		    <div class="am-u-sm-9">' +
            '		        <input type="text" id="dropdown-0" placeholder="输入下拉导航名称">' +
            '		    </div>' +
            '		</div>' +
            '		<p class="a-red">字体图标填写className，图片填写图片名，并将图片加入项目中。</p>' +
            '		<div class="am-margin-top add-item">' +
            '		    <a href="" class="am-btn am-btn-primary"><i class="am-icon-plus"></i>添加一条导航</a>' +
            '		    <a href="" class="am-btn am-btn-primary am-btn-sm am-btn-secondary"><i class="am-icon-plus"></i>添加下拉菜单</a>' +
            '		</div>' +
            '	</div>' +
            '</div>'

    }

    var constructor = function() {
        this.radioGroupCount = 0;
        JZD.Editor.apply(this, arguments);
    }
	
    var methods = {
        getHtml : function() {
            var html = "";
            // 导航
            var navTabsHtml = this.getNavTabs();
            // 各种类型的单选按钮
            var type0RadiosHtml = this.getRadioGroup(0);
            var type1RadiosHtml = this.getRadioGroup(1);
            var type2RadiosHtml = this.getRadioGroup(2);
            var type3RadiosHtml = this.getRadioGroup(3);
            // 各种类型的复选框
            var type0CheckboxsHtml = this.getCheckboxGroup(0);
            //var type1CheckboxsHtml = this.getCheckboxGroup(1);
            var type2CheckboxsHtml = this.getCheckboxGroup(2);
            //var type2CheckboxsHtml = this.getCheckboxGroup(3);

            //console.log(type0RadiosHtml);
            //console.log(type1RadiosHtml);
            //console.log(type3RadiosHtml);
            //console.log(type0CheckboxsHtml);
            //console.log(type2CheckboxsHtml);
            return JZD.Html.template(configs.template, {
                navTabsHtml: navTabsHtml,
                type0RadiosHtml: type0RadiosHtml,
                type1RadiosHtml: type1RadiosHtml,
                type2RadiosHtml: type2RadiosHtml,
                type3RadiosHtml: type3RadiosHtml,
                type0CheckboxsHtml: type0CheckboxsHtml,
                type2CheckboxsHtml: type2CheckboxsHtml
            }, true);

        },

        initEvent : function(){
            var that = this;

            $(".js-type [data-type-value]").click(function() {
                var type = parseInt($(this).attr("data-type-value"));
                that.trigger('data.type.change', 'type', type);
            });

            // 单选按钮的处理事件
            $(".am-radio-inline [data-attr-name]").click(function() {
                var property = $(this).attr("data-attr-name");
                if(this.checked){
                    that.trigger('data.change', property, this.value);
                }
            });
            // 多选按钮处理事件
            $(".am-checkbox-inline [data-attr-name]").click(function() {
                var property = $(this).attr("data-attr-name");
                that.trigger('data.change', property, this.checked);
            });

            // type=3 时子标签的点击事件。
            $(".js-subtype > li").click(function() {
                var cn = $($(".js-subtype > li")[2]).attr("class");
                if(cn && cn.search("am-active") != -1) {
                    that.trigger('inner.data.change', 'isMenuNav3' , true);
                } else {
                    that.trigger('inner.data.change', 'isMenuNav3' , false);
                }
            });
        },
        initDom: function() {
            // 初始要隐藏的dom
            $("[data-radio-group='js-radioGroup1']").hide();
            $('.isIconCheckbox').hide();

            // 设置radio组的name属性值。
            $('[data-attr-name="widgetClassName"]').attr("name", 'widgetClassName');
            $('[data-attr-name="iconType"]').attr("name", "iconType");
        },
        // 从数据渲染到编辑试图
        renderEditorData: function() {
            var that = this;
            // 映射 单选、复选框、type的状态
            var data = this.data;
            for(key in data) {
                // 单选
                if(typeof data[key] == "string") {
                    var className = ".am-radio-inline [value='" + data[key] +"']";
                    //$(className).attr("checked", true);
                    $(className)[0].checked = true;
                }
                // 多选
                if(typeof data[key] == "boolean") {
                    var className = ".am-checkbox-inline [data-attr-name='" + key + "']"
                    $(className).attr("checked", data[key]);
                }
                // type状态
                if(key == "_type") {
                    $(".js-type [data-type-value]").removeClass("am-active");
                    $(".js-type-panel > .am-tab-panel").removeClass("am-active");

                    $($(".js-type [data-type-value]")[data[key]]).addClass("am-active")
                    $($(".js-type-panel > .am-tab-panel")[data[key]]).addClass("am-active");
                }
            }

            // type = 0时 按钮的关联显示问题。
            $('[data-radio-group="js-radioGroup0"] input').click(function() {
                that.type0RadioState();
            });

            // type = 3时 定位菜单导航子标签
            var radioGroup3Panels = $("[data-radio-group='js-radioGroup4']");
            $.each(radioGroup3Panels, function(i, panel) {
                var radios = $(panel).find("[type='radio']");
                $.each(radios, function(j, item) {
                    if(item.checked) {
                        radioGroup3Panels.removeClass("am-active");
                        $(".js-subtype > li").removeClass("am-active");

                        $(panel).addClass("am-active");
                        $($(".js-subtype > li")[i]).addClass("am-active");
                    }
                });
            });

            // 在不同的type值时， 输入区域的显示问题。
        },
        type0RadioState: function() {
            // type = 0时 按钮的关联显示问题。
            if($("[data-radio-group='js-radioGroup0'] [type=radio]").eq(1)[0].checked) {
                $('.isIconCheckbox').show();
                if($('[data-attr-name="isIcon"]')[0].checked) {
                    $("[data-radio-group='js-radioGroup1']").show();
                } else {
                    $("[data-radio-group='js-radioGroup1']").hide();
                }
            } else {
                $('.isIconCheckbox').hide();
                $("[data-radio-group='js-radioGroup1']").hide();
            }
            $('[data-attr-name="isIcon"]').click(function() {
                if(this.checked) {
                    $("[data-radio-group='js-radioGroup1']").show();
                } else {
                    $("[data-radio-group='js-radioGroup1']").hide();
                }
            });
        },
        getNavTabs: function() {
            var template =
                '        <li data-type-value="{value}" data-attr-name="{typeAttrName}"><a href="javascript: void(0)">' +
                '            {label}' +
                '        </a></li>';
            var data = configs.types;
            return this._getHtml(template, data);

        },

        getRadioGroup: function(idx, inIdx, data1) {
            var that = this;
            var data = configs.radios;
            if(typeof data1 == "object") {
                data = data1;
            }
            // 三维数组
            if(typeof inIdx == "undefined" &&
                    Array.isArray(configs.radios.labels[idx][0])) {

                var data = {};
                data.labels = configs.radios.labels[idx];
                data.values = configs.radios.values[idx];
                data.typeAttrNames = configs.radios.typeAttrNames[idx];
                var html = "";
                for(var i = 0; i < data.labels.length; i++) {
                    var radioGroupHtml = arguments.callee.apply(this,[idx, i, data]);
                    html += radioGroupHtml;
                }
                return  html;
            } else {
                var radioGroupCount = this.radioGroupCount++;
                var activeCn = "";
                var template =
                    '   <label class="am-radio-inline">' +
                    '       <input type="radio" data-attr-name="{typeAttrName}" value="{value}">{label}' +
                    '   </label>';
                var templateWrap =
                    '<div class="am-form-group am-form-group-sm" data-radio-group="js-radioGroup{radioGroupCount}">' +
                    '   {radioGroupHtml}' +
                    '</div>';
                if(typeof inIdx == "number") {
                    if(idx == 3) {
                        radioGroupCount = --this.radioGroupCount;
                        activeCn = (inIdx == 0 ? "am-active am-in": "");
                        templateWrap =
                            '<div class="am-tab-panel {activeCn}" data-radio-group="js-radioGroup{radioGroupCount}">' +
                            //'    <div class="am-form-group am-form-group-sm">' +
                            '        {radioGroupHtml}' +
                            //'    </div>' +
                            '</div>';
                    }
                    idx = inIdx;
                }

                var radioGroupHtml = this._getChoiceGroup(template, data, idx);
                return JZD.Html.template(templateWrap, {
                    radioGroupHtml: radioGroupHtml,
                    radioGroupCount: radioGroupCount,
                    activeCn: activeCn
                }, true);
            }

        },
        getCheckboxGroup: function(idx) {
            var data = configs.checkboxs;
            var template =
                '<label class="am-checkbox-inline">' +
                '    <input data-attr-name="{typeAttrName}" type="checkbox" value="">{label}' +
                '</label>';
            return this._getChoiceGroup(template, data, idx);
        },

        _getChoiceGroup: function(template, data1, idx) {
            // labels的元素为数组时
            if(Array.isArray(data1.labels[idx])) {
                var data = {};
                data.labels = data1.labels[idx];
                data.values = (typeof data1.values) == "undefined" ? "": data1.values[idx];
                data.typeAttrNames = data1.typeAttrNames[idx];
                return this._getHtml(template, data);
            }
        }


    };

    return JZD.createClass(constructor, methods, JZD.Editor);
})();