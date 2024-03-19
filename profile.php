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
include "getID3-master/getid3/write.php";
global $connect;
if(isset($_FILES['FILE']['size']) && $_FILES['FILE']['size'] > 0){
    $id = new getID3();
    @$fileName = $_FILES['FILE']['tmp_name'];
    @$fileInfo = $id->analyze($fileName);
    if($fileInfo['id3v2']['APIC'][0]['data']){
        $img = $fileInfo['id3v2']['APIC'][0]['data'];
        $addedTimeCover = time();
        @$file = file_put_contents(__DIR__."/covers/".$addedTimeCover.".png", $img);
        $getArtist = explode('-',$_FILES['FILE']['name'])[0];
        $getTrackName = explode('-',$_FILES['FILE']['name'])[1];
    }
    $getDuration =  $fileInfo['playtime_string'];
    $linkNewtrack = 'tracks/'.$_FILES['FILE']['full_path'];
    $coverName = 'covers/'.$addedTimeCover;
    $query = $connect->query( "INSERT INTO `tracks`(`cover`, `track_name`, `artist`, `duration`,`link`) VALUES ('$coverName','$getTrackName','$getArtist','$getDuration','$linkNewtrack')");

}



?>
<img src="<?=realpath($file)?>" alt="">
<form action="" method="POST" enctype="multipart/form-data">
	<input name="FILE" type="file" placeholder="mp3 track only">
	<button name="SUBMIT" type="submit">send</button>
</form>
</body>
</html>