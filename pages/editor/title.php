<!DOCTYPE html>
<html>
<head>
    <?php
    include "../common/header.php";
    ?>
</head>
<body>
<link rel="stylesheet" type="text/css" href="../../css/widgets/nav.css"/>

<div class="components-box am-container am-margin-bottom">
    <div class="am-form am-form-horizontal">
        <div class="am-form-group am-form-group-sm">
            <label class="am-u-sm-2 am-form-label"><em class="a-red">*</em>标题名</label>
            <div class="am-u-sm-10">
                <input type="text">
            </div>
        </div>
        <div class="am-form-group am-form-group-sm">
            <label class="am-u-sm-2 am-form-label">标题模板</label>
            <div class="am-u-sm-10">
                <label class="am-radio-inline">
                    <input type="radio" name="titlePattern" value="widgetClassName">
                    传统样式</label>
                <label class="am-radio-inline">
                    <input type="radio" name="titlePattern">
                    模仿微信图文页样式</label>
            </div>
        </div>
        <div class="am-form-group am-form-group-sm">
            <label class="am-u-sm-2 am-form-label">副标题</label>
            <div class="am-u-sm-10">
                <input type="text">
            </div>
        </div>
        <div class="am-form-group am-form-group-sm">
            <label class="am-u-sm-2 am-form-label">显示</label>
            <div class="am-u-sm-10">
                <label class="am-radio-inline">
                    <input type="radio" name="verticalAlign">
                    居左显示</label>
                <label class="am-radio-inline">
                    <input type="radio" name="verticalAlign">
                    居中显示</label>
                <label class="am-radio-inline">
                    <input type="radio" name="verticalAlign">
                    居右显示</label>
            </div>
        </div>
        <div class="am-form-group am-form-group-sm">
            <label  class="am-u-sm-2 am-form-label">背景颜色</label>
            <div class="am-u-sm-10">
                <input type="color"">
            </div>
        </div>
        <div class="am-form-group am-form-group-sm">
            <a class="am-block am-margin" href=""><i class="a-green am-icon-plus-circle"></i>
                添加一条文本导航 <em>×</em></a>
            <div class="am-form-group am-form-group-sm">
                <label class="am-u-sm-2 am-form-label"><em class="a-red">*</em>名称</label>
                <div class="am-u-sm-10">
                    <input type="text">
                </div>
            </div>
            <div class="am-form-group am-form-group-sm">
                <label class="am-u-sm-2 am-form-label"><em class="a-red">*</em>链接</label>
                <div class="am-u-sm-10">
                    <input type="text">
                </div>
            </div>
        </div>
        <div class="am-form-group am-form-group-sm">
            <label class="am-u-sm-2 am-form-label">日期</label>
            <div class="am-u-sm-10">
                <input type="text">
            </div>
        </div>
        <div class="am-form-group am-form-group-sm">
            <label class="am-u-sm-2 am-form-label">作者</label>
            <div class="am-u-sm-10">
                <input type="text">
            </div>
        </div>
        <div class="am-form-group am-form-group-sm">
            <label class="am-u-sm-2 am-form-label">链接标题</label>
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