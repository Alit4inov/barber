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

    $message ="Bмя:  " . $name . "\r\n\r\n" .
              "Телефон:  " . $tel .  "\r\n\r\n" .
              "Email:  " . $from .  "\r\n\r\n" .
              "Cпециальность:  " . $speciality . "\r\n\r\n" .
              "Профиль Instarram:  " . $profile_instagramm . "\r\n\r\n" .
              "Профиль Facebook:  " . $profile_facebook . "\r\n\r\n" .
              "Профиль другой соц. сети:  " . $profile_other.  "\r\n\r\n" .
              "Город:  " . $city . "\r\n\r\n" .
              "Опыт:  " . $exp . "\r\n\r\n" .
              "О кандидате:  " . $about_you ;

    $subject = "Новый кандидат";
    $headers = "From:" . $from;
    $mail_sent = mail($to, $subject, $message , $headers);
    if ($mail_sent){
        echo  "Спасибо за Ваш запрос, " . $name . "!  Мы с вами свяжемся." ;
    }
}
?>