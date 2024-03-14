<?php
session_start();
global $connect;

$host = 'localhost';
$user = 'root';
$password = '';
$data_base = 'player';
$connect = @new mysqli($host, $user, $password, $data_base);
if ($connect->connect_errno) {
    echo 'Error number: ' . $connect->connect_errno . '.' . '<br>' . 'Reason: ' . $connect->connect_error;
}


//registration

if (isset($_POST['reg'])) {
    $errors = [];
    $name = $_POST['reg_name'];
    $lastname = $_POST['reg_lastname'];
    $email = $_POST['reg_email'];
    $password = password_hash($_POST['reg_password'], PASSWORD_DEFAULT);
    $profile_avatar = $_FILES['avatar'];
    $role = 'user';
    if ($name == '') {
        $errors[] = 'Введите имя';
    }
    if ($lastname == '') {
        $errors[] = 'Введите фамилию';
    }
    if ($email == '') {
        $errors[] = 'Введите Email';
    }
    if ($password == '') {
        $errors[] = 'Введите пароль';
    }
    $get_rows = $connect->query("SELECT * FROM `authorization` WHERE `email` = '$email'");
    if (empty($errors)) {
        if ($get_rows->num_rows > 0) {
            $exist_email = '<div class="exist" style="border: 3px solid #af1212">Такой email уже зарегистрирован</div>';
        }else{
            @$connect->query("INSERT INTO `authorization`(`name`, `surname`, `email`, `password`, `avatar`, `role`) VALUES ('$name','$lastname','$email','$password','$profile_avatar','$role')");
//            header('Location:'.$_SERVER['PHP_SELF'] . '?message=success');
            header('Location:'.$_SERVER['PHP_SELF']);

        }
    } else {
        echo '<div style="background: red">' . array_shift($errors) . '</div>';
    }
}
//if(@$_GET['message'] == 'success'){
//    $GLOBALS['success'] = '<div class="success" style="border: 3px solid green">Успешная регистрация</div>';
//        header('Location:'.$_SERVER['PHP_SELF']);
//}
// Auth
$auth_errors = [];
if(isset($_POST['login'])){
    $auth_email = $_POST['auth_email'];
    $auth_password = $_POST['auth_password'];
    $auth_rows = $connect->query("SELECT * FROM `authorization` WHERE `email` = '$auth_email'");
    if($auth_rows->num_rows>0){
        $data = $auth_rows->fetch_assoc();
        if(password_verify($auth_password, $data['password'])){

            $success_login = 'Вы успешно вошли в профиль';
            $_SESSION['online'] = true;
            $_SESSION['name'] = $data['name'];
            $_SESSION['lastname'] = $data['surname'];
            $_SESSION['user'] = $data['email'];
            $_SESSION['avatar'] = $data['avatar'];
            $_SESSION['role'] = $data['role'];
            header('Location:'.$_SERVER['PHP_SELF']);
        }else{
            $auth_errors['invalid_pass'] = 'Не верно введен пароль';
        }
    }else{
        $auth_errors['invalid_email'] = 'Такая почта не найдена';
    }

}
