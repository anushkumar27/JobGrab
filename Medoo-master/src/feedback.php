<?php


extract($_POST);

require 'medoo.php';
/*
$db = new Medoo(arary(
    'database_type' => 'mysql',
    'database_name' => 'jobgrab',
    'server' => 'localhost',
    'username' => 'root',
    'password' => 'abcd'
));
*/
$id = $db->insert('feedback', array('name' => $name, 'email' => $email, 'phone' => $phone, 'city' => $city, 'description' => $comment));

$records = $db->select('feedback', array('name', 'email', 'phone', 'city', 'description'));


echo json_encode($records);

echo "hi";
?>