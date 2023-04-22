<?php

//Import PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Don't run this unless we're handling a form submission
if (array_key_exists('email', $_POST)) {
    date_default_timezone_set('Etc/UTC');
    require '../vendor/autoload.php';
    $isAjax = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
        strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';

    $mail = new PHPMailer();

    //Send using SMTP to localhost (faster and safer than using mail()) – requires a local mail server
    //See other examples for how to use a remote server such as gmail
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;
    //$mail->isSMTP();
    $mail->Host = 'smtp.ionos.co.uk';
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'ben@benmassey.co.uk';                  //SMTP username
    $mail->Password   = 'T2dQyhn7/';                            //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port = 587;

    $mail->setFrom('ben@benmassey.co.uk', 'benmassey.co.uk');

    $mail->addAddress('benjo1996@live.co.uk');

    if ($mail->addReplyTo($_POST['email'], $_POST['firstName'])) {
        $mail->Subject = 'Photography | Contact form';
        $mail->isHTML(false);

        $mail->Body = <<<EOT
        Name: {$_POST['name']}
        Email: {$_POST['email']}
        Service: {$_POST['service']}
        OtherService: {$_POST['otherService']}
        Message: {$_POST['message']}
        EOT;

        //Send the message, check for errors
        if (!$mail->send()) {
            //The reason for failing to send will be in $mail->ErrorInfo
            //but it's unsafe to display errors directly to users - process the error, log it on your server.
            if ($isAjax) {
                http_response_code(500);
            }

            $response = [
                "status" => false,
                "message" => 'Sorry, something went wrong. Please try again later.' . $mail->ErrorInfo . $mail->SMTPDebug
            ];

            echo $response;

        } else {
            $response = [
                "status" => true,
                "message" => 'Message sent! Thanks for contacting us.'
            ];
        }
    } else {
        $response = [
            "status" => false,
            "message" => 'Invalid email address, message ignored.'
        ];
    }

    if ($isAjax) {
        header('Content-type:application/json;charset=utf-8');
        echo json_encode($response);
        exit();
    }
}
?>