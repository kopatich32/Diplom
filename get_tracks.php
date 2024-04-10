<?php
	session_start();
	//$connect = @new mysqli('localhost','r93987lp_player','89398786029Aa.','r93987lp_player'); hosting;
	function getConnection() {
		static $connection = null;

		if ($connection === null) {
			$connection = new mysqli('localhost','root','','player');
			if ($connection->connect_error) {
				die("Connection failed: " . $connection->connect_error);
			}
		}
		return $connection;
	}

$query = getConnection()->query("SELECT * FROM `tracks`");
	$counter = 1;
	$arResult = [];
	while ($track_data = $query->fetch_assoc()) {
		$track_data['EXIST_ID'] = $counter;
		$arResult[] = $track_data;
		$counter++;
	}


