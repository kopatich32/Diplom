<?
	include $_SERVER['DOCUMENT_ROOT'] . '/debug/Debug.php';
$data = json_decode(file_get_contents('php://input'),true);
\Main\Diag\Debug::writeToFile($data, '/debug.log');
