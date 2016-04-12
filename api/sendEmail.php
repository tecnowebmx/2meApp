<?php
header('Access-Control-Allow-Origin: *');

$errors = [];
$data = [];

$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$comments = $_POST['comments'];

if (empty($name))
  $errors[$name] = 'Nombre es requerido.';

if (empty($email))
  $errors[$email] = 'Email es required.';

if (!empty($errors)) {
  $data['errors']  = $errors;
} else {
  $data['message'] = 'Gracias por tu información';
}

echo json_encode($data);

$message = "email: ".$email;
$message = htmlspecialchars($comments);
$message = stripslashes($comments);

$to = "tano19@gmail.com";
$subject = "Comentarios desde 2Me App";
$header = "From:tano19@gmail.com";
$enviar = mail($to,$subject,$message,$header);
?>