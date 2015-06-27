<!DOCTYPE html>
<html>
<head>
    <?php
    include "../common/header.php";
    ?>
</head>
<body>
<link rel="stylesheet" type="text/css" href="../../css/widgets/nav.css"/>

<div class="editor-box am-container">

<div class="am-form am-form-horizontal media-showcase">
    <div class="am-form-group am-form-group-sm">
        <label class="am-u-sm-2 am-form-label">橱窗标题名</label>
        <div class="am-u-sm-10">
            <input type="text"/>
        </div>
    </div>
    <div class="am-form-group am-form-group-sm">
        <label class="am-u-sm-2 am-form-label">显示方式</label>
        <div class="am-u-sm-10">
            <label class="am-radio-inline">
                <input type="radio">默认
            </label>
            <label class="am-radio-inline">
                <input type="radio">PC
            </label>
        </div>
    </div>
    <div class="am-form-group am-form-group-sm">
        <label class="am-u-sm-2 am-form-label">内容区标题</label>
        <div class="am-u-sm-10">
            <input type="text" maxlength="10" />
        </div>
    </div>
    <div class="am-form-group am-form-group-sm">
        <label class="am-u-sm-2 am-form-label">内容区说明</label>
        <div class="am-u-sm-10">
            <textarea name="" cols="10" rows="3">内容区说明</textarea>
        </div>
    </div>
    <div class="media-items">
        <div class="am-form-group am-form-group-sm editor-item">
            <div class="am-u-sm-4 img-act">
                <div class="img-upload">
                    <i class="am-icon-plus editor-add-item-icon"></i>
                    <a href="">添加图片</a>
                </div>
                <div class="img-result">
                    <img src="" alt=""/>
                    <a class="img-anew-upload" href="">重新上传</a>
                </div>
            </div>
            <div class="am-u-sm-8 set-link-wrap">
                <div class="set-link-act-wrap">
                    <label class="am-fl">链接：</label>
                    <a href="javascript:void(0);" class="am-block am-cf">
                        <div class="set-link-trigger am-fl">
                            设置链接到的页面地址</div>
                        <div class="set-link-result  am-fl">
                            <span class="am-fl">商品&nbsp;|&nbsp;</span>
                            <span class="set-link-result-cont">测试商品，不发货，不退款测试商品，不发货，不退款测试商品，不发货，不退款</span>
                            <i class="editor-del-btn">×</i>
                            <span class="set-link-modify">修改</span>
                        </div>
                        <span class="sort-desc-icon am-fl"><i class="am-icon-sort-desc"></i></span>
                    </a>
                </div>
                <ul class="set-link-pulldown">
                    <li><a href="">微页面及分类</a></li>
                    <li><a href="">店铺主页</a></li>
                    <li><a href="">店铺主页</a></li>
                    <li><a href="">会员主页</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

</div>

<?php
include "../common/footer.php";
?>
</body>
</html>


