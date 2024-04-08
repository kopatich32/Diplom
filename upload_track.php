<?php
	include 'get_tracks.php';
	global $connect;
//$uploadFile = json_decode(file_get_contents('php://input'),true);
	$uploadFile = json_decode($_POST['obj'], true);
	print_r(json_encode($uploadFile));
	$file = $_FILES['file'];
//	$fileCover = $_FILES['cover'];
	$uploadDir = 'tracks/';
	$uploadedFile = $uploadDir . preg_replace('/\s+/', '_',  basename($file['name']));
	move_uploaded_file($file['tmp_name'], $uploadedFile);
	//covers
//	$uploadedFile = 'covers/'. preg_replace('/\s+/', '_',$uploadFile['IS_EMPTY_ARTIST_OR_TRACK_NAME']) . '.jpg';
//	$path = move_uploaded_file($fileCover['tmp_name'], $uploadedFile);
	
	if($uploadFile){
//		echo '<pre>' . print_r($uploadFile,true) . '</pre>';
//		$res =  json_encode($uploadFile);
	$cover = 'covers/' . $uploadFile['COVER'];
	$uploadLink = 'tracks/' .  preg_replace('/\s+/', '_', $uploadFile['IS_EMPTY_ARTIST_OR_TRACK_NAME']);
	$artist = $uploadFile['ARTIST'] ?? 'неизвестный исполнитель';
	$trackName = $uploadFile['TRACK_NAME'] ?? 'неизвестный трек';
	$fullTime = $uploadFile['DURATION']['MIN'] . ':' . $uploadFile['DURATION']['SECONDS'];
	if(!$uploadFile['ARTIST'] && !$uploadFile['TRACK_NAME']) {
		$artist = 'неизвестный исполнитель';
		$trackName = $uploadFile['IS_EMPTY_ARTIST_OR_TRACK_NAME'];
		}

	$connect = @new mysqli('localhost','root','','player');
	$row = $connect->query("INSERT INTO `tracks` (`cover`,`track_name`, `artist`, `duration`, `link`) VALUES ('$cover','$trackName','$artist', '$fullTime','$uploadLink')");

	}
//echo json_encode(['imagePath' =>$uploadedFile]);