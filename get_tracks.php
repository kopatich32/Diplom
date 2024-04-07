<?php
$connect = @new mysqli('localhost','root','','player');
//$connect = @new mysqli('localhost','r93987lp_player','89398786029Aa.','r93987lp_player'); hosting;
$query = $connect->query("SELECT * FROM `tracks`");
	$counter = 1;
	$arResult = [];
	while ($track_data = $query->fetch_assoc()) {
		$track_data['EXIST_ID'] = $counter;
		$arResult[] = $track_data;
		$counter++;
	}
