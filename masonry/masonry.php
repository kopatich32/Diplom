<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="jquery-3.7.1.min.js"></script>
<!--    <script src="imagesloaded.pkgd.min.js"></script>-->
    <script src="masonry.pkgd.min.js"></script>
</head>
<body>
<style>
    * { box-sizing: border-box; }

    body { font-family: sans-serif; }

    /* ---- grid ---- */

    .grid {
        background: #EEE;
        max-width: 1200px;
    }

    /* clearfix */
    .grid:after {
        content: '';
        display: block;
        clear: both;
    }

    /* ---- grid-item ---- */

    .grid-sizer,
    .item {
        max-width: 25%;
        width:100%;
        height: 100%;
        padding: 6px;

    }

    .item {
        height: 120px;
        float: left;
        /*background: #D26;*/
        /*border: 2px solid #333;*/
        border-color: hsla(0, 0%, 0%, 0.5);
        border-radius: 5px;
    }

    .grid-item--width2 { width:  40%; }
    .grid-item--width3 { width:  60%; }

    .grid-item--height2 { height: 200px; }
    .grid-item--height3 { height: 260px; }
    .grid-item--height4 { height: 360px; }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        display: block;
        left: 0;
        top: 0;
    }
</style>
<?php
//    $start = 1;
//$arr = scandir(__DIR__ .'/img/');?>
<!--<div class="grid">-->
<?//foreach ($arr as $img){?>
<!--    <div id="--><?php //=$start?><!--" class="item"><img src="--><?php //='img/'.$img?><!--" alt=""></div>-->
<?php
//$start++;
//} ?>
<!--</div>-->

<div class="grid">
    <div class="grid-sizer"></div>
    <div id="3" class="item"><img src="img/14b3oAOpFcY.jpg" alt=""></div>
    <div id="4" class="item"><img src="img/2010-12-20-354882.jpeg" alt=""></div>
    <div id="5" class="item"><img src="img/33vG2nv0mYY.jpg" alt=""></div>
    <div id="6" class="item grid-item--width3"><img src="img/3c0f86f336ba082546c3083dfb758e8f.jpg" alt=""></div>
    <div id="7" class="item"><img src="img/5rzuHHH5IZQ.jpg" alt=""></div>
    <div id="8" class="item"><img src="img/7Mtsl7cWHZM.jpg" alt=""></div>
    <div id="9" class="item"><img src="img/7dRIyKTYEjA.jpg" alt=""></div>
    <div id="10" class="item"><img src="img/7lrMbkyW_9o.jpg" alt=""></div>
    <div id="11" class="item grid-item--width2"><img src="img/81772-1600x1200.jpg" alt=""></div>
    <div id="12" class="item"><img src="img/86d3ec57f081b75d59fcd40ba2ed146b.jpg" alt=""></div>
    <div id="13" class="item"><img src="img/8Ad8Vvazgjw.jpg" alt=""></div>
    <div id="14" class="item"><img src="img/8VZOGw_hTbA.jpg" alt=""></div>
    <div id="15" class="item"><img src="img/8Zdj6_19OmQ.jpg" alt=""></div>
    <div id="16" class="item"><img src="img/99px_ru_photo_149695_doroga_mejdu_domami_art_by_yatsude.jpg" alt=""></div>
    <div id="17" class="item"><img src="img/IMG_20231026_001815.jpg" alt=""></div>
    <div id="18" class="item"><img src="img/Vv6pkIRfEqI.jpg" alt=""></div>
    <div id="19" class="item"><img src="img/kQCTS6AGFkg.jpg" alt=""></div>
    <div id="20" class="item"><img src="img/koe no katachi.png" alt=""></div>
</div>
<script>


    $('.grid').masonry({
        itemSelector: '.item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });

</script>

</body>
</html>