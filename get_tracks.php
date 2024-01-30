<?php
$connect = @new mysqli('localhost','root','','player');
$query = $connect->query("SELECT * FROM `tracks`");


