<?php
$json2 = json_decode(file_get_contents("php://input"), true);
if($json2['switch']){
  $res = $json2['switch']['currentTrack'];
  echo json_encode($res);
}