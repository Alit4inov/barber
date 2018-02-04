<?php 
if($_POST)
{
    $to = "info@retrobarbershop.kh.ua"; 
    $from = $_POST['email'];
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $speciality = $_POST['speciality'];
    $profile_instagramm = $_POST['instagram'];
    $profile_facebook = $_POST['facebook'];
    $profile_other = $_POST['facebook'];
    $city = $_POST['city'];
    $exp = $_POST['exp'];
    $about_you = $_POST['abutyou'];

    $message ="Имя:  " . $name . "<br />\n" .
              "Телефон:  " . $tel .  "<br />\n" .
              "Email:  " . $from .  "<br />\n" .
              "Cпециальность:  " . $speciality . "<br />\n" .
              "Профиль Instarram:  " . $profile_instagramm . "<br />\n" .
              "Профиль Facebook:  " . $profile_facebook . "<br />\n" .
              "Профиль другой соц. сети:  " . $profile_other.  "<br />\n" .
              "Город:  " . $city . "<br />\n" .
              "Опыт:  " . $exp . "<br />\n" .
              "О кандидате:  " . $about_you ;

    $subject = "Новый кандидат";

    $headers .= "Content-type: text/html; charset=\"utf-8\"";
    $mail_sent = mail($to, $subject, $message , $headers);
    if ($mail_sent){
        echo  "Спасибо за Ваш запрос, " . $name . "!  Мы с вами свяжемся." ;
    }
}
?>