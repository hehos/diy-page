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
    <div class="am-form am-form-horizontal">
        <div class="am-form-group am-form-group-sm">
            <label class="am-u-sm-2 am-form-label">添加媒体项</label>
            <div class="am-u-sm-10 add-media-item">
                <a href="javascript:void(0);" class="add-item-btn">
                    <i class="am-icon-plus"></i></a>
            </div>
        </div>
        <div class="am-form-group am-form-group-sm">
            <label class="am-u-sm-2 am-form-label">列表类型</label>
            <div class="am-u-sm-10">
                <label class="am-radio-inline">
                    <input type="radio">大图
                </label>
                <label class="am-radio-inline">
                    <input type="radio">小图
                </label>
                <label class="am-radio-inline">
                    <input type="radio">一大两小交替
                </label>
                <label class="am-radio-inline">
                    <input type="radio">详细列表
                </label>
            </div>
        </div>
        <div class="am-form-group am-form-group-sm">
            <label class="am-u-sm-2 am-form-label">显示模式</label>
            <div class="am-u-sm-10">
                <label class="am-radio-inline">
                    <input type="radio">卡片
                </label>
                <label class="am-radio-inline">
                    <input type="radio">瀑布流
                </label>
                <label class="am-radio-inline">
                    <input type="radio">极简
                </label>
                <label class="am-radio-inline">
                    <input type="radio">促销
                </label>
                <label class="am-radio-inline">
                    <input type="radio">广告或者图册
                </label>
            </div>
        </div>

    <div class="am-form-group am-form-group-sm">
        <label class="am-u-sm-2 am-form-label">瀑布流参数配置</label>
        <div class="am-u-sm-10">
            <div class="am-form-group">
                <label style="line-height: 1em; margin-bottom: 0;
                    vertical-align: bottom;">加载方式：</label>
                <label class="am-radio-inline">
                    <input type="radio">default
                </label>
                <label class="am-radio-inline">
                    <input type="radio">懒加载
                </label>
            </div>
            <div class="am-form-group">
                <label style="line-height: 1em; margin-bottom: 0;
                    vertical-align: bottom;">加载动画：</label>
                <label class="am-radio-inline">
                    <input type="radio">default
                </label>
                <label class="am-radio-inline">
                    <input type="radio">淡入
                </label>
            </div>
            <div class="am-form-group">
                懒加载初始化数目：<input type="number" min="3"
                    style="display: inline-block; width: auto;">
            </div>
            <div class="am-form-group">
                懒加载的批次数量：<input type="number" min="3"
                               style="display: inline-block; width: auto;">
            </div>
        </div>
    </div>
        <div class="am-form-group am-form-group-sm">
            <label class="am-u-sm-2 am-form-label">选择显示信息</label>
            <div class="am-u-sm-10">
                <label class="am-checkbox-inline">
                    <input type="checkbox">标题
                </label>
                <label class="am-checkbox-inline">
                    <input type="checkbox">描述信息
                </label>
                <label class="am-checkbox-inline">
                    <input type="checkbox">价格
                </label>
                <label class="am-checkbox-inline">
                    <input type="checkbox">购买按钮
                </label>
                <label class="am-checkbox-inline">
                    <input type="checkbox">收藏心图标
                </label>
            </div>
        </div>
        <div class="inputArea">
            <h3>填写媒体项信息</h3>
            <div class="am-form-group am-form-group-sm">
                <label class="am-u-sm-2 am-form-label">图片名：</label>
                <div class="am-u-sm-10">
                    <input type="text"/>
                </div>
            </div>
            <div class="am-form-group am-form-group-sm">
                <label class="am-u-sm-2 am-form-label">链接地址：</label>
                <div class="am-u-sm-10">
                    <input type="text"/>
                </div>
            </div>
            <div class="am-form-group am-form-group-sm">
                <label class="am-u-sm-2 am-form-label">标题：</label>
                <div class="am-u-sm-10">
                    <input type="text"/>
                </div>
            </div>
            <div class="am-form-group am-form-group-sm">
                <label class="am-u-sm-2 am-form-label">描述信息：</label>
                <div class="am-u-sm-10">
                    <input type="text"/>
                </div>
            </div>
            <div class="am-form-group am-form-group-sm">
                <label class="am-u-sm-2 am-form-label">价格：</label>
                <div class="am-u-sm-10">
                    <input type="text"/>
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