<?php
	session_start();
//$json2 = json_decode(file_get_contents("php://input"), true);
//if ($json2['edited']) {
//    $mess_text = $json2['edited']['message'];
//    $mess_id = $json2['edited']['changeID'];
//    $date_of_message = $json2['edited']['time'];
//    $db = new mysqli('localhost', 'root', '', 'comment');
//    $query = $db->query("UPDATE `message` SET `user`='KotE',`message`='$mess_text',`date`='$date_of_message' WHERE `id` ='$mess_id'");
//    if ($query) {
//        echo json_encode(['result' => $json2['edited'], 'id' => $mess_id, 'time' => $date_of_message]);
//    }
//}