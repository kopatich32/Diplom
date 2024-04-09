<?php
	include "get_tracks.php";

	$del_json = json_decode(file_get_contents('php://input'),true);
	if($del_json){

		echo($del_json);
//		echo json_encode(["id"=> $del_comment]);
//		$row = getConnection()->query("DELETE FROM `message` WHERE `id` = '$del_comment'");

	}