<?php
	session_start();
	include 'get_tracks.php';
	$profileData = json_decode(file_get_contents('php://input'), true);
	if ($profileData) {
		$userID = $_SESSION['USER_ID'];
		$newName = $profileData['H1'];
		$row = getConnection()->query("UPDATE `authorization` SET `name`= '$newName'WHERE `id` ='$userID'");
		if ($row) {
			$_SESSION['name'] = $newName;
			echo json_encode(['new_name' => $newName]);
		}
	}