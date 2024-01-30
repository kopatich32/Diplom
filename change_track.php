<?php
session_start();
$json2 = json_decode(file_get_contents("php://input"), true);
if($json2['switch']){
  $res = $json2['switch']['currentTrack'];
    $resJSON =  json_encode($res);
    echo $resJSON;
}

//echo $GLOBALS['TRACK_LINK'];

//$audio = $query->fetch_array();
//echo '<pre>';
//print_r ($audio);
//echo '</pre>';
