<?
namespace Connection\DB;
	class Connection
	{
		protected static $instance;
		protected static $connection;

		public function getConnection ()
		{
			if (!self::$connection) {
				$connection = new \mysqli('localhost','root','','player');
				if ($connection->connect_error) {
					die("Connection failed: " . $connection->connect_error);
				}
			}
			return $connection;
		}

		public function getInstance()
		{
			if(!self::$instance) {
				self::$instance = new self;
			}
			return self::$instance;
		}
	}
