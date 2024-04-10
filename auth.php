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
//    $password = password_hash($_POST['reg_password'], PASSWORD_DEFAULT);
    $password = $_POST['reg_password'];
    $profile_avatar = $_FILES['avatar'];
	if($profile_avatar) {
		$uploadedIMG = preg_replace('/\s+/', '_', basename($profile_avatar['name']));
		move_uploaded_file($profile_avatar['tmp_name'], 'profile_img/' . $uploadedIMG);
	}

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
    print_r($profile_avatar);
    $get_rows = $connect->query("SELECT * FROM `authorization` WHERE `email` = '$email'");
    if (empty($errors)) {
        if ($get_rows->num_rows > 0) {
            $exist_email = '<div class="exist" style="border: 3px solid #af1212">Такой email уже зарегистрирован</div>';
        }else{
            @$connect->query("INSERT INTO `authorization`(`name`, `surname`, `email`, `password`, `avatar`, `role`) VALUES ('$name','$lastname','$email','$password','$uploadedIMG','$role')");
            header('Location:'.$_SERVER['PHP_SELF'] . '?message=success');


        }
    } else {
        echo '<div style="background: red">' . array_shift($errors) . '</div>';
    }
}
if(@$_GET['message'] == 'success'){?>

	<div class="success" onclick="clearURL()">
		<div class="success-position">
			<div class="success-message">успешная регистрация</div>
			<div class="success-close-btn" onclick="clearURL()">
				<img src="icons/close_form.svg" alt="">
			</div>
		</div>
	</div>

<?php }


// Auth
$auth_errors = [];
if(isset($_POST['login'])){
	
	$auth_email = $_POST['auth_email'];
    $auth_password = $_POST['auth_password'];
    $auth_rows = $connect->query("SELECT * FROM `authorization` WHERE `email` = '$auth_email'");
    if($auth_rows->num_rows > 0){
        $data = $auth_rows->fetch_assoc();
//        if(password_verify($auth_password, $data['password'])){
        if($auth_password ==  $data['password']){

//	        $GLOBALS['success_login'] = 'Вы успешно вошли в профиль';
            $_SESSION['online'] = true;
            $_SESSION['USER_ID'] = $data['id'];
            $_SESSION['name'] = $data['name'];
			$_SESSION['password'] = $data['password'];
            $_SESSION['lastname'] = $data['surname'];
            $_SESSION['user'] = $data['email'];
            $_SESSION['avatar'] = $data['avatar'];
            $_SESSION['role'] = $data['role'];
	        
	        header('Location:'.$_SERVER['PHP_SELF'] . '?message=success_auth');
	     
	        
        }else{
            $auth_errors['invalid_pass'] = 'Не верно введен пароль';
        }
    }else{
        $auth_errors['invalid_email'] = 'Такая почта не найдена';
    }

}
	if(@$_GET['message'] == 'success_auth'){?>
		<div class="success"">
			<div class="success-position">
				<div class="success-message">успешная авторизация</div>
				<div class="success-close-btn">
					<img src="icons/close_form.svg" alt="">
				</div>
			</div>
		</div>
	<?php } ?>

