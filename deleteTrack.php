<?php
	session_start();
	include "get_tracks.php";

	$del_json = json_decode(file_get_contents('php://input'),true);
	if($del_json){
		$delTrack = $del_json["ID"];
		$delLinkTrack = $del_json['LINK_TRACK'];
		$delLinkCover = $del_json['LINK_COVER'];
		unlink($delLinkCover);
		unlink($delLinkTrack);
		$row = getConnection()->query("DELETE FROM `tracks` WHERE `id` = '$delTrack'");
echo json_encode(['ID' => $delTrack, 'LINK_TRACK' => $delLinkTrack, 'LINK_COVER'=> $delLinkCover]);

	}