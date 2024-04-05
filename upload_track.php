<?php
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$targetDirectory = "tracks/"; // Папка для сохранения загруженных файлов
		$targetFile = $targetDirectory . basename($_FILES["NEW_PROFILE_TRACK"]["name"]);

		if (move_uploaded_file($_FILES["NEW_PROFILE_TRACK"]["tmp_name"], $targetFile)) {
			echo "Файл успешно загружен и сохранен."; // Возвращает сообщение об успешной загрузке
		} else {
			echo "Произошла ошибка при загрузке файла."; // Возвращает сообщение об ошибке
		}
	}
?>
