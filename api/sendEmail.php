<?php
$errors = [];
$data = [];

$_POST = json_decode(file_get_contents('php://input'), true);

if (empty($_POST['name']))
  $errors['name'] = 'Nombre es requerido.';

if (empty($_POST['username']))
  $errors['email'] = 'Email es required.';

if (!empty($errors)) {
  $data['errors']  = $errors;
} else {
  $data['message'] = 'LA información esta correcta';
}

echo json_encode($data);
?>