<?php
	include "get_tracks.php";

	$del_json = json_decode(file_get_contents('php://input'),true);
	if($del_json){
		$delTrack = $del_json["ID"];
		$row = getConnection()->query("DELETE FROM `tracks` WHERE `id` = '$delTrack'");

	}