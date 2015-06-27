JZD.Widget.GoodsList = (function(){
    var statics = {
        info : {
            name : "产品",
            type : 'GoodsList'
        }
    };

    var default_items = [{
        id : 5794821,
        title : '\u53cc\u5c42\u5b9e\u6728\u5730\u677f',
        price : '22000',
        cdate : '2014-12-29 11:12:16',
        img : 'http://imgqn.koudaitong.com/upload_files/2013/11/27/138554366971566702.jpg',
        url : 'http:\/\/wap.koudaitong.com\/v2\/showcase\/goods?alias=1b9yg0e0o'
    },{
        id : 5794821,
        title : '\u53cc\u5c42\u5b9e\u6728\u5730\u677f',
        price : '22000',
        cdate : '2014-12-29 11:12:16',
        img : 'http://imgqn.koudaitong.com/upload_files/2013/09/27/138029081159828528.jpg',
        url : 'http:\/\/wap.koudaitong.com\/v2\/showcase\/goods?alias=1b9yg0e0o'
    },{
        id : 5794821,
        title : '\u53cc\u5c42\u5b9e\u6728\u5730\u677f',
        price : '22000',
        cdate : '2014-12-29 11:12:16',
        img : 'http://imgqn.koudaitong.com/upload_files/2013/09/27/138029095601969662.jpg',
        url : 'http:\/\/wap.koudaitong.com\/v2\/showcase\/goods?alias=1b9yg0e0o'
    }];

    var method = {
        bindEditor : function(editor){
            var that = this;
            editor.on('data.change', function(key, value){
                if(key == 'goods.add'){
                    that.data.items.push(value);
                } else if(key == 'goods.del') {
                    var find = false;
                    that.data.items =
                    editor.data.items = jQuery.grep(that.data.items, function(n, i){
                        if(n.id == value && !find){
                            find = true;
                            return false;
                        }
                        return true ;
                    });

                } else {
                    that.data[key] = value;
                }
                that.render();
            });
        },

        getHtml : function(){
            var content;

            var template = '' +
                '<ul class="sc-goods-list clearfix {class_size} {class_size_type} {class_list}">' +
                '{items}' +
                '</ul>';

            var pattern = '' +
                '<li class="{class_item}">' +
                '    <a href="javascript: void(0);" class="link js-goods clearfix">' +
                '        <div class="photo-block">' +
                '            <img class="goods-photo js-goods-lazy" src="{img}">' +
                '        </div>' +
                         this._getInfoHtml() +
                '    </a>' +
                '</li>';

            var items = '', html;
            var data = this.data.items;
            if(data.length == 0){
                data = default_items;
            }

            for(var i = 0; i < data.length; i++) {
                html = JZD.Html.template(pattern, data[i], true);
                html = JZD.Html.template(html, {
                    class_item :
                        2 == this.data.size && i == 0
                            ? "goods-card big-pic card"
                            : this._getClassName('item')
                }, true);

                items += html;
            }

            var tmp = {
                class_size : this._getClassName('size'),
                class_size_type : this._getClassName('size_type'),
                class_list : this._getClassName('list'),
                items : items
            };

            return JZD.Html.template(template, tmp, true);
        },

        _getInfoHtml : function() {
            var items = '<div class="info clearfix">';
            var data = this.data;
            if(data.title) {
                items += '<p class="goods-title">{title}</p>';
            }

            if(data.show_sub_title){
                items += '<p class="goods-sub-title c-black ">{sub_title}</p>';
            }

            if(data.price){
                items += '<p class="goods-price">{price}</p>';
            }
            items += '</div>';

            if(data.buy_btn){
                items += '<div class="goods-buy '
                    + this._getClassName('buyBtn') + '">'
                    + ((3 == data.buy_btn_type) ? '我要抢购' : '') +
                '</div>';
            }

            if(data.show_wish_btn){
                items += '<div class="goods-wish btn-wish"></div>';
            }
            return items;
        },

        _getClassName : function(type){
            var className = '', map;
            var data = this.data;
            switch (type){
                case 'list' :
                    className = data.size == 3 ? "list" : "pic";
                    break;

                case 'size' :
                    className = typeof data.size == "undefined"
                        ? 'size0'
                        : 'size' + data.size;
                    break;

                case 'size_type' :
                    map = {
                        'type0' : 'card',
                        'type1' : 'normal',
                        'type2' : 'waterfall',
                        'type3' : 'promotion'
                        };
                    className = typeof data.size_type == "undefined"
                        ? 'normal'
                        : map['type' + data.size_type];
                    break;

                case 'buyBtn' :
                    className = typeof data.buy_btn_type == "undefined"
                        ? 'btn1'
                        : 'btn' + data.buy_btn_type;
                    break;

                case 'item' :
                    if(1 == data.size && 2 == data.size_type){
                        className = 'sc-waterfall-half clearfix';
                    } else {
                        className = 'goods-card ';
                        className += 0 == data.size ? 'big-pic ' : 'small-pic ';

                        map = {
                            'type0' : 'card',
                            'type1' : 'normal',
                            'type3' : 'promotion'
                        };
                        className += typeof data.size_type == "undefined"
                            ? 'normal'
                            : map['type' + data.size_type];
                    }
                    //
                    //
                    //if(0 == data.size){
                    //    if(1 == data.size_type){
                    //        className = 'goods-card big-pic card';
                    //    } else {
                    //        className = 'goods-card big-pic normal';
                    //    }
                    //} else if(1 == data.size){
                    //    if(0 == data.size_type){
                    //        className = 'goods-card small-pic card';
                    //    } else if(1 == data.size_type){
                    //        className = 'goods-card small-pic normal';
                    //    } else if(2 == data.size_type){
                    //        className = 'sc-waterfall-half clearfix';
                    //    } else if(3 == data.size_type){
                    //        className = 'goods-card small-pic promotion';
                    //    }
                    //} else if(2 == data.size){
                    //    if(0 == data.size_type){
                    //        className = 'goods-card small-pic card';
                    //    } else {
                    //        className = 'goods-card small-pic normal'
                    //    }
                    //} else if(3 == data.size){
                    //    if(0 == data.size_type){
                    //        className = 'goods-card card';
                    //    } else {
                    //        className = 'goods-card normal'
                    //    }
                    //}
                    break;
            }

            return className;
        }
    };

    return JZD.createClass(null, method, JZD.Widget, statics);
})();
