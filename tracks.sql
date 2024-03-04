-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 04 2024 г., 23:36
-- Версия сервера: 10.4.26-MariaDB
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
  `id` int(255) NOT NULL,
  `cover` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `track_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `artist` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `listening` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `tracks`
--

INSERT INTO `tracks` (`id`, `cover`, `track_name`, `artist`, `duration`, `listening`, `link`) VALUES
(1, 'covers/Infinite_Granite_2021.png', 'The Gnashing', 'Deafheaven', '5:34', '123', 'tracks/Deafheaven_-_The_Gnashing.mp3'),
(2, 'covers/Madmans_Esprit.jpg', '내버려둬 Leave Me Alone', 'Madmans Esprit', '4:14', '127', 'tracks/Madmans_Esprit_-_Leave_Me_Alone.mp3'),
(3, 'covers/The_Missing_Man.jpg', 'Trash Bat', 'AFI', '2:07', '257', 'tracks/AFI_-_Trash_Bat.mp3'),
(4, 'covers/Invent_Animate_-_Heavener.jpg', 'Void Surfacing', 'Invent Animate', '4:31', '99', 'tracks/Invent_Animate_-_Void_Surfacing.mp3'),
(5, 'covers/Infinite_Granite_2021.png', 'Shellstar', 'Deafheaven', '6:06', '0', 'tracks/Deafheaven_-_Shellstar.mp3'),
(6, '', 'Bleeding In The Blur', 'Code Orange', '4:04', '0', 'tracks/Code_Orange_-_Bleeding_In_The_Blur.mp3'),
(7, 'covers/interpol-_- Marauder.jpg', 'Flight of Fancy', 'Interpol', '3:51', '11', 'tracks/Interpol_-_Flight_of_Fancy.mp3'),
(8, 'covers/metric_-_ Formentera.webp', 'What Feels Like Eternity', 'Metric', '3:38', '12', 'tracks/Metric_-_What_Feels_Like_Eternity.mp3');

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
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
