<?php
session_start();
Header('Location:' . $_SERVER['HTTP_REFERER']);
session_destroy();