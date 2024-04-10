<?php
	include "get_tracks.php";

	$existTrack = json_decode(file_get_contents('php://input'),true);
$arr[]= '';
	if($existTrack) {
		$row = getConnection()->query("SELECT * FROM `tracks`");
		foreach ($row as $value) {
			array_push($arr, $value);
		}
		echo json_encode($arr);
	}


