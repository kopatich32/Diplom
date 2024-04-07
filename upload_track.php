<?php
	include 'get_tracks.php';
	global $connect;
$uploadFile = json_decode(file_get_contents('php://input'),true);
if($uploadFile){
		$res =  json_encode($uploadFile);
	$cover = 'covers/' . $uploadFile['COVER'];
	$uploadLink = 'tracks/' .  preg_replace('/\s+|\'/', '_', $uploadFile['IS_EMPTY_ARTIST_OR_TRACK_NAME']);
	$artist = $uploadFile['ARTIST'] ?? 'неизвестный исполнитель';
	$trackName = $uploadFile['TRACK_NAME'] ?? 'неизвестный трек';
	$fullTime = $uploadFile['DURATION']['MIN'] . ':' . $uploadFile['DURATION']['SECONDS'];
	if(!$uploadFile['ARTIST'] && !$uploadFile['TRACK_NAME']) {
		$artist = 'неизвестный исполнитель';
		$trackName = $uploadFile['IS_EMPTY_ARTIST_OR_TRACK_NAME'];
		}
	print_r($trackName);

	$connect = @new mysqli('localhost','root','','player');
	$row = $connect->query("INSERT INTO `tracks` (`cover`,`track_name`, `artist`, `duration`, `link`) VALUES ('$cover','$trackName','$artist', '$fullTime','$uploadLink')");

	}
