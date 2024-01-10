<html>

<?php

$postMail = $_POST["email"];       
$postWw = $_POST["password"];
 
$email = "Admin@mborijnland.nl";
$wachtwoord = "Admin1";
 
echo "<br>  " .$postMail. " " .$postWw. "";
 
if($email == $postMail && $wachtwoord == $postWw)
{
    echo "<br> correct";
}
 
else
{
    echo "<br> incorrect";
}

?>

</html>