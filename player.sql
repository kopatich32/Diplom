-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 11 2024 г., 02:47
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `player`
--

-- --------------------------------------------------------

--
-- Структура таблицы `authorization`
--

CREATE TABLE `authorization` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `authorization`
--

INSERT INTO `authorization` (`id`, `name`, `surname`, `email`, `password`, `avatar`, `role`) VALUES
(172, 'kopatich', 'test', 'kopatich1994@yandex.ru', '123456', 'vse-ochen-ploho.jpg', 'admin'),
(176, '1', '2', 'test@mail.ru', '123456', 'IMG_20231026_001815.jpg', 'user');

-- --------------------------------------------------------

--
-- Структура таблицы `tracks`
--

CREATE TABLE `tracks` (
  `id` int NOT NULL,
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `track_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `artist` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `listening` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `tracks`
--

INSERT INTO `tracks` (`id`, `cover`, `track_name`, `artist`, `duration`, `listening`, `link`) VALUES
(1, 'Infinite_Granite_2021.png', 'The Gnashing', 'Deafheaven', '5:34', '123', 'Deafheaven_-_The_Gnashing.mp3'),
(2, 'Madmans_Esprit.jpg', '내버려둬 Leave Me Alone', 'Madmans Esprit', '4:14', '127', 'Madmans_Esprit_-_Leave_Me_Alone.mp3'),
(3, 'The_Missing_Man.jpg', 'Trash Bat', 'AFI', '2:07', '257', 'AFI_-_Trash_Bat.mp3'),
(4, 'Invent_Animate_-_Heavener.jpg', 'Void Surfacing', 'Invent Animate', '4:31', '99', 'Invent_Animate_-_Void_Surfacing.mp3'),
(5, 'Infinite_Granite_2021.png', 'Shellstar', 'Deafheaven', '6:06', '0', 'Deafheaven_-_Shellstar.mp3'),
(6, 'Code_Orange_-_Bleeding_In_The_Blur.mp3.jpg', 'Code Orange - Bleeding In The Blur.mp3', 'неизвестный исполнитель', '4:04', NULL, 'Code_Orange_-_Bleeding_In_The_Blur.mp3'),
(7, 'interpol-_- Marauder.jpg', 'Flight of Fancy', 'Interpol', '3:51', '11', 'Interpol_-_Flight_of_Fancy.mp3'),
(128, 'AFI_-_Love_Like_Winter_.mp3.jpg', 'Love Like Winter', 'AFI', '2:45', NULL, 'AFI_-_Love_Like_Winter_.mp3'),
(130, '13_I_Made_It.mp3.jpg', 'I Made It', 'Dead By April', '3:49', NULL, '13_I_Made_It.mp3'),
(131, 'GHØSTKID_-_HEAVY_RAIN.mp3.jpg', 'HEAVY RAIN', 'GHØSTKID', '3:55', NULL, 'GHØSTKID_-_HEAVY_RAIN.mp3'),
(132, '03._Mindful.mp3.jpg', 'Mindful', 'Born of Osiris', '3:33', NULL, '03._Mindful.mp3'),
(133, 'Our_Last_Night_-_Hysteria.mp3.jpg', 'Our Last Night - Hysteria.mp3', 'неизвестный исполнитель', '3:16', NULL, 'Our_Last_Night_-_Hysteria.mp3');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `authorization`
--
ALTER TABLE `authorization`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- Индексы таблицы `tracks`
--
ALTER TABLE `tracks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `authorization`
--
ALTER TABLE `authorization`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;

--
-- AUTO_INCREMENT для таблицы `tracks`
--
ALTER TABLE `tracks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
