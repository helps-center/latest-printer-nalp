<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Make sure you have PHPMailer installed via Composer

// Get form data
// $name     = $_POST['name'] ?? '';
// $email    = $_POST['email'] ?? '';
// $number   = $_POST['number'] ?? '';
// $service  = $_POST['service'] ?? '';
// $comments = $_POST['comments'] ?? '';

$site_title = "New printer support request from Easy Pick Printers";
$model_num   = isset($_POST['model_num']) ? htmlspecialchars(trim($_POST['model_num'])) : '';
$name    = isset($_POST['fullName']) ? htmlspecialchars(trim($_POST['fullName'])) : '';
$number = isset($_POST['phoneNumber']) ? htmlspecialchars(trim($_POST['phoneNumber'])) : '';
$service  = isset($_POST['model_type']) ? htmlspecialchars(trim($_POST['model_type'])) : '';


// echo $model_num, $name, $number, $service; die;

$ticketNumber = strtoupper(uniqid('TKT-'));

// Validate basic inputs
if(empty($name) || empty($model_num) || empty($number) || empty($service)) {
    echo 'Please fill in all fields.';
    exit;
}

$mail = new PHPMailer(true);

$Host = "smtp.hostinger.com";
$emailAddress = "kentwood2012@gmail.com";
$Username = "noreply@printertechexperts.com";
$Password =  "Google@2345$";



// $Host = "smtp.hostinger.com";
// $emailAddress = "support@printertechexperts.com";
// $Username = "noreply@printertechexperts.com";
// $Password = "Google@2345$";

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = $Host; // Replace with your SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = $Username;   // Your SMTP username
    $mail->Password   = $Password;     // Your SMTP password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom($Username, 'New Message From Printer Tech Experts');
    $mail->addAddress($emailAddress); // Where to send the mail

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission - '. $site_title;
    $mail->Body    = "
        <h2>New printer support request received</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Phone:</strong> {$number}</p>
        <p><strong>Printer Brand:</strong><br>{$service}</p>
        <p><strong>Printer Model No,:</strong><br>{$model_num}</p>
        <p><strong>Ticket Number:</strong><br>{$ticketNumber}</p>
    ";

    $mail->send();
    // echo 'Your message has been sent successfully!';

    echo json_encode([
            "status" => "success",
            "ticketNumber" => $ticketNumber
        ]);
    exit();


} catch (Exception $e) {
    echo json_encode([
            "status" => "error",
            "message" => "Failed to send email. Please try again."
        ]);
    exit();
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
