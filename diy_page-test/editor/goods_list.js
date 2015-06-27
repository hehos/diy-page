
JZD.Editor.GoodsList = (function(){
    var Config = {
        size : [
            {label : "大图", value : 0, show : 5},
            {label : "小图", value : 1, show : 15},
            {label : "一大两小", value : 2, show : 5},
            {label : "详细列表", value : 3, show : 5}
        ],
        size_type : [
            {label : "卡片样式", value : 0, mask : 1},
            {label : "极简样式", value : 1, mask : 4},
            //{label : "瀑布流", value : 2, mask : 2},
            {label : "促销", value : 3, mask : 8}
        ],
        buy_btn_type :  [
            {label : "样式1", value : 1},
            {label : "样式2", value : 2},
            {label : "样式3", value : 3},
            {label : "样式4", value : 4}
        ]
    };

    var Options = [
        { name : 'buy_btn', value : '1', label : '显示购买按钮', mask : 1},
        { name : 'show_wish_btn', value : '1', label : '显示加入心愿单按钮', mask : 2},
        { name : 'title', value : '1', label : '显示商品名', mask : 4},
        { name : 'show_sub_title', value : '1', label : '显示商品简介', mask : 8},
        { name : 'price', value : '1', label : '显示价格', mask : 16}
        ];

    var OptionMask = {
        show_0_0 : 31, show_0_1 : 30,
        show_1_0 : 23, show_1_1 : 18,  show_1_2 : 23, show_1_3 : 2,
        show_2_0 : 23, show_2_1 : 22,
        show_3_0 : 3,  show_3_1 : 3
        };

    var methods = {
        data : {
            size : 0,
            size_type : 0,
            title : true,
            price : true,
            buy_btn_type : 1,
            items : [
                {
                    id : 5794821, title : '\u53cc\u5c42\u5b9e\u6728\u5730\u677f',
                    price : '22000', cdate : '2014-12-29 11:12:16',
                    img : 'http:\/\/imgqn.koudaitong.com\/upload_files\/2014\/12\/29\/7df59e421b2a93bb50954888be80ea4f.jpg',
                    url : 'http:\/\/wap.koudaitong.com\/v2\/showcase\/goods?alias=1b9yg0e0o'
                }
            ]
        },

        init : function(){
            this.on('data.change', function(name, value){
                this.data[name] = value;
            });
        },

        getChildHtml : function(key){
            if(key == 'size' || key == 'buy_btn_type'){
                var html = JZD.Html.radio(key, Config[key], this.data[key]);
                console.log(html);
                return html;
            } else if(key == 'size_type') {
                var types = this._sizeType();
                var html = JZD.Html.radio(key, types, this.data[key])
                console.log(html);
                return  '<div class="controls-card-tab">' +
                    html +
                    '</div>'
                    ;
            } else if(key == 'options') {
                return this._optionsHtml();
            }
            return '';
        },

        _sizeType : function() {
            var items = Config.size;
            var mask = items[0].show
            for(var i = 0; i < items.length; i++){
                if(this.data.size == items[i].value){
                    mask = items[i].show;
                }
            }

            var tmp = [];
            items = Config.size_type;
            for(var i = 0; i < items.length; i++){
                if(mask & items[i].mask){
                    tmp.push(items[i]);
                }
            }
            return tmp;
        },

        _getMask : function() {
            var mask_key = 'show_'
                + this.data.size
                + '_'
                + this.data.size_type;
            return OptionMask[mask_key];
        },

        _isShow : function(type) {
            var mask = this._getMask();
            //return mask &
        },

        _optionsHtml : function() {
            var mask = this._getMask();
            var html = '';
            if(mask & Options[0].mask){
                var bntBuy = Options[0];
                bntBuy.checked = this.data.buy_btn
                html += '<div class="controls-card-item">';
                html += JZD.Html.checkbox(bntBuy);
                html += '<div class="buy_btn_types" style="margin: 10px 0 0 20px; ' +
                    (!bntBuy.checked ? 'display:none' : '') +
                    '">';
                html += this.getChildHtml('buy_btn_type');
                html += '</div>';
                html += '</div>';
            }

            var item;
            for(var i = 1; i < Options.length; i++){
                item = Options[i];
                if(mask & item.mask ){
                    item.checked = this.data[item.name];
                    html += JZD.Html.checkbox(item, '<div class="controls-card-item">', '</div>');
                }
            }
            return html;
        },

        getHtml : function() {
            var template = '' +
                '<div>' +
                '<form class="form-horizontal" novalidate="">' +
                '    <div class="control-group">' +
                '        <label class="control-label">选择商品：</label>' +
                '        <div class="controls goods_list">' +
                         this._getGoodsListHtml() +
                '        </div>' +
                '    </div>' +
                '</form>' +
                '<div class="js-goods-style-region" style="margin-top: 10px;">' +
                '    <div>' +
                '        <form class="form-horizontal" novalidate="">' +
                '            <div class="control-group">' +
                '                <label class="control-label">列表样式：</label>' +
                '                <div class="controls">' +
                this.getChildHtml('size') +
                '                </div>' +
                '            </div>' +
                '            <div class="control-group">' +
                '                <div class="controls">' +
                '                    <div class="controls-card">' +
                this.getChildHtml('size_type') +
                this.getChildHtml('options') +
                '                    </div>' +
                '                </div>' +
                '            </div>' +
                '        </form>' +
                '    </div>' +
                '</div>' +
                '</div>';
            return JZD.Html.template(template, this.data, true);
        },

        _getGoodsListHtml : function(){
            var html = '';
            var items = this.data.items;
            for(var i in items){
                html += '' +
                '<li class="sort"><a href="' + items[i].url  + '" target="_blank">' +
                '<img src="' + items[i].img + '" alt="' + items[i].title + '"/></a>' +
                '<a class="close-modal js-delete-goods small hide" data-id="'
                    + items[i].id
                    + '" title="删除">×</a>' +
                '</li>';
            }

            return '' +
                '<ul class="module-goods-list clearfix ui-sortable" name="goods">'
                    + html +
                '<li><a href="javascript:void(0);" ' +
                '   class="js-add-goods add-goods"><i class="icon-add"></i></a>' +
                '</li>' +
                '</ul>';
        },

        initEvent : function(){
            var that = this;
            $('input[name=size]', this.cl).change(function(){
                that.trigger('data.change', 'size', this.value);
                that._changeSize();
            });

            that._initOptionEvent();
            that._bindGoodsCtrl();
        },

        _bindGoodsCtrl : function() {
            // add goods
            var that = this;
            $('.add-goods', this.cl).click(function(){
                that._initEventAdd();
            });

            $('.js-delete-goods', this.cl).click(function(){
                that.trigger('data.change', 'goods.del', $(this).attr('data-id'));
                $('.goods_list', that.cl).html(that._getGoodsListHtml());
                that._bindGoodsCtrl();
            });
        },

        _initEventAdd : function(){
            var goods = {
                id : 5794821, title : '\u53cc\u5c42\u5b9e\u6728\u5730\u677f',
                price : '22000', cdate : '2014-12-29 11:12:16',
                img : 'http:\/\/imgqn.koudaitong.com\/upload_files\/2014\/12\/29\/7df59e421b2a93bb50954888be80ea4f.jpg',
                url : 'http:\/\/wap.koudaitong.com\/v2\/showcase\/goods?alias=1b9yg0e0o'
            };
            this.trigger('data.change', 'goods.add', goods);
            $('.goods_list', this.cl).html(this._getGoodsListHtml());
            this._bindGoodsCtrl();
        },

        _changeSize : function() {
            var html = this.getChildHtml('size_type') + this.getChildHtml('options');
            $('.controls-card', this.cl).html(html);
            this._initOptionEvent();
        },

        _initOptionEvent : function() {
            var that = this;
            $('input[name=size_type]', this.cl).change(function(){
                that.trigger('data.change', 'size_type', this.value);
                that._changeSize();
            });

            // fix invalid value
            if($('input[name=size_type][checked]', this.cl).size() == 0){
                that.trigger('data.change', 'size_type', 0);
                that._changeSize();
            };

            $('.controls-card input[type=checkbox]', this.cl).change(function(){
                that.trigger('data.change', this.name, this.checked);
                if(this.name == 'buy_btn') {
                    var types = $(".buy_btn_types", that.cl);
                    if(this.checked){
                        types.show();
                    } else {
                        types.hide();
                    }
                }
            });

            $('input[name=buy_btn_type]', this.cl).change(function(){
                that.trigger('data.change', 'buy_btn_type', this.value);
            });
        }
    };

    return JZD.createClass(null, methods, JZD.Editor);
})();