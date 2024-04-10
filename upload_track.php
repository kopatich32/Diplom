<?php
	session_start();
	include 'get_tracks.php';
	$uploadFile = json_decode($_POST['obj'], true);
	$file = $_FILES['file'];
	$fileCover = $_FILES['cover'];

	$uploadedFile =  preg_replace('/\s+/', '_',  basename($file['name']));
	move_uploaded_file($file['tmp_name'], 'tracks/' . $uploadedFile);

	//covers
	if($fileCover) {
		$uploadedCover = preg_replace('/\s+/', '_', $uploadFile['IS_EMPTY_ARTIST_OR_TRACK_NAME']) . '.jpg';
		move_uploaded_file($fileCover['tmp_name'], 'covers/' . $uploadedCover);
	}

	$trackName = $uploadFile['TRACK_NAME'] ?? 'неизвестный трек';
	$artist = $uploadFile['ARTIST'] ?? 'неизвестный исполнитель';
	$fullTime = $uploadFile['DURATION']['MIN'] . ':' . $uploadFile['DURATION']['SECONDS'];
	$uploadLink =  preg_replace('/\s+/', '_', $uploadFile['IS_EMPTY_ARTIST_OR_TRACK_NAME']);
	if(!$uploadFile['ARTIST'] && !$uploadFile['TRACK_NAME']) {
		$artist = 'неизвестный исполнитель';
		$trackName = $uploadFile['IS_EMPTY_ARTIST_OR_TRACK_NAME'];
		}
	$row = getConnection()->query("INSERT INTO `tracks` (`cover`,`track_name`, `artist`, `duration`, `link`) VALUES ('$uploadedCover','$trackName','$artist', '$fullTime','$uploadLink')");


