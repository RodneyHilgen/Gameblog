<html>

<?php

$postMail = $_POST["email"];       
$postWw = $_POST["password"];
 
$email = "Admin@mborijnland.nl";
$wachtwoord = "Admin1";
 
echo "<br>  " .$postMail. " " .$postWw. "";
 
if($email == $postMail && $wachtwoord == $postWw)
{
    header("location:mainpage.html");
}
 
else
{
    header("location:index.php");
}
      
?>

</html>