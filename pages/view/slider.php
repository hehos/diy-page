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
    <h3>1，default（默认）{}</h3>
    <div data-am-widget="slider" class="am-slider am-dir-square am-dir-down am-ctl-thumbs"
         data-am-slider='{"controlNav":"thumbnails, "directionNav":false}'>
        <ul class="am-slides">
            <li>
                <img src="../../img/temp/component/slider1.jpg">
            </li>
            <li>
                <img src="../../img/temp/component/slider2.jpg">
            </li>
        </ul>
    </div>

<!--    <h3>2，default（标题）{"animation":"fade","slideshow":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-default"-->
<!--         data-am-slider='{"animation":"fade","slideshow":false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--                <div class="am-slider-desc">这是标题标题标题标题标题标题标题0</div>-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--                <div class="am-slider-desc">这是标题标题标题标题标题标题标题1</div>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>3，default（多图）{"animation":"slide","animationLoop":false,"itemWidth":200,"itemMargin":5}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-default"-->
<!--         data-am-slider='{"animation":"slide","animationLoop":false,"itemWidth":200,"itemMargin":5}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider3.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider4.jpg">-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>4，default（缩略图）{"animation":"slide","controlNav":"thumbnails"}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-default"-->
<!--         data-am-slider='{"animation":"slide","controlNav":"thumbnails"}'>-->
<!--        <ul class="am-slides">-->
<!--            <li data-thumb="../../img/temp/component/slider2.jpg">-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--            </li>-->
<!--            <li data-thumb="../../img/temp/component/slider1.jpg">-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--            </li>-->
<!--            <li data-thumb="../../img/temp/component/slider1.jpg">-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--            </li>-->
<!--            <li data-thumb="../../img/temp/component/slider1.jpg">-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--            </li>-->
<!--            <li data-thumb="../../img/temp/component/slider1.jpg">-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>5，a1（圆形控制点{"directionNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-a1"-->
<!--         data-am-slider='{"itemMargin":5}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>6，a2（方形控制点）{"directionNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-a2"-->
<!--         data-am-slider='{"directionNav":false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>7，a3（底部黑边圆形控制点）{"directionNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-a3"-->
<!--         data-am-slider='{"directionNav":false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>8，a4（底部白边圆形控制点）{"directionNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-a4"-->
<!--         data-am-slider='{ }'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>9，a5（长条等分控制点）{"directionNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-a5"-->
<!--         data-am-slider='{"directionNav":false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>10，b1（方形居中左右箭头）{"controlNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-b1"-->
<!--         data-am-slider='{"controlNav":false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>11，b2（圆形居中左右箭头）{"controlNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-b2"-->
<!--         data-am-slider='{"controlNav":false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider3.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider4.jpg">-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>12，b3（图片外左右箭头）{"controlNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-b3"-->
<!--         data-am-slider='{"controlNav":false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider3.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider4.jpg">-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>13，b4（图片外左右圆形箭头）{"controlNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-b4"-->
<!--         data-am-slider='{"controlNav":false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider3.jpg">-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>14，c1（标题+长条控制点）{"directionNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-c1"-->
<!--         data-am-slider='{"directionNav":false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--                <div class="am-slider-desc">远方 有一个地方 那里种有我们的梦想</div>-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--                <div class="am-slider-desc">某天 也许会相遇 相遇在这个好地方</div>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>15，c2（标题+方形控制点）{"directionNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-c2"-->
<!--         data-am-slider='{"directionNav":false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--                <div class="am-slider-desc">远方 有一个地方 那里种有我们的梦想</div>-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--                <div class="am-slider-desc">某天 也许会相遇 相遇在这个好地方</div>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>16，c3（标题+居中左右箭头）{"controlNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-c3"-->
<!--         data-am-slider='{"controlNav":false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--                <div class="am-slider-desc">-->
<!--                    <div class="am-slider-counter"><span class="am-active">1</span>/4</div>-->
<!--                    远方 有一个地方 那里种有我们的梦想</div>-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--                <div class="am-slider-desc">-->
<!--                    <div class="am-slider-counter"><span class="am-active">2</span>/4</div>-->
<!--                    某天 也许会相遇 相遇在这个好地方</div>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>17，c4（标题+居底左右箭头）{"controlNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-c4"-->
<!--         data-am-slider='{"controlNav":false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--                <div class="am-slider-desc">远方 有一个地方 那里种有我们的梦想</div>-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--                <div class="am-slider-desc">某天 也许会相遇 相遇在这个好地方</div>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>18，d1（标题+底部圆形左右箭头）{"controlNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-d1"-->
<!--         data-am-slider='{"controlNav":false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--                <div class="am-slider-desc">-->
<!--                    <h2 class="am-slider-title">远方 有一个地方 那里种有我们的梦想</h2>-->
<!--                    <a class="am-slider-more">了解更多</a>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--                <div class="am-slider-desc">-->
<!--                    <h2 class="am-slider-title">某天 也许会相遇 相遇在这个好地方</h2>-->
<!--                    <a class="am-slider-more">了解更多</a>-->
<!--                </div>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>19，d2（浮层标题+底部圆形控制点）{"directionNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-d2"-->
<!--         data-am-slider='{"slideshow": false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--                <div class="am-slider-desc">-->
<!--                    <div class="am-slider-content">-->
<!--                        <h2 class="am-slider-title">远方 有一个地方 那里种有我们的梦想</h2>-->
<!--                        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>-->
<!--                    </div>-->
<!--                    <a class="am-slider-more">了解更多</a>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li>-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--                <div class="am-slider-desc">-->
<!--                    <div class="am-slider-content">-->
<!--                        <h2 class="am-slider-title">某天 也许会相遇 相遇在这个好地方</h2>-->
<!--                        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>-->
<!--                    </div>-->
<!--                    <a class="am-slider-more">了解更多</a>-->
<!--                </div>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!---->
<!--    <h3>20，d3（标题+缩略图导航）{"controlNav":"thumbnails","directionNav":false}</h3>-->
<!--    <div data-am-widget="slider" class="am-slider am-slider-d3"-->
<!--         data-am-slider='{"controlNav":"thumbnails","directionNav":false, "slideshow": false}'>-->
<!--        <ul class="am-slides">-->
<!--            <li data-thumb="../../img/temp/component/slider2.jpg">-->
<!--                <img src="../../img/temp/component/slider2.jpg">-->
<!--                <div class="am-slider-desc">-->
<!--                    <h2 class="am-slider-title">远方 有一个地方 那里种有我们的梦想</h2>-->
<!--                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li data-thumb="../../img/temp/component/slider1.jpg">-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--                <div class="am-slider-desc">-->
<!--                    <h2 class="am-slider-title">某天 也许会相遇 相遇在这个好地方</h2>-->
<!--                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li data-thumb="../../img/temp/component/slider1.jpg">-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--                <div class="am-slider-desc">-->
<!--                    <h2 class="am-slider-title">某天 也许会相遇 相遇在这个好地方</h2>-->
<!--                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li data-thumb="../../img/temp/component/slider1.jpg">-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--                <div class="am-slider-desc">-->
<!--                    <h2 class="am-slider-title">某天 也许会相遇 相遇在这个好地方</h2>-->
<!--                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li data-thumb="../../img/temp/component/slider1.jpg">-->
<!--                <img src="../../img/temp/component/slider1.jpg">-->
<!--                <div class="am-slider-desc">-->
<!--                    <h2 class="am-slider-title">某天 也许会相遇 相遇在这个好地方</h2>-->
<!--                    <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>-->
<!--                </div>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->



</div>

<?php
include "../common/footer.php";
?>
</body>
</html>