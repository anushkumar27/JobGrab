<?php
//Ananya 
//This is the file u need to change

require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'jobgrabservices@gmail.com';                 // SMTP username
$mail->Password = 'aabbccdd123';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 25;                                    // TCP port to connect to

$mail->setFrom('support@jobgrab.com', 'www.jobgrab.com');
$mail->addAddress('anushkumar27@gmail.com','Admin');     // Add a recipient
$mail->addReplyTo('support@jobgrab.com', 'Information');

$mail->isHTML(true);                                  // Set email format to HTML
$body = '<br><br>His Details are <br>Email: ' . $_POST['email'] . '<br>Message:' . $_POST['comment'] . '<br><br><b>JobGrab Support</b>';
$mail->Subject = 'Contact Request';
$mail->Body    = "<b>Mr." . $_POST['name'] . ",</b> Tried contacting you" . $body;

if(!$mail->send()) {
    echo 'Your Order Could Not be Processed';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Thank You For Contacting Us! <br> We Will Get Back To You<br><br><a href="index.html"> Go Back To Home Page</a> ';
}
?>