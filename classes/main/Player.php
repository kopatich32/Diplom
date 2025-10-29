<?
	namespace Main;
	use Connection\DB\Connection;
	class Player
	{
		public static function getTracks()
		{
			$connection = new Connection();
			$query = $connection->getInstance()->getConnection()->query("SELECT * FROM `tracks`");
			$counter = 1;
			$arResult = [];
			while ($track_data = $query->fetch_assoc()) {
				$track_data['EXIST_ID'] = $counter;
				$arResult[] = $track_data;
				$counter++;
			}
			return $arResult;
		}
	}
