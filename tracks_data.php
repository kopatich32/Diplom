<?php
require( 'vendor/wapmorgan/mp3info/src/Mp3Info.php' );
use wapmorgan\Mp3Info\Mp3Info;
$audio = new Mp3Info('tracks/Deafheaven_-_The_Gnashing.mp3');
$getDuration = $audio->duration / 60;
$resDuration = round($getDuration, 2) ;
echo '<pre>';
//print_r ($audio);
echo '</pre>';
echo '<br>'. $resDuration;
echo '<br>'. $audio->hasCover;
?>