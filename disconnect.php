<?php
session_start();
$_SESSION['online'] = false;
Header('Location:' . $_SERVER['HTTP_REFERER']);
session_destroy();