<?
	namespace Diag;
	class Debug
	{
		public static function writeToFile ($data, $path)
		{
			$res  = print_r($data, true);
			file_put_contents($_SERVER['DOCUMENT_ROOT'] . $path, $res, FILE_APPEND);
		}
	}
