<?php
    include "../common/header.php";
?>

    <link rel="stylesheet" type="text/css" href="../../css/widgets/editor/nav.css"/>
    <div class="editor-box am-container">
                <div class="am-tabs am-form am-form-horizontal" data-am-tabs>
                    <ul class="am-tabs-nav am-nav am-nav-tabs">
                        <li class="am-active"><a href="javascript: void(0)">
                                简单导航
                        </a></li>
                        <li><a href="javascript: void(0)">
                                普通导航
                            </a></li>
                        <li><a href="javascript: void(0)">
                                导航条
                            </a></li>
                        <li><a href="javascript: void(0)">
                                菜单导航
                        </a></li>
                    </ul>
                    <div class="am-tabs-bd">
                        <div class="am-tab-panel am-active">
                            <div class="am-form-group">
                                <label class="am-radio-inline">
                                    <input type="radio" name="item-icon" value="jz-nav-icon1">大图标
                                </label>
                                <label class="am-radio-inline">
                                    <input type="radio" name="item-icon" value="jz-nav-icon2">竖排列表
                                </label>
                                <label class="am-radio-inline">
                                    <input type="radio" name="item-icon" value="jz-nav-icon3">简单介绍信息
                                </label>
                            </div>
                            <hr data-am-widget="divider" style="" class="am-divider am-divider-default" />
                            <div class="am-form-group">
                                <label class="am-radio-inline">
                                    <input type="radio" name="item-icon" value="img">图标
                                </label>
                                <label class="am-radio-inline">
                                    <input type="radio" name="item-icon" value="iconfont">字体图标
                                </label>
                                <label class="am-checkbox-inline am-fr">
                                    <input type="checkbox" checked>是否显示图标
                                </label>
                            </div>
                            <div class="am-form-group">
                                <label class="am-u-sm-3 am-form-label" for="className">className</label>
                                <div class="am-u-sm-9">
                                    <input type="text" id="className" placeholder="输入字体图标className">
                                </div>
                            </div>
                            <div class="am-form-group">
                                <label class="am-u-sm-3 am-form-label" for="imgName">图片名称</label>
                                <div class="am-u-sm-9">
                                    <input type="text" id="imgName" placeholder="输入图片名称">
                                </div>
                            </div>
                            <div class="am-form-group">
                                <label class="am-u-sm-3 am-form-label" for="itemName-0">
                                    <span class="a-red">*</span>导航名称</label>
                                <div class="am-u-sm-9">
                                    <input type="text" id="itemName-0" placeholder="输入导航名称">
                                </div>
                            </div>
                            <div class="am-form-group">
                                <label class="am-u-sm-3 am-form-label" for="intro-0">介绍信息</label>
                                <div class="am-u-sm-9">
                                    <input type="text" id="intro-0" placeholder="输入导航条目的简单介绍">
                                </div>
                            </div>
                            <p class="a-red">字体图标填写className，图片填写图片名，并将图片加入项目中。</p>
                            <div class="am-margin-top">
                                <a href="" class="am-btn am-btn-primary"><i class="am-icon-plus"></i>添加一条导航</a>
                                <a href="" class="am-btn am-btn-primary am-btn-sm am-btn-secondary"><i class="am-icon-plus"></i>添加下拉菜单</a>
                            </div>
                        </div>
                        <div class="am-tab-panel">
                            <div class="am-form-group">
                                <label class="am-radio-inline">
                                    <input type="radio"  value="" name="docInlineRadio">default
                                </label>
                                <label class="am-radio-inline">
                                    <input type="radio" name="docInlineRadio">水平导航
                                </label>
                                <label class="am-radio-inline">
                                    <input type="radio" name="docInlineRadio">标签式
                                </label>
                                <label class="am-radio-inline">
                                    <input type="radio" name="docInlineRadio">宽度自适应
                                </label>
                            </div>
                            <div class="am-form-group">
                                <label class="am-radio-inline">
                                    <input type="radio"  value="" name="docInlineRadio">导航标题
                                </label>
                                <label class="am-radio-inline">
                                    <input type="radio" name="docInlineRadio">导航分隔线
                                </label>
                            </div>
                            <div class="am-form-group">
                                <label class="am-u-sm-3 am-form-label" for="itemName-1">
                                    <span class="a-red">*</span>导航名称</label>
                                <div class="am-u-sm-9">
                                    <input type="text" id="itemName-1" placeholder="输入导航名称">
                                </div>
                            </div>
                            <p class="a-red">字体图标填写className，图片填写图片名，并将图片加入项目中。</p>
                            <div class="am-margin-top">
                                <a href="" class="am-btn am-btn-primary"><i class="am-icon-plus"></i>添加一条导航</a>
                                <a href="" class="am-btn am-btn-primary am-btn-sm am-btn-secondary"><i class="am-icon-plus"></i>添加下拉菜单</a>
                                <label class="am-checkbox-inline">
                                    <input type="checkbox">文本居中
                                </label>
                            </div>
                        </div>
                        <div class="am-tab-panel">
                            <div class="am-form-group">
                                <label class="am-checkbox-inline">
                                    <input type="checkbox" value="option3">搜索框
                                </label>
                                <label class="am-checkbox-inline">
                                    <input type="checkbox" value="option3">深色
                                </label>
                                <label class="am-checkbox-inline">
                                    <input type="checkbox" value="option3">右边栏信息
                                </label>
                            </div>
                            <div class="am-form-group">
                                <label class="am-u-sm-3 am-form-label" for="itemName-2">
                                    <span class="a-red">*</span>导航名称</label>
                                <div class="am-u-sm-9">
                                    <input type="text" class="" id="itemName-2" placeholder="输入导航名称">
                                </div>
                            </div>
                            <p class="a-red">字体图标填写className，图片填写图片名，并将图片加入项目中。</p>
                            <div class="am-margin-top">
                                <a href="" class="am-btn am-btn-primary"><i class="am-icon-plus"></i>添加一条导航</a>
                                <a href="" class="am-btn am-btn-primary am-btn-sm am-btn-secondary"><i class="am-icon-plus"></i>添加下拉菜单</a>
                                <label class="am-checkbox-inline">
                                    <input type="checkbox">文本居中
                                </label>
                            </div>
                        </div>
                        <div class="am-tab-panel">
                            <div class="am-tabs" data-am-tabs>
                                <ul class="am-tabs-nav am-nav am-nav-tabs">
                                    <li class="am-active"><a href="javascript: void(0)">横排</a></li>
                                    <li><a href="javascript: void(0)">竖排</a></li>
                                    <li><a href="javascript: void(0)">侧滑</a></li>
                                </ul>
                                <div class="am-tabs-bd">
                                    <div class="am-tab-panel am-active">
                                        <div class="am-form-group">
                                            <label class="am-radio-inline">
                                                <input type="radio"  value="" name="docInlineRadio">default
                                            </label>
                                            <label class="am-radio-inline">
                                                <input type="radio" name="docInlineRadio">下拉1
                                            </label>
                                            <label class="am-radio-inline">
                                                <input type="radio" name="docInlineRadio">下拉2
                                            </label>
                                            <label class="am-checkbox-inline am-fr">
                                                <input type="checkbox">文本居中
                                            </label>
                                        </div>
                                    </div>
                                    <div class="am-tab-panel">
                                        <div class="am-form-group">
                                            <label class="am-radio-inline">
                                                <input type="radio"  value="" name="docInlineRadio">default
                                            </label>
                                            <label class="am-radio-inline">
                                                <input type="radio" name="docInlineRadio">文本触发下拉
                                            </label>
                                            <label class="am-radio-inline">
                                                <input type="radio" name="docInlineRadio">图标触发下拉
                                            </label>
                                            <label class="am-checkbox-inline am-fr">
                                                <input type="checkbox">文本居中
                                            </label>
                                        </div>
                                    </div>
                                    <div class="am-tab-panel">
                                        <div class="am-form-group">
                                            <label class="am-radio-inline">
                                                <input type="radio"  value="" name="docInlineRadio">左侧滑
                                            </label>
                                            <label class="am-radio-inline">
                                                <input type="radio" name="docInlineRadio">右侧滑
                                            </label>
                                            <label class="am-radio-inline">
                                                <input type="radio" name="docInlineRadio">侧滑横排
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="am-form-group">
                                <label class="am-u-sm-3 am-form-label" for="itemName-3">
                                    <span class="a-red">*</span>导航名称</label>
                                <div class="am-u-sm-9">
                                    <input type="text" class="" id="itemName-3" placeholder="输入导航名称">
                                </div>
                            </div>
                            <p class="a-red">字体图标填写className，图片填写图片名，并将图片加入项目中。</p>
                            <div class="am-margin-top">
                                <a href="" class="am-btn am-btn-primary"><i class="am-icon-plus"></i>添加一条导航</a>
                                <a href="" class="am-btn am-btn-primary am-btn-sm am-btn-secondary">
                                <button type="submit" class="am-btn am-btn-success">确认</button>
                                    <i class="am-icon-plus"></i>添加二级导航</a>
                                <label class="am-checkbox-inline">
                                    <input type="checkbox">文本居中
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="item-thumbnail">
                        <span></span>
                    </div>
                </div>



    </div>
<?php
    include "../common/footer.php";
?>