-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 11 2024 г., 16:40
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
(5, 'Infinite_Granite_2021.png', 'Shellstar', 'Deafheaven', '6:06', '0', 'Deafheaven_-_Shellstar.mp3'),
(6, 'Code_Orange_-_Bleeding_In_The_Blur.mp3.jpg', 'Code Orange - Bleeding In The Blur.mp3', 'неизвестный исполнитель', '4:04', NULL, 'Code_Orange_-_Bleeding_In_The_Blur.mp3'),
(7, 'interpol-_- Marauder.jpg', 'Flight of Fancy', 'Interpol', '3:51', '11', 'Interpol_-_Flight_of_Fancy.mp3'),
(131, 'GHØSTKID_-_HEAVY_RAIN.mp3.jpg', 'HEAVY RAIN', 'GHØSTKID', '3:55', NULL, 'GHØSTKID_-_HEAVY_RAIN.mp3'),
(136, 'Deafcult_-_Akira.mp3.jpg', 'AKIRA', 'DEAFCULT', '3:09', NULL, 'Deafcult_-_Akira.mp3'),
(138, '', 'Erase-Rewind', 'Cardigans', '3:35', NULL, 'The_Cardigans_-_Erase-Rewind.mp3'),
(139, 'The_Cranberries_-_Wake_Me_When_Its_Over.mp3.jpg', 'The Cranberries - Wake Me When Its Over.mp3', 'неизвестный исполнитель', '4:11', NULL, 'The_Cranberries_-_Wake_Me_When_Its_Over.mp3'),
(140, 'baṣnia_-_Waterfalls.mp3.jpg', 'Waterfalls', 'basnia', '3:52', NULL, 'baṣnia_-_Waterfalls.mp3'),
(141, '', 'Suede - What Violet Says.mp3', 'неизвестный исполнитель', '4:10', NULL, 'Suede_-_What_Violet_Says.mp3'),
(142, 'Nothing_-_Catch_a_Fade.flac.jpg', 'Catch a Fade', 'Nothing', '3:50', NULL, 'Nothing_-_Catch_a_Fade.flac'),
(143, 'The_Smashing_Pumpkins_-_Silvery_Sometimes_(Ghosts).mp3.jpg', 'Silvery Sometimes (Ghosts)', 'The Smashing Pumpkins', '3:31', NULL, 'The_Smashing_Pumpkins_-_Silvery_Sometimes_(Ghosts).mp3'),
(144, '', 'CQ - Episode 3_ Roxanne.mp3', 'неизвестный исполнитель', '4:06', NULL, 'CQ_-_Episode_3__Roxanne.mp3'),
(145, '', 'CQ - Last Song.mp3', 'неизвестный исполнитель', '5:01', NULL, 'CQ_-_Last_Song.mp3'),
(146, 'Arctic_Monkeys_-_505.mp3.jpg', '505', 'Arctic Monkeys', '4:13', NULL, 'Arctic_Monkeys_-_505.mp3');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `tracks`
--
ALTER TABLE `tracks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `tracks`
--
ALTER TABLE `tracks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
