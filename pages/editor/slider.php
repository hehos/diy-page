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
        <!-- 幻灯片动画效果 -->
        <div class="am-form-group am-form-group-sm">
            <label class=" am-form-label">幻灯片动画效果</label>
            <div>
                <label class="am-radio-inline">
                    <input type="radio" name="item-icon2" value="am-slider-d3">幻灯片效果
                </label>
                <label class="am-radio-inline">
                    <input type="radio" name="item-icon2" value="am-slider-d3">淡出效果
                </label>
            </div>
        </div>
        <!-- 状态控制器类型 -->
        <div class="am-form-group am-form-group-sm">
            <label class=" am-form-label">状态控制器类型</label>
            <div>
                <label class="am-radio-inline">
                    <input type="radio" name="item-icon2" value="am-slider-d3">点控制器
                </label>
                <label class="am-radio-inline">
                    <input type="radio" name="item-icon2" value="am-slider-d3">缩略图
                </label>
                <label class="am-radio-inline">
                    <input type="radio" name="item-icon2" value="am-slider-d3">条形控制器
                </label>
            </div>
        </div>
        <!-- 点控制器类型的位置 -->
        <div class="am-form-group am-form-group-sm">
            <label class=" am-form-label">点控制器类型的位置</label>
            <div>
                <label class="am-radio-inline">
                    <input type="radio" name="item-icon2" value="am-slider-d3">左侧
                </label>
                <label class="am-radio-inline">
                    <input type="radio" name="item-icon2" value="am-slider-d3">居中
                </label>
                <label class="am-radio-inline">
                    <input type="radio" name="item-icon2" value="am-slider-d3">右侧
                </label>
                <label class="am-radio-inline">
                    <input type="radio" name="item-icon2" value="am-slider-d3">底部
                </label>
            </div>
        </div>
        <!-- 方向控制器类型 -->
        <div class="am-form-group am-form-group-sm">
            <label class=" am-form-label">方向控制器类型</label>
            <div>
                <label class="am-radio-inline">
                    <input type="radio" name="item-icon2" value="am-slider-d3">圆形
                </label>
                <label class="am-radio-inline">
                    <input type="radio" name="item-icon2" value="am-slider-d3">方形
                </label>
            </div>
        </div>
        <!-- 方向控制的位置 -->
        <div class="am-form-group am-form-group-sm">
            <label class=" am-form-label">方向控制的位置</label>
            <div>
                <label class="am-radio-inline">
                    <input type="radio" name="item-icon2" value="am-slider-d3">垂直居中
                </label>
                <label class="am-radio-inline">
                    <input type="radio" name="item-icon2" value="am-slider-d3">垂直下
                </label>
            </div>
        </div>

        <!-- 选择slider的内容 -->
        <div class="am-form-group am-form-group-sm">
            <label class="am-form-label">选择slider的内容</label>
            <div>
                <label class="am-checkbox-inline">
                    <input type="checkbox" value="" checked="checked">自动幻灯片放映
                </label>
                <label class="am-checkbox-inline">
                    <input type="checkbox" value="" checked="checked">动画循环
                </label>
                <label class="am-checkbox-inline">
                    <input type="checkbox" value="" checked="checked">状态控制器
                </label>
                <label class="am-checkbox-inline">
                    <input type="checkbox" value="" checked="checked">方向控制器
                </label>
                <label class="am-checkbox-inline">
                    <input type="checkbox" value="" checked="checked">计数器
                </label>
                <label class="am-checkbox-inline">
                    <input type="checkbox" value="" checked="checked">标题
                </label>
                <label class="am-checkbox-inline">
                    <input type="checkbox" value="" checked="checked">介绍信息
                </label>
                <label class="am-checkbox-inline">
                    <input type="checkbox" value="" checked="checked">了解更多
                </label>
                <label class="am-checkbox-inline">
                    <input type="checkbox" value="" checked="checked">添加链接
                </label>
            </div>
        </div>
        <div class="am-form-group am-form-group-sm">
            <label class="am-u-sm-2 am-form-label">条目宽度</label>
            <div class="am-u-sm-10">
                <input type="text">
            </div>
        </div>
        <div class="am-form-group am-form-group-sm">
            <label class="am-u-sm-2 am-form-label">链接地址</label>
            <div class="am-u-sm-10">
                <input type="text">
            </div>
        </div>
    </div>

</div>

<?php
include "../common/footer.php";
?>
</body>
</html>