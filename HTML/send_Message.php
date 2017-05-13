<!DOCTYPE html>
<html>
<head>
    <title>Mali Messenger</title>
    <meta charset="UTF-8">
    <meta http-equiv="Pragma" content="no-cache">
    <link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/JavaScript" src="common.js"></script>
</head>
<body onload="startTimeout();">

    <!--tabs at the top-->
    <ul class="toptabs">
        <li><a href="index.html">Calendar</a></li>
        <li><a href="default.html">Opportunities</a></li>
        <li><a href="messenger.html">Mali Messenger</a></li>
        <li><a href="newsfeed.html">News</a></li>
        <li><a href="power.html">Power</a></li>
        <li><a href="weather.html">Weather</a></li>
    </ul>

    <!--all page content-->
    <div class="content">
        <h1>Message Status</h1>
        <p>

<?PHP

require "/var/www/Smart-Calendar/PHPmailer/PHPMailerAutoload.php";

$email="olekmali@fsmail.bradley.edu";
$phone="3093061131@@msg.fi.google.com";


$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 465; // or 587
$mail->IsHTML(true);
$mail->Username = $_POST['guser'];
$mail->Password = $_POST['gaslo'];
$mail->SetFrom($_POST['guser']);
$mail->Body = $_POST['message'];

$messageType=$_POST['messageType'];

if ($messageType == "Urgent")
{
    $mail->AddAddress($phone);
} else {
    $mail->AddAddress($email);
    $mail->Subject = "J328 Calendar Message";
}

if(!$mail->Send())
{
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "The message has been sent.";
}

?>
        </p>
    </div>
</body>
</html>
