<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <meta name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <!--  框架样式  -->
    <link rel="stylesheet" type="text/css" href="../vendor/amazeui/dist/css/amazeui.min.css"/>
    <!--  公共  -->
    <link rel="stylesheet" type="text/css" href="../css/comm.css"/>
    <!--  全局样式  -->
    <link rel="stylesheet" type="text/css" href="../css/editor.css"/>
    <!--  字体图标  -->
    <link rel="stylesheet" type="text/css" href="../fonts/iconfont.css"/>

    <!--  组件样式  -->
    <link rel="stylesheet" type="text/css" href="../css/widgets/media-list.css"/>
    <link rel="stylesheet" type="text/css" href="../css/widgets/media-showcase.css"/>
    <link rel="stylesheet" type="text/css" href="../css/widgets/nav.css"/>
    <link rel="stylesheet" type="text/css" href="../css/widgets/title.css"/>
    <link rel="stylesheet" type="text/css" href="../css/widgets/store-bar.css"/>

    <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <!--  拖拉排序组件。  -->
    <script type="text/javascript" src="../js/lib/jquery.dragsort-0.5.2.min.js"></script>
</head>
<body>
<div class="container">
    <div class="content">
        <div id="view-wrap" class="am-u-sm-5">
        </div>
        <div id="editor-wrap" class="am-u-sm-7">
        </div>
        <div id="add-widgets-panel">
            <h4>添加内容</h4>
        </div>
    </div>
    <div class="bottom-action">
        <a class="btn btn-primary" href="javascript: void(0);">保存</a>
    </div>
</div>


<script src="../js/base.js"></script>
<script>
    var page = new JZD.Page();
</script>

<div id="js-widgets">
    <script src="../js/widgets/media-list.js"></script>
    <script src="../js/widgets/media-showcase.js"></script>
    <script src="../js/widgets/rich-text.js"></script>
    <script src="../js/widgets/nav.js"></script>
    <script src="../js/widgets/title.js"></script>
    <script src="../js/widgets/store-bar.js"></script>
</div>
<div id="js-frame"></div>
<div id="js-plugins">
    <script src="../js/plugins/base.js"></script>
</div>
</body>
</html>
