<!DOCTYPE html>
<html>
<head>
    <?php
    include "../common/header.php";
    ?>
</head>
<body>
<link rel="stylesheet" type="text/css" href="../../css/widgets/search-bar.css"/>

<div class="editor-box am-container" style="margin-top: 30px">
    <div class="jz-search-bar">
        <button title="搜索" class="jz-search-icon"><i class="am-icon-search"></i></button>
        <select data-am-selected class="jz-search-dropdown">
            <option value="store">店铺</option>
            <option value="goods">商品</option>
        </select>
        <button class="jz-search-btn">搜索</button>
        <div class="jz-search-input">
            <input placeholder="输入关键字搜索" type="text"/>
        </div>

    </div>

</div>

<?php
include "../common/footer.php";
?>
</body>
</html>