<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
<?php
include 'get_tracks.php';
	include('getID3-master/getid3/getid3.php');
	global $connect;
	$id = new getID3();
	$tag = 'utf-8';
	$id->setOption(['encoding'=>$tag]);
	include "getID3-master/getid3/write.php";
	$fileName = $_FILES['FILE']['tmp_name'];
	$fileinfo = $id->analyze($fileName);
	$img = $fileinfo['id3v2']['APIC'][0]['data'];
	echo '<pre>' . print_r($img,true) . '</pre>';

?>
<img src="<?=$img?>" alt="">
<form action="" method="POST" enctype="multipart/form-data">
	<input name="FILE" type="file" placeholder="mp3 track only">
	<button name="SUBMIT" type="submit">send</button>
</form>
</body>
</html>