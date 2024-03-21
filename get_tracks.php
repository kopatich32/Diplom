<?php
$connect = @new mysqli('localhost','root','','player');
//$connect = @new mysqli('localhost','r93987lp_player','89398786029Aa.','r93987lp_player'); hosting

$query = $connect->query("SELECT * FROM `tracks`");

//    $start = $_GET['start'];
//    $pagination = $connect->query("SELECT * FROM `tracks` LIMIT 5 OFFSET ".$start);
    $pagination = $connect->query("SELECT * FROM `tracks` LIMIT 5 OFFSET 4");

    $arr = [];
    while ($rew = $pagination->fetch_assoc()) {
        array_push($arr, $rew);
    }

/*    echo json_encode($arr);*/




