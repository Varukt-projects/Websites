<?php
// Simple contact handler (cPanel). Use domain email to avoid spam.
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');
if(!$name || !$email || !$phone || !$message){ http_response_code(400); echo 'Missing fields'; exit; }
$to = 'info.travelyourjourney@gmail.com';
$subject = 'New enquiry from website';
$body = "Name: $name
Email: $email
Phone: $phone
Message: $message
Time: ".date('c');
$headers = "From: noreply@".$_SERVER['SERVER_NAME']."
".
           "Reply-To: $email
".
           "X-Mailer: PHP/".phpversion();
@mail($to,$subject,$body,$headers);
// also append CSV
$line = implode(',', [date('c'), str_replace(',', ' ', $name), $email, $phone, str_replace('
',' ',str_replace(',', ' ', $message))])."
";
file_put_contents(__DIR__.'/cms/contacts.csv',$line,FILE_APPEND|LOCK_EX);
header('Location: pages/thanks.html');
?>
