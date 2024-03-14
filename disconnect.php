<?php
session_start();
$_SESSION['online'] = false;
session_destroy();
$prev_page = $_SERVER['HTTP_REFERER'];
header('Location:'.$prev_page);