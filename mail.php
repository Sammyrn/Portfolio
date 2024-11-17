<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Prepare email message
$to = "kpunsamuel8@gmail.com";
$subject = "Message from my Portfolio website";
$message = "Name: $name\nEmail: $email\nMessage: $message";
$headers = "From: $email";

// Send the email
mail($to, $subject, $message, $headers);

// Redirect to a thank you page
header("Location: thank_you.html");
exit();
?>