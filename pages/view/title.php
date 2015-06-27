<!DOCTYPE html>
<html>
<head>
    <?php
        include "../common/header.php";
    ?>
</head>
<body>
<link rel="stylesheet" type="text/css" href="../../css/widgets/title.css"/>

<div class="components-box am-container am-margin-bottom">
    <!-- 文本标题 -->
    <h3>传统模式</h3>
    <div class="jz-title jz-title-normal">
        <h2 class="jz-title-title">标题（这是默认的标题文本）
            <span class="title-link-container">
                <span class="title-split">-</span>
                <a href="jc001.cn" class="title-link">九正科技</a>
            </span>
        </h2>
        <div class="jz-sub-title">
            <span class="sub-title-txt">副标题</span>
            <span class="sub-title-date">2015-08-9</span>
            <span class="sub-title-author">张三</span>
            <a href="jc001.cn" class="sub-title-link">九正科技</a>
        </div>
    </div>
    <h3>模仿微信图文页样式</h3>
    <div class="jz-title jz-title-weixin">
        <h2 class="jz-title-title">标题（这是默认的标题文本）
            <span class="title-link-container"><span class="title-split">-</span>
                <span class="title-link">九正科技</span></span>
        </h2>
        <div class="jz-sub-title">
            <span class="sub-title-txt">副标题</span>
            <span class="sub-title-date">2015-08-9</span>
            <span class="sub-title-author">张三</span>
            <a class="sub-title-link" href="">九正科技</a>
        </div>
    </div>

</div>

<?php
    include "../common/footer.php";
?>
</body>
</html>