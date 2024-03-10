<?php
$connect = @new mysqli('localhost','root','','player');
//$connect = @new mysqli('localhost','r93987lp_player','89398786029Aa.','r93987lp_player'); hosting

$query = $connect->query("SELECT * FROM `tracks`");

